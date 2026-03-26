# Azhari Academy — Website Project Brief

> **Brief prepared for:** Azhari Academy website build — March 2026
> **Environment:** Use conda env `aljaky` exclusively for this project.

---

## 1. Project Overview

Build a clean, professional, and visually compelling marketing website for **Azhari Academy** — an online Quran and Arabic learning academy.

The site must immediately build trust, clearly communicate course offerings, and convert visitors into **free trial session bookings**.

**Tone:** Warm, trustworthy, and professional — suitable for UK and US audiences seeking quality online Islamic education for themselves or their children.

---

## 2. Academy Details

| Field | Value |
|---|---|
| Academy Name | Azhari Academy |
| Email | info.azhari.academy@gmail.com |
| WhatsApp (Academy) | +44 7356066651 |
| WhatsApp (Manager / Egypt) | +20 1119587818 |
| Domain | azhariacademy.com *(to be registered)* |
| Target Audience | Muslims in the UK and US — all ages (children and adults) |

---

## 3. Goals

- Present Azhari Academy as a credible, professional online academy
- Clearly showcase all courses offered
- Drive visitors to book a **free trial session**
- Provide easy contact options (WhatsApp button, contact form)
- Look great when shared as a link in messages or on social media

---

## 4. Site Structure (3 Pages)

### Page 1 — Home (`/`)

The most important page. Must be engaging and persuasive from the first section.

#### Sections (in order)

**① Hero Section**
- Strong headline communicating the academy's value (e.g. *"Learn Quran & Arabic Online with Qualified Egyptian Teachers"*)
- Short subheading (1–2 lines)
- Two CTA buttons: **"Book a Free Trial"** and **"View Courses"**
- Background: high-quality stock or AI-generated image relating to Quran learning or Islamic aesthetics — clean, not cluttered

**② Why Azhari Academy?** *(Trust / Value Section)*
- 3–4 feature highlights with icons:
  - ✅ Qualified Egyptian teachers
  - ✅ All ages welcome
  - ✅ Flexible scheduling
  - ✅ One-to-one sessions

**③ Courses Overview** *(Summary Cards)*
- Brief card per course (name + one-line description)
- "See All Courses" button linking to the Courses page

**④ Testimonials**
- 3 placeholder testimonials (clearly marked for replacement)
- Examples:
  - *"My son has improved so much in just a few months. The teacher is patient and encouraging."* — Parent, UK
  - *"I started as a complete beginner and can now read the Quran with proper Tajweed."* — Adult student, USA
  - *"The flexibility of scheduling makes it so easy to fit around our family routine."* — Parent, UK

> **Note for developer:** Mark each placeholder in the code with a comment:
> `<!-- [PLACEHOLDER — replace with real testimonial] -->`

**⑤ Call to Action Banner**
- Full-width section: bold headline + **"Book Your Free Trial Now"** button

**⑥ Footer**
- Academy name and logo
- Email and WhatsApp number
- Quick links: Home · Courses · Book a Trial
- WhatsApp icon link
- Optional short tagline

---

### Page 2 — Courses (`/courses`)

List all six courses. Use cards or a clean list layout.

| # | Course | Description |
|---|---|---|
| 1 | **Quran Reading for Beginners** | Step-by-step course to read the Quran correctly from the basics. |
| 2 | **Quran Memorisation (Hifz) & Revision** | Structured memorisation program with regular revision and teacher follow-up. |
| 3 | **Tajweed Course** | Rules of Tajweed through theoretical explanation and practical recitation. |
| 4 | **Arabic for Beginners** | Learn to read and speak basic Arabic from scratch. |
| 5 | **Arabic for Intermediate & Advanced** | Improve Arabic proficiency and deepen linguistic understanding. |
| 6 | **Ijazah & Qira'at (Advanced)** | For advanced students/teachers studying recitation chains and specialised readings. |

Each course card must include:
- Course title
- Short description
- **"Book a Free Trial"** button (links to `/book`)

> **Pricing is intentionally omitted.** Visitors are directed to contact the academy.

---

### Page 3 — Book a Trial (`/book`)

Two components on this page:

#### Free Trial Booking Form

| Field | Type | Required |
|---|---|---|
| Student Name | Text | ✅ |
| Parent / Guardian Name | Text | Optional |
| WhatsApp / Phone Number | Text | ✅ |
| Email Address | Email | ✅ |
| Previous Quran or Arabic study? | Dropdown / Short text | Optional |
| Preferred Days | Checkboxes (Mon–Sun) | Optional |
| Preferred Time (approximate) | Text or Dropdown | Optional |
| Additional Notes | Text area | Optional |

**Form submission:** Google Form embed or `mailto` to +44 7356066651 — no backend required.

#### Contact Section *(below the form)*

- 📧 Email: info.azhari.academy@gmail.com
- 📱 WhatsApp: +44 7356066651
- Clickable "Message Us on WhatsApp" button

---

## 5. Floating WhatsApp Button

> **High priority — must be implemented.**

- Fixed to **bottom-right corner** on all pages
- Opens WhatsApp chat to **+44 7356066651**
- Must be visible and accessible on mobile and desktop

---

## 6. Design Direction

### Aesthetic
- Clean, elegant, modern
- Professional but warm — not cold or corporate
- Trustworthy for parents choosing education for their children
- Subtle Islamic / academic feel — not overly themed

### Colour Palette
No specific colours mandated. Suggested direction:
- **Deep greens**, **golds**, or **navy blues** — common in Islamic education branding
- Avoid garish or childish colours (the academy serves all ages)

### Typography
- Pair an elegant **serif or display font** for headings with a clean **sans-serif** for body text
- Prioritise readability on all screen sizes

### Imagery
- No custom photos currently available
- Use **Unsplash / Pexels** stock images or AI-generated images
- Themes: Quran learning, online classes, children studying, adult students, teacher–student interaction, Islamic learning environment
- Avoid generic or low-quality imagery

### Logo
- Current logo is child-oriented; a redesign is needed for an all-ages brand
- Redesign direction: incorporate "Azhari Academy" with a clean, subtle icon (crescent, book, or calligraphic element — professional, not childish)
- Existing logo file: `./client_main_logo.PNG`
- Client will review and can provide an updated version if needed

---

## 7. Technical Requirements

### Must-Have
- [ ] Fully responsive (mobile, tablet, desktop)
- [ ] Fast loading
- [ ] Floating WhatsApp button on all pages
- [ ] Trial booking form (Google Form iframe or mailto — no backend)
- [ ] SEO basics: page titles, meta descriptions, Open Graph tags

### Nice-to-Have
- [ ] Smooth scroll animations (subtle)
- [ ] Hover effects on cards and buttons
- [ ] Clean URL structure (`/courses`, `/book`)

### Out of Scope
- ❌ Payment processing
- ❌ Student login / portal
- ❌ Blog or news section
- ❌ Complex CMS
- ❌ Pricing page
- ❌ Arabic RTL language support (English only for now)
- ❌ Student management system

---

## 8. Hosting & Deployment

- **Domain:** azhariacademy.com *(to be registered)*
- **Recommended hosting:** Netlify or Vercel (simple static hosting is sufficient)
- Site builder alternatives (Wix, Webflow, Framer) are acceptable if the output looks and performs professionally

---

## 9. Deliverables

| # | Deliverable | Notes |
|---|---|---|
| 1 | Fully built website (3 pages) | Home · Courses · Book a Trial |
| 2 | Floating WhatsApp button | All pages |
| 3 | Trial booking form | Live and working |
| 4 | SEO setup | Titles, meta, Open Graph |
| 5 | Fully responsive design | Mobile · Tablet · Desktop |
| 6 | Logo | Redesigned from `./client_main_logo.PNG` |
| 7 | Login / access details | Handed to client upon completion |

---

## 10. Developer Notes

- **Client is non-technical** — the site should be easy for a third party to update text and images later
- **Placeholder testimonials** must be clearly marked in code/CMS comments: `[PLACEHOLDER — replace with real testimonial]`
- **WhatsApp button is a must** — prioritise this above all other enhancements
- **Hero section is critical** — invest the most design effort here; first impressions matter
- Keep page count at exactly 3 — do not over-engineer
- Booking form does not require a database — Google Form iframe or mailto is perfectly acceptable