# CLAUDE.md — Dr. Faten Tamim Advocates & Legal Consultants

## Required Skills
Always invoke the **frontend-design skill** before writing any frontend code. Every session, no exceptions.

## Screenshot Workflow
- Use Puppeteer to take screenshots after building each section
- Compare screenshots against the design intent
- Do 2 rounds of screenshot review and polish before presenting
- Store screenshots in `.tmp/screenshots/` (temporary, can be deleted)
- Name screenshots descriptively: `hero-v1.png`, `about-section-v2.png`

---

## Project Overview

You are building a **premium law firm website** for Dr. Faten Tamim Advocates & Legal Consultants, a boutique law firm in Abu Dhabi, UAE. The site must be bilingual (English/Arabic with full RTL support), visually stunning with a luxury editorial aesthetic, and fully responsive.

**Reference**: See `FatenTamim-BrandGuidelines.pdf` in the project root for full brand guidelines including color swatches, typography specs, and design principles.

---

## Brand Identity

### Names
- **English**: Dr. Faten Tamim Advocates & Legal Consultants
- **Arabic**: د. فاتن تميم للاستشارات والمرافعات القانونية
- **Tagline EN**: Clarity. Strategy. Results.
- **Tagline AR**: وضوح. إستراتيجية. نتائج.

### Design Direction: "Editorial Luxury"
Dark navy + warm gold. Think high-end legal magazine, not generic corporate. Every element must feel intentional and premium.

---

## Color Palette

```css
/* Primary */
--navy: #0B1120;        /* Hero backgrounds, dark sections, footer */
--navy-light: #1A2540;  /* Hover states on dark */
--navy-mid: #131B2E;    /* Subtle dark variations */
--gold: #C8973E;        /* Primary CTA, accents, highlights */
--gold-light: #E8C068;  /* Hover gold, light accents */
--gold-dark: #9A7230;   /* Text links, value labels */

/* Neutrals */
--cream: #FAF7F2;       /* Section backgrounds */
--warm: #F5F0E8;        /* Card backgrounds, input bg */
--text: #2D3748;        /* Primary body text */
--text-light: #718096;  /* Secondary text */
--text-muted: #A0AEC0;  /* Labels, captions */
```

### Critical Color Rules
- **Headings on dark backgrounds**: ALWAYS `#FFFFFF` (white) — never use dark text on dark backgrounds
- **Body text on dark**: `rgba(255,255,255,0.45)` 
- **Footer**: Navy background with a 1px gold gradient line at top
- **Cards**: White background, `1px solid rgba(0,0,0,0.04)` border, `16px` border-radius

---

## Typography

### Font Stack
```css
/* English headings */
font-family: 'Playfair Display', Georgia, serif;
/* Weights: 400, 500, 600, 700, 800. Italic available. */

/* English body / UI */
font-family: 'Outfit', system-ui, sans-serif;
/* Weights: 300, 400, 500, 600, 700. */

/* Arabic (replaces BOTH above in RTL mode) */
font-family: 'Noto Kufi Arabic', 'Outfit', sans-serif;
/* Weights: 300, 400, 500, 600, 700. */
```

### Google Fonts Import
```
https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Outfit:wght@300;400;500;600;700&family=Noto+Kufi+Arabic:wght@300;400;500;600;700&display=swap
```

### Type Scale
| Element | Size | Font | Weight |
|---------|------|------|--------|
| Hero h1 | clamp(2.8rem, 5.5vw, 4.8rem) | Playfair | 700 |
| Section h2 | clamp(2rem, 3vw, 2.8rem) | Playfair | 700 |
| Card h3 | 20px | Playfair | 600 |
| Body | 16px, line-height 1.9 | Outfit | 400 |
| Labels | 11px, tracking 0.1em, uppercase | Outfit | 600 |
| Nav links | 13px | Outfit | 500 |
| Buttons | 14px | Outfit | 600 |

---

## Design Principles

### Scroll Animations
- Reveal on scroll: `opacity 0 → 1`, `translateY(24px → 0)`
- Transition: `0.7s cubic-bezier(.16,1,.3,1)`
- Stagger children: 100ms delay increments
- Observer: `IntersectionObserver` with `threshold: 0.08`

### Hero Section
- Full viewport height, dark navy background
- Subtle dot-pattern texture at 2% opacity
- Gold radial gradient hint (top-left area)
- Animated staggered entrance for all elements
- Marquee bar at bottom with practice areas scrolling

### Card Hover Effects
- `transform: translateY(-6px)` on hover
- `box-shadow: 0 20px 48px rgba(0,0,0,0.08)`
- `transition: all 0.4s ease`
- Border radius: 16px

### Glass Morphism Navbar
- Transparent over hero section
- When scrolled: `background: rgba(255,255,255,0.95)`, `backdrop-filter: blur(20px)`
- Firm name + tagline always visible on desktop
- Gold accent on active page

### Border Radius System
- Cards: 16px
- Buttons: 12px
- Pills/badges: 99px (full-round)
- Inputs: 12px
- Hero images: 20px

---

## Tech Stack

- **Framework**: React 18
- **Build**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React + react-icons (for Snapchat)
- **Forms**: EmailJS

---

## Contact Form (EmailJS)

```
Service ID:  service_cusdo1k
Template ID: template_l08eik3
Public Key:  BSVkZlqJCjEXVY7KF
```

Fields: `user_name`, `user_email`, `user_phone`, `subject`, `message`

---

## Google Maps

```
CID: 5386227777658469374
Pin: https://maps.app.goo.gl/4ni9iADHJC4anDgN9
Embed: https://www.google.com/maps?cid=5386227777658469374&output=embed
```

---

## Contact Information

| Field | Value |
|-------|-------|
| Phone (display) | 971 52 545 1974 |
| Phone (E.164) | +971525451974 |
| WhatsApp | +971525451974 |
| Email | f.alsulebi@gmail.com |
| Address EN | Airport Road, Hamid Al Qubaisi Bldg, Mezzanine Floor, Office 3, Abu Dhabi, UAE |
| Address AR | شارع المطار، بناية حميد القبيسي، طابق الميزانين، مكتب (3)، أبوظبي، الإمارات العربية المتحدة |
| Hours | Mon – Sat · 10:00 – 19:00 |
| LinkedIn | https://www.linkedin.com/in/dr-faten-tamim-lawyer-691b58253/ |
| Instagram | https://www.instagram.com/faten_lawyer/ |
| Snapchat | https://www.snapchat.com/@fatqnqueen |

### Floating Action Buttons (fixed bottom-right)
- **WhatsApp**: Green (#25D366), rounded-full, links to `wa.me/971525451974`
- **Phone**: Gold (#C8973E), rounded-full, links to `tel:+971525451974`
- Both: hover:scale(1.1), shadow

---

## Site Structure

### Routes
```
/                              → Homepage (Hero + About + Areas + Team + Newsletter + Contact)
/about                         → Full about + team bios + values
/services                      → All services grid
/services/family-status        → Full service page
/services/criminal-defense     → Full service page
/services/labour-law           → Full service page
/services/corporate-commercial → Full service page
/services/banking-finance      → Full service page
/services/medical-malpractice  → Full service page
/services/litigation-stages    → Full service page
/contact                       → Contact page
/team/:slug                    → Individual team member
/privacy                       → Privacy Policy (FULL legal content)
/terms                         → Terms of Use (FULL legal content)
/disclaimer                    → Disclaimer (FULL legal content)
/cookies                       → Cookie Policy (FULL legal content)
```

### Homepage Sections (in order)
1. **Hero** — Full-viewport, dark navy, parallax, animated entrance, marquee
2. **About** — Two-column: image left + text right, values cards, floating badge
3. **Practice Areas** — 6 cards on cream background, icons, hover lift
4. **Team** — Dark section, white cards, 5 members, experience badges
5. **Newsletter** — Warm gradient, email input, subscribe button
6. **Contact** — Form + info cards + Google Maps

### Service Page Layout
- **Banner**: Full-width image + dark overlay + h1 title (WHITE text) + intro
- **Main content** (8/12 cols): Sections with h2 headings + bullets, Key Outcomes (tags), Our Process (numbered steps), Required Documents, Fees, FAQs (expandable)
- **Sidebar** (4/12 cols): Book Consultation CTA (dark card), Quick Contact (phone/whatsapp/email), Dynamic Related Services (auto-filter out current page, show rest with icons)

---

## Practice Areas (7 services)

1. **Family & Personal Status** — Marriage, divorce, custody, guardianship, inheritance
2. **Criminal Defense** — Investigation to appeal, misdemeanors, felonies, cybercrime
3. **Labour & Employment** — Unpaid wages, wrongful termination, contracts, compliance
4. **Corporate & Commercial** — Company formation, M&A, shareholder disputes
5. **Banking & Finance** — Loan defaults, guarantees, restructuring, enforcement
6. **Medical Malpractice** — Negligence, insurance disputes, regulatory investigations
7. **All Stages of the Lawsuit** — Pleadings, first instance, appeal, cassation, enforcement

**Each service page MUST include ALL of these sections (with full bilingual content):**
- Content sections with bullet points
- Key Outcomes (tag pills)
- Our Process (numbered steps)
- Required Documents (grid list)
- Fees
- FAQs (expandable details)

---

## Team Members (5)

1. **Dr. Faten Tamim Alsulebi** — Managing Partner & Founder, 15+ years, Abu Dhabi University lecturer, civil/commercial/family/labour/corporate/sports law
2. **Mohamed Ahmed Eltobgy** — Legal Consultant, litigation across civil/commercial/criminal/labour/personal-status, bilingual
3. **Zahra Sabrina Meddah** — Attorney & Legal Counsel, former judge, 15+ years, commercial/investment/corporate/real-estate
4. **Mohamed Rafik Ibrahim** — Legal Counsel, 8+ years UAE & Egypt, corporate/compliance/real estate/dispute resolution
5. **Mohammed El Gouhari** — Legal Consultant, ~25 years Abu Dhabi Federal Courts, civil/commercial litigation

---

## Legal Pages (must have FULL content, not placeholders)

### Privacy Policy sections:
Data We Collect, How We Use Your Data, Legal Bases, Sharing, International Transfers, Retention, Your Rights, Security, Children, Updates, Contact Us

### Terms of Use sections:
Acceptance, No Legal Advice, No Attorney-Client Relationship, Acceptable Use, Intellectual Property, Third-Party Links, Disclaimers, Limitation of Liability, Governing Law & Jurisdiction, Changes

---

## SEO & Meta

```html
<meta name="google-site-verification" content="bjD1ys2obPYlKj0vCbA_RMbbX1pOFUCg_0IKxfTMvCo" />
<link rel="icon" type="image/png" href="/logo.png" />
<title>Faten Tamim Advocates & Legal Consultants</title>
```

---

## Deployment

- **Test repo**: `https://github.com/duqins/Testwebsite.git`
- **Production repo**: `https://github.com/duqins/faten-tamim-website-v2`
- **Host**: Vercel (auto-deploy from GitHub)
- **vercel.json**: Rewrites all routes to `/index.html` for SPA

---

## Critical Reminders

1. **Never** make headings invisible — white text on dark, dark text on light
2. **Never** cut service page content — include ALL sections, outcomes, process, docs, fees, FAQs
3. **Never** use placeholder text for legal pages — full detailed content in both languages
4. **Always** test Arabic/RTL mode — layout, spacing, and fonts must all work correctly
5. **Always** keep mega menu dropdown within viewport bounds
6. **Always** use `/logo.png` (not `.svg`) for the logo in navbar and footer
7. **Always** verify build passes (`npm run build`) before committing
8. **Always** test on localhost first — only push to GitHub when explicitly told to
