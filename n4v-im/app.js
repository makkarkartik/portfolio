const data = window.ITTINA;
const BLOCK_ORDER = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"];

const START = {
  center: data.center,
  zoom: 17.35,
  pitch: 58,
  // Brochure north arrow points right; OSM north-up is 90° off that page.
  bearing: -90,
};

const map = new maplibregl.Map({
  container: "map",
  style: "https://tiles.openfreemap.org/styles/liberty",
  center: START.center,
  zoom: START.zoom,
  pitch: START.pitch,
  bearing: START.bearing,
  maxPitch: 75,
  attributionControl: true,
});

map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), "top-right");
map.addControl(new maplibregl.ScaleControl({ maxWidth: 120, unit: "metric" }));

const popup = new maplibregl.Popup({ closeButton: false, offset: 18 });
let orbitTimer = null;

function buildingCenter(feature) {
  return [feature.properties.lon, feature.properties.lat];
}

function osmBuildingForBlock(blockId) {
  const spec = data.inventory.blocks[blockId];
  if (!spec) return null;
  return data.osmCampusBuildings.features.find((f) => f.properties.id === spec.osmBuildingId);
}

function flyToBuilding(feature) {
  map.flyTo({
    center: buildingCenter(feature),
    zoom: 18.6,
    pitch: 55,
    bearing: map.getBearing(),
    speed: 0.75,
  });
}

function unitPopupHtml(feature) {
  const apt = window.IttinaInventory.apartments.find((item) => item.id === feature.properties.id);
  const tag = apt ? window.IttinaInventory.tag(apt.id) : {};
  const parking = tag.parkingKnown ? `Parking: ${tag.parkingLocation || "Known"}` : "Parking: Unknown";
  return [
    `<strong>${feature.properties.id}</strong>`,
    apt ? apt.locationLabel : "",
    tag.forSale ? "Available for sale" : "Not tagged for sale",
    tag.owners ? `Owner(s): ${tag.owners}` : "",
    tag.pricedAt ? `Priced at ${tag.pricedAt}` : "",
    parking,
  ].filter(Boolean).join("<br>");
}

function refreshMapFromInventory() {
  if (!map.getSource("osm-campus")) return;
  map.getSource("osm-campus").setData(window.IttinaInventory.buildingFeatures());
  const units = window.IttinaInventory.unitFeatures();
  if (map.getSource("units")) map.getSource("units").setData(units.polygons);
  if (map.getSource("unit-labels")) map.getSource("unit-labels").setData(units.labels);
}

window.IttinaMap = {
  onInventoryChange: refreshMapFromInventory,
  focusUnit(apt) {
    refreshMapFromInventory();
    map.flyTo({
      center: apt.center,
      zoom: 19.15,
      pitch: 48,
      bearing: map.getBearing(),
      speed: 0.8,
    });
  },
};

function bindHover(layer, htmlFor) {
  map.on("mousemove", layer, (event) => {
    map.getCanvas().style.cursor = "pointer";
    const f = event.features[0];
    popup.setLngLat(event.lngLat).setHTML(htmlFor(f)).addTo(map);
  });
  map.on("mouseleave", layer, () => {
    map.getCanvas().style.cursor = "";
    popup.remove();
  });
}

function hideBasemapBuildings() {
  map.getStyle().layers.forEach((layer) => {
    if (layer.type === "fill-extrusion" && !["osm-campus-3d", "units-3d"].includes(layer.id)) {
      map.setLayoutProperty(layer.id, "visibility", "none");
    }
  });
}

map.on("load", async () => {
  const labelLayer = map.getStyle().layers.find((layer) => layer.type === "symbol");
  const before = labelLayer && labelLayer.id;

  map.addSource("campus", { type: "geojson", data: data.campus });
  map.addSource("osm-campus", { type: "geojson", data: data.osmCampusBuildings });
  map.addSource("osm-campus-labels", { type: "geojson", data: data.osmBuildingLabels });
  map.addSource("units", { type: "geojson", data: { type: "FeatureCollection", features: [] } });
  map.addSource("unit-labels", { type: "geojson", data: { type: "FeatureCollection", features: [] } });
  map.addSource("satellite", {
    type: "raster",
    tiles: [
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    ],
    tileSize: 256,
    maxzoom: 19,
  });

  map.addLayer({
    id: "satellite",
    type: "raster",
    source: "satellite",
    layout: { visibility: "none" },
    paint: { "raster-opacity": 0.72 },
  }, before);

  map.addLayer({
    id: "campus-fill",
    type: "fill",
    source: "campus",
    paint: { "fill-color": "#c9a227", "fill-opacity": 0.12 },
  }, before);
  map.addLayer({
    id: "campus-line",
    type: "line",
    source: "campus",
    paint: { "line-color": "#8a5a18", "line-width": 2.4 },
  }, before);
  map.addLayer({
    id: "osm-campus-3d",
    type: "fill-extrusion",
    source: "osm-campus",
    paint: {
      "fill-extrusion-color": ["get", "color"],
      "fill-extrusion-height": ["get", "height"],
      "fill-extrusion-opacity": 0.88,
      "fill-extrusion-vertical-gradient": true,
    },
  }, before);
  map.addLayer({
    id: "units-3d",
    type: "fill-extrusion",
    source: "units",
    paint: {
      "fill-extrusion-color": ["get", "color"],
      "fill-extrusion-height": 3.2,
      "fill-extrusion-base": 0.7,
      "fill-extrusion-opacity": 0.96,
      "fill-extrusion-vertical-gradient": true,
    },
  }, before);
  map.addLayer({
    id: "units-outline",
    type: "line",
    source: "units",
    paint: {
      "line-color": [
        "case",
        ["==", ["get", "selected"], 1],
        "#ffffff",
        ["==", ["get", "forSale"], 1],
        "#0b3d2c",
        "#6a4a28",
      ],
      "line-width": ["case", ["==", ["get", "selected"], 1], 2.2, 0.9],
    },
  }, before);
  map.addLayer({
    id: "unit-labels",
    type: "symbol",
    source: "unit-labels",
    minzoom: 17.6,
    layout: {
      "text-field": ["get", "name"],
      "text-font": ["Noto Sans Regular"],
      "text-size": 11,
      "text-allow-overlap": true,
    },
    paint: {
      "text-color": "#1a120c",
      "text-halo-color": "#fff7ea",
      "text-halo-width": 1.1,
    },
  });
  map.addLayer({
    id: "osm-campus-labels",
    type: "symbol",
    source: "osm-campus-labels",
    layout: {
      "text-field": ["get", "name"],
      "text-font": ["Noto Sans Bold"],
      "text-size": 13,
      "text-allow-overlap": true,
    },
    paint: {
      "text-color": "#3b2410",
      "text-halo-color": "#fff7ea",
      "text-halo-width": 1.3,
    },
  });

  const grid = document.getElementById("block-grid");
  BLOCK_ORDER.forEach((id) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "block-chip";
    chip.textContent = id;
    chip.dataset.id = id;
    if (!data.inventory.blocks[id]) {
      chip.classList.add("missing");
      chip.disabled = true;
    } else {
      chip.addEventListener("click", () => {
        window.IttinaInventory.selectBlock(id);
        const building = osmBuildingForBlock(id);
        if (building) flyToBuilding(building);
        refreshMapFromInventory();
      });
    }
    grid.appendChild(chip);
  });

  hideBasemapBuildings();
  await window.IttinaInventory.init(map);

  bindHover("units-3d", unitPopupHtml);
  bindHover("osm-campus-3d", (feature) => {
    const letters = feature.properties.blocks || "unlabeled OSM building";
    return `<strong>${feature.properties.label || "Building"}</strong><br>OpenStreetMap footprint<br>Blocks: ${letters}`;
  });

  map.on("click", (event) => {
    const unitHit = map.queryRenderedFeatures(event.point, { layers: ["units-3d"] });
    if (unitHit[0]) {
      window.IttinaInventory.selectUnit(unitHit[0].properties.id, true);
      return;
    }
    const buildingHit = map.queryRenderedFeatures(event.point, { layers: ["osm-campus-3d"] });
    if (buildingHit[0]) {
      const letters = (buildingHit[0].properties.blocks || "").split(",").filter(Boolean);
      if (letters[0]) window.IttinaInventory.selectBlock(letters[0]);
    }
  });

  refreshMapFromInventory();
});

document.getElementById("toggle-satellite").addEventListener("change", (e) => {
  if (!map.getLayer("satellite")) return;
  map.setLayoutProperty("satellite", "visibility", e.target.checked ? "visible" : "none");
});
document.getElementById("toggle-labels").addEventListener("change", (e) => {
  const vis = e.target.checked ? "visible" : "none";
  if (map.getLayer("osm-campus-labels")) {
    map.setLayoutProperty("osm-campus-labels", "visibility", vis);
  }
});
document.getElementById("view-3d").addEventListener("click", () => {
  map.easeTo({ ...START, duration: 1200 });
});
document.getElementById("view-layout").addEventListener("click", () => {
  map.easeTo({ center: data.center, zoom: 17.2, pitch: 0, bearing: -90, duration: 1000 });
});
document.getElementById("view-top").addEventListener("click", () => {
  map.easeTo({ center: data.center, zoom: 17.2, pitch: 0, bearing: 0, duration: 1000 });
});
document.getElementById("toggle-orbit").addEventListener("change", (e) => {
  if (orbitTimer) {
    clearInterval(orbitTimer);
    orbitTimer = null;
  }
  if (e.target.checked) {
    orbitTimer = setInterval(() => {
      map.setBearing(map.getBearing() + 0.18);
    }, 40);
  }
});
