/** Client-side gate. This hides the UI; it does not protect the files. */
const GATE_HASH = "bb78ad704e20c10201968b1994ed8d245c19cd20cbd93595b0502279a2ffde0f";
const GATE_SESSION = "ittina-gate-hash";

const APP_SCRIPTS = [
  "https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js",
  "map-data.js?v=gate2",
  "inventory.js?v=gate2",
  "app.js?v=gate2",
];

async function sha256Hex(text) {
  const bytes = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const el = document.createElement("script");
    el.src = src;
    el.onload = resolve;
    el.onerror = () => reject(new Error(`Could not load ${src}`));
    document.body.appendChild(el);
  });
}

async function unlockApp() {
  const gate = document.getElementById("gate");
  document.body.classList.remove("locked");
  if (gate) gate.remove();
  for (const src of APP_SCRIPTS) {
    await loadScript(src);
  }
}

async function tryPassword(password) {
  const hex = await sha256Hex(password);
  if (hex !== GATE_HASH) return false;
  sessionStorage.setItem(GATE_SESSION, hex);
  await unlockApp();
  return true;
}

async function bootGate() {
  if (sessionStorage.getItem(GATE_SESSION) === GATE_HASH) {
    await unlockApp();
    return;
  }
  const form = document.getElementById("gate-form");
  const input = document.getElementById("gate-password");
  const error = document.getElementById("gate-error");
  if (!form || !input) return;
  input.focus();
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    if (button) button.disabled = true;
    if (error) error.textContent = "";
    try {
      const ok = await tryPassword(input.value);
      if (!ok && error) error.textContent = "That password does not match.";
    } finally {
      if (button) button.disabled = false;
      input.value = "";
      input.focus();
    }
  });
}

bootGate();
