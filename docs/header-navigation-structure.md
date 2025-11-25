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
    ├── <button class="open-nav-btn" aria-label="Open navigation">
    └── <nav class="header-nav">
        ├── <button class="close-nav-btn" aria-label="Close navigation">
        └── <ul class="nav-list">
            ├── <li class="nav-element">
            │   └── <a href="./index.html" class="nav-link link">
            ├── <li class="nav-element">
            │   └── <a href="./about.html" class="nav-link link">
            └── <li class="nav-element">
                └── <a href="./contact.html" class="nav-link link">
```

### Classes Reference

| Element          | Class(es)              | Purpose                                                  |
| ---------------- | ---------------------- | -------------------------------------------------------- |
| `<header>`       | `.header .main-grid`   | Semantic container for site navigation using global grid |
| `<div>`          | `.header-content`      | Wrapper for logo and navigation, enables flexbox layout  |
| `<a>` (logo)     | `.logo-link`           | Link wrapping the logo with yellow background styling    |
| `<img>`          | `.logo .header-logo`   | Site logo/brand image with responsive sizing             |
| `<button>` (open)| `.open-nav-btn`        | Hamburger button (☰) to open mobile navigation           |
| `<nav>`          | `.header-nav`          | Semantic navigation container (full-screen overlay)      |
| `<nav>` (open)   | `.navigation-open`     | Class added to `.header-nav` to show navigation          |
| `<button>` (close)| `.close-nav-btn`      | Button (×) to close mobile navigation overlay            |
| `<ul>`           | `.nav-list`            | Unordered list containing navigation links, uses flexbox |
| `<li>`           | `.nav-element`         | Individual navigation item wrapper                       |
| `<a>` (nav)      | `.nav-link .link`      | Navigation link with styling and hover states            |

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

**Step 1: Position the Navigation as Full-Screen Overlay (Hidden by Default)**

```css
.header-nav {
  background-color: var(--bg-secondary);
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 100%; /* Hides nav off-screen to the right */
  transform: translateX(0);
  transition: transform 250ms;
}

.navigation-open {
  transform: translateX(-100%); /* Slides nav into view */
}
```

**What each property does:**

1. **`position: fixed;`**
   - **Removes the nav from normal document flow** (it floats above everything)
   - **Stays in the same position** even when you scroll
   - Think of it as a layer that sits on top of your page

2. **`top: 0; right: 0; bottom: 0;`**
   - **Stretches the navigation vertically** to fill full screen height
   - `top: 0` = stick to top of viewport
   - `right: 0` = ensure right edge touches viewport right
   - `bottom: 0` = stick to bottom edge

3. **`left: 100%;`** ⭐ **KEY PROPERTY**
   - **Hides navigation off-screen** by pushing it 100% to the right
   - Navigation is positioned just outside the visible viewport
   - By default, navigation is **hidden** and won't block content

4. **`width: 100%;`**
   - Navigation panel is full viewport width
   - Ensures complete coverage when visible

5. **`transform: translateX(0);`**
   - Initial transform state (no movement)
   - Provides starting point for animation

6. **`transition: transform 250ms;`**
   - **Animates the sliding motion** when navigation opens/closes
   - 250ms = smooth, quick animation (1/4 second)
   - Only animates the `transform` property (performance-friendly)

7. **`.navigation-open` class with `transform: translateX(-100%);`**
   - When JavaScript adds this class, nav **slides into view**
   - `-100%` moves nav left by its full width (brings it on-screen)
   - Combined with `left: 100%`, this positions nav perfectly at `left: 0`

8. **`background-color: var(--bg-secondary);`**
   - Black background covers everything behind it
   - Without this, you'd see content through the overlay

**Why this approach:**
- **Hidden by default:** Navigation doesn't block content on page load
- **Smooth animation:** Transform is GPU-accelerated, performs better than animating `left`
- **Simple toggle:** Single class addition/removal shows/hides navigation
- **Mobile-friendly:** Large touch targets, no cramped menus
- **Visually dramatic:** Slides in from right with smooth animation

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

#### Close Button

**Step 4: Add Close Button for User Convenience**

```css
.close-nav-btn {
  position: absolute;
  border: 0;
  background: 0;
  color: var(--text-accent);
  font-weight: var(--font-weight-bold);
  font-size: 3rem; /* 48px */
  padding: 0.5em;
}
```

**Design decisions:**

1. **`position: absolute;`**

   - Positions close button relative to `.header-nav` (which has `position: fixed`)
   - Allows button to float in corner without affecting flexbox layout
   - By default, will appear in top-left corner

2. **`border: 0; background: 0;`**

   - Removes default button styling
   - Creates minimal, clean button appearance
   - Only the × symbol is visible

3. **`color: var(--text-accent);`**

   - Yellow color makes button stand out
   - Matches brand accent color
   - Clearly visible against black background

4. **Large size (3rem)**
   - Easy to tap on mobile devices
   - Matches navigation link sizing for consistency
   - Meets accessibility touch target guidelines

**HTML structure:**

```html
<nav class="header-nav">
  <button class="close-nav-btn" aria-label="Close navigation">&times;</button>
  <ul class="nav-list">
    <!-- navigation links -->
  </ul>
</nav>
```

#### Hamburger Button (Open Navigation)

**Step 5: Add Hamburger Button to Open Navigation**

```css
/* Currently no specific styling - inherits default button styles */
/* Button positioned in .header-content via flexbox */
```

**HTML structure:**

```html
<div class="header-content">
  <a class="logo-link" href="./index.html">
    <img class="logo header-logo" src="./src/images/logo.svg" />
  </a>
  <button class="open-nav-btn" aria-label="Open navigation">
    &#9776; <!-- HTML entity for hamburger icon ☰ -->
  </button>
</div>
```

**Design decisions:**

1. **HTML entity `&#9776;` for hamburger icon**
   - Creates ☰ symbol without needing icon library
   - Simple, semantic, no dependencies
   - Accessible to screen readers

2. **Positioned in `.header-content`**
   - Sits in normal document flow next to logo
   - Flexbox in `.header-content` handles positioning
   - Always visible (not hidden like navigation)

3. **`aria-label="Open navigation"`**
   - Provides context for screen readers
   - Users understand button purpose even if icon isn't clear

**TODO:** Add CSS styling for `.open-nav-btn` (currently uses default button styles)

#### JavaScript Toggle Functionality

**Step 6: Add JavaScript to Show/Hide Navigation**

```javascript
// Get navigation and button elements
const headerNav = document.querySelector(".header-nav");
const closeNavBtn = document.querySelector(".close-nav-btn");
const openNavBtn = document.querySelector(".open-nav-btn");

// Close navigation when close button clicked
closeNavBtn.addEventListener("click", () => {
  headerNav.classList.remove("navigation-open");
});

// Open navigation when hamburger button clicked
openNavBtn.addEventListener("click", () => {
  headerNav.classList.add("navigation-open");
});
```

**How it works:**

1. **Select DOM elements**
   - `querySelector` finds elements by CSS class
   - Stores references in variables for reuse

2. **Add event listeners**
   - `addEventListener("click", callback)` runs code when button clicked
   - Arrow functions provide clean syntax

3. **Toggle `.navigation-open` class**
   - **Opening:** `classList.add("navigation-open")` triggers transform animation
   - **Closing:** `classList.remove("navigation-open")` reverses animation
   - CSS `transition` property handles smooth sliding

4. **Result:**
   - Click hamburger → navigation slides in from right
   - Click × button → navigation slides out to right
   - No page refresh, smooth user experience

**Why this approach:**
- **Simple and clear:** Two event listeners, easy to understand
- **No complex state management:** Just add/remove one class
- **Leverages CSS:** Animation handled by CSS `transition`, not JavaScript
- **Performant:** Class toggling is fast, transform is GPU-accelerated

### How This All Works Together

**The Big Picture:**

1. **Logo and hamburger button stay in normal position** at top of page (`.header-content` with `display: flex`)
2. **Navigation is hidden off-screen** by default (`left: 100%` pushes it to the right)
3. **Click hamburger button** → JavaScript adds `.navigation-open` class
4. **Navigation slides into view** (`transform: translateX(-100%)` brings it on-screen)
5. **Navigation floats on top** as full-screen overlay (`.header-nav` with `position: fixed`)
6. **Links are centered** in the overlay (`.nav-list` with flexbox centering)
7. **Close button floats in corner** (absolute positioning within fixed nav)
8. **Click × button** → JavaScript removes `.navigation-open` class
9. **Navigation slides out** (returns to `left: 100%` position off-screen)
10. **Large, touch-friendly elements** easy to tap on mobile

**Current state:** ✅ Fully functional mobile navigation with toggle and smooth animation

**Next step:** Add desktop/tablet responsive navigation (horizontal bar instead of overlay)

### Responsive Behavior

**Current State - Mobile (< 600px):**

- ✅ Full-screen navigation overlay with toggle functionality
- ✅ Hamburger button (☰) in header to open navigation
- ✅ Navigation hidden by default (`left: 100%`)
- ✅ Smooth slide-in animation (250ms transform)
- Logo visible at top in normal document flow
- Navigation links centered vertically and horizontally
- Large touch-friendly text (3rem / 48px)
- Links stacked vertically with even spacing
- Close button (×) in top-left corner of navigation overlay
- JavaScript toggle adds/removes `.navigation-open` class

**Planned - Tablet and Desktop (≥ 600px):**

```css
/* TODO: Add media query to change navigation layout */
@media (min-width: 600px) {
  .header-nav {
    position: static; /* Remove overlay, back to normal flow */
    /* Convert to horizontal navigation bar */
  }

  .nav-list {
    flex-direction: row; /* Horizontal instead of vertical */
    height: auto; /* Don't need full height */
    justify-content: flex-end; /* Align to right side */
  }

  .nav-link {
    font-size: 0.875rem; /* Smaller text for horizontal nav (14px) */
    margin-left: 1em; /* Space between links */
  }

  .close-nav-btn {
    display: none; /* Hide close button on desktop */
  }
}
```

**Future enhancements needed:**

- Add hamburger button (☰) to toggle mobile menu visibility
- Hide navigation by default on mobile (add class like `.nav-hidden`)
- Show horizontal navigation bar on tablet/desktop
- Adjust logo sizing for larger screens

### Common Pitfalls & Troubleshooting

**Problem:** "Navigation covers my logo!"

- **Cause:** Both navigation and logo are trying to occupy same space
- **Solution:** Logo is in `.header-content` (normal flow), navigation is in `.header-nav` (fixed overlay on top)
- **Check:** Make sure logo is NOT inside `.header-nav`

**Problem:** "Links aren't centered!"

- **Cause:** `.nav-list` doesn't have `height: 100%`
- **Solution:** Flexbox needs height to distribute items vertically
- **Check:** Confirm `height: 100%` on `.nav-list`

**Problem:** "Navigation doesn't fill screen!"

- **Cause:** Missing one of the four edge positions (top, right, bottom, left)
- **Solution:** All four must be set to `0` for full-screen coverage
- **Check:** Verify `top: 0; right: 0; bottom: 0; left: 0;`

**Problem:** "I can see content behind navigation!"

- **Cause:** Missing `background-color` on `.header-nav`
- **Solution:** Add solid background color to overlay
- **Check:** Confirm `background-color: var(--bg-secondary);`

**Problem:** "Close button isn't visible!"

- **Cause:** Close button might be hidden behind nav-list or have wrong color
- **Solution:** Ensure `position: absolute` on button and bright color
- **Check:** Verify yellow color (`var(--text-accent)`) and absolute positioning

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

6. **Close button with minimal styling:**

   - Yellow × symbol stands out against black background
   - Absolute positioning keeps it in corner without disrupting flexbox
   - Large size (3rem) makes it easy to tap

7. **Hamburger button for toggle control:**

   - HTML entity `&#9776;` (☰) provides icon without dependencies
   - Positioned in header via flexbox (always visible)
   - Opens navigation when clicked

8. **Hidden by default with smooth animation:**

   - `left: 100%` hides navigation off-screen initially
   - `transform` animation is GPU-accelerated (better performance)
   - 250ms transition provides quick, smooth slide effect
   - Single class toggle (`.navigation-open`) controls visibility

9. **Semantic HTML:**
   - `<header>` and `<nav>` elements improve accessibility and SEO
   - Screen readers understand document structure
   - `aria-label` on both buttons provides context for assistive technology
   - HTML entities for icons maintain accessibility

### TODOs

**High Priority (Current Mobile Navigation):**
- [x] ~~Create full-screen mobile navigation overlay~~ ✓ Completed
- [x] ~~Add close button (×) inside navigation overlay~~ ✓ Completed
- [x] ~~Add hamburger button (☰) to header for toggle control~~ ✓ Completed
- [x] ~~Add JavaScript to show/hide `.header-nav` (toggle class)~~ ✓ Completed
- [x] ~~Hide navigation by default~~ ✓ Completed (`left: 100%`)
- [x] ~~Add smooth transition animation when opening/closing menu~~ ✓ Completed (250ms transform)
- [x] ~~Connect close button to JavaScript toggle function~~ ✓ Completed
- [ ] **Add CSS styling for `.open-nav-btn`** (currently uses default styles)
- [ ] Add fade-in effect for navigation links (stagger animation)
- [ ] Close navigation when clicking outside overlay
- [ ] Close navigation when pressing Escape key

**Medium Priority (Responsive Enhancement):**
- [ ] Create horizontal desktop navigation (600px+ breakpoint)
- [ ] Add media query to convert full-screen overlay to horizontal bar on tablet/desktop
- [ ] Hide hamburger and close buttons on desktop navigation
- [ ] Adjust logo sizing for larger screens
- [ ] Test navigation at different breakpoints (600px, 768px, 1024px)

**Low Priority (Polish & Accessibility):**
- [ ] Add active state styling to indicate current page
- [ ] Test keyboard navigation (Tab, Enter, Esc to close menu)
- [ ] Test with screen readers for accessibility compliance
- [ ] Add focus trap in mobile menu (prevent tabbing to content behind overlay)
- [ ] Consider adding backdrop blur effect to navigation overlay
- [ ] Add smooth scroll behavior when navigating to anchor links
- [ ] Test on actual mobile devices for touch interaction
- [ ] Add hover effect to hamburger and close buttons for visual feedback
- [ ] Improve hamburger button styling (size, color, positioning)

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
