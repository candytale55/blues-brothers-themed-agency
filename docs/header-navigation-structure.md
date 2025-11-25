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

The header uses a **two-level layout approach** with a **full-screen mobile navigation overlay**:

1. **Global grid (`.main-grid`)** on `<header>` for horizontal centering
2. **Flexbox layout** on `.header-content` for logo positioning
3. **Fixed positioning** on `.header-nav` for full-screen mobile menu

**Step 1: Header Container**

```css
header {
  background-color: var(--bg-secondary); /* Black background */
}
```

- Sets black background for entire header
- Uses global `.main-grid` class (inherited) for consistent page margins

**Step 2: Header Content Wrapper**

```css
.header-content {
  display: flex;
  grid-column: 2 / -2; /* Placed in middle content column */
}
```

- `display: flex` allows logo to sit in normal document flow
- `grid-column: 2 / -2` places content in center column of global grid
- Logo appears in its natural position (NOT fixed)

**Why this structure:**

- `.main-grid` provides consistent horizontal margins with other sections
- Flexbox in `.header-content` keeps logo in normal flow (not floating)
- Logo stays in position while navigation overlays on top

#### Logo Styling

**Yellow background container:**

```css
.logo-link {
  background-color: var(--bg-accent); /* Yellow background */
  padding-top: 2em; /* Top padding creates height */
}
```

**Key features:**

- Yellow background creates distinctive brand element
- `padding-top: 2em` creates vertical space (no bottom/left/right padding)
- Logo stays in normal document flow (not affected by fixed navigation)

#### Mobile Navigation Overlay (Full-Screen)

This is the **key part** for understanding mobile navigation. The navigation creates a **full-screen overlay** that covers the entire viewport.

**Step-by-Step Breakdown:**

**Step 1: Position the Navigation as Full-Screen Overlay**

```css
.header-nav {
  position: fixed;
  background-color: var(--bg-secondary);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
```

**What each property does:**

1. **`position: fixed;`**

   - **Removes the nav from normal document flow** (it floats above everything)
   - **Stays in the same position** even when you scroll
   - Think of it as a layer that sits on top of your page

2. **`top: 0; right: 0; bottom: 0; left: 0;`**

   - **Stretches the navigation to fill the entire screen** (all four edges at 0)
   - `top: 0` = stick to top of viewport
   - `right: 0` = stick to right edge
   - `bottom: 0` = stick to bottom edge
   - `left: 0` = stick to left edge
   - **Result:** Navigation covers 100% of screen width and height

3. **`background-color: var(--bg-secondary);`**
   - Black background covers everything behind it
   - Without this, you'd see content through the overlay

**Why this approach:**

- **Full-screen overlay is easier** than trying to position menu in corner
- **Simple to hide/show** with JavaScript (we'll add this with hamburger button)
- **Mobile-friendly:** Large touch targets, no cramped menus
- **Visually dramatic:** Clear focus on navigation when open

**Step 2: Center Navigation Links Vertically and Horizontally**

```css
.nav-list {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
```

**What each property does:**

1. **`height: 100%;`**

   - Makes the list fill the entire height of `.header-nav`
   - Since `.header-nav` is full-screen, the list is also full-screen height
   - **Important:** Without this, `justify-content` wouldn't have space to work with

2. **`display: flex;`**

   - Activates flexbox layout for positioning children (the `<li>` elements)

3. **`flex-direction: column;`**

   - **Stacks navigation links vertically** (top to bottom)
   - Default is `row` (left to right), but we want vertical for mobile

4. **`justify-content: space-around;`**

   - **Distributes links evenly** with space above, between, and below
   - Creates balanced spacing without manual margins
   - Links are spread out across full screen height

5. **`align-items: center;`**
   - **Centers links horizontally** (since we're in column direction)
   - Each link is centered in the middle of the screen width

**Visual result:** Links are perfectly centered both horizontally and vertically, with equal spacing between them.

**Step 3: Style Navigation Links for Touch-Friendly Mobile**

```css
.nav-link {
  color: var(--white);
  font-size: 3rem; /* 48px */
  font-weight: var(--font-weight-bold);
  text-transform: lowercase;
}

.nav-link:hover,
.nav-link:focus {
  color: var(--text-accent);
  text-decoration: none;
}
```

**Design decisions:**

1. **`font-size: 3rem;` (48px)**

   - **Large text for easy tapping** on mobile devices
   - Minimum touch target should be 44px × 44px (accessibility guideline)
   - Large text is dramatic and easy to read

2. **`text-transform: lowercase;`**

   - Makes all links lowercase for modern, clean aesthetic
   - Consistent styling regardless of HTML capitalization

3. **`color: var(--text-accent);` on hover/focus**
   - Changes to yellow on interaction
   - Provides clear visual feedback
   - `text-decoration: none` removes underline (cleaner look)

### How This All Works Together

**The Big Picture:**

1. **Logo stays in normal position** at top of page (`.header-content` with `display: flex`)
2. **Navigation floats on top** as full-screen overlay (`.header-nav` with `position: fixed`)
3. **Links are centered** in the overlay (`.nav-list` with flexbox centering)
4. **Large, touch-friendly links** easy to tap on mobile

**Current state:** Navigation is always visible (no toggle yet)

**Next step (TODO):** Add hamburger button to show/hide `.header-nav` with JavaScript

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
```

- More generous vertical spacing
- Larger logo for better visibility on larger screens
- Navigation maintains horizontal layout

### Design Decisions

1. **Full-screen mobile navigation overlay:**

   - **Easier than corner menus:** Simpler positioning with `position: fixed` and all edges at 0
   - **Mobile-first approach:** Large touch targets, dramatic visual focus
   - **Easy to toggle:** Single class can show/hide entire overlay with JavaScript

2. **`position: fixed` instead of `absolute`:**

   - Fixed stays in place when scrolling (better user experience)
   - Absolute would scroll with content (confusing on mobile)
   - Fixed ensures navigation always accessible

3. **Flexbox for centering:**

   - `justify-content: space-around` evenly distributes links without manual margins
   - `align-items: center` horizontally centers without complicated calculations
   - `height: 100%` gives flexbox room to spread items vertically

4. **Large text (3rem / 48px):**

   - Meets accessibility guidelines (44px minimum touch target)
   - Dramatic, modern aesthetic
   - Easy to read and tap on small screens

5. **Yellow logo container:**

   - Distinctive visual element that stays visible when nav overlay opens
   - Strong brand presence
   - High contrast with black background

6. **Semantic HTML:**
   - `<header>` and `<nav>` elements improve accessibility and SEO
   - Screen readers understand document structure

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
