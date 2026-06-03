# GitHub Pages Deployment Guide

## Quick Deployment (5 minutes)

### Step 1: Initialize Git (if not done)
```bash
cd e:\PROJECTS\ (selfstudy)\Portfolio-Website\nsiriwardhana.github.io
git init
git add .
git commit -m "Initial portfolio commit"
```

### Step 2: Add Remote Repository
```bash
git remote add origin https://github.com/nsiriwardhana/nsiriwardhana.github.io.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to: https://github.com/nsiriwardhana/nsiriwardhana.github.io
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Source", select "Deploy from a branch"
5. Select **main** branch and **/ (root)** folder
6. Click **Save**

### Step 4: Wait for Deployment
- GitHub will deploy your site
- Check progress in Settings → Pages
- You'll see a green checkmark when live

### Your Site is Live! 🎉
Visit: **https://nsiriwardhana.github.io**

---

## Updating Your Portfolio

Every time you make changes:

```bash
# From your project directory
git add .
git commit -m "Update: describe your changes"
git push
```

Changes go live in 2-3 minutes!

---

## Before First Deploy - Checklist

- [ ] Profile image added to `images/` folder
- [ ] Content updated in `index.html`
- [ ] CV file `cv.pdf` added to root (optional)
- [ ] Social media links updated
- [ ] All sections reviewed for typos
- [ ] Dark mode tested
- [ ] Mobile responsiveness tested
- [ ] Tested contact form

---

## Troubleshooting

### Site not showing up?
- Wait 5+ minutes after first push
- Check Settings → Pages to see deployment status
- Ensure files are pushed to `main` branch

### Old version still showing?
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache

### Can't push to GitHub?
- Check SSH key setup: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
- Or use HTTPS with personal access token

---

## Next Features (Optional)

- Add Google Analytics
- Add blog posts
- Add email form integration (Formspree)
- Add search functionality
- Add project filters

---

## Need Help?

- GitHub Pages Docs: https://pages.github.com
- GitHub Help: https://docs.github.com/en/pages
- Check your repo settings and deployment status

**Your portfolio is now production-ready!** 🚀
