// DOM Elements
const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky Header
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = '#ffffff';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'transparent';
        header.style.boxShadow = 'none';
    }
});

// Mobile Menu Toggle
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuBtn.contains(e.target) && navMenu.classList.contains('active')) {
        menuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Smooth Scroll for Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add to Cart Animation
const addToCartBtns = document.querySelectorAll('.product-card .btn');
addToCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        btn.innerHTML = 'Added to Cart!';
        btn.style.backgroundColor = '#28a745';
        
        setTimeout(() => {
            btn.innerHTML = 'Add to Cart';
            btn.style.backgroundColor = '';
        }, 2000);
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Image Loading Animation
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('load', () => {
        img.style.animation = 'fadeIn 0.5s ease-in';
    });
});

// Add fadeIn animation
const fadeIn = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;

// Create and append style element
const style = document.createElement('style');
style.textContent = fadeIn;
document.head.appendChild(style);

// Parallax Effect for Hero Section
const heroImage = document.querySelector('.hero-image img');
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        if (heroImage) {
            heroImage.style.transform = `translate3d(0px, ${rate}px, 0px) rotate(${rate * 0.02}deg)`;
        }
    }
});

// Enhanced Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
}, observerOptions);

document.querySelectorAll('.product-card, .feature-card, .stat-item').forEach(element => {
    element.classList.add('fade-in');
    appearOnScroll.observe(element);
});

// Add animation styles
const fadeInAnimation = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .fade-in.appear {
        opacity: 1;
        transform: translateY(0);
    }
`;

const animationStyle = document.createElement('style');
animationStyle.textContent = fadeInAnimation;
document.head.appendChild(animationStyle);

// Intersection Observer for Animations
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1 });

// Add animation to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animateOnScroll.observe(section);
});

// Add .animate class styles
const animateStyles = `
    .animate {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

const animateStyleElement = document.createElement('style');
animateStyleElement.textContent = animateStyles;
document.head.appendChild(animateStyleElement);
