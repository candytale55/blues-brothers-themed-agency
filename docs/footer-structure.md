# Footer Structure Documentation

This document covers the structure and styling of the footer section that appears on all pages.

---

## Footer Section

### Structure Diagram

```
<footer class="footer main-grid">
├── <div class="footer-main-container">
│   ├── <img class="logo" src="./src/images/logo.svg">
│   ├── <p> (company description)
│   └── <p class="copyright-fineprint">
│       └── <span class="copy-year">
└── <ul class="rss-links-list">
    ├── <li class="rss-item">
    │   └── <a href="#" class="link rss-link">
    │       └── <i class="fa-brands fa-facebook-f">
    ├── <li class="rss-item">
    │   └── <a href="#" class="link rss-link">
    │       └── <i class="fa-brands fa-tiktok">
    ├── <li class="rss-item">
    │   └── <a href="#" class="link rss-link">
    │       └── <i class="fa-brands fa-youtube">
    └── <li class="rss-item">
        └── <a href="#" class="link rss-link">
            └── <i class="fa-brands fa-square-instagram">
```

### Classes Reference

| Element    | Class(es)                | Purpose                                                              |
| ---------- | ------------------------ | -------------------------------------------------------------------- |
| `<footer>` | `.footer .main-grid`     | Footer container with light gray background; uses global grid layout |
| `<div>`    | `.footer-main-container` | Container for logo, description text, and copyright                  |
| `<img>`    | `.logo`                  | Site logo/brand image (same as header)                               |
| `<p>`      | (none)                   | Company description paragraph                                        |
| `<p>`      | `.copyright-fineprint`   | Copyright notice with smaller font size                              |
| `<span>`   | `.copy-year`             | Year in copyright (can be updated dynamically)                       |
| `<ul>`     | `.rss-links-list`        | Unordered list containing social media links                         |
| `<li>`     | `.rss-item`              | Individual social media link wrapper                                 |
| `<a>`      | `.link .rss-link`        | Social media link with icon                                          |
| `<i>`      | `.fa-brands .fa-*`       | Font Awesome brand icons for social media                            |

### Implementation Notes

#### Layout Strategy

The footer uses the **global grid layout** (`.main-grid` class) for consistent content width:

```css
.footer {
  background-color: var(--bg-footer);
  padding: 4em 0;
  text-align: center;
}

.footer-main-container,
.rss-links-list {
  grid-column: 2 / -2;
}
```

**Key features:**

- Both main container and social links placed in middle column (max 500px)
- Light gray background (`var(--bg-footer)`) for visual separation from main content
- Center text alignment for balanced, symmetric layout
- Consistent vertical padding (`4em`) matches other sections

#### Social Media Links

```css
.rss-links-list {
  order: -1; /* Move social media icons to the top of the footer */
  display: flex;
  justify-content: center;
  gap: 1.5em;
  margin-bottom: 2em;
}

.rss-link {
  font-size: 1.5rem; /* 24px */
  color: var(--text-title-color);
}

.rss-link:hover,
.rss-link:focus {
  color: var(--btn-hover-text);
}
```

**Design approach:**

- **Flexbox layout:** Horizontal row of social icons with centered alignment
- **Visual reordering:** `order: -1` moves social links above main content in visual display (despite HTML order)
- **Generous spacing:** `gap: 1.5em` creates comfortable space between clickable icons
- **Large touch targets:** `1.5rem` (24px) icon size meets accessibility guidelines
- **Interactive states:** Hover/focus changes color for user feedback
- **Font Awesome icons:** Using CDN-hosted Font Awesome 7.0.1 for brand icons

#### Typography & Styling

```css
.footer p {
  margin-bottom: 1.25em;
}

.copyright-fineprint {
  font-size: 0.875rem; /* 14px */
}

.footer .logo {
  margin: 1em 0;
}

.footer p,
.footer .logo {
  opacity: 0.9;
}
```

**Styling details:**

- **Reduced opacity:** `0.9` creates subtle visual hierarchy (content less prominent than main sections)
- **Smaller copyright:** `0.875rem` (14px) for less visual weight
- **Logo spacing:** Vertical margins separate logo from surrounding text
- **Consistent rhythm:** Bottom margins create vertical spacing between elements

### Design Decisions

1. **Global grid:** Reuses `.main-grid` class for width consistency with hero and info sections
2. **Visual reordering:** CSS `order` property places social icons at top despite HTML source order (maintains logical document structure for screen readers)
3. **Font Awesome CDN:** Using external icon library reduces file size and provides consistent, recognizable brand icons
4. **Center alignment:** Appropriate for footer content; creates balanced, symmetric layout
5. **Light background:** Subtle visual separation distinguishes footer from main content
6. **Opacity reduction:** Creates subtle hierarchy without requiring separate color variables

### External Dependencies

**Font Awesome 7.0.1:**

- **CDN:** `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css`
- **Documentation:** https://fontawesome.com/
- **CDN Info:** https://cdnjs.com/libraries/font-awesome
- **Icons used:** Facebook, TikTok, YouTube, Instagram

### TODOs

- [ ] Replace `#` placeholder links with actual social media URLs
- [ ] Add JavaScript to dynamically update `.copy-year` to current year
- [ ] Consider adding aria-labels to social media links for better accessibility
- [ ] Test social icon visibility on different backgrounds
- [ ] Add media query to adjust social icon size on larger viewports
- [ ] Consider fallback if Font Awesome CDN fails to load
