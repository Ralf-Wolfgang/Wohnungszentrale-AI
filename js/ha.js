window.WZ_HA = {
  async getStates() {
    const cfg = window.WZ_CONFIG;
    if (!cfg.token || cfg.token.trim() === "") return null;
    const response = await fetch(`${cfg.haUrl}/api/states`, { headers: { "Authorization": `Bearer ${cfg.token}`, "Content-Type": "application/json" }});
    if (!response.ok) throw new Error("Home Assistant API Fehler: " + response.status);
    const states = await response.json();
    const map = {};
    for (const item of states) map[item.entity_id] = item;
    return map;
  },
  num(map, entityId, fallback = 0) {
    if (!map || !map[entityId]) return fallback;
    const value = Number(String(map[entityId].state).replace(",", "."));
    return Number.isFinite(value) ? value : fallback;
  }
};
