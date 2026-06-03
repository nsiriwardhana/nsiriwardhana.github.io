# Nipuni Siriwardhana - Data Science Portfolio

A modern, responsive portfolio website showcasing data science, machine learning, and data engineering projects and experience.

## ✨ Features

### Design & UX
- **🌓 Dark/Light Mode Toggle** - Switch between themes with the sun/moon button in navbar
- **✨ Smooth Animations** - Fade-in effects, hover animations, and smooth scrolling
- **📱 Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **🎨 Modern Gradients** - Beautiful color gradients on text, buttons, and backgrounds
- **🖱️ Interactive Elements** - Hover effects, active nav highlighting, smooth transitions

### Functionality
- **📧 Contact Form** - Fully functional form with email validation and success messaging
- **🔗 Smooth Navigation** - Scroll-to-section navigation with smooth behavior
- **🎯 Active Link Highlighting** - Navigation links highlight based on current scroll position
- **👀 Intersection Observers** - Elements fade in as they come into view
- **💾 Persistent Theme** - Dark/light mode preference saved in browser storage

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, gradients, animations, flexbox, grid
- **Vanilla JavaScript** - No frameworks, lightweight and performant

## 📁 Project Structure

```
nsiriwardhana.github.io/
├── index.html        # Main HTML file with all sections
├── style.css         # Styling with dark/light mode support
├── scripts.js        # JavaScript for interactivity
├── images/           # Images folder (profile photo, etc.)
├── README.md         # This documentation
└── cv.pdf           # CV file (add this when ready)
```

## 📋 Portfolio Sections

1. **Hero Section** - Eye-catching introduction with CTA buttons
2. **About** - Profile summary with key information cards
3. **Experience** - Work experience timeline
4. **Projects** - Featured projects with technology tags
5. **Skills** - Technical skills and tools
6. **Contact** - Contact form and social media links

## 🚀 How to Deploy on GitHub Pages

### Setup (One-time)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Portfolio initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository: https://github.com/nsiriwardhana/nsiriwardhana.github.io
   - Click **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Select **main** branch and **/ (root)** directory
   - Click **Save**

3. **Your site goes live at:** `https://nsiriwardhana.github.io`
   - Give it 2-3 minutes to deploy

### Update Your Portfolio

After making changes:
```bash
git add .
git commit -m "Update portfolio - add new project"
git push
```

Changes will be live within a few minutes!

## 🎨 Customization Guide

### Update Content

Edit `index.html`:
- Profile information
- Experience dates and descriptions
- Project details and links
- Skills list
- Contact information and social links

### Update Profile Image

1. Replace `images/Profile.jpg` with your photo
2. Keep the same filename or update the reference in `index.html`

### Add CV

1. Add your `cv.pdf` file to the root directory
2. CV link in hero section will then work

### Customize Colors

Edit CSS variables at the top of `style.css`:

**Dark Mode (default):**
```css
:root {
    --accent: #2563eb;
    --accent-light: #60a5fa;
    --bg-primary: #020617;
    --text-primary: #ffffff;
    /* ... */
}
```

**Light Mode:**
```css
html[data-theme="light"] {
    --bg-primary: #ffffff;
    --text-primary: #000000;
    /* ... */
}
```

## 💡 Features Explained

### Dark Mode Toggle
- Located in top-right of navbar
- Clicking toggles between dark and light themes
- Your preference is automatically saved

### Contact Form
- Validates name, email, and message fields
- Shows error if email format is invalid
- Displays success message on submission
- Form resets after 3 seconds

### Smooth Animations
- Sections fade in as you scroll down the page
- Cards have lift-on-hover effect
- Navigation links have animated underlines
- All animations are GPU-accelerated for smooth performance

### Active Navigation
- Current section is highlighted in navbar as you scroll
- Clicking nav links smoothly scrolls to that section

## 📱 Responsive Breakpoints

- **Desktop:** Full layout (> 1200px)
- **Tablet:** Adjusted grid and spacing (900px - 1200px)
- **Mobile:** Single column, optimized touch (< 900px)

## 🔗 Important Links

- **Portfolio URL:** https://nsiriwardhana.github.io
- **GitHub Profile:** https://github.com/nsiriwardhana
- **LinkedIn:** https://www.linkedin.com/in/nipunisiriwardhana/
- **Medium:** https://medium.com/@nipunisiriwardhana
- **Email:** nssiriwardhana22@gmail.com

## ✅ Deployment Checklist

Before going live, ensure:
- [ ] Profile image is in `images/` folder
- [ ] CV file is in root directory (if using Download CV button)
- [ ] Social media links are updated
- [ ] All project descriptions are correct
- [ ] Contact information is current
- [ ] Tested dark mode toggle
- [ ] Tested responsive design on mobile
- [ ] All links work correctly

## 🎯 Next Steps

1. Add your profile image to `images/` folder
2. Update all content in `index.html`
3. Add your CV file
4. Push to GitHub
5. Enable GitHub Pages (instructions above)
6. Share your portfolio!

## 📞 Support

For any issues or questions about the portfolio:
- Check the code comments in HTML/CSS/JS files
- Review the GitHub Pages documentation: https://docs.github.com/en/pages
- Email: nssiriwardhana22@gmail.com

---

**Portfolio Version:** 2.0 (Enhanced with animations, dark mode, contact form)  
**Last Updated:** June 2026  
**Status:** ✅ Ready to Deploy