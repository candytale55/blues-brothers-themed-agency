# About Page Structure Documentation

This document covers the structure and styling of the About page (`about.html`).

---

## About Page Section

### Structure Diagram

```
<main class="main-grid main-template">
├── <h1 class="page-title">
├── <p class="subtitle">
├── <img class="main-image">
└── <div class="main-text">
    ├── <h2 class="section-title">
    ├── <p>
    ├── <p>
    ├── <h2 class="section-title">
    ├── <p>
    └── <p>
```

### Classes Reference

| Element    | Class(es)                    | Purpose                                                    |
| ---------- | ---------------------------- | ---------------------------------------------------------- |
| `<main>`   | `.main-grid .main-template`  | Page container using global grid + template padding       |
| `<h1>`     | `.page-title`                | Large page heading (48px) with decorative yellow underline |
| `<p>`      | `.subtitle`                  | Introductory subheading (24px), centered                   |
| `<img>`    | `.main-image`                | Featured image with double box shadow effect               |
| `<div>`    | `.main-text`                 | Content wrapper for body text and section headings        |
| `<h2>`     | `.section-title`             | Section headings (18px) with decorative yellow line        |

### Implementation Notes

#### Layout Strategy

The About page uses a **mobile-first, grid-based layout**:

1. **Global grid (`.main-grid`)** provides horizontal centering and margins
2. **Template padding (`.main-template`)** adds consistent vertical spacing
3. **Single-column mobile** layout with all content centered
4. **Two-column desktop** layout with image on left, text on right (≥600px)

---

## CSS Styling

### Page Container

**Main template wrapper:**
```css
.main-template {
  padding: 4em 0; /* 64px top/bottom spacing */
}

.main-template > * {
  grid-column: 2 / -2; /* Places all children in center column */
}
```

**Purpose:**
- `.main-grid` provides 3-column mobile grid (margin | content | margin)
- `.main-template` adds consistent vertical padding to page
- All direct children placed in center column by default
- Responsive adjustments at 600px+ breakpoint

---

### Typography Hierarchy

#### Page Title

**Large centered heading with decorative underline:**
```css
.page-title {
  font-size: 3rem; /* 48px */
  text-align: center;
  justify-self: center; /* Centers in grid for decorative line positioning */
  color: var(--text-title-color);
}

.page-title::after {
  content: "";
  display: block;
  width: 100%;
  height: 45px;
  background-color: var(--bg-accent);
  margin-top: -45px;
  margin-left: 15px;
}
```

**Key features:**

1. **`font-size: 3rem;`**
   - Large, attention-grabbing heading
   - 48px at default font size
   - Sets visual hierarchy as most important element

2. **`justify-self: center;`**
   - Centers the title within its grid column
   - Necessary for decorative `::after` pseudo-element positioning
   - Works in conjunction with `text-align: center`

3. **`::after` pseudo-element creates decorative yellow underline:**
   - `content: "";` - Required for pseudo-element to display
   - `display: block;` - Makes it appear on new line below title
   - `width: 100%;` - Matches title width
   - `height: 45px;` - Thick yellow bar for visual impact
   - `margin-top: -45px;` - Overlaps with title text creating offset effect
   - `margin-left: 15px;` - Shifts right by 15px creating layered look
   - `background-color: var(--bg-accent);` - Yellow brand color

**Visual effect:** Yellow bar appears behind and offset to the right of title text

---

#### Subtitle

**Introductory subheading:**
```css
.subtitle {
  font-size: 1.5rem; /* 24px */
  text-align: center;
  margin: .5em 0 3em; /* 12px top, 72px bottom */
  color: var(--text-title-color);
}
```

**Purpose:**
- Provides context below page title
- Larger than body text but smaller than title
- Extra bottom margin (3em = 72px) creates breathing room before content
- Top margin (.5em = 12px) separates from page title

---

#### Section Titles

**Body section headings with decorative line:**
```css
.section-title {
  font-size: 1.125rem; /* 18px */
  margin-top: 1.25rem; /* 20px */
  color: var(--text-title-color);
}

.section-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  margin-top: 10px;
  background-color: var(--bg-accent);
}

.section-title:first-child {
  margin-top: 0; /* Removes top margin from first section */
}
```

**Key features:**

1. **Decorative yellow line:**
   - `width: 60px;` - Short accent line (not full width like page title)
   - `height: 3px;` - Thin line (compared to 45px on page title)
   - `margin-top: 10px;` - Space between heading and line
   - Left-aligned by default (no centering margins)

2. **Shared styling with `.card-title`:**
   - Both use `::after` pseudo-element for yellow line
   - `.card-title::after` centers line with `margin-left/right: auto`
   - `.section-title::after` left-aligns (no auto margins)

3. **First-child exception:**
   - Removes top margin when section title is first element
   - Prevents excessive spacing at top of content

---

### Featured Image

**Main image with double box shadow effect:**
```css
.main-image {
  margin-bottom: 1.5em; /* 24px space below image */
  box-shadow: 5px 5px 0px var(--bg-secondary), 10px 10px 0px var(--bg-accent);
}
```

**Box shadow breakdown:**

The `box-shadow` property creates a **layered shadow effect**:

```css
box-shadow: 
  5px 5px 0px var(--bg-secondary),    /* First shadow - black */
  10px 10px 0px var(--bg-accent);     /* Second shadow - yellow */
```

**First shadow (black):**
- `5px` horizontal offset (right)
- `5px` vertical offset (down)
- `0px` blur (sharp edge)
- `var(--bg-secondary)` - Black color

**Second shadow (yellow):**
- `10px` horizontal offset (right)
- `10px` vertical offset (down)
- `0px` blur (sharp edge)
- `var(--bg-accent)` - Yellow brand color

**Visual result:** Creates a stepped, offset border effect with black layer closer to image and yellow layer behind it

---

### Responsive Layout (≥600px)

**Two-column layout for tablet/desktop:**
```css
@media (min-width: 600px) {
  .main-image {
    grid-column: 2; /* Places image in first content column */
  }

  .main-text {
    grid-column: 3 / span 2; /* Places text spanning columns 3-4 */
  }
}
```

**Grid transformation:**

**Mobile (< 600px):**
```
| margin | content | margin |
           ↓
      [All elements]
```
- 3-column grid: `minmax(1em, 1fr) | minmax(0px, 500px) | minmax(1em, 1fr)`
- All elements stack vertically in column 2

**Desktop (≥ 600px):**
```
| margin | image | text | text | margin |
           col 2   col 3  col 4
```
- 5-column grid: `minmax(1em, 1fr) | repeat(3, minmax(150px, 320px)) | minmax(1em, 1fr)`
- Image occupies column 2
- Text spans columns 3-4 (wider area for readability)
- Creates side-by-side layout

**Why this works:**
- `.main-grid` automatically adjusts to 5 columns at 600px+
- Explicit `grid-column` placement overrides default centering
- Image gets narrow column, text gets wider space
- Natural visual balance with image on left, text on right

---

## Typography Colors

**Consistent color application:**
```css
.page-title, 
.subtitle, 
.section-title {
  color: var(--text-title-color);
}
```

**Purpose:**
- Groups all heading elements for consistent color
- Uses CSS variable for easy theme adjustments
- Separates heading color from body text color
- Single source of truth for title styling

---

## Decorative Elements Pattern

### Yellow Lines Strategy

The About page uses **two different yellow line patterns**:

#### 1. Page Title - Large Offset Background
```css
.page-title::after {
  height: 45px;           /* Thick bar */
  margin-top: -45px;      /* Overlaps title */
  margin-left: 15px;      /* Offset to right */
}
```
- **Purpose:** Bold, dramatic visual statement
- **Effect:** Yellow bar behind title text
- **Usage:** Major page headings only

#### 2. Section Title - Small Underline
```css
.section-title::after {
  width: 60px;           /* Short line */
  height: 3px;           /* Thin line */
  margin-top: 10px;      /* Below heading */
}
```
- **Purpose:** Subtle accent for body headings
- **Effect:** Small yellow line under heading
- **Usage:** Section headings throughout content

#### 3. Card Title - Centered Underline (Homepage)
```css
.card-title::after {
  margin-left: auto;     /* Centers line */
  margin-right: auto;
}
```
- **Purpose:** Centered accent for card headings
- **Effect:** Small centered yellow line
- **Usage:** Info cards on homepage

**Design consistency:** All three use `::after` pseudo-element with `background-color: var(--bg-accent)` but vary in size, position, and purpose.

---

## HTML Content Structure

### Semantic HTML

```html
<main class="main-grid main-template">
  <!-- Page heading with decorative element -->
  <h1 class="page-title">About us.</h1>
  
  <!-- Introductory subheading -->
  <p class="subtitle">
    We're two brothers from Chicago. We can help you with SEO, SEM, 
    content marketing and whatever else.
  </p>
  
  <!-- Featured image with alt text -->
  <img 
    class="main-image" 
    src="./src/images/about-me.jpg" 
    alt="Person underwater wearing yellow diving goggles with hair floating around."
  >
  
  <!-- Main content area -->
  <div class="main-text">
    <h2 class="section-title">We're really great guys</h2>
    <p>We grew up in downtown Chicago...</p>
    <p>While the band didn't make it...</p>
    
    <h2 class="section-title">We can do all sorts of great stuff</h2>
    <p>Honestly most people in this industry...</p>
    <p>So sure, maybe we're a bit different...</p>
  </div>
</main>
```

**Best practices:**
- ✅ Semantic `<main>` element for page content
- ✅ Proper heading hierarchy (h1 → h2)
- ✅ Descriptive alt text for accessibility
- ✅ Content wrapper (`.main-text`) for grouping related elements
- ✅ Class names describe purpose, not appearance

---

## Design Decisions

### 1. Mobile-First Grid Layout
- **Why:** Simpler mobile layout as baseline
- **Benefit:** Progressive enhancement for larger screens
- **Implementation:** Default single-column, then 2-column at 600px

### 2. Decorative Yellow Elements
- **Why:** Reinforces brand identity (Jake & Elwood yellow)
- **Benefit:** Creates visual interest without images
- **Consistency:** Used across page title, section titles, and cards

### 3. Box Shadow Instead of Border
- **Why:** Creates depth and layered effect
- **Benefit:** More interesting than flat border
- **Brand alignment:** Uses brand colors (black + yellow)

### 4. Asymmetric Grid Columns
- **Why:** Image needs less width than text
- **Benefit:** Better readability with wider text column
- **Balance:** Natural visual weight distribution

### 5. Centered Mobile, Left-Aligned Desktop
- **Why:** Mobile benefits from centered alignment
- **Benefit:** Desktop feels more natural left-aligned with image
- **Flexibility:** Different optimal layouts for different screen sizes

### 6. `::after` Pseudo-Elements for Decoration
- **Why:** No extra HTML markup needed
- **Benefit:** Cleaner HTML, easier to maintain
- **Consistency:** Same pattern across multiple elements

### 7. Template Padding Class
- **Why:** Consistent spacing across all pages
- **Benefit:** Single source for page padding
- **Reusability:** Can be applied to any page template

---

## Common Patterns

### Reusable Classes

Several classes from the About page are used elsewhere:

| Class | About Page | Homepage | Purpose |
|-------|-----------|----------|---------|
| `.main-grid` | ✅ | ✅ | Global grid layout |
| `.section-title` | ✅ | ❌ | Section headings with yellow line |
| `.card-title` | ❌ | ✅ | Card headings with centered yellow line |
| `.page-title` | ✅ | ❌ | Large page heading with yellow background |
| `.subtitle` | ✅ | ❌ | Introductory subheading |

**Shared yellow line styling:**
```css
/* Both section-title and card-title use this pattern */
.section-title::after, 
.card-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  margin-top: 10px;
  background-color: var(--bg-accent);
}

/* card-title adds centering */
.card-title::after {
  margin-left: auto;
  margin-right: auto;
}
```

---

## Responsive Behavior

### Breakpoints

**Mobile (< 600px):**
- Single-column layout
- All content centered in middle column
- Image full width of content area
- Text full width below image
- Vertical stack order: Title → Subtitle → Image → Text

**Tablet/Desktop (≥ 600px):**
- Two-column layout within grid
- Image in column 2 (narrower)
- Text spans columns 3-4 (wider)
- Side-by-side layout
- Better use of horizontal space

### Grid Column Allocation

**Mobile grid:**
```css
.main-grid {
  grid-template-columns: minmax(1em, 1fr) minmax(0px, 500px) minmax(1em, 1fr);
  /* Column:              1 (margin)       2 (content)         3 (margin) */
}
```

**Desktop grid:**
```css
@media (min-width: 600px) {
  .main-grid {
    grid-template-columns: minmax(1em, 1fr) repeat(3, minmax(150px, 320px)) minmax(1em, 1fr);
    /* Column:              1 (margin)       2       3       4              5 (margin) */
  }
}
```

---

## Accessibility Considerations

### Current Implementation

✅ **Semantic HTML:** Proper use of `<main>`, `<h1>`, `<h2>` elements
✅ **Heading hierarchy:** Logical flow from h1 to h2
✅ **Alt text:** Descriptive image alt attribute
✅ **Color contrast:** Text colors meet WCAG standards
✅ **Responsive design:** Readable at all screen sizes

### Potential Improvements

- [ ] Add `aria-label` to decorative pseudo-elements (currently decorative-only)
- [ ] Consider `skip to main content` link for keyboard navigation
- [ ] Test with screen readers to verify content flow
- [ ] Ensure focus indicators visible for keyboard navigation
- [ ] Verify color contrast on all text elements

---

## TODOs

**High Priority:**
- [ ] Implement spacing variables from [`spacing-strategy.md`](spacing-strategy.md)
  - Replace `margin: .5em 0 3em` with `var(--text-spacing-*)`
  - Replace `padding: 4em 0` with `var(--spacing-3xl)`
  - Replace `margin-bottom: 1.5em` with `var(--spacing-lg)`
  
**Medium Priority:**
- [ ] Add transition effects to decorative elements
- [ ] Consider adding more images to break up text
- [ ] Test responsive layout at intermediate breakpoints (768px, 1024px)
- [ ] Optimize image size/format for performance

**Low Priority:**
- [ ] Add animation to yellow decorative elements on scroll
- [ ] Consider adding team photos/headshots
- [ ] Add testimonials or client logos section
- [ ] Implement dark mode support

---

## Related Documentation

- **Global Grid System:** See [`homepage-structure.md`](homepage-structure.md) for `.main-grid` details
- **Spacing Strategy:** See [`spacing-strategy.md`](spacing-strategy.md) for consistent spacing variables
- **Header/Navigation:** See [`header-navigation-structure.md`](header-navigation-structure.md) for navigation styling
- **Footer:** See [`footer-structure.md`](footer-structure.md) for footer grid layout
- **Project Conventions:** See [`agents.md`](agents.md) for overall development guidelines

---

**Last Updated:** November 26, 2025
