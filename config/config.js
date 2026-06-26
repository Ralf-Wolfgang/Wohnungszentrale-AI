window.WZ_CONFIG = {
  haUrl: "http://localhost:8123",
  token: "",
  pricePerKwh: 0.288,
  batteryCapacityKwh: 5.12,
  maxBatteryOutputW: 800,
  autarkThresholdW: 20,
  entities: {
    pvPower: "sensor.marstek_pv_gesamt",
    batterySoc: "sensor.marstek_battery_soc",
    batteryChargePower: "sensor.marstek_akkuladung",
    homeLoad: "sensor.shellypro3em_leistung",
    gridPower: "sensor.marstek_grid_power",
    batteryDailyKwh: "sensor.marstek_tagesertrag",
    batteryMonthKwh: "sensor.marstek_monatsertrag",
    batteryTotalKwh: "sensor.marstek_gesamtertrag"
  }
};
