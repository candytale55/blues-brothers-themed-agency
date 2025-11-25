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

The hero section uses the **global grid layout** (`.main-grid` class) which provides a reusable responsive structure:

**Mobile (< 600px):**

```css
.main-grid {
  display: grid;
  grid-template-columns: minmax(1em, 1fr) minmax(0px, 500px) minmax(1em, 1fr);
  column-gap: 2em;
}
```

**Tablet and up (≥ 600px):**

```css
@media (min-width: 600px) {
  .main-grid {
    grid-template-columns: minmax(1em, 1fr) repeat(
        3,
        minmax(180px, 320px)
      ) minmax(1em, 1fr);
  }
}
```

**How it works:**

**Mobile layout (3 columns):**

- **Column 1 (left margin):** `minmax(1em, 1fr)` - Flexible space with minimum 1em padding
- **Column 2 (content):** `minmax(0px, 500px)` - Content area with maximum width of 500px
- **Column 3 (right margin):** `minmax(1em, 1fr)` - Flexible space with minimum 1em padding

**Tablet/Desktop layout (5 columns):**

- **Column 1 (left margin):** `minmax(1em, 1fr)` - Flexible left margin
- **Columns 2-4 (content):** `repeat(3, minmax(180px, 320px))` - Three equal content columns, each 180-320px wide
- **Column 5 (right margin):** `minmax(1em, 1fr)` - Flexible right margin
- **Column gap:** `2em` creates space between content columns

The `1fr` units make the margin columns grow equally, creating **automatic horizontal centering** without using `margin: 0 auto`. The minimum 1em ensures content never touches viewport edges on mobile.

**Content Placement:**

**Mobile:**

```css
.hero > * {
  grid-column: 2 / -2;
}
```

Places all hero content in column 2 (the single content column).

**Tablet and up (≥ 600px):**

```css
@media (min-width: 600px) {
  .hero > * {
    grid-column: 2 / span 2;
  }
}
```

Spans hero content across columns 2-3 (two of the three content columns), leaving one column empty for visual breathing room.

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

**Mobile:**

```css
padding: 4em 0;
```

**Tablet and up (≥ 600px):**

```css
@media (min-width: 600px) {
  .hero {
    padding: 6em 0;
  }
}
```

- Vertical padding only (top and bottom)
- Mobile: `4em` ≈ 64px at base font size
- Tablet+: `6em` ≈ 96px for more dramatic hero section
- Horizontal spacing handled by grid columns

**Additional background properties:**

```css
background-size: cover;
background-position: bottom;
```

- `cover` ensures image fills entire container while maintaining aspect ratio
- `bottom` anchors image at bottom (keeps important content visible when cropped)

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

The info section uses the **global grid layout** (`.main-grid` class) with responsive card positioning:

**Mobile (< 600px):**

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

**Tablet and up (≥ 600px):**

```css
@media (min-width: 600px) {
  .info-card {
    grid-column: span 1;
  }

  .info-card:first-child {
    grid-column: 2 / span 1;
  }
}
```

**Key decisions:**

- **Mobile:** Cards stack vertically in the single content column (column 2)
- **Tablet+:** Cards display horizontally across three content columns (2, 3, 4)
- **First card positioning:** `grid-column: 2 / span 1` explicitly starts the first card in column 2
  - **Why this matters:** Without this rule, the first card would auto-place into column 1 (the margin column)
  - This ensures all three cards stay within the content area (columns 2-4)
  - Prevents cards from bleeding into the flexible margin columns
- **Center alignment:** `text-align: center` centers all text content within cards
- **Card spacing:** `margin-bottom: 2em` creates vertical space between stacked cards on mobile

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
3. **Responsive horizontal layout:** At 600px+, cards display side-by-side in three equal columns
4. **Explicit first-child positioning:** Prevents auto-placement into margin column, ensuring all cards stay in content area
5. **Center alignment:** Creates balanced, symmetric layout appropriate for marketing content
6. **Consistent spacing:** Section padding matches hero for unified vertical rhythm
7. **Column gap:** 2em gap between cards on larger screens provides visual separation

### Responsive Behavior

**Breakpoint: 600px**

- Hero content expands to span 2 of 3 content columns
- Hero padding increases from 4em to 6em for more impact
- Info cards transition from vertical stack to horizontal three-column layout
- Each card occupies one content column (columns 2, 3, and 4)

### TODOs

- [x] ~~Add media queries to display cards in horizontal layout on tablet/desktop~~ ✓ Completed
- [ ] Consider adding icons or images to info cards for visual interest
- [ ] Test card content with varying text lengths for layout stability
- [ ] Evaluate if cards need background colors or borders for definition
- [ ] Add media queries for larger breakpoints (768px, 1024px, 1440px)
- [ ] Test grid behavior with different viewport sizes between 600-768px
