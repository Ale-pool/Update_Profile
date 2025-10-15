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
        this.isAvailable = true;
        
        // Initialize with the current status
        this.init();
    }
    
    init() {
        // Apply the initial status when the page loads
        this.updateStatus(this.isAvailable);
    }
    
    // Method to manually update status
    updateStatus(isAvailable, customText = null) {
        this.isAvailable = isAvailable;
        
        if (isAvailable) {
            this.statusDot.style.background = '#00FF88';
            this.statusDot.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.6)';
            this.statusText.textContent = customText || 'Disponible para trabajar';
        } else {
            this.statusDot.style.background = '#FF5733';
            this.statusDot.style.boxShadow = '0 0 20px rgba(255, 87, 51, 0.6)';
            this.statusText.textContent = customText || 'No disponible';
        }
    }
    
    // Toggle between available and unavailable
    toggle() {
        this.updateStatus(!this.isAvailable);
    }
    
    // Quick methods for easy access
    setAvailable(customText = null) {
        this.updateStatus(true, customText);
    }
    
    setUnavailable(customText = null) {
        this.updateStatus(false, customText);
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
    
    // Initialize portfolio modal
    const portfolioModal = new PortfolioModal();
    
    // Make statusIndicator globally accessible for manual updates
    window.statusIndicator = statusIndicator;
    
    /* ====================================================================
       CÓMO CAMBIAR EL ESTADO DE DISPONIBILIDAD:
       ====================================================================
       
       OPCIÓN 1: Cambiar el estado inicial en el constructor (línea 326)
       this.isAvailable = true;  // Disponible (verde)
       this.isAvailable = false; // No disponible (naranja)
       
       OPCIÓN 2: Usar la consola del navegador (F12):
       window.statusIndicator.setAvailable();        // Cambiar a disponible
       window.statusIndicator.setUnavailable();      // Cambiar a no disponible
       window.statusIndicator.toggle();              // Alternar estado
       
       OPCIÓN 3: Con texto personalizado:
       window.statusIndicator.setAvailable("Disponible ahora");
       window.statusIndicator.setUnavailable("Ocupado hasta Enero 2026");
       
       ==================================================================== */
    
    console.log('Portfolio initialized successfully!');
    console.log('💡 Para cambiar el estado de disponibilidad, usa: window.statusIndicator.setAvailable() o .setUnavailable()');
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

// ===================================
// PORTFOLIO MODAL
// ===================================
class PortfolioModal {
    constructor() {
        this.modal = document.getElementById('projectModal');
        this.modalOverlay = this.modal.querySelector('.modal-overlay');
        this.modalClose = this.modal.querySelector('.modal-close');
        this.projectCards = document.querySelectorAll('.project-card');
        
        // Project data
        this.projects = {
            '1': {
                title: 'Modelo Predictivo',
                category: 'Machine Learning',
                date: '2024',
                image: 'img/proyecto-predictivo.jpg',
                description: 'Desarrollé un modelo de detección de riesgos fiduciarios aplicando técnicas avanzadas de machine learning. Utilicé algoritmos como Isolation Forest para identificar anomalías, análisis de redes para detectar patrones relacionales sospechosos, y clustering para agrupar comportamientos similares. El proyecto incluyó limpieza y transformación de grandes volúmenes de datos de órdenes de pago, implementación de procesos ETL con AWS Glue, y visualización interactiva en Power BI para facilitar la toma de decisiones.',
                technologies: ['Python', 'Scikit-learn', 'Pandas', 'Power BI', 'AWS Glue', 'DynamoDB'],
                features: [
                    'Implementación de algoritmos de detección de anomalías (Isolation Forest)',
                    'Análisis de redes para identificar patrones relacionales complejos',
                    'Técnicas de clustering para segmentación de comportamientos',
                    'Dashboards interactivos en Power BI con KPIs en tiempo real',
                    'Procesos ETL automatizados con AWS Glue',
                    'Optimización de rendimiento para grandes volúmenes de datos'
                ],
                liveLink: '#',
                githubLink: '#'
            },
            '2': {
                title: 'Code Journey',
                category: 'Desarrollo Móvil',
                date: '2023-2024',
                image: 'img/proyecto-code-journey.jpg',
                description: 'Aplicación móvil educativa desarrollada con React Native para facilitar el aprendizaje de programación. La app ofrece una experiencia interactiva con ejercicios prácticos, seguimiento de progreso personalizado, y sistema de gamificación. Incluye integración con API REST para gestión de usuarios, autenticación con JWT, y almacenamiento local con AsyncStorage. El diseño UI/UX fue optimizado con TailwindCSS para garantizar una experiencia fluida en dispositivos iOS y Android.',
                technologies: ['React Native', 'TailwindCSS', 'JavaScript', 'REST API', 'AsyncStorage', 'JWT'],
                features: [
                    'Interfaz responsive optimizada para iOS y Android',
                    'Sistema de ejercicios interactivos con validación en tiempo real',
                    'Seguimiento de progreso con gráficos y estadísticas',
                    'Autenticación segura con tokens JWT',
                    'Almacenamiento local para uso offline',
                    'Coordinación de equipo de desarrollo con metodología ágil'
                ],
                liveLink: '#',
                githubLink: '#'
            },
            '3': {
                title: 'Consolación - 15 Años',
                category: 'Desarrollo Web',
                date: '2024',
                image: 'img/proyecto-consolacion.jpg',
                description: 'Página web conmemorativa para celebración de 15 años, desarrollada con enfoque en diseño elegante y experiencia de usuario excepcional. El sitio incluye galería de fotos interactiva con lightbox, formulario de confirmación de asistencia con validación, mapa interactivo con ubicación del evento, y cuenta regresiva animada. Optimizado para SEO y rendimiento, con tiempos de carga menores a 2 segundos.',
                technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Google Maps API', 'Lightbox'],
                features: [
                    'Diseño responsivo premium con animaciones suaves',
                    'Galería de fotos interactiva con efecto lightbox',
                    'Formulario de confirmación con validación y email notifications',
                    'Integración de Google Maps con marcador personalizado',
                    'Cuenta regresiva animada hasta el evento',
                    'Optimización SEO y performance (Lighthouse score 95+)'
                ],
                liveLink: '#',
                githubLink: '#'
            },
            '4': {
                title: 'Festival de Música',
                category: 'Desarrollo Web',
                date: '2024',
                image: 'img/proyecto-festival.jpg',
                description: 'Plataforma web para festival de música electrónica con venta de entradas online, lineup interactivo, y mapa del venue. Sistema de reservas con pasarela de pago integrada (Stripe), gestión de usuarios con perfiles personalizados, y panel administrativo para organizadores. Incluye notificaciones push, integración con redes sociales, y sistema de códigos promocionales.',
                technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Socket.io'],
                features: [
                    'Sistema de venta de entradas con pasarela de pago Stripe',
                    'Lineup interactivo con información de artistas en tiempo real',
                    'Mapa interactivo del venue con ubicación de escenarios',
                    'Panel administrativo para gestión de eventos y ventas',
                    'Sistema de notificaciones push para actualizaciones',
                    'Integración con redes sociales para compartir eventos'
                ],
                liveLink: '#',
                githubLink: '#'
            },
            '5': {
                title: 'Sistema de Gestión SQL',
                category: 'Base de Datos',
                date: '2023',
                image: 'img/proyecto-sql.jpg',
                description: 'Sistema completo de gestión de base de datos para empresa de retail, diseñado con PostgreSQL. Incluye modelado de datos normalizado, stored procedures optimizados, triggers para auditoría automática, y vistas materializadas para reportes de alto rendimiento. El sistema maneja gestión de inventario, ventas, clientes, y proveedores con integridad referencial garantizada.',
                technologies: ['PostgreSQL', 'SQL', 'PL/pgSQL', 'Python', 'SQLAlchemy', 'Pandas'],
                features: [
                    'Diseño de base de datos normalizado (3NF) con más de 20 tablas',
                    'Stored procedures optimizados para operaciones complejas',
                    'Triggers para auditoría automática de cambios',
                    'Vistas materializadas para reportes de alto rendimiento',
                    'Sistema de backup automático y recuperación ante desastres',
                    'Scripts de migración y seeders para datos de prueba'
                ],
                liveLink: '#',
                githubLink: '#'
            },
            '6': {
                title: 'LLM Chatbot Assistant',
                category: 'Inteligencia Artificial',
                date: '2024',
                image: 'img/proyecto-llm.jpg',
                description: 'Asistente conversacional inteligente desarrollado con Large Language Models (LLM) y técnicas de RAG (Retrieval-Augmented Generation). El chatbot utiliza embeddings vectoriales para búsqueda semántica en bases de conocimiento, integración con OpenAI GPT-4 para generación de respuestas contextuales, y sistema de memoria conversacional. Incluye interfaz web interactiva y API REST para integración con otros sistemas.',
                technologies: ['Python', 'OpenAI API', 'LangChain', 'ChromaDB', 'FastAPI', 'React'],
                features: [
                    'Integración con OpenAI GPT-4 para respuestas inteligentes',
                    'Sistema RAG con búsqueda semántica en bases de conocimiento',
                    'Embeddings vectoriales con ChromaDB para alta precisión',
                    'Memoria conversacional para contexto persistente',
                    'API REST para integración con múltiples plataformas',
                    'Interfaz web moderna con chat en tiempo real'
                ],
                liveLink: '#',
                githubLink: '#'
            }
        };
        
        this.init();
    }
    
    init() {
        this.attachEvents();
    }
    
    attachEvents() {
        // Open modal on card click
        this.projectCards.forEach(card => {
            const btn = card.querySelector('.project-btn');
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const projectId = card.getAttribute('data-project');
                this.openModal(projectId);
            });
        });
        
        // Close modal events
        this.modalClose.addEventListener('click', () => this.closeModal());
        this.modalOverlay.addEventListener('click', () => this.closeModal());
        
        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
        
        // Prevent modal content click from closing
        this.modal.querySelector('.modal-content').addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    
    openModal(projectId) {
        const project = this.projects[projectId];
        if (!project) return;
        
        // Populate modal content
        document.getElementById('modalImage').src = project.image;
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalCategory').textContent = project.category;
        document.getElementById('modalDate').textContent = project.date;
        document.getElementById('modalDescription').textContent = project.description;
        
        // Populate technologies
        const techTagsContainer = document.getElementById('modalTechTags');
        techTagsContainer.innerHTML = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        // Populate features
        const featuresContainer = document.getElementById('modalFeatures');
        featuresContainer.innerHTML = project.features.map(feature => 
            `<li>${feature}</li>`
        ).join('');
        
        // Update links
        document.getElementById('modalLiveLink').href = project.liveLink;
        document.getElementById('modalGithubLink').href = project.githubLink;
        
        // Show modal
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}
