# Homepage Structure Documentation

This document covers the structure and styling of the main sections on the homepage (`index.html`), excluding navigation and footer which are documented separately.

---

## Hero Section

### Structure Diagram

```
<section class="hero main-grid">
├── <h1 class="hero-title">
│   └── <span class="accent-text">highlighted text</span>
├── <p>
└── <a class="btn hero-btn">
```

### Classes Reference

| Element     | Class(es)          | Purpose                                                            |
| ----------- | ------------------ | ------------------------------------------------------------------ |
| `<section>` | `.hero .main-grid` | Main hero container with background image; uses global grid layout |
| `<h1>`      | `.hero-title`      | Main headline of the hero section                                  |
| `<span>`    | `.accent-text`     | Highlights specific text in accent color (yellow)                  |
| `<p>`       | (none)             | Descriptive paragraph with white text                              |
| `<a>`       | `.btn .hero-btn`   | Call-to-action button styled with accent background                |

### Implementation Notes

#### Layout Strategy

The hero section uses the **global grid layout** (`.main-grid` class) which provides a reusable three-column structure for consistent centering across multiple sections:

```css
.main-grid {
  display: grid;
  grid-template-columns: minmax(1em, 1fr) minmax(0px, 500px) minmax(1em, 1fr);
}
```

**How it works:**

- **Column 1 (left margin):** `minmax(1em, 1fr)` - Flexible space with minimum 1em padding, grows to fill available space
- **Column 2 (content):** `minmax(0px, 500px)` - Content area with maximum width of 500px
- **Column 3 (right margin):** `minmax(1em, 1fr)` - Flexible space with minimum 1em padding, grows to fill available space

The `1fr` units make the left and right columns grow equally, creating **automatic horizontal centering** without using `margin: 0 auto`. The minimum 1em ensures content never touches viewport edges on mobile.

**Content Placement:**

```css
.hero > * {
  grid-column: 2 / -2;
}
```

This selector places all direct children of `.hero` into column 2 (the content area). The `-2` value counts from the end, ensuring content stays in the middle column even if the grid structure changes.

**Why use a global grid class:**

- **DRY principle:** Define the grid structure once, reuse across multiple sections (hero, info, footer)
- **Consistency:** All sections share the same content width and centering behavior
- **Maintainability:** Changing the grid structure in one place updates all sections

#### Background Styling

```css
background-image: url(../images/hero-bg.jpg);
background-color: var(--bg-secondary);
color: var(--white);
```

- **Background image:** Provides visual interest and brand identity
- **Fallback color:** Black (`var(--bg-secondary)`) displays if image fails to load
- **Text color:** White ensures readability over dark background

**TODO:** Add accessibility considerations for background images (ARIA labels, alternative text strategies)

#### Spacing

```css
padding: 4em 0;
```

- Vertical padding only (top and bottom)
- `4em` = approximately 64px at base font size (16px)
- Horizontal spacing handled by grid columns

#### Typography

- **Hero title:** Uses `font-weight: var(--font-weight-bold)` (700)
- **Font size:** Mobile-first sizing at `1.5rem` (24px)
- **Line height:** `1.4` for readability with longer headlines
- **Accent text:** Yellow color (`var(--text-accent)`) with bold weight to emphasize key phrases

#### Button Styling

The hero button combines two classes for specificity:

```css
.btn {
  display: inline-block;
  font-weight: var(--font-weight-bold);
  padding: 0.5em 1.5em;
}

.hero-btn {
  background-color: var(--bg-accent);
  color: var(--black);
  padding: 0.5em 1.5em;
  justify-self: start;
  margin-top: 1em;
}
```

- **Base button:** Provides generic button structure
- **Hero button:** Adds accent background (yellow), black text, and left alignment
- **justify-self: start:** Aligns button to the left within grid cell (prevents full-width stretching)

### Design Decisions

1. **Grid over Flexbox:** Grid provides more precise control for responsive centering with constrained content width
2. **Relative units (em/rem):** Ensures spacing scales proportionally with font size for accessibility
3. **Mobile-first:** Base styles optimized for 375px viewport (industry standard), desktop styles added via media queries
4. **CSS Variables:** Enables consistent theming and easy color scheme changes

### TODOs

- [ ] Add accessibility labels for background image
- [ ] Create media queries for larger viewports:
  - Tablet: 768px
  - Desktop: 1024px
  - Wide: 1440px
- [ ] Test with different content lengths to ensure layout stability
- [ ] Consider adding background-size and background-position properties for better image control

---

## Info Section

### Structure Diagram

```
<section class="info main-grid">
├── <div class="info-card">
│   ├── <h2 class="card-title">
│   └── <p>
│       └── <strong> (optional emphasis)
├── <div class="info-card">
│   ├── <h2 class="card-title">
│   └── <p>
│       └── <strong> (optional emphasis)
└── <div class="info-card">
    ├── <h2 class="card-title">
    └── <p>
        └── <strong> (optional emphasis)
```

### Classes Reference

| Element     | Class(es)          | Purpose                                                |
| ----------- | ------------------ | ------------------------------------------------------ |
| `<section>` | `.info .main-grid` | Container for info cards; uses global grid layout      |
| `<div>`     | `.info-card`       | Individual card containing title and description       |
| `<h2>`      | `.card-title`      | Card heading (About Us, Our Skills, Get in Touch)      |
| `<p>`       | (none)             | Card description text                                  |
| `<strong>`  | (none)             | Emphasized text within paragraphs (bold + black color) |

### Implementation Notes

#### Layout Strategy

The info section uses the **global grid layout** (`.main-grid` class) for consistent centering with the hero section:

```css
.info {
  padding: 4em 0;
  text-align: center;
}

.info-card {
  grid-column: 2 / -2;
  margin-bottom: 2em;
}
```

**Key decisions:**

- **Global grid:** Reuses `.main-grid` for consistent content width (max 500px)
- **Vertical stacking:** Cards stack vertically in mobile-first layout
- **Center alignment:** `text-align: center` centers all text content within cards
- **Card spacing:** `margin-bottom: 2em` creates vertical space between cards

#### Spacing

```css
padding: 4em 0;
```

- Vertical padding (top and bottom) matches hero section for visual consistency
- `4em` = approximately 64px at base font size (16px)

#### Typography

**Card titles:**

```css
.card-title {
  font-size: 1.125rem; /* 18px */
  color: var(--text-title-color);
  margin-bottom: 1.25em;
}
```

- Slightly larger than body text for hierarchy
- Black color (`var(--text-title-color)`) for prominence
- Bottom margin creates space before description

**Emphasized text:**

```css
strong {
  font-weight: var(--font-weight-bold);
  color: var(--text-title-color);
}
```

- Bold weight (700) makes text stand out
- Black color for emphasis within gray body text

### Design Decisions

1. **Reusable grid:** Using `.main-grid` class promotes consistency and reduces CSS duplication
2. **Mobile-first stacking:** Vertical card layout works naturally on narrow viewports
3. **Center alignment:** Creates balanced, symmetric layout appropriate for marketing content
4. **Consistent spacing:** Section padding matches hero for unified vertical rhythm

### TODOs

- [ ] Add media queries to display cards in horizontal layout on tablet/desktop
- [ ] Consider adding icons or images to info cards for visual interest
- [ ] Test card content with varying text lengths for layout stability
- [ ] Evaluate if cards need background colors or borders for definition
