# Azhari Academy — Domain & Deployment Setup Guide

A complete record of how the Azhari Academy website was taken from a GitHub repo to a live production website with a custom domain.

---

## Project Overview

- **Website:** Azhari Academy — an online Quran and Arabic learning academy
- **GitHub Repo:** https://github.com/rafipatel/alazhari_academy
- **Live Netlify URL (pre-domain):** https://golden-fairy-2a5f7a.netlify.app
- **Final Live URL:** https://azhariacademy.org
- **Tech Stack:** Pure HTML / CSS / JavaScript (static site, no backend)
- **Hosting:** Netlify (free tier)
- **Domain Registrar:** Namecheap

---

## Step 1 — Domain Research

We searched for available domain names across **GoDaddy** and **Namecheap** using two search terms: `azhari` and `azhariacademy`.

### Key findings:
- `azhari.com` — ❌ TAKEN (broker fee ~£77.99)
- `azhari.net` — ❌ TAKEN
- `azhari.org` — ❌ TAKEN
- `azhariacademy.com` — ❌ TAKEN (broker fee ~£77.99)
- `azhariacademy.co.uk` — ❌ TAKEN

### Best available options considered:

| Domain | GoDaddy | Namecheap |
|---|---|---|
| azhari.academy | £15.31/yr | £7.77/yr |
| azhariacademy.org | £7.49/yr | £5.55/yr |
| azhariacademy.net | £0.01/yr (3yr) | £9.63/yr |
| azhari.co.uk | £0.01/yr (3yr) | — |
| azhari.uk | £0.01/yr (3yr) | — |

### Decision: `azhariacademy.org`
- Professional `.org` TLD — trusted for educational institutions
- Clear, descriptive, and memorable
- Available on Namecheap for **£5.55/yr**
- Both `azhariacademy.org` and `www.azhariacademy.org` configured

---

## Step 2 — Why Namecheap over GoDaddy

GoDaddy was offering `azhariacademy.org` for **£47.43 for 3 years** (£15.81/yr) plus pushing a "Full Domain Protection" upsell at £0.67/mo (£8/yr).

Namecheap was cheaper at **£5.55/yr** and includes:
- **WhoisGuard privacy protection — free for life** (GoDaddy charges extra)
- No pressure upsells needed
- Clean, straightforward checkout

**What we skipped at checkout (and why):**
- ❌ PremiumDNS — not needed, Netlify provides DNS
- ❌ SSL Certificate — Netlify provides free SSL via Let's Encrypt
- ❌ Email Hosting — not required to launch
- ❌ Web Hosting / SiteMaker — using Netlify instead
- ❌ Any other add-ons — unnecessary for a static site

**Total cost: ~£5.55 for the first year.**

---

## Step 3 — Deploying to Netlify

The site was deployed to Netlify directly from the GitHub repository.

1. Go to [netlify.com](https://netlify.com) and sign up / log in
2. Click **"Add new project"** → **"Import an existing project"**
3. Connect to GitHub and select the `rafipatel/alazhari_academy` repo
4. Netlify auto-detects it as a static site (no build command needed)
5. Click **Deploy** — site goes live instantly

**Resulting Netlify URL:** `https://golden-fairy-2a5f7a.netlify.app`

> Every future push to the `main` branch on GitHub automatically triggers a new deploy on Netlify.

---

## Step 4 — Connecting the Custom Domain on Netlify

### 4a. Add the domain in Netlify

1. Go to **Netlify Dashboard** → click on your site (`golden-fairy-2a5f7a`)
2. Click **"Go to Domain management"** (or navigate to Site Settings → Domain management)
3. Click **"Add a domain"** → **"Add a domain you already own"**
4. Type `azhariacademy.org` → click **Verify** → click **Add domain**

Netlify automatically added both:
- `azhariacademy.org` — **Primary domain** ⭐
- `www.azhariacademy.org` — **Redirects automatically to primary domain**

### 4b. Get Netlify's nameservers

1. In Domain management, click **Options** next to `azhariacademy.org`
2. Click **"Set up Netlify DNS"**
3. Click **Verify** → click **Add domain**
4. Netlify displays 4 nameservers to copy:
```
dns1.p08.nsone.net
dns2.p08.nsone.net
dns3.p08.nsone.net
dns4.p08.nsone.net
```

---

## Step 5 — Updating Nameservers on Namecheap

1. Log in to [Namecheap](https://ap.www.namecheap.com)
2. Go to **Domain List** → click **Manage** next to `azhariacademy.org`
3. Find the **NAMESERVERS** section
4. Change the dropdown from **"Namecheap BasicDNS"** to **"Custom DNS"**
5. Four input fields appear — enter all 4 Netlify nameservers:
   - Nameserver 1: `dns1.p08.nsone.net`
   - Nameserver 2: `dns2.p08.nsone.net`
   - Nameserver 3: `dns3.p08.nsone.net` (click "Add Nameserver" to reveal)
   - Nameserver 4: `dns4.p08.nsone.net` (click "Add Nameserver" again)
6. Click the **green checkmark** ✔ to save

**Confirmation message:** *"DNS server update may take up to 48 hours to take effect."*

---

## Step 6 — DNS Propagation & SSL

### DNS Propagation
- Typically takes **15 minutes to a few hours** (up to 48hrs in rare cases)
- Monitor progress at: [dnschecker.org](https://dnschecker.org) — search `azhariacademy.org`
- Once the nameservers show `p08.nsone.net` globally, the domain is live

### SSL Certificate (HTTPS)
- Once DNS propagates, Netlify **automatically provisions a free SSL certificate** via Let's Encrypt
- No action needed — Netlify handles this automatically
- Site becomes available at `https://azhariacademy.org` with a padlock 🔒

---

## Step 7 — www vs non-www

**Decision: Use `azhariacademy.org` (no www) as primary.**

- Cleaner, shorter, more modern
- Industry standard for most brands in 2026
- Netlify automatically handles the www → non-www redirect
- Visitors typing `www.azhariacademy.org` are seamlessly redirected to `azhariacademy.org`

---

## Architecture Summary
```
GitHub (rafipatel/alazhari_academy)
        ↓  auto-deploy on push to main
Netlify (golden-fairy-2a5f7a)
        ↓  custom domain
azhariacademy.org  ←  Namecheap (registrar, Custom DNS → Netlify)
www.azhariacademy.org  →  redirects to azhariacademy.org
```

---

## Costs

| Item | Provider | Cost |
|---|---|---|
| `azhariacademy.org` domain | Namecheap | ~£5.55/yr |
| WhoisGuard privacy protection | Namecheap | **Free** |
| Hosting | Netlify | **Free** |
| SSL Certificate | Netlify / Let's Encrypt | **Free** |
| **Total** | | **~£5.55/yr** |

---

## Recommended Next Steps

- [ ] Test the live site on mobile and desktop once DNS propagates
- [ ] Update contact details in HTML files (WhatsApp numbers, email address)
- [ ] Submit site to **Google Search Console** for indexing
- [ ] Set up a professional email e.g. `info@azhariacademy.org` (Zoho Mail has a free tier)
- [ ] Add **Google Analytics** or a privacy-friendly alternative (e.g. Plausible)
- [ ] Consider renaming the Netlify project from `golden-fairy-2a5f7a` to something cleaner (optional, cosmetic)

---

*Setup completed: April 1, 2026*