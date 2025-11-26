# Spacing Strategy Documentation

This document outlines the consistent spacing system used throughout the project using CSS variables.

---

## Overview

The spacing system is based on a **single base unit (`1rem`)** with all spacing values derived as multiples of this unit. This creates visual harmony, scalability, and maintainability.

---

## Spacing Scale

### Base Unit

```css
--spacing-unit: 1rem; /* 16px at default font size */
```

All spacing derives from this base unit, ensuring proportional relationships across the entire site.

### Scale Definitions

| Variable        | Calculation   | Result        | Use Case                     |
| --------------- | ------------- | ------------- | ---------------------------- |
| `--spacing-xs`  | `0.25 × base` | 4px / 0.25rem | Micro spacing, tight layouts |
| `--spacing-sm`  | `0.5 × base`  | 8px / 0.5rem  | Small gaps, inline elements  |
| `--spacing-md`  | `1 × base`    | 16px / 1rem   | Standard spacing             |
| `--spacing-lg`  | `1.5 × base`  | 24px / 1.5rem | Between related content      |
| `--spacing-xl`  | `2 × base`    | 32px / 2rem   | Major component spacing      |
| `--spacing-2xl` | `3 × base`    | 48px / 3rem   | Section spacing              |
| `--spacing-3xl` | `4 × base`    | 64px / 4rem   | Large section spacing        |
| `--spacing-4xl` | `6 × base`    | 96px / 6rem   | Hero/major divisions         |

---

## Semantic Spacing Variables

These purpose-driven variables make code self-documenting and easier to maintain.

### Text Spacing

```css
/* Vertical rhythm for text elements */
--text-spacing-paragraph: var(
  --spacing-lg
); /* 24px - Space between paragraphs */
--text-spacing-heading: var(--spacing-xl); /* 32px - Space after headings */
--text-spacing-section: var(
  --spacing-3xl
); /* 64px - Space between major sections */
```

### Container Padding

```css
/* Responsive container padding */
--container-padding-mobile: var(--spacing-md); /* 16px */
--container-padding-tablet: var(--spacing-xl); /* 32px */
--container-padding-desktop: var(--spacing-3xl); /* 64px */
```

### Component Spacing

```css
/* Card/component spacing */
--card-padding: var(--spacing-lg); /* 24px - Internal card padding */
--card-gap: var(--spacing-xl); /* 32px - Space between cards */

/* Button spacing */
--button-padding-vertical: var(--spacing-sm); /* 8px */
--button-padding-horizontal: var(--spacing-lg); /* 24px */
--button-gap: var(--spacing-md); /* 16px - Space around buttons */
```

---

## Implementation in `variables.css`

Add these to your `:root` declaration:

```css
:root {
  /* ...existing variables... */

  /* ========== SPACING SCALE ========== */
  /* Base spacing unit - all spacing derives from this */
  --spacing-unit: 1rem; /* 16px at default font size */

  /* Micro spacing - for tight layouts, inline elements */
  --spacing-xs: calc(var(--spacing-unit) * 0.25); /* 4px / 0.25rem */
  --spacing-sm: calc(var(--spacing-unit) * 0.5); /* 8px / 0.5rem */

  /* Standard spacing - most common use cases */
  --spacing-md: var(--spacing-unit); /* 16px / 1rem */
  --spacing-lg: calc(var(--spacing-unit) * 1.5); /* 24px / 1.5rem */
  --spacing-xl: calc(var(--spacing-unit) * 2); /* 32px / 2rem */

  /* Section spacing - for major layout divisions */
  --spacing-2xl: calc(var(--spacing-unit) * 3); /* 48px / 3rem */
  --spacing-3xl: calc(var(--spacing-unit) * 4); /* 64px / 4rem */
  --spacing-4xl: calc(var(--spacing-unit) * 6); /* 96px / 6rem */

  /* ========== COMPONENT-SPECIFIC SPACING ========== */
  /* Vertical rhythm for text elements */
  --text-spacing-paragraph: var(--spacing-lg); /* Space between paragraphs */
  --text-spacing-heading: var(--spacing-xl); /* Space after headings */
  --text-spacing-section: var(--spacing-3xl); /* Space between major sections */

  /* Container padding */
  --container-padding-mobile: var(--spacing-md);
  --container-padding-tablet: var(--spacing-xl);
  --container-padding-desktop: var(--spacing-3xl);

  /* Card/component spacing */
  --card-padding: var(--spacing-lg);
  --card-gap: var(--spacing-xl);

  /* Button spacing */
  --button-padding-vertical: var(--spacing-sm);
  --button-padding-horizontal: var(--spacing-lg);
  --button-gap: var(--spacing-md);
}
```

---

## Usage Guidelines

### When to Use Each Spacing Size

#### Micro Spacing (`xs`, `sm`)

- Between inline elements (icons + text)
- Between form labels and inputs
- Tight component spacing
- Social media icon gaps

**Example:**

```css
.rss-link {
  margin: 0 var(--spacing-sm); /* 8px between social icons */
}
```

#### Standard Spacing (`md`, `lg`, `xl`)

- Paragraph spacing
- Between related content
- Component internal padding
- Between list items
- Heading margins

**Example:**

```css
p {
  margin-bottom: var(--text-spacing-paragraph); /* 24px */
}

.card-title {
  margin-bottom: var(--text-spacing-heading); /* 32px */
}
```

#### Section Spacing (`2xl`, `3xl`, `4xl`)

- Section padding (top/bottom)
- Between major content blocks
- Hero section spacing
- Page-level vertical rhythm

**Example:**

```css
section {
  padding: var(--spacing-3xl) 0; /* 64px top/bottom */
}

.hero {
  padding: var(--spacing-4xl) 0; /* 96px top/bottom */
}
```

---

## Margin vs Padding Decision Tree

### Use MARGIN When:

- ✅ Creating space **BETWEEN** elements
- ✅ Space should collapse (adjacent margins collapse)
- ✅ External spacing that relates to layout
- ✅ Spacing can be removed with `:last-child`

**Example:**

```css
.info-card {
  margin-bottom: var(--card-gap); /* Space between cards */
}

.info-card:last-child {
  margin-bottom: 0; /* Remove double spacing */
}
```

### Use PADDING When:

- ✅ Creating space **INSIDE** elements
- ✅ Space should never collapse
- ✅ Background/border should extend into the space
- ✅ Creating clickable area around content

**Example:**

```css
.info-card {
  padding: var(--card-padding); /* Internal spacing */
  background-color: var(--bg-light); /* Padding area has background */
}
```

---

## Typography Spacing Patterns

### Consistent Vertical Rhythm

```css
/* Remove default margins, add consistent spacing */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: var(--text-spacing-heading); /* 32px */
  margin-top: 0;
}

/* More space above headings when they follow content */
* + h1,
* + h2,
* + h3 {
  margin-top: var(--text-spacing-section); /* 64px */
}

/* Paragraph spacing for readability */
p {
  margin-bottom: var(--text-spacing-paragraph); /* 24px */
}

/* Remove bottom margin from last child to prevent double spacing */
p:last-child {
  margin-bottom: 0;
}
```

### List Spacing

```css
ul,
ol {
  margin-bottom: var(--text-spacing-paragraph); /* 24px */
  padding-left: var(--spacing-xl); /* 32px indent */
}

/* Space between list items */
li + li {
  margin-top: var(--spacing-sm); /* 8px */
}
```

### Image Spacing

```css
img {
  max-width: 100%;
  display: block;
  height: auto;
  margin-bottom: var(--text-spacing-paragraph); /* 24px */
}

/* Remove margin from images that are last children */
img:last-child {
  margin-bottom: 0;
}
```

---

## Section-Specific Examples

### Hero Section

```css
.hero {
  padding: var(--spacing-4xl) 0 var(--spacing-3xl); /* 96px top, 64px bottom */
}

.hero-title {
  margin-bottom: var(--spacing-lg); /* 24px */
}

.hero-btn {
  margin-top: var(--button-gap); /* 16px */
}

@media (min-width: 600px) {
  .hero {
    padding: calc(var(--spacing-4xl) * 1.5) 0 var(--spacing-4xl); /* Increase on larger screens */
  }
}
```

### Info Section

```css
.info {
  padding: var(--spacing-3xl) 0; /* 64px top/bottom */
  text-align: center;
}

.info-card {
  margin-bottom: var(--spacing-xl); /* 32px between cards */
}

.card-title {
  margin-bottom: var(--text-spacing-heading); /* 32px */
}
```

### Footer Section

```css
.footer {
  padding: var(--spacing-3xl) 0; /* 64px top/bottom */
}

.footer p {
  margin-bottom: var(--text-spacing-paragraph); /* 24px */
}

.footer .logo {
  margin: 0 0 var(--spacing-lg) 0; /* 24px bottom */
}

.rss-links-list {
  margin-bottom: var(--spacing-xl); /* 32px */
}

.rss-link {
  margin: 0 var(--spacing-sm); /* 8px horizontal spacing */
}
```

### About Page

```css
.main-template {
  padding: var(--spacing-3xl) 0; /* 64px top/bottom */
}

.page-title {
  font-size: 3rem;
  margin-bottom: var(--spacing-xl); /* 32px */
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-2xl); /* 48px */
}
```

---

## Complete Card Component Example

```css
/* Card with consistent spacing system */
.info-card {
  /* Internal spacing (padding) */
  padding: var(--card-padding); /* 24px all sides */

  /* External spacing (margin) */
  margin-bottom: var(--card-gap); /* 32px below */

  /* Background makes padding visible */
  background-color: var(--bg-light);
  border-radius: var(--border-radius-md);
}

.card-title {
  /* Space after title */
  margin-bottom: var(--text-spacing-heading); /* 32px */
}

.card-content p {
  /* Space between paragraphs */
  margin-bottom: var(--text-spacing-paragraph); /* 24px */
}

.card-content p:last-child {
  /* Remove double spacing at end */
  margin-bottom: 0;
}
```

---

## Responsive Spacing

### Mobile-First Approach

```css
/* Mobile (default) */
section {
  padding: var(--spacing-2xl) 0; /* 48px */
}

/* Tablet and up */
@media (min-width: 600px) {
  section {
    padding: var(--spacing-3xl) 0; /* 64px */
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  section {
    padding: var(--spacing-4xl) 0; /* 96px */
  }
}
```

---

## Why This Strategy Works

### 1. Consistency

- All spacing uses multiples of a base unit (1rem)
- Creates visual harmony across the entire site
- Easy to maintain proportional relationships
- No arbitrary "magic numbers"

### 2. Scalability

- Changing `--spacing-unit` scales all spacing proportionally
- Responsive typography automatically adjusts spacing (rem units scale with font-size)
- Easy to add new spacing values that fit the system
- Works seamlessly across all screen sizes

### 3. Semantic Naming

- `--text-spacing-paragraph` is clearer than `1.5rem`
- Purpose-driven variables make code self-documenting
- Easier for future you (and team members) to understand intent
- Reduces need for comments

### 4. Flexibility

- Can override spacing for specific components without breaking the system
- Media queries can adjust spacing at breakpoints
- Component-specific variables (like `--card-padding`) allow customization
- Maintains consistency while allowing exceptions

### 5. Maintainability

- Single source of truth for spacing values
- Update spacing in one place, affects entire site
- Prevents arbitrary spacing scattered throughout CSS
- Easy to refactor and improve over time

---

## Migration Checklist

Use this checklist when implementing the spacing system:

- [ ] Add spacing scale variables to `variables.css`
- [ ] Add semantic spacing variables to `variables.css`
- [ ] Update global typography rules
- [ ] Convert hero section spacing
- [ ] Convert info section spacing
- [ ] Convert footer section spacing
- [ ] Convert about/contact pages spacing
- [ ] Update navigation spacing
- [ ] Test at all breakpoints:
  - [ ] 375px (mobile)
  - [ ] 600px (tablet)
  - [ ] 768px (tablet landscape)
  - [ ] 1024px (desktop)
  - [ ] 1440px (wide desktop)
- [ ] Remove hardcoded spacing values (search for `px` units)
- [ ] Verify visual consistency across all pages
- [ ] Document any component-specific exceptions
- [ ] Update `agents.md` with spacing conventions

---

## Common Pitfalls to Avoid

### ❌ Don't Use Arbitrary Values

```css
/* BAD */
.card {
  margin-bottom: 27px; /* Random number */
}

/* GOOD */
.card {
  margin-bottom: var(--card-gap); /* Semantic variable */
}
```

### ❌ Don't Mix Spacing Units

```css
/* BAD */
.hero {
  padding: 50px 0; /* Pixels */
  margin-bottom: 3em; /* Ems */
}

/* GOOD */
.hero {
  padding: var(--spacing-3xl) 0; /* Consistent variables */
  margin-bottom: var(--spacing-2xl);
}
```

### ❌ Don't Forget Last-Child Rules

```css
/* BAD - Creates double spacing at container end */
.card {
  margin-bottom: var(--card-gap);
}

/* GOOD - Removes extra spacing */
.card {
  margin-bottom: var(--card-gap);
}

.card:last-child {
  margin-bottom: 0;
}
```

### ❌ Don't Overuse Padding + Margin

```css
/* BAD - Redundant spacing */
.card {
  padding: var(--spacing-lg);
  margin: var(--spacing-lg);
}

/* GOOD - Clear purpose for each */
.card {
  padding: var(--card-padding); /* Internal spacing */
  margin-bottom: var(--card-gap); /* External spacing */
}
```

---

## Quick Reference Table

| Element Type | Property        | Variable                   | Value      |
| ------------ | --------------- | -------------------------- | ---------- |
| Paragraph    | `margin-bottom` | `--text-spacing-paragraph` | 24px       |
| Heading      | `margin-bottom` | `--text-spacing-heading`   | 32px       |
| Section      | `padding`       | `--spacing-3xl`            | 64px       |
| Card         | `padding`       | `--card-padding`           | 24px       |
| Card         | `margin-bottom` | `--card-gap`               | 32px       |
| Button       | `padding`       | `--button-padding-*`       | 8px / 24px |
| Icon         | `margin`        | `--spacing-sm`             | 8px        |
| List item    | `margin-top`    | `--spacing-sm`             | 8px        |

---

## Additional Resources

- **CSS `calc()` function:** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/calc)
- **CSS Custom Properties:** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- **Responsive spacing:** See [`homepage-structure.md`](homepage-structure.md) for responsive grid examples
- **Project conventions:** See [`agents.md`](agents.md) for overall project guidelines

---

**Last Updated:** November 26, 2025
