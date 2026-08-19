const TAG_KEY = "ittina-mahavir-unit-tags-v1";
const TAGS_API = (() => {
  const path = window.location.pathname;
  const dir = path.endsWith("/") ? path : path.replace(/[^/]+$/, "");
  return `${dir}api/tags`;
})();
const FLOOR_H = 3;

function emptyTag() {
  return {
    forSale: false,
    availableSince: "",
    owners: "",
    pricedAt: "",
    floorNumber: "",
    parkingKnown: false,
    parkingLocation: "",
  };
}

function unitCode(block, floor, unit) {
  return `${block}-${floor}${String(unit).padStart(2, "0")}`;
}

function expandApartments(inventory) {
  const list = [];
  Object.entries(inventory.blocks).forEach(([block, spec]) => {
    for (let floor = 1; floor <= spec.floors; floor += 1) {
      spec.slots.forEach((slot) => {
        const stack = Array.from(
          { length: spec.floors },
          (_, i) => unitCode(block, i + 1, slot.unit)
        ).join(" / ");
        list.push({
          id: unitCode(block, floor, slot.unit),
          block,
          floor,
          unit: slot.unit,
          side: slot.side,
          wing: slot.wing,
          center: slot.center,
          ring: slot.ring,
          osmBuildingId: spec.osmBuildingId,
          stack,
          locationLabel: `Brochure cell ${slot.unit} · ${slot.wing} · floor ${floor} · stacked ${stack}`,
          base: (floor - 1) * FLOOR_H,
          top: floor * FLOOR_H,
        });
      });
    }
  });
  return list;
}

window.IttinaInventory = {
  apartments: [],
  tags: {},
  selectedId: null,
  selectedBlock: "",
  selectedFloor: "1",
  map: null,
  backend: "local",
  _persistTimer: null,

  async init(map) {
    this.map = map;
    this.apartments = expandApartments(window.ITTINA.inventory);
    this.tags = await this.load();
    this.populateFilters();
    this.bind();
    this.render();
  },

  localTags() {
    try {
      return JSON.parse(localStorage.getItem(TAG_KEY) || "{}");
    } catch {
      return {};
    }
  },

  async load() {
    try {
      const res = await fetch(TAGS_API, { cache: "no-store" });
      if (res.ok) {
        const remote = await res.json();
        this.backend = "sqlite";
        if (remote && typeof remote === "object" && !Array.isArray(remote)) {
          if (Object.keys(remote).length === 0) {
            const local = this.localTags();
            if (Object.keys(local).length) {
              this.tags = local;
              await this.flush();
              return local;
            }
          }
          return remote;
        }
      }
    } catch {
      // SQLite API is only available when server.py is running.
    }
    this.backend = "local";
    return this.localTags();
  },

  persist() {
    localStorage.setItem(TAG_KEY, JSON.stringify(this.tags));
    if (this.backend !== "sqlite") return;
    clearTimeout(this._persistTimer);
    this._persistTimer = setTimeout(() => {
      this.flush().catch(() => {
        this.backend = "local";
        this.render();
      });
    }, 200);
  },

  async flush() {
    const res = await fetch(TAGS_API, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.tags),
    });
    if (!res.ok) throw new Error("Could not save tags");
  },

  tag(id) {
    return { ...emptyTag(), ...(this.tags[id] || {}) };
  },

  patch(id, values) {
    const next = { ...this.tag(id), ...values };
    const blank = emptyTag();
    const hasData = Object.keys(blank).some((key) => next[key] !== blank[key]);
    if (hasData) this.tags[id] = next;
    else delete this.tags[id];
    this.persist();
    this.render();
  },

  populateFilters() {
    const blockSelect = document.getElementById("filter-block");
    Object.keys(window.ITTINA.inventory.blocks).forEach((id) => {
      const opt = document.createElement("option");
      opt.value = id;
      opt.textContent = `Block ${id}`;
      blockSelect.appendChild(opt);
    });
  },

  filtered() {
    const query = document.getElementById("unit-search").value.trim().toLowerCase();
    const block = document.getElementById("filter-block").value;
    const saleOnly = document.getElementById("filter-sale").checked;
    return this.apartments.filter((apt) => {
      const tag = this.tag(apt.id);
      if (block && apt.block !== block) return false;
      if (saleOnly && !tag.forSale) return false;
      if (!query) return true;
      const hay = [apt.id, apt.locationLabel, tag.owners, tag.pricedAt, tag.parkingLocation]
        .join(" ")
        .toLowerCase();
      return hay.includes(query);
    });
  },

  bind() {
    ["unit-search", "filter-block", "filter-sale"].forEach((id) => {
      document.getElementById(id).addEventListener("input", () => this.render());
      document.getElementById(id).addEventListener("change", () => {
        if (id === "filter-block") this.selectedBlock = document.getElementById(id).value;
        this.render();
        if (window.IttinaMap) window.IttinaMap.onInventoryChange();
      });
    });

    document.getElementById("tag-sale").addEventListener("click", () => {
      if (!this.selectedId) return;
      const current = this.tag(this.selectedId);
      const forSale = !current.forSale;
      this.patch(this.selectedId, {
        forSale,
        availableSince: forSale && !current.availableSince
          ? new Date().toISOString().slice(0, 10)
          : current.availableSince,
      });
      if (window.IttinaMap) window.IttinaMap.onInventoryChange();
    });

    ["field-since", "field-owners", "field-price", "field-floor", "field-parking"].forEach((id) => {
      document.getElementById(id).addEventListener("change", () => this.saveEditor());
    });

    document.getElementById("parking-unknown").addEventListener("click", () => {
      if (!this.selectedId) return;
      this.patch(this.selectedId, { parkingKnown: false });
      if (window.IttinaMap) window.IttinaMap.onInventoryChange();
    });
    document.getElementById("parking-known").addEventListener("click", () => {
      if (!this.selectedId) return;
      this.patch(this.selectedId, { parkingKnown: true });
      if (window.IttinaMap) window.IttinaMap.onInventoryChange();
    });
    document.getElementById("clear-tags").addEventListener("click", () => {
      if (!this.selectedId) return;
      delete this.tags[this.selectedId];
      this.persist();
      this.render();
      if (window.IttinaMap) window.IttinaMap.onInventoryChange();
    });
    document.getElementById("export-tags").addEventListener("click", () => this.exportTags());
    document.getElementById("import-tags").addEventListener("click", () => {
      document.getElementById("import-file").click();
    });
    document.getElementById("import-file").addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (!file) return;
      file.text().then((text) => {
        try {
          this.tags = { ...this.tags, ...JSON.parse(text) };
          this.persist();
          this.render();
          if (window.IttinaMap) window.IttinaMap.onInventoryChange();
        } catch {
          alert("Could not import that file. Use a tags JSON export from this map.");
        }
      });
    });
  },

  saveEditor() {
    if (!this.selectedId) return;
    this.patch(this.selectedId, {
      availableSince: document.getElementById("field-since").value,
      owners: document.getElementById("field-owners").value.trim(),
      pricedAt: document.getElementById("field-price").value.trim(),
      floorNumber: document.getElementById("field-floor").value,
      parkingLocation: document.getElementById("field-parking").value.trim(),
    });
    if (window.IttinaMap) window.IttinaMap.onInventoryChange();
  },

  selectUnit(id, fromMap) {
    this.selectedId = id;
    const apt = this.apartments.find((item) => item.id === id);
    if (apt) {
      this.selectedBlock = apt.block;
      this.selectedFloor = String(apt.floor);
    }
    this.render();
    if (fromMap) {
      if (window.IttinaMap) window.IttinaMap.onInventoryChange();
    } else if (apt && window.IttinaMap) {
      window.IttinaMap.focusUnit(apt);
    }
  },

  selectBlock(blockId) {
    this.selectedBlock = blockId;
    document.getElementById("filter-block").value = blockId;
    this.render();
    if (window.IttinaMap) window.IttinaMap.onInventoryChange();
  },

  saleCount() {
    return this.apartments.filter((apt) => this.tag(apt.id).forSale).length;
  },

  blocksWithSale() {
    return new Set(
      this.apartments.filter((apt) => this.tag(apt.id).forSale).map((apt) => apt.block)
    );
  },

  buildingFeatures() {
    const selected = this.selectedBlock;
    const saleBlocks = this.blocksWithSale();
    return {
      type: "FeatureCollection",
      features: window.ITTINA.osmCampusBuildings.features.map((feat) => {
        const letters = (feat.properties.blocks || "").split(",").filter(Boolean);
        const isSelected = Boolean(selected && letters.includes(selected));
        const showUnits = isSelected || letters.some((block) => saleBlocks.has(block));
        return {
          type: "Feature",
          geometry: feat.geometry,
          properties: {
            ...feat.properties,
            color: showUnits ? "#c4a06a" : "#d7b07a",
            height: showUnits ? 0.7 : feat.properties.height,
            opacity: showUnits ? 0.22 : 0.88,
          },
        };
      }),
    };
  },

  unitFeatures() {
    const selected = this.selectedBlock;
    const floor = this.selectedFloor || "1";
    const saleIds = new Set(
      this.apartments.filter((apt) => this.tag(apt.id).forSale).map((apt) => apt.id)
    );
    const visible = this.apartments.filter((apt) => {
      if (selected && apt.block === selected && String(apt.floor) === String(floor)) return true;
      if (saleIds.has(apt.id) && apt.block !== selected) return true;
      return false;
    });
    const polygons = {
      type: "FeatureCollection",
      features: visible.map((apt) => {
        const tag = this.tag(apt.id);
        const isSelected = apt.id === this.selectedId;
        return {
          type: "Feature",
          geometry: { type: "Polygon", coordinates: [apt.ring] },
          properties: {
            id: apt.id,
            name: String(apt.unit),
            label: apt.id,
            block: apt.block,
            floor: apt.floor,
            forSale: tag.forSale ? 1 : 0,
            selected: isSelected ? 1 : 0,
            color: tag.forSale ? "#2ee59d" : isSelected ? "#fff3d6" : "#e8c9a0",
            location: apt.locationLabel,
            owners: tag.owners || "",
            pricedAt: tag.pricedAt || "",
          },
        };
      }),
    };
    const labels = {
      type: "FeatureCollection",
      features: visible.map((apt) => ({
        type: "Feature",
        geometry: { type: "Point", coordinates: apt.center },
        properties: { id: apt.id, name: String(apt.unit), forSale: this.tag(apt.id).forSale ? 1 : 0 },
      })),
    };
    return { polygons, labels };
  },

  render() {
    const list = this.filtered();
    const saleCount = this.saleCount();
    document.getElementById("sale-count").textContent = String(saleCount);
    document.getElementById("inventory-summary").textContent =
      `${list.length} shown · ${saleCount} tagged for sale · map greens the unit, not the block`;
    const storage = document.getElementById("storage-status");
    if (storage) {
      storage.textContent = this.backend === "sqlite"
        ? "Tags saved in SQLite on the server."
        : "SQLite server is offline. Tags are only in this browser until you start server.py.";
    }

    const saleBlocks = this.blocksWithSale();
    document.querySelectorAll(".block-chip").forEach((chip) => {
      chip.classList.toggle("has-sale", saleBlocks.has(chip.dataset.id));
      chip.classList.toggle("active", chip.dataset.id === this.selectedBlock);
    });

    const mount = document.getElementById("unit-list");
    const rows = list.map((apt) => {
      const tag = this.tag(apt.id);
      const active = apt.id === this.selectedId ? " active" : "";
      const sale = tag.forSale ? " for-sale" : "";
      return `<button type="button" class="unit-row${active}${sale}" data-id="${apt.id}">
        <strong>${apt.id}</strong>
        <small>${apt.locationLabel}${tag.owners ? ` · ${tag.owners}` : ""}${tag.pricedAt ? ` · ${tag.pricedAt}` : ""}</small>
      </button>`;
    });
    mount.innerHTML = rows.join("") || `<p class="hint">No apartments match these filters.</p>`;
    mount.querySelectorAll(".unit-row").forEach((row) => {
      row.addEventListener("click", () => this.selectUnit(row.dataset.id, false));
    });
    mount.querySelector(".unit-row.active")?.scrollIntoView({ block: "nearest" });

    const editor = document.getElementById("unit-editor");
    if (!this.selectedId) {
      editor.classList.add("hidden");
      return;
    }
    const apt = this.apartments.find((item) => item.id === this.selectedId);
    const tag = this.tag(this.selectedId);
    editor.classList.remove("hidden");
    document.getElementById("editor-title").textContent = this.selectedId;
    document.getElementById("editor-location").textContent = apt ? apt.locationLabel : "";
    document.getElementById("tag-sale").classList.toggle("on", tag.forSale);
    document.getElementById("tag-sale").textContent = tag.forSale
      ? "Available for Sale"
      : "Tag as available for sale";
    document.getElementById("field-since").value = tag.availableSince || "";
    document.getElementById("field-owners").value = tag.owners || "";
    document.getElementById("field-price").value = tag.pricedAt || "";
    document.getElementById("field-floor").value = tag.floorNumber || (apt ? apt.floor : "");
    document.getElementById("field-parking").value = tag.parkingLocation || "";
    document.getElementById("field-parking").disabled = !tag.parkingKnown;
    document.getElementById("parking-known").classList.toggle("active", tag.parkingKnown);
    document.getElementById("parking-unknown").classList.toggle("active", !tag.parkingKnown);
  },

  exportTags() {
    const blob = new Blob([JSON.stringify(this.tags, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ittina-mahavir-unit-tags.json";
    link.click();
    URL.revokeObjectURL(url);
  },
};
