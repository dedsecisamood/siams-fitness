# Siam's Fitness

A personal training system for an aesthetic V-taper: a 5-day split (Saturday to Thursday, Friday rest), every machine explained, home-food nutrition with no supplements, habits that stick and a 12-month roadmap.

**Live site:** https://dedsecisamood.github.io/siams-fitness/

## Files

| File | What it is |
| --- | --- |
| `index.html` | The landing page: the method, an interactive week (tap a day for its exercises, cues, do's and don'ts), app features, recipes, roadmap, green and red flags, FAQ |
| `app.html` | The app itself: Today, Train logger, 28-exercise library with machine drawings, Fuel, Recipes, Habits, Progress, Plan and Guide |
| `manifest.webmanifest`, `icon*.png`, `icon.svg`, `apple-touch-icon.png` | Lets phones install the app to the home screen |
| `og.jpg` | Preview image shown when the link is shared |

Both pages are single self-contained HTML files with no build step. Any static host works: GitHub Pages, Netlify, Vercel or Cloudflare Pages. Upload the whole folder and point the domain at it.

## Install on a phone

Open `app.html` in Safari (iPhone) or Chrome (Android) and choose **Add to Home Screen**.

## Data

Logs are saved in the browser on each device (localStorage). Use **Settings → Copy my data** in the app to back up or move to another device.

## Custom domain

If you move to your own domain, update the two `og:` URLs at the top of `index.html` so link previews point at the new address.
