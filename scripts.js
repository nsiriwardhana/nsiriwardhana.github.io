// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;
const navbar = document.querySelector('.navbar');
const themeIcons = {
    dark: '\u2600\uFE0F',
    light: '\uD83C\uDF19'
};

function updateNavbarBackground() {
    if (!navbar) return;

    const isLightMode = htmlElement.getAttribute('data-theme') === 'light';
    const isScrolled = window.pageYOffset > 0;

    if (isLightMode) {
        navbar.style.background = isScrolled
            ? 'rgba(255, 255, 255, 0.98)'
            : 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.background = isScrolled
            ? 'rgba(2, 6, 23, 0.98)'
            : 'rgba(2, 6, 23, 0.95)';
    }
}

// Check for saved preference
const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'light') {
    htmlElement.setAttribute('data-theme', 'light');
    if (darkModeToggle) darkModeToggle.textContent = '🌙';
}

updateNavbarBackground();
if (darkModeToggle) {
    darkModeToggle.textContent = htmlElement.getAttribute('data-theme') === 'light'
        ? themeIcons.light
        : themeIcons.dark;
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        const currentMode = htmlElement.getAttribute('data-theme');
        if (currentMode === 'light') {
            htmlElement.removeAttribute('data-theme');
            localStorage.setItem('darkMode', 'dark');
            darkModeToggle.textContent = '☀️';
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            localStorage.setItem('darkMode', 'light');
            darkModeToggle.textContent = '🌙';
        }
        darkModeToggle.textContent = currentMode === 'light'
            ? themeIcons.dark
            : themeIcons.light;
        updateNavbarBackground();
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only prevent default for internal links
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .project-card, .timeline-item, .skill-box, .info-card, .stat-card, .cert-card').forEach(el => {
    observer.observe(el);
});

// Contact form handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Validate
        if (!data.name || !data.email || !data.subject || !data.message) {
            alert('Please fill in all fields');
            return;
        }

        if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            alert('Please enter a valid email address');
            return;
        }

        const mailto = [
            'mailto:nssiriwardhana22@gmail.com',
            `?subject=${encodeURIComponent(data.subject)}`,
            `&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`)}`
        ].join('');

        const successMsg = document.getElementById('successMessage');
        contactForm.style.display = 'none';
        successMsg.style.display = 'block';
        window.location.href = mailto;

        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'block';
            successMsg.style.display = 'none';
        }, 5000);
    });
}

// Active nav link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    updateNavbarBackground();
});

// Project card hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Smooth animations on page load
window.addEventListener('load', () => {
    // Add fade-in animation to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '1';
    }
});
