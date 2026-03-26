# Azhari Academy Website

A clean, professional marketing website for Azhari Academy — an online Quran and Arabic learning academy.

## Project Structure

```
aljaky_openclaw/
├── index.html          # Home page (Hero, Features, Courses preview, Testimonials)
├── courses.html        # Courses page (all 6 courses)
├── book.html           # Booking page (trial form + contact info)
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # Mobile menu & smooth scroll
├── images/             # Image assets (add here)
└── assets/             # Additional assets
```

## Features

- **3 Pages**: Home, Courses, Book a Trial
- **Fully Responsive**: Mobile, tablet, desktop
- **Floating WhatsApp Button** on all pages
- **Trial Booking Form** with FormSubmit integration
- **SEO Ready**: Meta tags, Open Graph tags
- **Modern Design**: Clean Islamic education aesthetic

## Technical Details

- **No build step required** — pure HTML/CSS/JS
- **Form handling**: Uses [FormSubmit.co](https://formsubmit.co) (no backend needed)
- **Fonts**: Cormorant Garamond (headings) + Inter (body)
- **Colors**: Deep green primary (#1a5f4a) with gold accents (#c9a227)

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

### Replace Placeholder Testimonials
Look for these comments in `index.html`:
```html
<!-- [PLACEHOLDER — replace with real testimonial] -->
```

### Update Contact Info
Edit these in all HTML files:
- WhatsApp number: `+44 7356 066651`
- Email: `info.azhari.academy@gmail.com`

### Add Logo
Replace the text logo in the navbar:
```html
<a href="index.html" class="logo">
    <img src="images/logo.png" alt="Azhari Academy">
</a>
```

## Course List

1. Quran Reading for Beginners
2. Quran Memorisation (Hifz) & Revision
3. Tajweed Course
4. Arabic for Beginners
5. Arabic for Intermediate & Advanced
6. Ijazah & Qira'at (Advanced)

## Credits

- Design based on project brief from Azhari Academy
- Icons: System emoji + WhatsApp SVG
- Fonts: Google Fonts (Cormorant Garamond, Inter)

---

**Note**: This is a static website. For dynamic features (CMS, student portal, payments), a backend would need to be added.
