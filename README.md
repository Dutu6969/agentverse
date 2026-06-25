# AgentVerse

A sleek, dark + neon single-page site about **AI agents & large language models** — built with React + Vite + Tailwind CSS.

## Run it

You need Node.js 18+ (which includes `npm`). Install from <https://nodejs.org> or via Homebrew:

```sh
brew install node
```

Then, from this folder:

```sh
npm install      # install dependencies
npm run dev      # start the dev server → http://localhost:5173
```

To build a production bundle:

```sh
npm run build    # output goes to dist/
npm run preview  # preview the production build locally
```

## Where things live

| File | What it is |
|------|------------|
| `src/data.js` | **All site copy** — edit text, stats, timeline, etc. here |
| `src/App.jsx` | Page layout & section components |
| `src/index.css` | Global styles, neon-glass helpers, animations |
| `tailwind.config.js` | Theme colors, fonts, keyframe animations |

## Customizing

- **Change the topic/content:** edit the arrays in `src/data.js`.
- **Recolor the neon palette:** edit `theme.extend.colors.neon` in `tailwind.config.js`.
- **Adjust sections:** each section is a component in `src/App.jsx`.
