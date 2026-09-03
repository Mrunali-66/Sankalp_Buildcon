# Sankalp Buildcon — React + Vite

The single HTML page, split into React components. Same markup, same CSS, same behaviour.

## 1. Make a new Vite project

```bash
npm create vite@latest sankalp-buildcon -- --template react
cd sankalp-buildcon
npm install
```

## 2. Drop these files in

Copy `index.html`, the whole `src/` folder and the `public/` folder into the new project.
Delete the files Vite made that you no longer need:

```bash
rm -f src/App.css src/index.css src/assets/react.svg
```

## 3. Run it

```bash
npm run dev      # http://localhost:5173
npm run build    # makes dist/
npm run preview  # check the build
```

## Folder layout

```
index.html              fonts, meta tags, <div id="root">
src/
  main.jsx              mounts <App />
  App.jsx               page order + shared state (menu, project sheet)
  styles.css            the original CSS, untouched
  logoMark.js           inline base64 logo, used if mark.png is missing
  data/
    site.js             nav, services, schedule, gallery, all copy text
    projects.js         one object per project sheet
  components/
    Media.jsx           image box with the grey "missing image" fallback
    Brand.jsx           logo lockup with fallback
    PendingLink.jsx     Call / WhatsApp buttons (no number yet)
    UtilityBar, Header, MobileMenu, Hero, About, Founder,
    Projects, Redevelopment, Services, Quality, Commitments,
    Gallery, Contact, Footer, ProjectSheet
  hooks/
    useScrollSpy.js     highlights the nav link you are looking at
    useBodyLock.js      stops background scroll behind menu / sheet
```

## What changed from the HTML

| Old (vanilla JS)                | New (React)                          |
|---------------------------------|--------------------------------------|
| `classList.toggle('open')`      | `menuOpen` state in `App.jsx`        |
| `#pfilters` click handlers      | `filter` state in `Projects.jsx`     |
| `#gfilters` click handlers      | `filter` state in `Gallery.jsx`      |
| `openSheet(slug)` / `hidden`    | `sheet` state → `<ProjectSheet />`   |
| form validate + `.bad` class    | `values` / `bad` state in `Contact.jsx` |
| `img.onerror` → `.is-empty`     | `useState` inside `Media.jsx`        |
| `IntersectionObserver` spy      | `useScrollSpy` hook                  |

## Images

Put them in `public/assets/`. See `public/assets/README.txt` for the exact paths.
Missing images fall back to the drafting plate, so the page never breaks.

## Next step: real routes

The sheets already print `/projects/<slug>`. To make them real pages:

```bash
npm install react-router-dom
```

Then move `ProjectSheet.jsx` behind a `<Route path="/projects/:slug" />` and read the slug
with `useParams()`. The data is already in `src/data/projects.js`, so nothing else changes.
