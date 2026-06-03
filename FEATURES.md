# Portfolio Features Quick Reference

## 🎨 Styling Features

### Dark/Light Mode
- **Location:** Sun/moon button in top-right navbar
- **How it works:** Toggles `data-theme="light"` attribute on HTML
- **Auto-save:** Uses localStorage to remember preference
- **Affects:** All colors, backgrounds, text, and borders

### Animations
- **Fade-in:** Elements fade in as you scroll into view
- **Hover effects:** Cards lift, buttons glow, skill boxes change color
- **Smooth scroll:** Navigation links scroll smoothly
- **Duration:** 0.3s - 0.8s for all transitions

### Responsive Design
- **Mobile:** < 600px (single column, smaller fonts)
- **Tablet:** 600px - 900px (2-column grids)
- **Desktop:** > 900px (full multi-column layout)

## 🔧 Interactive Features

### Contact Form
**Location:** Contact section
**Validation:**
- Name: Required
- Email: Required + valid format check
- Message: Required (minimum suggested)

**On Submit:**
- Shows success message
- Hides form for 3 seconds
- Resets form automatically

### Navigation
**Active Section Highlighting:** 
- Nav links highlight as you scroll
- Shows which section you're currently viewing

**Smooth Scrolling:**
- Click any nav link to smoothly scroll to section
- Also works for Download CV and View Projects buttons

## 📝 Content Customization

### What to Update in index.html

1. **Hero Section**
   - Name, title, subtitle
   - Summary text
   - Button links (CV path, project link)
   - Profile image path

2. **About Section**
   - Bio paragraphs
   - Role, focus, and tools cards

3. **Experience Section**
   - Job titles, companies, dates
   - Job descriptions (bullet points)

4. **Projects Section**
   - Project titles
   - Descriptions
   - Technology tags

5. **Skills Section**
   - Skill box text

6. **Contact Section**
   - Email address
   - GitHub, LinkedIn, Medium links

### Images
- Profile image: `images/Profile.jpg`
- Can be any format (jpg, png, gif, webp)
- Keep size under 500KB for fast loading

### Files to Add
- `cv.pdf` - Referenced in hero section Download CV button

## 🎨 CSS Customization

### Main Variables (Top of style.css)

**Dark Mode (Default):**
```css
--bg-primary: #020617 (background)
--text-primary: #ffffff (main text)
--accent: #2563eb (main color)
--accent-light: #60a5fa (lighter accent)
--card-bg: #111827 (card backgrounds)
```

**Light Mode:**
Same variables but with light colors

### Common CSS Changes

**Change accent color:**
Find and replace `#2563eb` and `#60a5fa` throughout

**Adjust spacing:**
Change `padding` values in section and container styles

**Modify fonts:**
Change font-family in body selector

**Adjust border radius:**
Change `border-radius` values for rounder/sharper corners

## 🔗 Important Links in HTML

All external links to update:
- GitHub: `https://github.com/nsiriwardhana`
- LinkedIn: `https://www.linkedin.com/in/nipunisiriwardhana/`
- Medium: `https://medium.com/@nipunisiriwardhana`
- Email: `mailto:nssiriwardhana22@gmail.com`

## 🚀 Deployment

**Local Testing:**
```bash
# Just open index.html in browser - no server needed!
```

**Deploy:**
1. Push to GitHub
2. Enable Pages in Settings
3. Wait 2-3 minutes
4. Live at: https://nsiriwardhana.github.io

**Update:**
```bash
git add .
git commit -m "Update portfolio"
git push
```
Updates go live in 2-3 minutes!

## 📊 Performance Tips

- Keep images under 500KB
- Use .webp format for images (smaller file size)
- Minimize number of large files
- Use `<picture>` tags for responsive images (advanced)

## 🔍 Testing Checklist

Before sharing:
- [ ] Dark mode toggles correctly
- [ ] Light mode looks good
- [ ] All links work
- [ ] Contact form validates inputs
- [ ] Mobile view looks good (test at 375px)
- [ ] Tablet view looks good (test at 768px)
- [ ] All images load
- [ ] Animations are smooth
- [ ] No console errors (F12 Dev Tools)

## 📱 Browser Compatibility

Works on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Older browsers might not support:
- CSS Grid (will fallback gracefully)
- Some CSS animations
- localStorage (dark mode won't persist)

## 💡 Pro Tips

1. **Add project images:** Insert image tags in project cards
2. **Add icons:** Use emoji or add icon library (Font Awesome)
3. **Add animations:** Increase animation duration in CSS
4. **Add blog:** Link to Medium posts from portfolio
5. **Add testimonials:** Add new section with quotes from colleagues

---

**Last Updated:** June 2026
**Portfolio Version:** 2.0
