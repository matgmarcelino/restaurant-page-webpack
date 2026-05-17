# Ember & Salt — Restaurant Page

A single-page restaurant website for a fictional wood-fire grill called **Ember & Salt**, built with vanilla JavaScript and bundled with Webpack.

## Features

- **Home page** — hero section with a call-to-action to the menu
- **Menu page** — sidebar navigation between menu categories (small plates, entrées, etc.) with dynamic item rendering
- **About page** — restaurant story/info section
- Navigation header with logo and tab buttons; content is swapped in-place without page reloads

## Tech Stack

| Tool | Purpose |
|---|---|
| Webpack 5 | Bundler |
| html-webpack-plugin | HTML template processing |
| style-loader / css-loader | CSS bundling |
| webpack-dev-server | Local dev server with live reload |

Fonts: Inter (body) and Playfair Display (headings), loaded as Webpack asset resources.

## Project Structure

```
src/
├── index.html              # HTML shell (single div#content swapped by JS)
├── styles.css              # Global styles
├── assets/
│   └── logo.svg
├── fonts/
│   ├── Inter-VariableFont_opsz,wght.ttf
│   └── PlayfairDisplay-VariableFont_wght.ttf
└── js/
    ├── index.js            # Entry point — routing & event listeners
    ├── homePage.js         # Home page DOM factory
    ├── aboutPage.js        # About page DOM factory
    └── menu/
        ├── menuIntro.js    # Menu section header
        ├── menuSidebar.js  # Category sidebar
        └── menuItems.js    # Item cards per category
```

## Getting Started

```bash
npm install
```

Start the dev server (hot reload on `src/index.html` changes):

```bash
npx webpack serve
```

Build for production:

```bash
npx webpack
```

Output lands in `dist/`.

## Live Demo

[GitHub Pages / hosted link — add when deployed]
