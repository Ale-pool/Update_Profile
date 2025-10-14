// ===================================
// CAROUSEL FUNCTIONALITY
// ===================================
class ProjectsCarousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.dotsContainer = document.querySelector('.carousel-dots');
        this.cards = document.querySelectorAll('.project-card');
        
        this.currentIndex = 0;
        this.cardsPerView = window.innerWidth > 768 ? 2 : 1;
        this.totalSlides = Math.ceil(this.cards.length / this.cardsPerView);
        
        this.init();
    }
    
    init() {
        this.createDots();
        this.updateCarousel();
        this.attachEvents();
        this.handleResize();
    }
    
    createDots() {
        this.dotsContainer.innerHTML = '';
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotsContainer.appendChild(dot);
        }
        this.dots = document.querySelectorAll('.carousel-dot');
    }
    
    updateCarousel() {
        const cardWidth = this.cards[0].offsetWidth;
        const gap = 24; // 1.5rem in pixels
        const offset = -(this.currentIndex * (cardWidth * this.cardsPerView + gap * this.cardsPerView));
        
        this.track.style.transform = `translateX(${offset}px)`;
        
        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
        
        // Update buttons
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex >= this.totalSlides - 1;
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel();
    }
    
    next() {
        if (this.currentIndex < this.totalSlides - 1) {
            this.currentIndex++;
            this.updateCarousel();
        }
    }
    
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
        }
    }
    
    attachEvents() {
        this.nextBtn.addEventListener('click', () => this.next());
        this.prevBtn.addEventListener('click', () => this.prev());
        
        // Touch/Swipe support
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        
        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });
        
        this.track.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
        });
        
        this.track.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            
            const diff = startX - currentX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
        });
        
        // Mouse drag support
        this.track.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            isDragging = true;
            this.track.style.cursor = 'grabbing';
        });
        
        this.track.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            currentX = e.clientX;
        });
        
        this.track.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            this.track.style.cursor = 'grab';
            
            const diff = startX - currentX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
        });
        
        this.track.addEventListener('mouseleave', () => {
            if (isDragging) {
                isDragging = false;
                this.track.style.cursor = 'grab';
            }
        });
    }
    
    handleResize() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const newCardsPerView = window.innerWidth > 768 ? 2 : 1;
                if (newCardsPerView !== this.cardsPerView) {
                    this.cardsPerView = newCardsPerView;
                    this.totalSlides = Math.ceil(this.cards.length / this.cardsPerView);
                    this.currentIndex = 0;
                    this.createDots();
                    this.updateCarousel();
                }
            }, 250);
        });
    }
}

// ===================================
// LANGUAGE TOGGLE - Minimalista
// ===================================
class LanguageToggle {
    constructor() {
        this.buttons = document.querySelectorAll('.lang-toggle-btn');
        this.currentLang = 'en';
        this.init();
    }
    
    init() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchLanguage(e.currentTarget.dataset.lang);
            });
        });
    }
    
    switchLanguage(lang) {
        this.currentLang = lang;
        this.buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        // Emit custom event for language change
        console.log(`Language switched to: ${lang}`);
        document.dispatchEvent(new CustomEvent('languageChange', { detail: { lang } }));
    }
}

// ===================================
// SMOOTH SCROLL
// ===================================
class SmoothScroll {
    constructor() {
        this.links = document.querySelectorAll('a[href^="#"]');
        this.init();
    }
    
    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link
                    document.querySelectorAll('.nav-link').forEach(navLink => {
                        navLink.classList.remove('active');
                    });
                    link.classList.add('active');
                }
            });
        });
    }
}

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.lastScroll = 0;
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                this.navbar.style.background = 'rgba(0, 0, 0, 0.98)';
                this.navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
            } else {
                this.navbar.style.background = 'rgba(0, 0, 0, 0.95)';
                this.navbar.style.boxShadow = 'none';
            }
            
            this.lastScroll = currentScroll;
        });
    }
}

// ===================================
// ANIMATED COUNTERS (Optional feature)
// ===================================
class AnimatedCounter {
    constructor(element, target, duration = 2000) {
        this.element = element;
        this.target = target;
        this.duration = duration;
        this.hasAnimated = false;
    }
    
    animate() {
        if (this.hasAnimated) return;
        
        const start = 0;
        const increment = this.target / (this.duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= this.target) {
                current = this.target;
                clearInterval(timer);
                this.hasAnimated = true;
            }
            this.element.textContent = Math.floor(current);
        }, 16);
    }
}

// ===================================
// INTERSECTION OBSERVER (For animations on scroll)
// ===================================
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        this.init();
    }
    
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, this.observerOptions);
        
        // Add elements to observe (you can add more selectors)
        const elementsToAnimate = document.querySelectorAll('.profile-card, .project-card, .contact-btn');
        elementsToAnimate.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// ===================================
// STATUS INDICATOR UPDATER
// ===================================
class StatusIndicator {
    constructor() {
        this.statusDot = document.querySelector('.status-dot');
        this.statusText = document.querySelector('.status-text');
        this.isAvailable = true; // Change this to update status
    }
    
    // Method to manually update status
    updateStatus(isAvailable, customText = null) {
        this.isAvailable = isAvailable;
        
        if (isAvailable) {
            this.statusDot.style.background = '#00FF88';
            this.statusText.textContent = customText || 'Disponible para trabajar';
        } else {
            this.statusDot.style.background = '#FF5733';
            this.statusText.textContent = customText || 'No disponible';
        }
    }
}

// ===================================
// INITIALIZE ALL COMPONENTS
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousel
    const carousel = new ProjectsCarousel();
    
    // Initialize language toggle
    const langToggle = new LanguageToggle();
    
    // Initialize smooth scroll
    const smoothScroll = new SmoothScroll();
    
    // Initialize navbar scroll effect
    const navbarScroll = new NavbarScroll();
    
    // Initialize scroll animations
    const scrollAnimations = new ScrollAnimations();
    
    // Initialize status indicator
    const statusIndicator = new StatusIndicator();
    
    // Make statusIndicator globally accessible for manual updates
    window.statusIndicator = statusIndicator;
    
    console.log('Portfolio initialized successfully!');
});

// ===================================
// UTILITY FUNCTIONS
// ===================================


function debounce(func, wait) {
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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
