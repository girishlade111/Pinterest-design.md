# Pinterest Design System & Marketing Site — Complete Project Context

> **Generated:** 2026-05-29  
> **Purpose:** Single comprehensive reference for AI tools to understand, modify, or extend this project.  
> **Source of Truth:** `DESIGN.md` — all visual decisions originate from this specification.

---

## 1. Project Overview

A pixel-perfect, responsive Pinterest marketing website built from the `DESIGN.md` specification. Implements Pinterest's full design system — colors, typography, spacing, shapes, elevation, and components — as a static HTML/CSS/JS frontend with zero dependencies.

**Stack:** HTML5 + CSS3 (custom properties) + Vanilla JS (ES6)  
**Font:** Inter (Google Fonts) — Pin Sans substitute per spec  
**Imagery:** picsum.photos placeholder photography  
**Icons:** Inline SVG (Pinterest logo) + Unicode/emoji glyphs  
**Build:** None. Open any `.html` file directly in a browser.

### 1.1 Dev Architecture

```
Layer           Technology
Markup          HTML5 — semantic elements (<nav>, <section>, <footer>)
Styling         CSS3 — custom properties, flexbox, multi-column masonry, media queries
Interactivity   Vanilla JavaScript (ES6) — no frameworks/libraries
Typography      Inter (Google Fonts) — weights 400/500/600/700
Imagery         picsum.photos — varied aspect ratios (1:1, 3:4, 2:3, 4:5)
Iconography     Inline SVG (Pinterest P-logo) + text/emoji glyphs
SEO             robots.txt, sitemap.xml, Open Graph, Twitter Cards
```

### 1.2 Project Stats

| Metric | Value |
|---|---|
| Pages | 3 (Home, Search, Creator) |
| CSS Lines | ~1181 |
| JS Lines | ~102 |
| Design Tokens | 27 colors · 10 typography tiers · 7 spacing steps · 5 radius values |
| Components | 15+ (buttons, inputs, search bar, pin cards, modals, nav, footer, chips, tiles, drawers) |
| Breakpoints | 5 (1024, 768, 480, 320px + ultrawide) |
| SEO Meta Tags | ~15 per page |
| Total Size | ~55 KB |

---

## 2. File Structure

```
Pinterest-design.md/
├── index.html          # Home page — hero → feature cards → categories → pin grid → footer
├── search.html         # Search results — filter chips + dense pin grid
├── create.html         # Creator marketing — dark CTA strip + feature cards + pin grid
├── style.css           # Design system: tokens, base, components, layout, responsive
├── main.js             # Modal, filter chips, search toggle, hamburger drawer
├── DESIGN.md           # Original Pinterest design specification (source of truth)
├── README.md           # Project documentation (slightly outdated stats — CSS now ~1181 lines)
├── robots.txt          # Crawler access policy
├── sitemap.xml         # 3 URLs with priority/changefreq/lastmod
└── PROJECT_CONTEXT.md  # This file
```

### 2.1 File Responsibilities

| File | Purpose |
|---|---|
| `index.html` | Marketing homepage: 70px hero headline, 3 feature cards (alternating left/right), 4-up category tiles, masonry pin grid with 2 pin-card-large, footer |
| `search.html` | Search results page: compact nav (P-logo + search bar + login/signup), horizontal filter chip strip, dense masonry pin grid (12 pins, 8px gutters) |
| `create.html` | Creator marketing page: dark hero CTA strip, centered creator headline, 3 feature cards, masonry pin grid (6 pins) |
| `style.css` | Everything visual: design tokens (`:root`), typography utilities, components (buttons, inputs, cards, nav, footer, modal, chips, drawer), layout (masonry grid, flexbox), responsive media queries |
| `main.js` | All interactivity: modal open/close+scrim+Escape key, filter chip active toggle, mobile search bar expand/collapse, hamburger mobile drawer toggle |
| `DESIGN.md` | Original Pinterest design specification — tokens are documented as `{colors.primary}`, `{spacing.section}`, `{rounded.md}`, `{component.button-primary}`, `{typography.display-xl}` etc. |

---

## 3. Design System Tokens

All tokens are CSS custom properties in `:root` (`style.css:1-62`).

### 3.1 Colors (27 tokens)

```css
/* Brand & Accent */
--colors-primary: #e60023;         /* Pinterest Red — ONLY for CTAs, active tabs, wordmark */
--colors-primary-pressed: #cc001f; /* Pressed state for primary button */

/* Surface */
--colors-canvas: #ffffff;           /* True white — nav, modals, feature cards */
--colors-surface-soft: #fbfbf9;     /* Cream-tinted — page body wash (hero) */
--colors-surface-card: #f6f6f3;     /* Warm cream — pin cards, search bar, chips, secondary bg */
--colors-secondary-bg: #e5e5e0;     /* Gray-cream — button-secondary fill */
--colors-secondary-pressed: #c8c8c1;
--colors-surface-dark: #262622;     /* Warm near-black — creator CTA strip */
--colors-hairline: #dadad3;         /* 1px row dividers, footer rules */
--colors-hairline-soft: #e5e5e0;    /* Lighter divider, secondary-button bg */

/* Text */
--colors-ink: #000000;              /* Primary headlines, button text, nav links */
--colors-ink-soft: #211922;         /* Inline link color — near-black warm cast */
--colors-body: #33332e;             /* Default paragraph text */
--colors-charcoal: #262622;         /* Softer body text */
--colors-mute: #62625b;             /* Metadata, footer links, captions */
--colors-ash: #91918c;              /* Disabled text, placeholder text */
--colors-stone: #c8c8c1;            /* Least-emphasis utility text */
--colors-on-dark: #ffffff;          /* Text on surface-dark */

/* Semantic */
--colors-error: #9e0a0a;            /* Validation messages */
--colors-error-deep: #cc001f;       /* Deepened error background */
--colors-success-deep: #103c25;     /* Success messaging */
--colors-success-pale: #c7f0da;     /* Success pill background */
--colors-focus-outer: #435ee5;      /* Focus ring blue — 2px outer outline */
--colors-focus-inner: #ffffff;      /* White inner gap in focus ring */

/* Editorial Accents (rare — content badges only) */
--colors-accent-pressed-blue: #617bff;
--colors-accent-purple: #7e238b;
--colors-accent-purple-deep: #6845ab;
```

### 3.2 Typography (10 tiers, Inter as Pin Sans substitute)

```css
--font-family: 'Inter', -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

Token               Size    Weight  LH   LS     Use
.display-xl         70px    600     1.1  -1.2px  Hero headline (home page)
.display-lg         44px    700     1.15 -0.8px  Creator hero headline
.heading-xl         28px    700     1.2  -1.2px  Section headings (feature cards)
.heading-lg         22px    600     1.25  0      Modal title, sub-section heading
.heading-md         18px    600     1.3   0      Card title, pin label
.body-md            16px    400     1.4   0      Body copy, paragraph, modal body
.body-strong        16px    600     1.4   0      Emphasis, nav links, form labels
.body-sm            14px    400     1.4   0      Footer, pin metadata, helper text
.body-sm-strong     14px    700     1.4   0      Search count label, table headers
.caption-md         12px    500     1.5   0      Caption text, link metadata
.caption-sm         12px    400     1.4   0      Copyright, smallest utility text
.link-inline        16px    600     1.4   0      Inline anchor link (ink-soft color)
```

### 3.3 Spacing (8-step system)

```css
--spacing-xxs: 4px;     /* Fine inline gaps in pills/chips */
--spacing-xs: 6px;      /* Tight inline gaps */
--spacing-sm: 8px;      /* Pin grid gutters, small gaps */
--spacing-md: 12px;     /* Modal field gaps */
--spacing-lg: 16px;     /* Category tile padding, button padding */
--spacing-xl: 24px;     /* Nav padding, section gaps */
--spacing-xxl: 32px;    /* Modal padding, feature card padding */
--spacing-section: 64px;/* Vertical rhythm between major sections */
```

### 3.4 Border Radius (5-value scale, only 3 actively used)

```css
--rounded-none: 0px;     /* Footer, primary nav, page sections — structural only */
--rounded-sm: 8px;       /* Rare (editorial tooltip) */
--rounded-md: 16px;      /* PRIMARY — buttons, inputs, pin cards, feature cards, tiles */
--rounded-lg: 32px;      /* Large pin cards, modals */
--rounded-full: 9999px;  /* Search bar, filter chips, pills, avatars, icon buttons */
```

### 3.5 Elevation

```css
--shadow-modal: 0 4px 16px rgba(0, 0, 0, 0.15);
--scrim-opacity: 0.5;    /* Modal overlay scrim */
```

**Rule:** Cards have NO shadows. Only the modal has elevation (16px ambient shadow + 50% scrim).

---

## 4. Page Architecture

### 4.1 Home Page (`index.html`) — Section Order

```
[Primary Nav] → [Hero Section] → [Feature Cards ×3] → [Category Tiles ×4] → [Pin Grid ×8] → [Footer]
```

**Nav layout (desktop):** P-logo SVG + "Explore" link | centered search bar | About / Businesses / Create / Log in + red "Sign up" button  
**Feature cards:** alternating `feature-card` (image left, text right) / `feature-card-soft reverse` (image right, text left, cream bg)  
**Pin grid:** 8 pins in masonry grid — 2 use `pin-card-large` class (32px radius), rest use `pin-card` (16px radius)  
**Modal:** signup form — email, password, birthdate, country, Continue button, "Already a member? Log in" link

### 4.2 Search Results (`search.html`) — Section Order

```
[Primary Nav (inner-page)] → [Filter Chip Strip] → [Pin Grid ×12] → [Modal]
```

**Nav layout:** P-logo only | centered search bar ("bold lip" pre-filled) | Log in + red "Sign up"  
**Filter chips:** 8 chips — "All" (active), Beauty makeup, Lipstick, Editorial makeup, Bold lips, Makeup looks, Lip gloss, Matte lip  
**Pin grid:** 12 pins at 8px gutters — pure masonry, no feature cards or categories

### 4.3 Creator Hub (`create.html`) — Section Order

```
[Hero CTA Strip (dark)] → [Primary Nav (inner-page)] → [Creator Hero] → [Feature Cards ×3] → [Pin Grid ×6] → [Footer] → [Modal]
```

**Hero CTA strip:** `surface-dark` background (near-black), heading-xl + red CTA button  
**Creator hero:** centered `display-lg` headline + body text + CTA  
**Nav layout:** Same as home page with "Explore" link pointing to `index.html`

---

## 5. Component System

Every component is documented below with its CSS class, HTML pattern, key visual properties, and usage across pages.

### 5.1 Button System

All buttons share the `.btn` base class: 14px/700 font, 40px height, 16px radius, 6px/14px padding, no border.

| Variant | Class | BG | Text | Hover | Active/Pressed | Used In |
|---|---|---|---|---|---|---|
| Primary | `.btn-primary` | `#e60023` | White | `#cc001f` | `#cc001f` | Sign up, Get started, Continue, Learn more, Join free |
| Secondary | `.btn-secondary` | `#e5e5e0` | `#000` | `#c8c8c1` | `#c8c8c1` | "I already have an account" (not currently used in HTML) |
| Tertiary | `.btn-tertiary` | transparent | `#000` | `#f6f6f3` | — | "Read the docs →" in index.html feature card |
| Icon Circular | `.btn-icon-circular` | `#f6f6f3` | `#000` | `#e5e5e0` + scale(1.05) | — | Modal close button (×) |
| Pill on Image | `.btn-pill-on-image` | `#fff` | `#000` | scale(1.04) + shadow | — | Not currently used in HTML |
| Disabled | `.btn-disabled` | `#f6f6f3` | `#91918c` | — | — | Not currently used in HTML |

**CSS location:** `style.css:211-319`  
**Transition:** `background-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease`  
**Hover guard:** All `:hover` states wrapped in `@media (hover: hover)` to prevent sticky hover on touch.

### 5.2 Filter Chip

| State | Class | BG | Text |
|---|---|---|---|
| Default | `.filter-chip` | `#f6f6f3` | `#000` |
| Active | `.filter-chip.active` | `#000` | `#fff` |

**CSS location:** `style.css:331-357`  
**Shape:** pill (9999px), 8px/16px padding, 14px/700 font  
**Hover:** Default chips get `#e5e5e0` bg on hover (not when `.active`)  
**JS:** Click toggles — all chips lose `.active`, clicked chip gains it.  
**Used in:** `search.html` filter strip below nav.

### 5.3 Text Input

| State | Class | Border | BG | Height |
|---|---|---|---|---|
| Default | `.text-input` | 1px `#91918c` | `#fff` | 44px |
| Focused | `.text-input:focus` | 2px `#000` + 4px `#435ee5` outline | `#fff` | 44px |

**CSS location:** `style.css:362-385`  
**Shape:** 16px radius, 11px/15px padding, 16px/400 font  
**Used in:** Signup modal (email, password, birthdate, country select).

### 5.4 Search Bar

| State | BG | Border |
|---|---|---|
| Default | `#f6f6f3` | None |
| Hover | `#f6f6f3` | 1px `#dadad3` ring |
| Focus-within | `#fff` | 1px `#91918c` |

**CSS location:** `style.css:390-452`  
**Shape:** pill (9999px), 48px height, max-width 480px  
**Glyph:** Magnifier (🔍) at left edge  
**Placeholder:** "Search for ideas, fashion..."  
**Mobile:** collapses to icon-only (🔍 button), `.mobile-expanded` class expands to full-width.

### 5.5 Pin Card

**Standard:** `.pin-card` — 16px radius, no padding, image is full-bleed.  
**Large:** `.pin-card-large` — 32px radius, same structure otherwise.

```
.pin-card / .pin-card-large
  ├── img.pin-image (full-bleed, 100% width, natural aspect ratio)
  └── span.pin-overlay-pill (optional, bottom-left corner)
```

**CSS location (standard):** `style.css:457-499`  
**CSS location (large):** `style.css:501-521`  
**Shape:** 16px (standard) / 32px (large) radius  
**Padding:** 0 — the image IS the card  
**Overlay pill:** white pill (9999px), 6px/12px padding, 12px/700 font, bottom:8px left:8px  
**Masonry behavior:** `break-inside: avoid`, `margin-bottom: 8px`  
**Hover (both):** `translateY(-4px)` + `box-shadow: 0 4px 12px rgba(0,0,0,0.08)` with 0.2s ease transition. Overlay pill scales to 1.05 on card hover.  
**Used in:** All 3 pages — home page has 2 `pin-card-large`, others all standard.

### 5.6 Category Tile

**Class:** `.category-tile`  
**Structure:** Image (1:1 square, 16px radius) + label in flex column.

```
.category-tile
  ├── img.category-image (aspect-ratio: 1/1, object-fit: cover)
  └── span.category-label (16px/600, centered)
```

**CSS location:** `style.css:526-557`  
**Grid:** 4-column grid at desktop, 3 at 1024px, 2 at 768px, 1 at 480px  
**Hover:** `translateY(-3px)` + soft shadow  
**Used in:** `index.html` "Explore popular categories" section.

### 5.7 Feature Card

**Classes:** `.feature-card` (white bg) / `.feature-card-soft` (cream bg `#f6f6f3`)  
**Layout:** Side-by-side — image (40% width, 4:5 portrait) + content (text + CTA).  
**Alternating:** `.reverse` class flips to `row-reverse`.

```
.feature-card(.feature-card-soft)(.reverse)
  ├── img.feature-image (flex 0 0 40%, aspect-ratio: 4/5, 16px radius)
  └── div.feature-content
       ├── h2.heading-xl
       ├── p.body-md
       └── button.btn-primary (optionally + .btn-tertiary)
```

**CSS location:** `style.css:562-600`  
**Padding:** 32px internal, 64px section gap between cards  
**Hover:** `translateY(-2px)` + soft shadow (0.2s)  
**Used in:** `index.html` (3 cards), `create.html` (3 cards).

### 5.8 Modal Card

**Classes:** `.modal-overlay` (scrim) + `.modal-card` (content)

```
.modal-overlay (fixed, inset:0, 50% black scrim, z-index:1000)
  └── .modal-card (centered, 480px wide, 32px radius, 16px shadow, 32px padding)
       ├── button.btn-icon-circular.modal-close (×, absolute top-right)
       ├── h2.modal-title ("Welcome to Pinterest" — heading-lg)
       ├── p.modal-subtitle ("Find new ideas to try" — body-md)
       ├── div.modal-fields (stacked text-input fields)
       ├── button.btn-primary ("Continue" — full width)
       └── div.modal-footer-link ("Already a member? Log in" — link-inline)
```

**CSS location:** `style.css:623-695`  
**Mobile (≤768px):** full-width sheet, `border-radius: 32px 32px 0 0`, bottom-anchored  
**JS:** `.open` class toggles visibility + opacity. Escape key, scrim click, close button all dismiss. Body scroll locked when open (`overflow: hidden`).  
**Used in:** All 3 pages (same markup repeated in each HTML).

### 5.9 Primary Nav

**Class:** `.primary-nav`  
**Height:** 64px, sticky top, z-index:100  
**Inner layout:** flexbox row: logo | links | search (flex:1, centered) | actions

```
.primary-nav(.inner-page)
  └── .nav-inner (max-width:1280px)
       ├── button.hamburger (☰ — hidden desktop, shown mobile)
       ├── .nav-logo (SVG P-logo 24px + optional "Pinterest" wordmark)
       ├── .nav-links ("Explore" — hidden on search results page)
       ├── .nav-search (search-bar centered)
       └── .nav-actions (About / Businesses / Create / Log in + red Sign up button)
```

**CSS location:** `style.css:700-809`  
**Inner pages (search.html, create.html):** `.inner-page` adds 1px `#dadad3` bottom border  
**Mobile (≤768px):** nav-links hidden, non-button actions hidden, hamburger shown, search bar compressed  
**Drawer (mobile):** `.drawer-visible` class toggles on nav-links and nav-actions — they become an absolute-positioned vertical stack below nav. `.drawer-open` on nav hides the search bar.  
**JS:** Hamburger click toggles drawer. Any nav link click closes drawer.

### 5.10 Footer

**Class:** `.site-footer`

```
.site-footer (white bg, 1px hairline top, 32px/24px padding)
  └── .footer-inner (max-width:1280px)
       ├── .footer-grid (4-column grid → 2 at 768px → 1 at 480px)
       │    ├── .footer-col "Get the app" (iOS, Android)
       │    ├── .footer-col "Quick Links" (Explore, Shop, Users, Collections, Shopping)
       │    ├── .footer-col "Pinterest for" (Creators, Businesses, Advertisers)
       │    └── .footer-col "About" (Privacy, Terms, Help Center)
       └── .footer-bottom
            ├── .footer-brand (SVG P-logo + "Pinterest" in red)
            └── .caption-sm ("© 2026 Pinterest")
```

**CSS location:** `style.css:881-942`  
**Column headers:** 14px/700 (body-sm-strong equivalent)  
**Link color:** `#62625b`, hover → `#000` (0.15s transition)  
**Used in:** `index.html` and `create.html` (not in search.html).

### 5.11 Hero Section (Home Page)

**Class:** `.hero-section`  
**BG:** `#fbfbf9` (surface-soft — cream tint)  
**Layout:** centered, 64px padding top/bottom, max-width 800px for headline

```
section.hero-section
  └── div.container
       ├── h1.display-xl.hero-headline ("Create the life you love on Pinterest" — 70px, -1.2px tracking)
       ├── p.hero-subtitle (16px/400 body text)
       └── button.btn-primary (larger: 16px font, 10px/24px padding, 48px height)
```

**CSS location:** `style.css:814-832`  
**Responsive:** headline scales 70px → 44px(768px) → 36px(480px) → 32px(320px).

### 5.12 Hero CTA Strip (Creator Page)

**Class:** `.hero-cta-strip`  
**BG:** `#262622` (surface-dark — warm near-black)  
**Text:** white (on-dark)  
**Layout:** flex row, space-between, 48px/32px padding, no border-radius  
**Mobile (≤768px):** stacks vertically, text centered.

### 5.13 Creator Hero (Creator Page)

**Class:** `.creator-hero`  
**Layout:** centered text, max-width 800px  
**Headline:** `.display-lg` (44px, 700, -0.8px tracking)  
**Used in:** `create.html` below the nav, after the dark CTA strip.

### 5.14 Section Padding Utility

**Class:** `.section-padding`  
**Purpose:** Applies 64px vertical padding (matches `--spacing-section`)  
**Responsive:** 48px at 768px, 32px at 480px and 320px  
**Used in:** `index.html` on feature rows and pin grid.

### 5.15 Inline Link

**Class:** `.link-inline` — 16px/600, `#211922` (ink-soft)  
**Distinctive:** underlined with transparent color by default; underline appears on hover  
**Used in:** Modal footer link ("Already a member? Log in").

---

## 6. CSS Architecture (`style.css`)

### 6.1 File Structure (in order)

```
Lines    Section
1-62     :root — Design Tokens (colors, typography, spacing, radius, elevation)
64-98    Base & Reset (box-sizing, html font smoothing, body defaults, img, a, ul)
100-197  Typography Utilities (.display-xl through .link-inline)
199-206  Container (.container — 1280px max-width)
208-319  Button Components (.btn, .btn-primary through .btn-disabled)
321-326  Section Padding Utility (.section-padding)
328-357  Filter Chip (.filter-chip, .filter-chip.active)
359-385  Text Input (.text-input, :focus, ::placeholder)
387-452  Search Bar (.search-bar, :hover, :focus-within, .search-toggle)
454-521  Pin Card & Pin Card Large (.pin-card, .pin-card-large, .pin-overlay-pill)
523-557  Category Tile (.category-tile)
559-600  Feature Card (.feature-card, .feature-card-soft, .reverse)
602-618  Hero CTA Strip (.hero-cta-strip)
620-695  Modal Card (.modal-overlay, .modal-card)
697-809  Primary Nav (.primary-nav, .hamburger)
811-832  Hero Section (.hero-section)
834-847  Pin Masonry Grid (.pin-grid — column-count: 4)
849-866  Feature Row Section (.feature-row)
868-876  Category Grid (.category-grid)
878-942  Footer (.site-footer, .footer-grid, .footer-bottom)
944-955  Search Results Page (.filter-strip)
957-977  Creator Page (.creator-hero)
979-1004 Mobile Drawer (.drawer-visible, .drawer-open)
1006+    Responsive Media Queries (1024px, 768px, 480px, 320px)
```

### 6.2 Responsive Breakpoints

| Breakpoint | Width | Pin Grid | Nav | Feature Row | Hero Text |
|---|---|---|---|---|---|
| Desktop-large | 1440px+ | 4 cols | Full | Side-by-side | 70px |
| Desktop-small | ≤1024px | 3 cols | Full | Side-by-side | 70px |
| Tablet | ≤768px | 2 cols (6px gutter) | Hamburger + icon search | Vertical stack | 44px |
| Mobile | ≤480px | 1 col | Hamburger + icon search | Single-column | 36px |
| Mobile-narrow | ≤320px | 1 col | Hamburger + icon search | Single-column | 32px |

### 6.3 Hover Animations (added beyond DESIGN.md spec)

All `:hover` states wrapped in `@media (hover: hover)` for touch-device safety. Transitions are 0.15-0.2s ease.

| Component | Hover Effect |
|---|---|
| `.btn-primary` | BG → `#cc001f` |
| `.btn-secondary` | BG → `#c8c8c1` |
| `.btn-tertiary` | BG → `#f6f6f3` |
| `.btn-icon-circular` | BG → `#e5e5e0` + scale(1.05) |
| `.btn-pill-on-image` | scale(1.04) + box-shadow |
| `.filter-chip:not(.active)` | BG → `#e5e5e0` |
| `.pin-card`, `.pin-card-large` | translateY(-4px) + box-shadow |
| `.pin-card:hover .pin-overlay-pill` | scale(1.05) |
| `.category-tile` | translateY(-3px) + box-shadow |
| `.feature-card` | translateY(-2px) + box-shadow |
| `.search-bar` | 1px hairline ring |
| `.primary-nav .nav-links a` | opacity 0.7 |
| `.primary-nav .nav-actions a` | opacity 0.7 |
| `.hamburger` | opacity 0.7 |
| `.search-toggle` | opacity 0.7 |
| `.footer-col ul li a` | color → `#000` |
| `.link-inline` | underline becomes visible |

---

## 7. JavaScript Interactions (`main.js`)

All vanilla ES6, no dependencies, ~102 lines. Provides 4 features:

### 7.1 Modal Overlay (lines 1-45)

```
Elements: #signupModal, #signupBtn(s), #loginBtn(s), #modalClose
Triggers:
  - Any #signupBtn click → open modal
  - Any #loginBtn click → open modal
  - #modalClose click → close modal
  - Scrim (modal overlay bg) click → close modal
  - Escape key → close modal
  - Body scroll locked (overflow: hidden) when open, restored on close
```

### 7.2 Filter Chip Toggle (lines 47-55)

```
Elements: .filter-chip
Behavior: Click removes .active from all chips, adds .active to clicked chip
Mutually exclusive — only one chip can be active at a time
```

### 7.3 Mobile Search Toggle (lines 57-72)

```
Elements: .search-toggle (hidden on desktop, visible on mobile ≤768px)
Behavior:
  - Click toggles .mobile-expanded on parent .search-bar
  - When expanding: shows hidden input, focuses it
  - Tapping toggle again collapses back to icon-only
```

### 7.4 Hamburger Drawer (lines 74-102)

```
Elements: #hamburgerBtn, .primary-nav, .nav-links, .nav-actions
Behavior:
  - Click hamburger → toggle .drawer-open on nav + .drawer-visible on links/actions
  - Drawer contains nav-links + nav-actions stacked vertically
  - Search bar hidden when drawer is open
  - Any nav link click closes drawer (removes both classes)
```

---

## 8. SEO & Metadata

### 8.1 Per-Page Meta

| Page | Title | Description | Canonical |
|---|---|---|---|
| index.html | Pinterest - Discover Ideas... | Find and save ideas on Pinterest... | / |
| search.html | Search Ideas - Pinterest... | Search Pinterest for ideas across fashion... | /search/ |
| create.html | Create on Pinterest - Grow Your Audience... | Join Pinterest's creator community... | /create/ |

### 8.2 Tags Applied to Every Page

- `meta name="description"` (unique per page)
- `meta name="keywords"` (targeted search terms per page)
- `meta name="robots" content="index, follow"`
- `meta name="theme-color" content="#e60023"`
- `meta name="apple-mobile-web-app-capable"`
- `link rel="canonical"`
- `meta property="og:title"`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`, `og:locale`
- `meta name="twitter:card"`, `twitter:title`, `twitter:description`, `twitter:image"`
- Keyword-rich `alt` attributes on ALL images
- `loading="lazy"` on all non-hero images

### 8.3 SEO Files

**robots.txt:**
```
User-agent: *
Allow: /
Sitemap: https://www.pinterest.com/sitemap.xml
```

**sitemap.xml:** 3 URLs with priority, changefreq, lastmod:
- `/` — priority 1.0, daily
- `/search/` — priority 0.8, daily
- `/create/` — priority 0.7, weekly

---

## 9. Known Gaps & Design Decisions

### 9.1 Gaps from DESIGN.md

| Gap | Reasoning |
|---|---|
| **Pin Sans font** | Proprietary — Inter used as substitute (closest match per DESIGN.md §"Note on Font Substitutes") |
| **Hover states** | DESIGN.md explicitly does NOT document hovers ("No hover states documented per system policy"). Hover animations were added later as enhancement. |
| **Mobile screenshots** | Not captured; responsive behavior synthesized from desktop evidence and breakpoint stack |
| **Pin detail overlay** | Single-pin detail view (comments, related pins, save board picker) not implemented |
| **Authenticated chrome** | Logged-in feed, board pages, profile pages not implemented |
| **Mobile app screens** | Web-only chrome |
| **Form validation states** | Success/error inline messages not styled |
| **Ultrawide (1920px+)** | Pin grid maxes at 4 columns — 5-6 columns not implemented |
| **Footer mobile accordion** | Footer doesn't have tap-to-expand accordion on mobile (DESIGN.md specifies this) |

### 9.2 Deviations from DESIGN.md

| Aspect | DESIGN.md Says | Implemented |
|---|---|---|
| Feature cards position | Part of "hero/CTA chrome" before masonry | Placed BEFORE pin grid (reorganized) |
| Pin hover lift | "intentionally undocumented per system policy" | Added translateY(-4px) + shadow (common Pinterest pattern) |
| Section order (home) | Content sections at 64px rhythm | Sections use `section-padding` class consistent with spec |

### 9.3 DESIGN.md Compliance Checklist

- ✅ Pinterest Red (`#e60023`) reserved for CTAs, active tabs, wordmark only
- ✅ 16px radius on all interactive elements; 32px on modals; pill on chips
- ✅ Pin cards have zero internal padding — image IS the card
- ✅ -1.2px letter-spacing on display-xl and heading-xl
- ✅ No drop shadows on cards (only modal shadow — hover lift shadow is separate)
- ✅ Single red CTA per fold (nav + hero + feature card)
- ✅ Masonry grid preserves natural aspect ratios
- ✅ Responsive breakpoints at all spec'd widths
- ✅ Inter font as Pin Sans substitute with correct weights
- ✅ Modals use 50% scrim + 16px ambient shadow
- ✅ Warm-cream neutral palette for chrome
- ✅ Sticky top nav with always-red Sign-up CTA
- ✅ Asymmetric 2-column feature cards (left/right alternating)
- ✅ Footer: 4-column grid → 2-up → 1-up

---

## 10. How to Customize / Extend

### Adding a New Page
1. Copy `index.html` as template
2. Update `<title>`, meta tags, canonical URL
3. Add page-specific content in `<body>`
4. Link from primary nav in all existing pages

### Adding a New Component
1. Add CSS class in `style.css` following component section pattern
2. Use existing design tokens (`--colors-*`, `--spacing-*`, `--rounded-*`)
3. Add hover state with `@media (hover: hover)` guard
4. Add transition with 0.15-0.2s ease timing
5. Add responsive override in appropriate media query

### Modifying Colors
Edit CSS custom properties in `style.css:1-62`. All components reference tokens, so a single change propagates everywhere.

### Modifying Typography
1. Change Google Fonts `<link>` in all HTML files
2. Update `--font-family` in `style.css:40`
3. Adjust token values in typography utility classes (`.display-xl` etc.)

### Modifying Breakpoints
Edit `@media` queries at the bottom of `style.css` (lines 1011-1181).

---

## 11. File Hashes / Quick Reference

| File | Lines | Key Classes/IDs |
|---|---|---|
| `index.html` | 237 | `.hero-section`, `.feature-card`(×3), `.category-tile`(×4), `.pin-card`(×6), `.pin-card-large`(×2), `.site-footer`, `#signupModal` |
| `search.html` | 140 | `.primary-nav.inner-page`, `.filter-chip`(×8), `.pin-card`(×12), `#signupModal` |
| `create.html` | 205 | `.hero-cta-strip`, `.primary-nav.inner-page`, `.creator-hero`, `.feature-card`(×3), `.pin-card`(×6), `.site-footer`, `#signupModal` |
| `style.css` | 1181 | 61 design tokens, 15+ component sections, 5 media query blocks |
| `main.js` | 102 | 4 feature blocks: modal, chips, search toggle, drawer |
| `DESIGN.md` | 354 | Source of truth — tokens, components, layout, responsive spec |

---

## 12. Typical AI Prompts for This Project

### "Add a new component"
"I want to add a [component name] to the Pinterest project. It should use existing tokens (colors.primary for the CTA, rounded.md for corners, spacing.lg for padding). Add CSS to style.css following the pattern at [line reference], add HTML to [file.html] at [location], and add JS to main.js if needed."

### "Fix a bug"
"In the Pinterest project at [path], the [component/behavior] is broken. The expected behavior per DESIGN.md is [reference]. Current behavior is [description]. The relevant code is at [file:line]."

### "Add responsive behavior"
"Add a responsive breakpoint for [width]px following Pinterest's pattern. Copy the existing tablet breakpoint at style.css:~1026 and adjust: [specific changes to pin grid, nav, typography, spacing]."

### "Make a design change"
"Change [token] from [value] to [new value] in style.css:root. This affects all [components] across all pages."
