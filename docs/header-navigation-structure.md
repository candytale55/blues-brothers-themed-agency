# Header/Navigation Structure Documentation

This document covers the structure and styling of the header and navigation bar that appears on all pages.

---

## Header Section

### Structure Diagram

```
<header>
└── <nav class="main-nav main-grid">
    ├── <div class="logo-container">
    │   └── <a href="./index.html">
    │       └── <img class="logo" src="./src/images/logo.svg">
    └── <ul class="nav-list">
        ├── <li class="nav-element">
        │   └── <a href="./index.html" class="nav-link link">
        ├── <li class="nav-element">
        │   └── <a href="./about.html" class="nav-link link">
        └── <li class="nav-element">
            └── <a href="./contact.html" class="nav-link link">
```

### Classes Reference

| Element      | Class(es)              | Purpose                                       |
| ------------ | ---------------------- | --------------------------------------------- |
| `<header>`   | (none)                 | Semantic container for site navigation        |
| `<nav>`      | `.main-nav .main-grid` | Navigation container using global grid layout |
| `<div>`      | `.logo-container`      | Wrapper for logo image and link               |
| `<a>` (logo) | (none)                 | Link wrapping the logo image                  |
| `<img>`      | `.logo`                | Site logo/brand image                         |
| `<ul>`       | `.nav-list`            | Unordered list containing navigation links    |
| `<li>`       | `.nav-element`         | Individual navigation item wrapper            |
| `<a>` (nav)  | `.nav-link .link`      | Navigation link with styling                  |

### Implementation Notes

#### Layout Strategy

The navigation uses the **global grid layout** (`.main-grid` class) for consistent centering with other page sections:

```css
.main-nav {
  /* Uses .main-grid for three-column layout */
}
```

**Content placement:**

- Logo and navigation links placed within the middle content column (max 500px width)
- Flexible margins on left and right ensure content never touches viewport edges
- Uses the same grid structure as hero, info, and footer sections

#### Navigation Styling

**Logo:**

- SVG format for crisp display at any size
- Wrapped in link for homepage navigation
- Alt text provides accessibility

**Navigation Links:**

- Horizontal list on larger viewports
- Semantic `<nav>` element for accessibility
- Links styled consistently with site theme
- Hover/focus states for user feedback

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
