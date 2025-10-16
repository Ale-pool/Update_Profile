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
// ===================================
// TRANSLATIONS DICTIONARY
// ===================================
const translations = {
    es: {
        // Navbar
        'nav-home': 'Home',
        'nav-about': 'Acerca',
        'nav-services': 'Servicios',
        'nav-curriculum': 'Curriculum',
        'nav-portfolio': 'Portafolio',
        
        // Status
        'status-available': 'Disponible para trabajar',
        'status-unavailable': 'No disponible',

        // buttons home 
        'contact-button-text': 'Contactame',
        'email-button-text': 'Correo',
        
        // Home Section
        'profile-title': 'Ingeniero Informático',
        'cta-button': 'Ver Trabajos',
        'contact-whatsapp': 'Contáctame por WhatsApp',
        'download-cv': 'Descargar CV',
        
        // About Section
        'about-label': 'Conóceme',
        'about-title': 'Acerca de mi',
        'about-title-highlight': 'Mí',
        'about-subtitle': 'Ingeniero Informático | Analista de Datos | Desarrollador',
        'about-text-1': 'Soy un profesional apasionado por la tecnología, especializado en análisis de datos, desarrollo de software e inteligencia artificial. Mi enfoque combina habilidades técnicas sólidas con una visión estratégica para crear soluciones innovadoras.',
        'about-text-2': 'Con experiencia en múltiples lenguajes de programación y frameworks modernos, me dedico a transformar datos en insights accionables y desarrollar aplicaciones que generen un impacto real en los negocios. Conosco lenguajes de programación como Python y JavaScript, y frameworks como React para el desarrollo frontend. Además, tengo experiencia trabajando con bases de datos SQL y NoSQL, lo que me permite diseñar, optimizar y mantener estructuras de información eficientes.',
        'about-text-3': 'me considero una persona analítica, autodidacta y comprometido, con una fuerte inclinación por   aprender constantemente y explorar nuevas tecnologías. Disfruto trabajar en entornos colaborativos donde se combinan la innovación, la investigación y la ingeniería para resolver problemas reales. ',
        'stat-1-number': '+3',
        'stat-1-label': 'Años de Experiencia',
        'stat-2-number': '+15',
        'stat-2-label': 'Proyectos Completados',
        'stat-3-number': '100%',
        'stat-3-label': 'Tecnologías Dominadas',
        'about-cta': 'Contáctame',
        
        // Services Section
        'services-label': 'LO QUE HAGO',
        'services-title-highlight': 'NUESTROS SERVICIOS',
        'services-description': 'Soluciones tecnológicas innovadoras diseñadas para contribuir al desarrollo tecnológico',
        'service-1-title': 'Análisis de Datos',
        'service-1-desc': 'Transformo datos en información valiosa para impulsar decisiones estratégicas y mejorar el rendimiento de los procesos organizacionales. Desde la recolección y limpieza de datos hasta la creación de visualizaciones e implementación de modelos predictivos.',
        'service-1-feat-1': 'Análisis Exploratorio de Datos (EDA)',
        'service-1-feat-2': 'Dashboards Interactivos',
        'service-1-feat-3': 'Reportes Automatizados',
        
        'service-2-title': 'Desarrollador web',
        'service-2-desc': 'Diseño y desarrollo de aplicaciones web modernas, interactivas y escalables, utilizando tecnologías como React, HTML, CSS y Javascript. Me enfoco en la experiencia del usuario, el rendimiento y la integración con APIs o bases de datos',
        'service-2-feat-1': 'Modelos Predictivos',
        'service-2-feat-2': 'Clasificación y Regresión',
        'service-2-feat-3': 'Procesamiento de Lenguaje Natural',
        
        'service-3-title': 'Soluciones en la nube',
        'service-3-desc': 'Implemento arquitecturas seguras y eficientes en la nube, integrando servicios de AWS y Azure para el procesamiento, almacenamiento y despliegue de aplicaciones o flujos de datos automatizados',
        'service-3-feat-1': 'Frontend Moderno (React, Vue)',
        'service-3-feat-2': 'Backend Robusto (Node.js, Python)',
        'service-3-feat-3': 'APIs RESTful y GraphQL',
        
        'service-4-title': 'Business Intelligence',
        'service-4-desc': 'Diseño soluciones de BI que permiten a las organizaciones tomar decisiones basadas en datos en tiempo real.',
        'service-4-feat-1': 'Data Warehousing',
        'service-4-feat-2': 'ETL Processes',
        'service-4-feat-3': 'KPI Dashboards',
        
        'service-5-title': 'Bases de Datos',
        'service-5-desc': 'Diseño, optimización y administración de bases de datos relacionales y NoSQL para máximo rendimiento.',
        'service-5-feat-1': 'Diseño de Esquemas',
        'service-5-feat-2': 'Optimización de Consultas',
        'service-5-feat-3': 'Migración de Datos',
        
        'service-6-title': 'Inteligencia Artificial',
        'service-6-desc': 'Implemento soluciones de IA incluyendo chatbots inteligentes, sistemas de recomendación y visión por computadora.',
        'service-6-feat-1': 'Chatbots con LLM',
        'service-6-feat-2': 'Sistemas de Recomendación',
        'service-6-feat-3': 'Computer Vision',
        
        'tech-title': 'Tecnologías que manejo',
        
        // Curriculum Section
        'cv-label': 'MI TRAYECTORIA',
        'cv-title': 'Currículum',
        'cv-phrase' : 'Un recorrido por mi formación académica, experiencia profesional y certificaciones',
        'cv-title-highlight': 'Vitae',
        'cv-download': 'Descargar CV',
        
        'cv-experience': 'Experiencia Profesional',
        'cv-education': 'Educación',
        'cv-courses': 'Cursos y Certificaciones',
        
        'exp-1-title': 'Bancolombia - Analista de Datos (Prácticas Profesionales)',
        'exp-1-company': 'TechCorp Solutions',
        'exp-1-period': 'Enero 2025 - julio 2025',
        'exp-1-location': 'Medellín, Colombia',
        'exp-1-desc': 'Desarrollé un modelo de detección de riesgos fiduciarios aplicando técnicas de machine learning como Isolation Forest, análisis de redes y clustering. A partir de los datos de órdenes de pago, identifiqué patrones anómalos y generé visualizaciones interactivas en Power BI, facilitando la toma de decisiones del área de fiduciaria.',
        'exp-1-li-2': 'Limpieza, análisis y modelado de datos con Python (pandas, scikit-learn).',
        'exp-1-li-3': 'Construcción de dashboards dinámicos con Power BI.',
        'exp-1-li-4': 'Optimización técnica de los procesos analíticos.',
        'exp-1-li-5': 'Implementación de procesos ETL y flujos de datos con AWS Glue y DynamoDB.',
        'exp-2-title': 'Code Journey - Desarrollador Frontend (Proyecto Académico)',
        'exp-2-company': 'Digital Innovations',
        'exp-2-period': '2023 - 2024',
        'exp-2-location': 'Medellín, Colombia',

        'exp-2-desc': 'Desarrollo de una aplicación móvil interactiva para el aprendizaje de programación, utilizando React Native, enfocada en mejorar la experiencia de usuario mediante ejercicios prácticos y seguimiento personalizado.',
        'exp-cod-1':'Implementación de interfaz con react native y TailwindCSS.',
        'exp-cod-2':'Integración con API para gestión de datos de usuario.',
        'exp-cod-3':'Coordinación del equipo de desarrollo (4 personas).',


        'edu-1-title': 'Ingeniería Informática',
        'edu-1-institution': 'Universidad de Antioquia',
        'edu-1-period': '2020 - 2025',
        'edu-1-location': 'Medellín, Colombia',
        'edu-description' : 'Formación profesional en desarrollo de software, bases de datos, análisis de datos e infraestructura en la nube. Enfoque en el diseño de soluciones tecnológicas que integran backend en Python, frontend en React, y servicios AWS/Azure.',
        
        'edu-2-title': 'Bachiller Académico',
        'edu-2-institution': 'Normal Superior de Envigado',
        'edu-2-period': '2008 - 2019',
        'edu-2-location': 'Medellín, Colombia',
        

        // courses descriptions

        'course-description-1' : 'Creación de dashboards, medidas DAX, conexión a fuentes externas y storytelling con datos.',
        'course-description-2' : 'Introducción a IA, machine learning y automatización inteligente.',
        'course-description-3' : 'Análisis estadístico, visualización de datos y manejo de librerías como pandas y matplotlib.',
        'course-description-4' : 'Fundamentos de la nube, servicios básicos, arquitectura y seguridad.',
        'course-description-5' : 'Flujo de trabajo colaborativo con GitHub y gestión de versiones en proyectos de desarrollo.',
        'course-description-6' : 'Desarrollo de aplicaciones web con Django y PostgreSQL.',

        // Portfolio Section
        'portfolio-label': 'MIS PROYECTOS',
        'portfolio-title': 'Mis Proyectos',
        'portfolio-title-highlight': 'Reciente',
        'portfolio-subtitle': 'Una selección de proyectos que demuestran mi experiencia en desarrollo, análisis de datos y soluciones tecnológicas',
        
        'project-btn': 'Ver Más',
        'modal-category': 'Categoría',
        'modal-date': 'Fecha',
        'modal-tech': 'Tecnologías Utilizadas',
        'modal-features': 'Características Principales',
        'modal-live': 'Ver Proyecto',
        'modal-github': 'Ver Código',
        'modal-close': 'Cerrar',
        
        // Footer
        'footer-description': 'Ingeniero Informático apasionado por aprender y crear soluciones relacionadas a la Analítica, Desarrollo e IA',
        'footer-links-title': 'ENLACES RÁPIDOS',
        'footer-link-home': 'Inicio',
        'footer-link-services': 'Nuestros Servicios',
        'footer-link-about': 'Acerca de mí',
        'footer-link-cv': 'Currículum',
        'footer-link-portfolio': 'Portafolio',
        'footer-contact-title': 'Contáctame',
        'footer-location-label': 'Ubicación:',
        'footer-location': 'Medellín, Colombia',
        'footer-email-label': 'Email:',
        'footer-whatsapp': 'Contáctanos por WhatsApp',
        'footer-copyright': '© 2025 Alex Villada. Todos los derechos reservados.',
        'footer-made': 'Diseñado y desarrollado por Alexander Villada',
        'footer-by': 'por Alex Villada'
    },
    en: {
        // Navbar
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-services': 'Services',
        'nav-curriculum': 'Resume',
        'nav-portfolio': 'Portfolio',
        
        // Status
        'status-available': 'Available for work',
        'status-unavailable': 'Not available',

         // buttons home 
        'contact-button-text': 'contact me',
        'email-button-text': 'mail',
        
        // Home Section
        'profile-title': 'Computer Engineer',
        'cta-button': 'View Work',
        'contact-whatsapp': 'Contact me on WhatsApp',
        'download-cv': 'Download Resume',
        
        // About Section
        'about-label': 'Know Me',
        'about-title': 'About Me',
        'about-title-highlight': 'Me',
        'about-subtitle': 'Computer Engineer | Data Analyst | Developer',
        'about-text-1': 'I am a technology-passionate professional, specialized in data analysis, software development, and artificial intelligence. My approach combines solid technical skills with a strategic vision to create innovative solutions.',
        'about-text-2': 'With experience in multiple programming languages and modern frameworks, I dedicate myself to transforming data into actionable insights and developing applications that generate real business impact, I am familiar with programming languages ​​like Python and JavaScript, and frameworks like React for front-end development. I also have experience working with SQL and NoSQL databases, which allows me to design, optimize, and maintain efficient data structures. ',
        'about-text-3': 'I consider myself an analytical, self-taught, and committed person, with a strong inclination to constantly learn and explore new technologies. I enjoy working in collaborative environments where innovation, research, and engineering come together to solve real problems.',
        'stat-1-number': '+3',
        'stat-1-label': 'Years Experience',
        'stat-2-number': '+15',
        'stat-2-label': 'Projects Completed',
        'stat-3-number': '100%',
        'stat-3-label': 'Mastered Technologies',
        'about-cta': 'Contact Me',
        
        // Services Section
        'services-label': 'WHAT I DO',
        'services-title-highlight': ' Our Services',
        'services-description': 'Innovative technological solutions designed to contribute to technological development',
        'service-1-title': 'Data Analysis',
        'service-1-desc': 'I transform data into valuable information to drive strategic decisions and improve the performance of organizational processes. From data collection and cleansing to creating visualizations and implementing predictive models.',
        'service-1-feat-1': 'Exploratory Data Analysis (EDA)',
        'service-1-feat-2': 'Interactive Dashboards',
        'service-1-feat-3': 'Automated Reports',

        'service-2-title': 'Web Development',
        'service-2-desc': 'Design and development of modern, interactive, and scalable web applications using technologies such as React, HTML, CSS, and JavaScript. I focus on user experience, performance, and integration with APIs and databases.',
        'service-2-feat-1': 'Predictive Models',
        'service-2-feat-2': 'Classification & Regression',
        'service-2-feat-3': 'Natural Language Processing',
        
        'service-3-title': 'Cloud Solutions',
        'service-3-desc': 'I implementation of secure and efficient cloud architectures, integrating AWS and Azure services for processing, storage, and deployment of applications or automated data flows.',
        'service-3-feat-1': 'Modern Frontend (React, Vue)',
        'service-3-feat-2': 'Robust Backend (Node.js, Python)',
        'service-3-feat-3': 'RESTful & GraphQL APIs',
        
        'service-4-title': 'Business Intelligence',
        'service-4-desc': 'I design BI solutions that enable organizations to make real-time data-driven decisions.',
        'service-4-feat-1': 'Data Warehousing',
        'service-4-feat-2': 'ETL Processes',
        'service-4-feat-3': 'KPI Dashboards',
        
        'service-5-title': 'Databases',
        'service-5-desc': 'Design, optimization, and administration of relational and NoSQL databases for maximum performance.',
        'service-5-feat-1': 'Schema Design',
        'service-5-feat-2': 'Query Optimization',
        'service-5-feat-3': 'Data Migration',
        
        'service-6-title': 'Artificial Intelligence',
        'service-6-desc': 'I implement AI solutions including intelligent chatbots, recommendation systems, and computer vision.',
        'service-6-feat-1': 'LLM Chatbots',
        'service-6-feat-2': 'Recommendation Systems',
        'service-6-feat-3': 'Computer Vision',
        
        'tech-title': 'Technologies I work with',
        
        // Curriculum Section
        'cv-label': 'MY JOURNEY',
        'cv-title': 'Curriculum',
        'cv-phrase': 'A tour of my academic training, professional experience and certifications',
        'cv-title-highlight': 'Vitae',
        'cv-download': 'Download Resume',
        
        'cv-experience': 'Professional Experience',
        'cv-education': 'Education',
        'cv-courses': 'Courses & Certifications',
        
        'exp-1-title': 'Bancolombia - Data Analyst (Internship)',
        'exp-1-company': 'TechCorp Solutions',
        'exp-1-period': 'January 2025 - July 2025',
        'exp-1-location': 'Medellín, Colombia',
        'exp-1-desc': 'I developed a fiduciary risk detection model using machine learning techniques such as Isolation Forest, network analysis, and clustering. Using payment order data, I identified anomalous patterns and generated interactive visualizations in Power BI, facilitating decision-making in the fiduciary department.',
        'exp-1-li-2': 'Data cleaning, analysis, and modeling with Python (pandas, scikit-learn).',
        'exp-1-li-3': 'Building dynamic dashboards with Power BI.',
        'exp-1-li-4': 'Technical optimization of analytical processes.',
        'exp-1-li-5': 'Implementation of ETL processes and data flows with AWS Glue and DynamoDB.',

        'exp-2-title': 'Code Journey - Frontend Developer (Academic Project)',
        'exp-2-company': 'Digital Innovations',
        'exp-2-period': '2023 - 2024',
        'exp-2-location': 'Medellín, Colombia',
        'exp-2-desc': 'Development of an interactive mobile app for learning programming, using React Native, focused on improving the user experience through practical exercises and personalized follow-up.',
        'exp-cod-1':'Utilized React Native for cross-platform mobile app development.',
        'exp-cod-2':'Implemented Redux for state management and improved performance.',
        'exp-cod-3':'Conducted user testing sessions to gather feedback and iterate on the design.',

        'edu-1-title': 'Computer Engineering',
        'edu-1-institution': 'Universidad de Antioquia',
        'edu-1-period': '2020 - 2025',
        'edu-1-location': 'Medellín, Colombia',
        'edu-description': 'Professional training in software development, databases, data analysis, and cloud infrastructure. Focus on the design of technological solutions that integrate Python backends, React frontends, and AWS/Azure services.',
        
        'edu-2-title': 'Hight shool',
        'edu-2-institution': 'Normal Superior de Envigado',
        'edu-2-period': '2008 - 2019',
        'edu-2-location': 'Medellín, Colombia',
        'edu-shool-description': 'Development of skills in logical, mathematical, and problem-solving thinking, which are the basis for my current analytical and technological approach.',

        // courses descriptions

        'course-description-1' : 'Creating dashboards, DAX measurements, connecting to external sources, and data storytelling.',
        'course-description-2' : 'Introduction to AI, machine learning, and intelligent automation.',
        'course-description-3' : 'Statistical analysis, data visualization, and handling libraries like pandas and matplotlib.',
        'course-description-4' : 'Cloud fundamentals, basic services, architecture, and security.',
        'course-description-5' : 'Collaborative workflow with GitHub and version control in development projects.',
        'course-description-6' : 'Web application development with Django and PostgreSQL.',


        // Portfolio Section
        'portfolio-label': 'MY PROJECTS',
        'portfolio-title': 'My Projects',
        'portfolio-title-highlight': 'Portfolio',
        'portfolio-subtitle': 'A selection of my recent work showcasing skills in data analysis, web development, and cloud solutions.',
        
        'project-btn': 'View More',
        'modal-category': 'Category',
        'modal-date': 'Date',
        'modal-tech': 'Technologies Used',
        'modal-features': 'Key Features',
        'modal-live': 'View Project',
        'modal-github': 'View Code',
        'modal-close': 'Close',
        
        // Footer
        'footer-description': 'Computer Engineer passionate about learning and creating solutions related to Analytics, Development, and AI',
        'footer-links-title': 'QUICK LINKS',
        'footer-link-home': 'Home',
        'footer-link-services': 'Our Services',
        'footer-link-about': 'About Me',
        'footer-link-cv': 'Resume',
        'footer-link-portfolio': 'Portfolio',
        'footer-contact-title': 'Contact Me',
        'footer-location-label': 'Location:',
        'footer-location': 'Medellín, Colombia',
        'footer-email-label': 'Mail:',
        'footer-whatsapp': 'Contact us on WhatsApp',
        'footer-copyright': '© 2025 Alex Villada. All rights reserved.',
        'footer-made': 'Designed and developed by Alexander Villada',
    }
};

// ===================================
// LANGUAGE TOGGLE - Enhanced with Translations
// ===================================
class LanguageToggle {
    constructor() {
        this.buttons = document.querySelectorAll('.lang-toggle-btn');
        this.currentLang = 'es'; // Default language
        this.init();
    }
    
    init() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchLanguage(e.currentTarget.dataset.lang);
            });
        });
        
        // Apply default language on load
        this.applyTranslations(this.currentLang);
    }
    
    switchLanguage(lang) {
        if (lang === this.currentLang) return; // No change needed
        
        this.currentLang = lang;
        
        // Update button active states
        this.buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        // Apply translations
        this.applyTranslations(lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Emit custom event for language change
        console.log(`Language switched to: ${lang}`);
        document.dispatchEvent(new CustomEvent('languageChange', { detail: { lang } }));
    }
    
    applyTranslations(lang) {
        const t = translations[lang];
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (t[key]) {
                // Check if element is an input/textarea (use placeholder)
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = t[key];
                } else {
                    element.textContent = t[key];
                }
            }
        });
        
        // Update status indicator if available
        if (window.statusIndicator) {
            const isAvailable = window.statusIndicator.isAvailable;
            const statusKey = isAvailable ? 'status-available' : 'status-unavailable';
            if (window.statusIndicator.statusText) {
                window.statusIndicator.statusText.textContent = t[statusKey];
            }
        }
        
        console.log(`✅ Translations applied for: ${lang}`);
    }
    
    // Get translation for a specific key
    translate(key) {
        return translations[this.currentLang][key] || key;
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
    
    // Make components globally accessible
    window.statusIndicator = statusIndicator;
    window.langToggle = langToggle;
    window.portfolioModal = portfolioModal;
    
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
