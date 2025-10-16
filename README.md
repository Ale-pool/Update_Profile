# 💼 Portafolio Personal - Alexander Villada

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Alexander_Villada-FF5733?style=for-the-badge)
![Status](https://img.shields.io/badge/status-Active-00FF88?style=for-the-badge)

**Portafolio web profesional y moderno para mostrar proyectos, habilidades y experiencia**


</div>

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Personalización](#-personalización)
- [Secciones](#-secciones)
- [Sistema de Traducción](#-sistema-de-traducción)
- [Responsive Design](#-responsive-design)
- [Contribuciones](#-contribuciones)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## ✨ Características

- 🎨 **Diseño Moderno y Minimalista** - Interfaz limpia con esquema de color negro/naranja
- 🌐 **Multiidioma (ES/EN)** - Sistema completo de traducción español/inglés
- 📱 **Totalmente Responsive** - Optimizado para todos los dispositivos (Desktop, Tablet, Mobile)
- ⚡ **Alto Rendimiento** - Carga rápida y animaciones fluidas con CSS puro
- 🎭 **Animaciones Suaves** - Efectos hover, transiciones y animaciones keyframe
- 🖼️ **Carrusel Interactivo** - Showcase de proyectos con navegación touch/swipe
- 🎯 **Modal Dinámico** - Vista detallada de proyectos con información completa
- 📊 **Indicador de Estado** - Sistema de disponibilidad actualizable
- 🔄 **Smooth Scroll** - Navegación fluida entre secciones
- 💾 **Sin Dependencias** - JavaScript vanilla, sin frameworks pesados
- 🎨 **Código Limpio** - Bien organizado, comentado y fácil de mantener

---

## 🛠️ Tecnologías

### Frontend
- **HTML5** - Estructura semántica y accesible
- **CSS3** - Estilos modernos con Grid, Flexbox y Custom Properties
- **JavaScript (ES6+)** - Vanilla JS con clases y módulos

### Librerías y Recursos
- **Google Fonts (Inter)** - Tipografía moderna y legible
- **DevIcons CDN** - Iconos de tecnologías
- **SVG Icons** - Iconos personalizados inline

### Herramientas de Desarrollo
- **Git** - Control de versiones
- **VS Code** - Editor de código
- **Chrome DevTools** - Debugging y testing

---

## 📁 Estructura del Proyecto

```
perfil/
├── index.html                      # Página principal
├── demo-traduccion.html            # Demo del sistema de traducción
├── css/
│   └── style.css                   # Estilos principales (2500+ líneas)
├── js/
│   └── script.js                   # Lógica y componentes (900+ líneas)
├── img/
│   ├── logo.png                    # Logo personal
│   ├── alex3.png                   # Imagen principal Home
│   ├── alexx.jpeg                  # Avatar perfil
│   ├── acerca.jpeg                 # Imagen About section
│   ├── proyecto_*.png              # Imágenes de proyectos
│   └── ...
├── docs/
│   ├── README.md                   # Este archivo
│   
│    
├── add_i18n.py                     # Script para automatizar data-i18n
└── .gitignore                      # Archivos ignorados por Git
```

---

## 🚀 Instalación

### Método 1: Descarga Directa

1. **Descarga el proyecto**
   ```bash
   # Opción A: Clonar repositorio
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   
   # Opción B: Descargar ZIP
   # Descargar desde GitHub y extraer
   ```

2. **Abrir en el navegador**
   ```bash
   # Simplemente abre index.html en tu navegador
   # O usa un servidor local (recomendado)
   ```

### Método 2: Servidor Local (Recomendado)

**Opción A: Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Visitar: http://localhost:8000
```

**Opción B: Node.js (http-server)**
```bash
# Instalar http-server globalmente
npm install -g http-server

# Ejecutar
http-server

# Visitar: http://localhost:8080
```

**Opción C: VS Code Live Server**
1. Instalar extensión "Live Server"
2. Click derecho en `index.html`
3. Seleccionar "Open with Live Server"

---

## 💻 Uso

### Navegación Básica

El portafolio es una **Single Page Application (SPA)** con las siguientes secciones:

1. **Home** - Presentación principal con carrusel de proyectos
2. **Acerca de mí** - Información personal y profesional
3. **Servicios** - 6 servicios ofrecidos con tecnologías
4. **Currículum** - Experiencia, educación y certificaciones
5. **Portafolio** - Galería de proyectos con vista detallada
6. **Footer** - Contacto y redes sociales

### Cambiar Idioma

**Interfaz:**
- Click en los botones `EN` / `ES` en el navbar

**JavaScript:**
```javascript
// Cambiar a inglés
window.langToggle.switchLanguage('en');

// Cambiar a español
window.langToggle.switchLanguage('es');

// Obtener idioma actual
console.log(window.langToggle.currentLang);
```

### Actualizar Estado de Disponibilidad

**Método 1: Editar código (permanente)**
```javascript
// En js/script.js, línea ~656
this.isAvailable = true;  // true = Disponible, false = No disponible
```

**Método 2: Consola del navegador (temporal)**
```javascript
// Disponible
window.statusIndicator.setAvailable();

// No disponible
window.statusIndicator.setUnavailable("Regreso en Diciembre");

// Alternar
window.statusIndicator.toggle();
```

Ver guía completa: [COMO_CAMBIAR_ESTADO.md](COMO_CAMBIAR_ESTADO.md)

---

## 🎨 Personalización

### 1. Información Personal

**Editar en `index.html`:**
```html
<!-- Nombre -->
<h1 class="profile-name">Tu Nombre</h1>

<!-- Título profesional -->
<p class="profile-title">Tu Profesión</p>

<!-- Email -->
<a href="mailto:tuemail@ejemplo.com">tuemail@ejemplo.com</a>

<!-- WhatsApp -->
<a href="https://wa.me/tunumero">Contáctame</a>
```

### 2. Colores del Tema

**Editar en `css/style.css` (líneas 1-20):**
```css
:root {
    --primary-color: #FF5733;      /* Naranja principal */
    --secondary-color: #00FF88;     /* Verde (disponible) */
    --accent-color: #FFC300;        /* Amarillo acento */
    --text-color: #FFFFFF;          /* Blanco */
    --bg-color: #000000;            /* Negro */
    --card-bg: rgba(255, 255, 255, 0.05);
}
```

### 3. Imágenes

Reemplaza las imágenes en la carpeta `img/`:
- `logo.png` - Tu logo (50x50px recomendado)
- `alex3.png` - Imagen principal Home (alta resolución)
- `alexx.jpeg` - Avatar circular (500x500px recomendado)
- `acerca.jpeg` - Imagen About section (800x600px)
- `proyecto_*.png` - Capturas de tus proyectos

### 4. Proyectos en el Portafolio

**Editar en `js/script.js` (línea ~750, objeto `projects`):**
```javascript
const projects = {
    1: {
        title: 'Título del Proyecto',
        category: 'Categoría',
        date: 'Fecha',
        image: 'img/proyecto.png',
        description: 'Descripción detallada...',
        technologies: ['Python', 'JavaScript', 'React'],
        features: [
            'Característica 1',
            'Característica 2'
        ],
        liveLink: 'https://proyecto.com',
        githubLink: 'https://github.com/usuario/proyecto'
    }
};
```

### 5. Servicios

**Editar en `index.html` (sección Services, línea ~250+):**
```html
<div class="service-card">
    <div class="service-icon">
        <i class="devicon-icon"></i>
    </div>
    <h3 class="service-title">Nombre del Servicio</h3>
    <p class="service-description">Descripción...</p>
    <ul class="service-features">
        <li>Característica 1</li>
        <li>Característica 2</li>
    </ul>
</div>
```

### 6. Experiencia Profesional

**Editar en `index.html` (sección Curriculum, línea ~450+):**
```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <div class="timeline-card">
            <h4 class="timeline-title">Cargo</h4>
            <span class="timeline-company">Empresa</span>
            <div class="timeline-meta">
                <span class="timeline-period">Período</span>
                <span class="timeline-location">Ubicación</span>
            </div>
            <p class="timeline-description">Descripción...</p>
        </div>
    </div>
</div>
```

---

## 📱 Secciones

### 1. Home
- Imagen principal con efecto floating
- Tarjeta de perfil con avatar
- Indicador de disponibilidad
- Carrusel de proyectos destacados
- Botones de contacto (LinkedIn, Email)

### 2. Acerca de Mí
- Imagen profesional animada
- Descripción personal y profesional
- Estadísticas (años de experiencia, proyectos, satisfacción)
- Botón de contacto

### 3. Servicios
- 6 tarjetas de servicios con iconos
- Lista de características por servicio
- Carrusel infinito de tecnologías (10 techs)
- Efectos hover animados

### 4. Currículum
- Timeline vertical con línea animada
- 3 secciones: Experiencia, Educación, Cursos
- Dots animados con efecto glow
- Botón de descarga de CV

### 5. Portafolio
- Grid de 6 proyectos
- Modal con información detallada
- Tags de tecnologías
- Links a demo y código fuente

### 6. Footer
- Logo y descripción
- Enlaces rápidos
- Información de contacto
- Botón de WhatsApp
- Redes sociales (Facebook, Instagram, GitHub)

---

## 🌐 Sistema de Traducción

### Características
- ✅ Diccionario ES/EN con +150 traducciones
- ✅ Cambio de idioma sin recargar página
- ✅ Aplicación automática via `data-i18n`
- ✅ API global accesible
- ✅ Idioma por defecto: Español

### Uso Rápido

**HTML:**
```html
<h2 data-i18n="about-title">Sobre Mí</h2>
```

**JavaScript:**
```javascript
// Cambiar idioma
window.langToggle.switchLanguage('en');

// Obtener traducción
const text = window.langToggle.translate('about-title');
```

### Guías Detalladas
- [README_TRADUCCION.md](README_TRADUCCION.md) - Guía completa paso a paso
- [TRADUCCION_GUIA.md](TRADUCCION_GUIA.md) - Checklist de implementación
- [demo-traduccion.html](demo-traduccion.html) - Demo funcional

---

## 📱 Responsive Design

### Breakpoints

| Dispositivo | Ancho | Cambios Principales |
|-------------|-------|---------------------|
| Desktop XL | 1400px+ | Fuentes más grandes, espaciado amplio |
| Desktop | 1200px - 1399px | Layout completo, 3 columnas |
| Laptop | 1024px - 1199px | Reducción de espaciado |
| Tablet | 768px - 1023px | 2 columnas, menú adaptado |
| Mobile L | 480px - 767px | 1 columna, navegación simplificada |
| Mobile S | < 480px | Layout compacto, fuentes reducidas |

### Optimizaciones Móviles
- ✅ Touch gestures en carrusel
- ✅ Menú hamburguesa (si aplicable)
- ✅ Imágenes optimizadas
- ✅ Botones de tamaño táctil (min 44px)
- ✅ Stack vertical de secciones
- ✅ Footer centrado y compacto

---

## 🎯 Componentes JavaScript

### ProjectsCarousel
**Descripción:** Carrusel de proyectos con navegación y swipe  
**Uso:**
```javascript
const carousel = new ProjectsCarousel();
carousel.next(); // Siguiente
carousel.prev(); // Anterior
carousel.goToSlide(2); // Ir a slide específico
```

### LanguageToggle
**Descripción:** Sistema de traducción multiidioma  
**Uso:**
```javascript
const langToggle = new LanguageToggle();
langToggle.switchLanguage('en');
const translation = langToggle.translate('key');
```

### PortfolioModal
**Descripción:** Modal para vista detallada de proyectos  
**Uso:**
```javascript
const modal = new PortfolioModal();
modal.openModal(1); // Abrir proyecto ID 1
modal.closeModal(); // Cerrar
```

### StatusIndicator
**Descripción:** Indicador de disponibilidad actualizable  
**Uso:**
```javascript
const status = new StatusIndicator();
status.setAvailable();
status.setUnavailable('Ocupado hasta Enero');
status.toggle();
```

### ScrollAnimations
**Descripción:** Animaciones al hacer scroll (IntersectionObserver)  
**Uso:**
```javascript
const scrollAnim = new ScrollAnimations();
// Detecta automáticamente elementos con [data-animate]
```

---

## 🚀 Performance

### Optimizaciones Implementadas
- ✅ **CSS puro** - Sin frameworks pesados
- ✅ **Vanilla JS** - Sin jQuery ni dependencias
- ✅ **Lazy loading** - Imágenes cargadas bajo demanda
- ✅ **Minificación** - CSS y JS optimizados
- ✅ **Caché de navegador** - Recursos estáticos cacheados
- ✅ **Compresión de imágenes** - WebP cuando es posible
- ✅ **Critical CSS inline** - CSS crítico en línea
- ✅ **Debounce/Throttle** - Eventos optimizados

### Métricas Objetivo
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **Lighthouse Score**: > 90/100

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] Navegación entre secciones funciona correctamente
- [ ] Carrusel navega con botones, dots y swipe
- [ ] Modal de proyectos abre y cierra correctamente
- [ ] Cambio de idioma EN/ES funciona en todas las secciones
- [ ] Indicador de estado cambia color y texto
- [ ] Links externos abren en nueva pestaña
- [ ] Formularios de contacto envían correctamente
- [ ] Animaciones son fluidas (60fps)
- [ ] Responsive en todos los breakpoints
- [ ] Accesibilidad (keyboard navigation, screen readers)

### Browsers Soportados
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+
- ⚠️ IE11 (funcionalidad limitada)

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas! Si deseas mejorar este proyecto:

1. **Fork** el repositorio
2. **Crea una rama** para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre un Pull Request**

### Reporte de Bugs
Si encuentras un bug, por favor abre un issue con:
- Descripción del problema
- Pasos para reproducirlo
- Comportamiento esperado vs actual
- Screenshots si es posible
- Navegador y versión

---

## 📝 Roadmap

### Versión 1.1 (Q1 2026)
- [ ] Blog section
- [ ] Dark/Light mode toggle
- [ ] Formulario de contacto funcional
- [ ] Integración con API de GitHub
- [ ] Analytics dashboard

### Versión 1.2 (Q2 2026)
- [ ] Backend con Node.js
- [ ] Base de datos para proyectos
- [ ] Sistema de comentarios
- [ ] Newsletter subscription
- [ ] Admin panel

### Versión 2.0 (Q3 2026)
- [ ] Migración a React/Next.js
- [ ] SSR/SSG para mejor SEO
- [ ] PWA capabilities
- [ ] Offline mode
- [ ] Push notifications

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

```
MIT License

Copyright (c) 2025 Alexander Villada

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 📞 Contacto

**Alexander Villada** - Ingeniero Informático

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alex-villada-555414165/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:avilladaberrio@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/573053850968)

**Ubicación:** Medellín, Colombia 🇨🇴

---

## 🙏 Agradecimientos

- [Google Fonts](https://fonts.google.com/) - Fuente Inter
- [DevIcons](https://devicon.dev/) - Iconos de tecnologías
- [Shields.io](https://shields.io/) - Badges para README
- Comunidad de desarrolladores por la inspiración

---

## 📊 Estadísticas del Proyecto

- **Líneas de Código:** ~4,000+
- **Componentes JS:** 8
- **Traducciones:** +150
- **Responsive Breakpoints:** 6
- **Secciones:** 6
- **Proyectos en Portafolio:** 6
- **Servicios:** 6
- **Tiempo de Desarrollo:** 2 semanas

---

<div align="center">

**⭐ Si te gusta este proyecto, no olvides darle una estrella!**

Hecho con ❤️ por [Alexander Villada](https://github.com/yourusername)

</div>
