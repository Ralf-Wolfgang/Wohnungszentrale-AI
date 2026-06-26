# Wohnungszentrale AI V1.0

Installation:

```bash
cd /home/ralf
unzip wohnungszentrale_ai_v1_0.zip
chromium file:///home/ralf/wohnungszentrale_ai_v1_0/index.html
```

Sensoren und Home-Assistant-Token stehen in:

```text
config/config.js
```

Solange `token` leer ist, läuft die Anzeige mit Demowerten.

Wichtige Logik:

- PV lädt nur den Speicher.
- Speicher versorgt die Wohnung mit maximal 800 W.
- Netzbezug fließt rot direkt zum Haus.
- Autark nur bei Netzbezug <= 20 W.
