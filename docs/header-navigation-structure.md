# Header/Navigation Structure Documentation

This document covers the structure and styling of the header and navigation bar that appears on all pages.

---

## Header Section

### Structure Diagram

```
<header class="header main-grid">
└── <div class="header-content">
    ├── <a class="logo-link" href="./index.html">
    │   └── <img class="logo header-logo" src="./src/images/logo.svg">
    └── <nav class="header-nav">
        └── <ul class="nav-list">
            ├── <li class="nav-element">
            │   └── <a href="./index.html" class="nav-link link">
            ├── <li class="nav-element">
            │   └── <a href="./about.html" class="nav-link link">
            └── <li class="nav-element">
                └── <a href="./contact.html" class="nav-link link">
```

### Classes Reference

| Element      | Class(es)            | Purpose                                                  |
| ------------ | -------------------- | -------------------------------------------------------- |
| `<header>`   | `.header .main-grid` | Semantic container for site navigation using global grid |
| `<div>`      | `.header-content`    | Wrapper for logo and navigation, enables flexbox layout  |
| `<a>` (logo) | `.logo-link`         | Link wrapping the logo with yellow background styling    |
| `<img>`      | `.logo .header-logo` | Site logo/brand image with responsive sizing             |
| `<nav>`      | `.header-nav`        | Semantic navigation container                            |
| `<ul>`       | `.nav-list`          | Unordered list containing navigation links, uses flexbox |
| `<li>`       | `.nav-element`       | Individual navigation item wrapper                       |
| `<a>` (nav)  | `.nav-link .link`    | Navigation link with styling and hover states            |

### Implementation Notes

#### Layout Strategy

The header uses a **two-level layout approach**:

1. **Global grid (`.main-grid`)** on `<header>` for horizontal centering
2. **Flexbox layout** on `.header-content` for logo and navigation positioning

```css
/* Header spans full width with global grid */
.header {
  background-color: var(--bg-secondary); /* Black background */
}

/* Content wrapper uses flexbox for horizontal layout */
.header-content {
  grid-column: 2 / -2; /* Placed in middle content column */
  display: flex;
  justify-content: space-between; /* Logo left, nav right */
  align-items: flex-end; /* Aligns logo bottom with nav baseline */
}
```

**Why this structure:**

- `.main-grid` provides consistent horizontal margins with other sections
- Flexbox in `.header-content` handles logo/nav positioning without additional grid complexity
- `align-items: flex-end` ensures logo container aligns properly with navigation links

#### Logo Styling

**Yellow background container:**

````css
### Responsive Behavior

**Mobile (375px baseline):**
- Logo and navigation in single row via flexbox
- Logo on left, navigation links on right
- Compact spacing appropriate for smaller screens

**Tablet and Desktop (600px+):**
```css
@media (min-width: 600px) {
  .logo-link {
    padding: 2.5em 0 0 0; /* Increased height */
  }

  .logo-link img {
    max-height: 3.5em; /* Slightly larger logo (~56px) */
  }
}
````

- More generous vertical spacing
- Larger logo for better visibility on larger screens
- Navigation maintains horizontal layout

### Design Decisions

1. **Nested layout approach:** Global grid for horizontal centering, flexbox for logo/nav positioning keeps code clean and maintainable

2. **Yellow logo container:** Distinctive visual element that extends full nav height, creating strong brand presence

3. **Flexible logo sizing:** Using `height: 100%` with `max-height` cap ensures logo scales appropriately across all screen sizes

4. **Semantic HTML:** `<header>` and `<nav>` elements improve accessibility and SEO

5. **Black background:** High contrast with white text and yellow logo ensures readability

### TODOs

- [ ] Test responsive navigation on mobile devices (consider hamburger menu for very small screens)
- [ ] Add active state styling to indicate current page (e.g., underline or color change)
- [ ] Test keyboard navigation and ensure proper focus indicators
- [ ] Consider sticky/fixed positioning for navigation bar on scroll
- [ ] Add smooth scroll behavior when navigating to anchor links
- [ ] Test with screen readers for accessibility compliance
- [ ] Consider logo animation on page load or hover
- [ ] Add transition effects for hover states on navigation links
      display: block; /_ Prevents inline spacing issues _/
      }

````

**Key features:**
- Yellow background extends full navigation height via padding
- Logo scales proportionally at any viewport size
- `max-height` prevents logo from becoming too large
- `display: block` eliminates unwanted inline spacing

#### Navigation Links

**Horizontal list layout:**
```css
.nav-list {
  display: flex;
  list-style: none; /* Removes bullet points */
  margin-left: auto; /* Pushes nav to right side */
}

.nav-link {
  color: var(--text-secondary); /* White text */
  font-weight: var(--font-weight-bold);
  padding: 0.5em; /* Clickable area */
  margin-left: 1em; /* Spacing between links */
  text-decoration: none;
}
````

**Interactive states:**

- Hover/focus states provide visual feedback
- Bold font weight improves readability on dark background
- Adequate padding ensures accessible touch targets (minimum 44px)

### Design Decisions

1. **Global grid:** Reuses `.main-grid` class for consistency across all sections
2. **SVG logo:** Scalable vector format ensures clarity on all screen sizes
3. **Semantic HTML:** Uses `<header>` and `<nav>` for better accessibility and SEO
4. **Link wrapper:** Logo wrapped in anchor tag for intuitive homepage navigation

### TODOs

- [ ] Add CSS styling for `.main-nav` (currently inheriting from global styles)
- [ ] Create responsive navigation menu for mobile (hamburger menu)
- [ ] Add active state styling to indicate current page
- [ ] Test keyboard navigation and screen reader compatibility
- [ ] Consider sticky/fixed positioning for navigation bar
