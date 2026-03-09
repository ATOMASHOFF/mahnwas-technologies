# Mahnwas Technology — Deployment Guide
## A Mahnwas Groups Division

## Project Structure

```
mahnwas-technology/
├── index.html                 # Main HTML file
├── css/
│   └── styles.css             # All CSS styles
├── js/
│   └── script.js              # All JavaScript functionality
├── README.md                  # This file
└── mahnwas-technologies_3.html # Original backup
```

## Project Overview

**Mahnwas Technology**, a division of **Mahnwas Groups**, is a modern, responsive SaaS website for digital infrastructure serving MSMEs (Micro, Small & Medium Enterprises) in India.

### Key Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dark mode aesthetic with gold/amber accents
- ✅ Smooth animations and scroll reveals
- ✅ Mobile hamburger menu
- ✅ Scroll progress bar
- ✅ Showcases 3 Mahnwas Technology products
- ✅ Built by Mahnwas Groups for modern businesses
- ✅ FAQ accordion functionality
- ✅ Animated counter animations
- ✅ Active navigation highlighting
- ✅ Optimized images via Unsplash CDN

## Sections

1. **Hero** - Eye-catching landing section with CTA
2. **About** - Company mission and values
3. **How It Works** - 4-step onboarding process
4. **Products** - 3 main SaaS platforms (Gym OS, Flow School, MSME Tools)
5. **Market** - Market opportunity statistics
6. **Innovation** - Future concept (HealthyFi)
7. **Vision** - Company vision and pillars
8. **Testimonials** - Customer feedback
9. **FAQ** - Common questions
10. **CTA** - Final call to action
11. **Footer** - Links and contact

## Installation & Deployment

### Option 1: Static Web Hosting (Recommended)

Deploy to any static hosting service:

**Vercel**
```bash
vercel --cwd .
```

**Netlify**
- Drag & drop the folder to Netlify
- Or connect your Git repo

**GitHub Pages**
```bash
# Push all files to gh-pages branch
git push origin main
```

**AWS S3 + CloudFront**
```bash
aws s3 sync . s3://your-bucket-name/
```

### Option 2: Traditional Web Server

Upload all files to your server:
```
/public_html/
├── index.html
├── css/styles.css
└── js/script.js
```

## File Details

### index.html
- Clean semantic HTML5
- External CSS & JS references
- Google Fonts integration
- Meta tags for SEO

### css/styles.css
- ~2500 lines of modern CSS
- CSS Custom Properties (variables)
- Mobile-first responsive design
- Animations and transitions
- No CSS frameworks - pure CSS
- Color scheme:
  - Background: `#09080a`
  - Accent Gold: `#c9a227`
  - Text: `#ede9df`

### js/script.js
- ~350 lines of vanilla JavaScript
- No external dependencies
- Features:
  - Intersection Observer for scroll reveals
  - Smooth scroll behavior
  - Mobile menu toggle
  - FAQ accordion
  - Scroll progress bar
  - Active nav highlighting
  - Counter animations

## Performance Optimization

✅ **Already Optimized:**
- Inline critical CSS
- Lazy-loaded images (via Unsplash CDN)
- Optimized animations with CSS transforms
- Minimal JavaScript (vanilla, no libraries)
- Gzipped delivery recommended

**Further Optimization:**
```bash
# Minify CSS (if needed)
cssnano styles.css

# Minify JS (if needed)
terser script.js
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Google Fonts Used

1. **Syne** (Display) - Weights: 400, 500, 600, 700, 800
2. **DM Sans** (Body) - Weights: 300, 400, 500
3. **DM Mono** (Code/Labels) - Weights: 300, 400

## Contact & Forms

**Email Handler:**
```html
<a href="mailto:contact@mahnwas.com">contact@mahnwas.com</a>
```

**Demo Request Form:**
Currently displays a static form. To enable submissions:
- Integrate with Formspree, EmailJS, or custom backend
- Update `.wl-form` JavaScript handler

## SEO Meta Tags

✅ Included:
- Title tag
- Meta description
- Open Graph tags (add to head if needed)
- Structured data (add Schema.org if needed)

**To Enhance:**
```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
```

## Image CDN

All images use **Unsplash** URLs for demos:
```
https://images.unsplash.com/photo-{id}?w=800&auto=format&fit=crop&q=80
```

**For Production:**
Replace with your own hosted images for better performance and reliability.

## Environment Variables (Optional)

If adding a backend, create `.env`:
```
VITE_API_URL=https://your-api.com
VITE_CONTACT_EMAIL=contact@yourdomain.com
```

## Analytics Setup

Add Google Analytics (optional):
```html
<!-- Add before closing </body> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## SSL/TLS

Always serve over HTTPS for production. Most hosting platforms provide free SSL.

## Maintenance Checklist

- [ ] Update contact links (email, social media)
- [ ] Replace demo images with branded assets
- [ ] Configure form submission backend
- [ ] Add analytics tracking
- [ ] Set up domain & SSL
- [ ] Test on all devices
- [ ] Optimize & minify assets
- [ ] Set up CDN if needed
- [ ] Configure caching headers
- [ ] Monitor Core Web Vitals

## Common Customizations

### Change Brand Colors
Edit CSS variables in `styles.css`:
```css
:root {
  --c-accent: #c9a227;      /* Gold */
  --c-accent-lt: #e8c547;   /* Light gold */
  --c-bg: #09080a;           /* Background */
}
```

### Modify Typography
```css
:root {
  --font-disp: 'Your Display Font';
  --font-body: 'Your Body Font';
  --font-mono: 'Your Mono Font';
}
```

### Change Container Width
```css
:root {
  --max-w: 1200px;  /* Change here */
}
```

## Deployment Checklist

- [ ] All files in correct folder structure
- [ ] CSS file path correct: `href="css/styles.css"`
- [ ] JS file path correct: `src="js/script.js"`
- [ ] Google Fonts loading properly
- [ ] No console errors
- [ ] Responsive design tested
- [ ] All links working
- [ ] Images loading fully
- [ ] Mobile menu functioning
- [ ] FAQ accordion working
- [ ] Contact email correct

## Support & Troubleshooting

**Issue: Styles not loading**
- Check file path: `css/styles.css`
- Clear browser cache (Ctrl+F5)
- Check for 404 errors in DevTools

**Issue: JavaScript not working**
- Check file path: `js/script.js`
- Open browser console (F12) for errors
- Ensure JavaScript is enabled

**Issue: Fonts not loading**
- Check internet connection
- Verify Google Fonts link in `<head>`
- Add `preconnect` for faster loading

## Ready to Deploy! 🚀

Your site is production-ready. Simply:

1. Upload all files to your hosting
2. Update configuration as needed
3. Add your domain
4. Enable SSL
5. Monitor and maintain

---

**Built with** ❤️ **for Mahnwas Technology**  
**Parent Company: Mahnwas Groups**  
**Last Updated:** 2025
