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

The footer uses the **global grid layout** (`.main-grid` class) with **CSS Grid Template Areas** for semantic positioning:

**Mobile (< 600px):**
```css
.footer {
  background-color: var(--bg-footer);
  padding: 4em 0;
  text-align: center;
  grid-template-areas: 
    ". social-media ."
    ". footer-main  .";
}

.footer-main-container {
  grid-area: footer-main;
}

.rss-links-list {
  grid-area: social-media;
}
```

#### Social Media Links

**Mobile:**
```css
.rss-links-list {
  grid-area: social-media;
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
}

.rss-link {
  font-size: 1.5rem; /* 24px */
  color: var(--text-title-color);
  margin: 0 .5em;
}
```

**Tablet and up (≥ 600px):**
```css
@media (min-width: 600px) {
  .rss-links-list {
    justify-content: flex-end;
  }
}
```

**Hover/Focus states:**
```css
.rss-link:hover,
.rss-link:focus {
  color: var(--btn-hover-text);
}
```

**Design approach:**

- **Flexbox layout:** Horizontal row of social icons
- **Mobile alignment:** Centered with `justify-content: center`
- **Desktop alignment:** Right-aligned with `justify-content: flex-end`
- **Icon spacing:** `margin: 0 .5em` creates horizontal space between icons (replaces `gap`)
- **Grid positioning:** Positioned using `grid-area: social-media` instead of `order: -1`
- **Large touch targets:** `1.5rem` (24px) icon size meets accessibility guidelines
- **Interactive states:** Hover/focus changes color to medium gray (`var(--btn-hover-text)`)
- **Font Awesome icons:** Using CDN-hosted Font Awesome 7.0.1 for brand icons
- Social media icons occupy one column (right side)
- Left-aligned text for main content (`text-align: left`)
- Right-aligned social icons (`justify-content: flex-end`)
- Creates professional, balanced desktop footer layout

**Why Grid Template Areas:**
- **Semantic naming:** `social-media` and `footer-main` are more readable than numeric grid positions
- **Easy reorganization:** Change layout by simply rearranging area names in template
- **Responsive flexibility:** Restructure entire footer layout between mobile and desktop without changing HTML
- **Maintainability:** Clear visual representation of layout structure in CSS

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

#### Typography & Styling

```css
.footer p {
  margin-bottom: 1.25em;
}

.copyright-fineprint {
  font-size: 0.875rem; /* 14px */
}

.footer .logo {
  margin: 0 0 1em 0;
}

.footer p,
.footer .logo {
  opacity: 0.9;
}
```

**Styling details:**

- **Reduced opacity:** `0.9` creates subtle visual hierarchy (content less prominent than main sections)
- **Smaller copyright:** `0.875rem` (14px) for less visual weight
- **Logo spacing:** Bottom margin only (`0 0 1em 0`) creates space below logo
- **Consistent rhythm:** Bottom margins create vertical spacing between elements
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
2. **Grid Template Areas:** Named grid areas provide semantic, readable layout structure that's easy to reorganize
3. **Responsive restructure:** Footer transforms from centered vertical stack (mobile) to horizontal split layout (desktop)
4. **Font Awesome CDN:** Using external icon library reduces file size and provides consistent, recognizable brand icons
5. **Flexible alignment:** Center-aligned on mobile, left/right split on desktop for professional appearance
6. **Light background:** Subtle visual separation distinguishes footer from main content
7. **Opacity reduction:** Creates subtle hierarchy without requiring separate color variables

### Responsive Behavior

**Breakpoint: 600px**

**Mobile (< 600px):**
- Vertical stacked layout (2 rows)
- Social icons above main content
- All content center-aligned
### TODOs

- [ ] Replace `#` placeholder links with actual social media URLs
- [ ] Add JavaScript to dynamically update `.copy-year` to current year
- [ ] Consider adding aria-labels to social media links for better accessibility
- [ ] Test social icon visibility on different backgrounds
- [ ] Test layout with different amounts of footer text content
- [ ] Consider adjusting grid-template-areas proportions on wider screens (1024px+)
- [ ] Consider fallback if Font Awesome CDN fails to load
- [ ] Add spacing between media query at 600px - might need adjustment at standard 768px tablet breakpoint
- Creates balanced desktop footer with clear content separation

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
