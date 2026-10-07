# Design changes

Light mode is the default. Dark mode is optional (moon button in the header, choice is remembered).
The Students card is not restyled in light mode.

Edited files:
- index.html: Google Fonts; sets the saved theme before first paint (default light)
- src/index.css: typography scale (one size for page titles, one for section titles, plain sans titles inside cards), cards, hover, hero, scroll effects, dark-mode overrides
- src/components/layout/Navbar.jsx: gradient header, inline nav links (Home, Publications, Awards, Projects, Collaborators, Students, Courses, Gallery, News, Contact) on wide screens, hamburger drawer below 1280px, light/dark toggle; logo and name link to Home
- src/components/layout/Footer.jsx, Layout.jsx: classes only
- src/pages/Homepage.jsx: new "Experience" section above Working Opportunities (data in src/data/experience.js), and new "Latest Updates" and "Latest Publications" sections at the bottom, below Prototypes (3 newest each in a horizontal row, "View all" links to /news and /publications). Existing sections untouched.

Not touched: all other pages (including StudentsPage.jsx), src/data, routes, App.jsx, main.jsx.

- src/pages/GalleryPage.jsx: class names only. Gallery images use object-contain so the full photo shows.
- src/data/experience.js: new data file with the 9 research/teaching positions from the CV.
- Homepage.jsx also has a "The Lab" section (3 random gallery photos, picked once per page load) below Experience. Navbar.jsx has a LinkedIn button before the theme toggle. GalleryPage.jsx lightbox: class names only, so the full photo fits.
- Homepage hero is tagged with the class "nrl-hero" and its styles are scoped to it. Research-area chips now follow the CV. StudentsPage.jsx: only the spacing above each section heading changed (class names).
- Multi-colour palette (blue + teal + amber + violet + rose) for light and dark mode lives in the "MULTI-COLOUR LAYER" at the end of src/index.css. Colours only; no layout or logic changes.
- "PREMIUM SURFACES" at the end of src/index.css: tinted page background, colour bands behind the home sections, gradient cards/buttons, navy headings. Colours only.
- "MORE COLOUR, ALL PAGES" at the end of src/index.css: colour waves behind every page, gradient page titles, coloured card/row edges, avatar rings, table headers, scrollbar. Colours only.
- "DESIGN POLISH, ALL PAGES" at the end of src/index.css: frosted-glass hero, translucent cards, gradient eyebrow dashes and title underlines, ring pattern behind page headers, richer footer. Visual only.
- "PROJECTS PAGE: PREMIUM LIST" at the end of src/index.css: project rows sit in a glass panel with accent bars, round icon badges, hover glow and scroll-in animation. Visual only.
