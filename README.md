# klvr

One team, everything a growing business needs: websites, apps, social, content, KOLs, and partners, without juggling multiple different freelancers.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Refresh Project Screenshots

Project previews are captured locally at `public/images/projects/` and are not loaded from the live project domains at runtime.

Run:

```sh
npm run capture:projects
```

The script uses Playwright Core with an installed Chrome/Chromium browser, captures each project at `1440x900`, and writes optimized WebP previews. If Chrome is installed somewhere non-standard, run it with `CHROME_PATH=/path/to/chrome npm run capture:projects`.
