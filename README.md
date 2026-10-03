# UWPRS Link Dashboard — GitHub Pages Mirror

A clean, dependency-light recreation of the UWPRS link dashboard based on the inspected HTML supplied with this project.

## Features

- Dark navy / purple glassmorphism design
- Responsive sidebar on desktop and compact layout on mobile
- Six link categories
- Search links with `⌘ K` / `Ctrl K`
- Category filtering from the sidebar
- Hover lift / glow effects
- External links open in a new tab
- Link data is centralized in `app.js` for easy editing
- Works as a static GitHub Pages site — no server required

## Run locally

Because this is static HTML/CSS/JS, you can simply open `index.html` in a browser. For the closest development experience, use any static server, for example:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish to GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, `app.js`, and `README.md`.
3. Go to **Settings → Pages**.
4. Set the source to **Deploy from a branch**.
5. Select your main branch and `/ (root)`.
6. Save. GitHub will provide the public Pages URL.

## Editing links

All dashboard links are in the `categories` array near the top of `app.js`. Each link looks like:

```js
{ name: 'Example', url: 'https://example.com', fallback: 'EX' }
```

You can add `icon: 'https://...'` if you want a logo image. If the image fails to load, the fallback initials are displayed automatically.

## Note about logos

The original inspection references the site's `/icons/...` assets. This recreation uses Simple Icons CDN URLs where suitable and graceful initials for links without a matching public icon. That keeps the GitHub Pages project portable instead of depending on the original site's private/static asset paths.

## Source basis

The supplied inspection identifies the page as **UWPRS Link Dashboard**, describes it as a personal quick-access link directory, and shows the original dark glassmorphism layout, category structure, search field, and external link destinations. The source also states that the original site is for navigation only and is not an official UW Medicine website.
