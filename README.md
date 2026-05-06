# ERP Accounting Integration Toolkit

A static browser toolkit for accounting and finance teams integrating acquired companies into an ERP environment. It is designed for holding companies or acquisition-heavy organizations that need a repeatable operating cadence across intake, Day 1 finance readiness, accounting policy alignment, migration validation, training, go-live support, and value capture.

## What It Includes

- Command center with readiness, risk, training, data confidence, active deal, and portfolio risk metrics
- Acquisition portfolio dashboard for multiple deals
- Day 1 finance checklist and finance decision log
- Pre-migration discovery notes and accounting area intake checklist
- GAP analysis matrix
- Portfolio risk register
- Migration timeline builder
- Data validation and exception tracking
- Training studio by audience
- Stabilization tracker for post-go-live support
- Value capture tracker for synergies and process improvements
- Innovation log for accounting integration improvements
- Local persistence through browser `localStorage`
- Export tools for executive brief, acquisition portfolio CSV, risk CSV, and Day 1 checklist CSV

## Run Locally

Open `index.html` directly in a browser.

From PowerShell:

```powershell
cd "C:\Users\sniga\OneDrive - Fritz Air\Documents\New project"
Start-Process .\index.html
```

Optional local server:

```powershell
cd "C:\Users\sniga\OneDrive - Fritz Air\Documents\New project"
node server.js
```

Then open:

```text
http://127.0.0.1:4173/
```

## Deploy To Netlify

This app is static and does not need a build step.

Netlify settings:

```text
Build command: leave blank
Publish directory: .
```

The included `netlify.toml` sets the same publish directory and static headers.

## Data Storage

The app stores working data in the browser using `localStorage`. Data is local to the browser and device. Use the export buttons to download copies for sharing, reporting, or archival.

Use **Reset Data** to restore the sample starting data.

## Files

- `index.html` - app structure and views
- `styles.css` - visual styling and responsive layout
- `script.js` - app data, persistence, exports, and interactions
- `server.js` - optional static local server
- `netlify.toml` - Netlify static hosting config
