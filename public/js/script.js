// ==========================================
// Smooth Scroll Animations on Scroll (AOS)
// ==========================================

// Initialize Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('[data-aos]');
    elementsToAnimate.forEach(element => {
        animateOnScroll.observe(element);
    });
});

// ==========================================
// Testimonials Slider
// ==========================================

let currentSlide = 0;
const testimonialTrack = document.querySelector('.testimonial-track');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const totalSlides = testimonialCards.length;

function updateSlider() {
    const slideWidth = testimonialCards[0].offsetWidth;
    const gap = 32; // 2rem gap
    const offset = -(currentSlide * (slideWidth + gap));
    testimonialTrack.style.transform = `translateX(${offset}px)`;
}

function moveSlider(direction) {
    if (direction === 'next') {
        currentSlide = (currentSlide + 1) % totalSlides;
    } else {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    }
    updateSlider();
}

// Auto-advance testimonials every 5 seconds
let autoSlide = setInterval(() => {
    moveSlider('next');
}, 5000);

// Reset auto-advance when manually navigating
document.querySelectorAll('.slider-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
            moveSlider('next');
        }, 5000);
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    updateSlider();
});

// ==========================================
// Navbar Scroll Effect
// ==========================================

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 10) {
        navbar.style.boxShadow = '0 2px 16px rgba(10, 26, 47, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ==========================================
// Smooth Scrolling for Navigation Links
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Service Card Hover Effect Enhancement
// ==========================================

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `translateY(-8px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// ==========================================
// Hero Floating Shapes Animation Enhancement
// ==========================================

const shapes = document.querySelectorAll('.floating-shape');

shapes.forEach((shape, index) => {
    // Random movement on mouse move
    document.addEventListener('mousemove', (e) => {
        const speed = (index + 1) * 0.02;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ==========================================
// Counter Animation for Stats (if needed)
// ==========================================

function animateCounter(element, target, duration) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// ==========================================
// Form Validation (if contact form is added)
// ==========================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ==========================================
// Lazy Loading Images (if images are added)
// ==========================================

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// ==========================================
// Performance: Throttle Function
// ==========================================

function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================
// Mobile Menu Toggle (for responsive)
// ==========================================

const createMobileMenu = () => {
    if (window.innerWidth <= 768) {
        const navLinks = document.querySelector('.nav-links');
        const menuButton = document.createElement('button');
        menuButton.className = 'mobile-menu-btn';
        menuButton.innerHTML = '☰';
        menuButton.style.cssText = `
            display: block;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--navy);
            cursor: pointer;
        `;
        
        menuButton.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'white';
            navLinks.style.padding = '1rem';
            navLinks.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)';
        });
    }
};

// ==========================================
// Initialize on Load
// ==========================================

window.addEventListener('load', () => {
    // Remove any loading states
    document.body.classList.add('loaded');
    
    // Initialize slider
    updateSlider();
    
    // Add smooth entrance animation
    const hero = document.querySelector('.hero');
    hero.style.opacity = '0';
    setTimeout(() => {
        hero.style.transition = 'opacity 0.6s ease';
        hero.style.opacity = '1';
    }, 100);
});

// ==========================================
// Console Easter Egg
// ==========================================

console.log('%c🚀 ParsOps - DevOps as a Service', 'font-size: 20px; color: #00C2D1; font-weight: bold;');
console.log('%cInterested in joining our team? Contact us at contact@parsops.com', 'font-size: 12px; color: #0A1A2F;');
