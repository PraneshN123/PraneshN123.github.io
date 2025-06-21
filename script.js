// Optimized JavaScript for Portfolio
class PortfolioApp {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('nav-menu');
        this.sections = document.querySelectorAll('section');
        this.animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupScrollAnimations();
        this.setupTypewriter();
        this.setupIntersectionObserver();
        this.initializeLucideIcons();
    }

    // Navigation functionality
    setupNavigation() {
        // Mobile menu toggle
        this.hamburger.addEventListener('click', () => {
            this.navMenu.classList.toggle('active');
            this.hamburger.classList.toggle('active');
        });

        // Close mobile menu on link click
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.navMenu.classList.remove('active');
                this.hamburger.classList.remove('active');
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', this.throttle(() => {
            if (window.scrollY > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        }, 10));

        // Smooth scrolling for navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('data-section');
                this.scrollToSection(targetId);
            });
        });
    }

    // Active navigation highlighting based on scroll position
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-100px 0px -50px 0px'
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Update active nav link
                    this.updateActiveNavLink(entry.target.id);
                }
            });
        }, observerOptions);

        // Observe all sections
        this.sections.forEach(section => {
            if (section.id && section.id !== 'hero') {
                sectionObserver.observe(section);
            }
        });

        // Handle hero section separately
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.clearActiveNavLinks();
                }
            });
        }, { threshold: 0.5 });

        const heroSection = document.getElementById('hero');
        if (heroSection) {
            heroObserver.observe(heroSection);
        }
    }

    updateActiveNavLink(sectionId) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            }
        });
    }

    clearActiveNavLinks() {
        this.navLinks.forEach(link => link.classList.remove('active'));
    }

    // Optimized scroll animations
    setupScrollAnimations() {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Unobserve after animation to improve performance
                    animationObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        this.animatedElements.forEach(element => {
            animationObserver.observe(element);
        });
    }

    // Typewriter effect for hero name
    setupTypewriter() {
        const typewriterElement = document.getElementById('typewriter');
        const cursor = document.getElementById('cursor');
        const text = 'Pranesh N';
        let index = 0;

        const typeWriter = () => {
            if (index < text.length) {
                typewriterElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 150);
            } else {
                // Position cursor right after the text
                setTimeout(() => {
                    cursor.style.display = 'inline';
                }, 100);
            }
        };

        // Start typewriter effect after a brief delay
        setTimeout(typeWriter, 500);
    }

    // Initialize Lucide icons
    initializeLucideIcons() {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // Smooth scroll to section
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    // Throttle function for performance optimization
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
}

// Global functions for HTML onclick events
function scrollToSection(sectionId) {
    if (window.portfolioApp) {
        window.portfolioApp.scrollToSection(sectionId);
    }
}

function downloadCV() {
    // Create download link for the PDF
    const link = document.createElement('a');
    link.href = 'Pranesh Resume_1750468583041.pdf';
    link.download = 'Pranesh_N_Resume.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Performance optimizations
function optimizeImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Add loading="lazy" for performance
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
        
        // Add error handling
        img.addEventListener('error', function() {
            console.warn('Failed to load image:', this.src);
        });
    });
}

// Preload critical resources
function preloadCriticalResources() {
    const criticalImages = [
        'attached_assets/profile image_1750467487346.png',
        'attached_assets/IMG_20250607_172417_116_1750468447854.webp'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize main app
    window.portfolioApp = new PortfolioApp();
    
    // Optimize images
    optimizeImages();
    
    // Preload critical resources
    preloadCriticalResources();
    
    // Register service worker for offline functionality (optional)
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(err => {
            console.log('Service worker registration failed:', err);
        });
    }
});

// Optimize scroll performance
let ticking = false;
function updateOnScroll() {
    // Batch scroll-based updates here if needed
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
});

// Debounced resize handler
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Handle resize optimizations
        if (window.portfolioApp) {
            window.portfolioApp.initializeLucideIcons();
        }
    }, 250);
});

// Prevent layout shifts
window.addEventListener('load', function() {
    // Re-initialize icons after all content is loaded
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            const terms = formData.get('terms');
            
            // Validate form
            if (!name || !email || !message || !terms) {
                alert('Please fill in all required fields and accept the terms of service.');
                return;
            }
            
            // Create mailto link with form data
            const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            const mailtoLink = `mailto:praneshkriss@gmail.com?subject=${subject}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Thank you for your message! Your email client should open now.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    const skillsSection = document.querySelector('.technical-skills');
    
    const animateSkillBars = () => {
        const sectionTop = skillsSection.offsetTop;
        const sectionHeight = skillsSection.offsetHeight;
        const scrollPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        if (scrollPosition + windowHeight >= sectionTop + sectionHeight / 3) {
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            });
        }
    };
    
    window.addEventListener('scroll', animateSkillBars);
    animateSkillBars(); // Check on load
});