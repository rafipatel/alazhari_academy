# Azhari Academy Website

A clean, professional marketing website for Azhari Academy — an online Quran and Arabic learning academy serving students across the UK, US, and beyond.

## Project Structure

```
alazhari_academy/
├── index.html          # Home page (Hero, Why Choose, Features, Courses preview, Testimonials, CTA)
├── courses.html        # Courses page (6 courses + personalised approach section)
├── book.html           # Booking page (trial form + contact info)
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # Animations, counters, mobile menu, scroll effects
├── images/
│   ├── logo.jpeg           # Academy logo
│   ├── new_image_1.jpeg    # Woman studying with books & laptop (features section)
│   ├── new_image_2.jpeg    # Happy kids with teacher (why choose section)
│   ├── new_image_3.jpeg    # Al-Azhar mosque, Cairo (testimonials & CTA backgrounds)
│   ├── new_image_4.jpeg    # Woman reading Quran in online class (hero backgrounds)
│   └── quran-open.png      # (legacy, replaced by new_image_4)
└── assets/             # Additional assets
```

## Pages & Sections

### index.html — Home
- **Hero**: Headline, two-line intro, "Book Free Trial" + "Book Free Trial on WhatsApp" + "Explore Courses" buttons, animated stats (1000+ students, 50+ teachers)
- **Why Choose Azhari Academy**: Two-column section — kids image + 6 bullet points
- **Features**: Al-Azhar Qualified, All Ages, Flexible Scheduling, One-to-One Focus (with image)
- **Courses Preview**: 6 subject tags with CTA
- **Testimonials**: 3 cards over Al-Azhar background
- **Final CTA**: "Ready to start your Quran journey?" with WhatsApp & email links

### courses.html — Courses
- Page header with hero image
- Personalised approach intro with image
- 6 detailed course cards: Quran Reading, Hifz, Tajweed, Arabic, Islamic Studies, Ijazah & Qira'at
- Final CTA section

### book.html — Book a Trial
- Page header with hero image
- Booking form (FormSubmit.co) with fields:
  - Student Name, Parent/Guardian Name, WhatsApp/Phone, Email
  - **Country**, **Age of Student**, **Level** (Beginner / Intermediate) ← new
  - Previous study, Preferred Days, Preferred Time, Notes
- Contact sidebar: Email, WhatsApp UK, WhatsApp Egypt
- "What happens next?" steps

## Features

- **3 Pages**: Home, Courses, Book a Trial
- **Fully Responsive**: Mobile, tablet, desktop
- **Floating WhatsApp Button** on all pages
- **Hero WhatsApp CTA Button**: "Book Free Trial on WhatsApp" directly in the hero
- **Why Choose section**: Image + bullet list two-column layout
- **Trial Booking Form** with Country, Age, and Level fields
- **Animated stat counters**: 1000+ students, 50+ teachers
- **Scroll animations**: reveal-on-scroll, stagger-children, 3D card hovers
- **SEO Ready**: Meta tags, Open Graph tags

## Technical Details

- **No build step required** — pure HTML/CSS/JS
- **Form handling**: Uses [FormSubmit.co](https://formsubmit.co) (no backend needed)
- **Fonts**: Cormorant Garamond (headings) + Inter (body) + Amiri (Arabic)
- **Colors**: Deep green `#0d4a38` (primary) + gold `#d4a84b` (secondary)

## Deployment

### Option 1: Netlify (Recommended)
1. Drag & drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Site goes live instantly
3. Custom domain: Add azhariacademy.com in settings

### Option 2: Vercel
```bash
npm i -g vercel
vercel --prod
```

### Option 3: Any Static Host
Upload all files to your web server. No server-side processing required.

## Customization

### Update Contact Info
Edit in all HTML files:
- WhatsApp (UK): `+44 7356 066651`
- WhatsApp (Egypt): `+20 111 958 7818`
- Email: `info.azhari.academy@gmail.com`

### Update Stats
In `index.html`, find `.stat-number` spans in the hero section:
```html
<span class="stat-number">1000+</span>  <!-- Students -->
<span class="stat-number">50+</span>    <!-- Teachers -->
```

### Replace Images
All images are in the `images/` folder. Current mapping:
| File | Used for |
|---|---|
| `new_image_4.jpeg` | Hero background (all pages) |
| `new_image_1.jpeg` | Features/approach section image |
| `new_image_2.jpeg` | Why Choose section image |
| `new_image_3.jpeg` | Testimonials + CTA background |

## Course List

1. Quran Reading for Beginners
2. Quran Memorisation (Hifz) & Revision
3. Tajweed
4. Arabic Language (Beginner to Advanced)
5. Islamic Studies (Fiqh, Aqeedah, Seerah, Hadith)
6. Ijazah & Qira'at (Advanced)

## Credits

- Design & development for Azhari Academy
- Icons: System emoji + WhatsApp SVG (inline)
- Fonts: Google Fonts (Cormorant Garamond, Inter, Amiri)

---

**Note**: This is a static website. For dynamic features (CMS, student portal, payments), a backend would need to be added.
