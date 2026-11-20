# Better 1%

Abdullah Al Siam's training system: 1% better every day. A 5-day split (Saturday to Thursday, Friday rest), every machine explained, home food with no supplements, habits that stick and a 12-month plan.

**Live site:** https://dedsecisamood.github.io/siams-fitness/

## Files

| File | What it is |
| --- | --- |
| `index.html` | The landing page: why 1%, the week (tap a day for its exercises, cues, do's and don'ts), the app, food, the 12-month plan, green and red flags, FAQ |
| `app.html` | The app itself, behind a passcode: Today, Train logger, 28-exercise library, Food, Recipes, Habits, Progress, Plan and Guide |
| `logo.webp` | Logo |
| `manifest.webmanifest`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` | Lets phones install the app to the home screen |
| `og.jpg` | Preview image shown when the link is shared |

Both pages are single self-contained HTML files with no build step. Any static host works: GitHub Pages, Netlify, Vercel or Cloudflare Pages.

## Passcode

The app opens after a 4-digit passcode on the landing page. It is a simple privacy lock that keeps casual visitors out, not real security: anyone who reads the source can get around it.

## Data

Logs are saved in the browser on each device (localStorage). Use **Settings → Copy my data** in the app to back up or move to another device.

## Custom domain

If you move to your own domain, update the two `og:` URLs at the top of `index.html` so link previews point at the new address.
