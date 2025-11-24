# Project Development Rules & Workflow

## 📋 General Guidelines

### File Organization
- **Separate concerns:** CSS variables in dedicated `variables.css` file
- **Modular structure:** Each major section documented in its own `.md` file in `/docs`
- **Mobile-first approach:** Always start with mobile viewport (390px baseline)
- **Clear naming:** Use semantic, descriptive class names

### Documentation Standards
- **Structure diagrams:** Use ASCII tree diagrams for visual hierarchy
- **Classes reference:** Include a table listing all classes with their purposes
- **Implementation notes:** Document key design decisions, TODOs, and tricky parts
- **Keep it current:** Review and update documentation when code changes

### Code Organization

#### HTML
- Use semantic HTML5 elements (`<header>`, `<main>`, `<aside>`, `<section>`, `<article>`, `<footer>`)
- Add section comments to divide major areas: `<!-- ===== Section Name ===== -->`
- Include TODOs inline for future improvements
- Wrap related content in container divs for layout control

#### CSS
- **Section dividers:** Use `/* ========== SECTION NAME ========== */` for major sections
- **Subsection comments:** Use `/* Subsection Name */` for related groups
- **Inline comments:** Explain non-obvious decisions, especially for spacing and layout
  - Add short comment above each rule explaining what it does and why it's convenient
  - Format: brief explanation on line above the rule/selector
- **Dev borders:** Mark temporary styling with `/* dev only */` comment
- **Mobile-first:** Base styles for mobile, then add media queries for larger screens
- **TODOs:** Document decisions to revisit (`/* TODO: description */`)

#### JavaScript
- **Section dividers:** Use `// ========== SECTION NAME ==========`
- **Function groups:** Comment groups of related functionality
- **Explain intent:** Add comments before major operations

### Styling Conventions
- Use CSS custom properties (variables) for colors, fonts, spacing, breakpoints
  - Define all variables in `:root` in `variables.css`
  - Keep `:root` rule open for incremental variable additions
- Apply `border-radius` via CSS variables for consistency
- Use `box-sizing: border-box` globally
- Remove default margins/padding with CSS reset
- Add dev borders for visual debugging (mark with `/* dev only */`)
- Include explanatory comments above CSS rules for learning and maintenance

### Naming Conventions

#### CSS Classes
- **Section containers:** `.section-name` (e.g., `.hero`, `.dealerships`)
- **Reusable components:** Generic names (`.container`, `.subtitle`, `.link-button`)
- **Specific elements:** Descriptive names (`.card-title`, `.color-circle`)
- **Modifiers:** Secondary class for variations (`.dark-button`, `.long-button`)
- **Color variants:** Use color name as additional class (`.gray`, `.red`, `.blue`)

#### Structure Documentation Files
- Format: `section-name-structure.md`
- Include: structure diagram, classes reference table, implementation notes
- Keep consistent format across all documentation files

### Responsive Design
- Start with mobile layout
- Use viewport units where appropriate (`svh` for small viewport height)
- Use flexbox for layouts (`flex-direction: column` on mobile)
- Plan for tablet and desktop breakpoints (defined in variables)

### Images
- Organize by purpose: `/hero`, `/products`, `/icons`
- Use descriptive alt text with details (color, view angle, etc.)
- Consider accessibility: document background image TODOs
- Use `object-fit: contain` for product images to maintain aspect ratio

### TODOs & Technical Debt
- Document all temporary solutions with TODO comments
- Note accessibility concerns (background images, form functionality)
- Flag inconsistencies (naming conventions, padding/margin usage)
- Mark development-only code (borders, test content)

### Version Control
- Commit documentation alongside code changes
- Update `.md` files when structure changes
- Keep README high-level (don't list all files)

## 🎯 Project-Specific Patterns

### This Project's Conventions
- **Container div:** Used for content wrappers with padding
- **Subtitle class:** Reusable heading style (2.5em, 400 weight)
- **Link-button class:** Standard CTA button styling
- **Text alignment:** Center by default on body, override as needed

### Common Patterns


## 📝 Documentation Template

Each section documentation should include:

1. **Title:** `# [Section Name] Structure Diagram`
2. **Structure Diagram:** ASCII tree showing HTML hierarchy
3. **Classes Reference:** Table with Element | Class | Purpose columns
4. **Implementation Notes:** Key points covering:
   - Structure decisions
   - Layout approach
   - Styling details
   - Typography specs
   - TODOs and considerations

## 🔄 Workflow Best Practices

1. **Build incrementally:** Work on one section at a time
2. **Document as you go:** Create structure docs while building
3. **Comment before forgetting:** Add inline comments for tricky parts immediately
4. **Review and refactor:** Periodically check for inconsistencies
5. **Keep it maintainable:** Write code that my future self will understand
