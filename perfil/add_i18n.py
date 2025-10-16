"""
Script para agregar atributos data-i18n al HTML del portafolio
Ejecutar una vez para preparar el HTML para traducciones
"""

import re
from pathlib import Path

# Mapeo de textos a claves de traducción
TRANSLATIONS_MAP = {
    # Navbar
    r'<a href="#home" class="nav-link[^"]*"[^>]*>Home</a>': 
        r'<a href="#home" class="nav-link\g<1>" data-i18n="nav-home">Home</a>',
    r'<a href="#acerca" class="nav-link[^"]*"[^>]*>Acerca</a>':
        r'<a href="#acerca" class="nav-link\g<1>" data-i18n="nav-about">Acerca</a>',
    r'<a href="#servicios" class="nav-link[^"]*"[^>]*>Servicios</a>':
        r'<a href="#servicios" class="nav-link\g<1>" data-i18n="nav-services">Servicios</a>',
    r'<a href="#curriculum" class="nav-link[^"]*"[^>]*>Curriculum</a>':
        r'<a href="#curriculum" class="nav-link\g<1>" data-i18n="nav-curriculum">Curriculum</a>',
    r'<a href="#portafolio" class="nav-link[^"]*"[^>]*>Portafolio</a>':
        r'<a href="#portafolio" class="nav-link\g<1>" data-i18n="nav-portfolio">Portafolio</a>',
    
    # Home
    r'<p class="profile-title">Ingeniero Informático</p>':
        r'<p class="profile-title" data-i18n="profile-title">Ingeniero Informático</p>',
    r'<button class="cta-button">\s*Ver Trabajos':
        r'<button class="cta-button" data-i18n="cta-button">\nVer Trabajos',
    
    # About
    r'<span class="label-text">Conóceme</span>':
        r'<span class="label-text" data-i18n="about-label">CONOCE MÁS</span>',
    
    # Footer
    r'<h4 class="footer-title">ENLACES RÁPIDOS</h4>':
        r'<h4 class="footer-title" data-i18n="footer-links-title">ENLACES RÁPIDOS</h4>',
}

def add_i18n_attributes(html_path):
    """Add data-i18n attributes to HTML file"""
    
    # Read HTML file
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Apply replacements
    modified = content
    for pattern, replacement in TRANSLATIONS_MAP.items():
        modified = re.sub(pattern, replacement, modified, flags=re.MULTILINE)
    
    # Backup original
    backup_path = html_path.with_suffix('.html.bak')
    with open(backup_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    # Write modified
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(modified)
    
    print(f"HTML actualizado: {html_path}")
    print(f"Backup creado: {backup_path}")

if __name__ == "__main__":
    html_file = Path("index.html")
    
    if not html_file.exists():
        print(f"Error: No se encontró {html_file}")
        print("Ejecuta este script desde la carpeta del proyecto")
    else:
        add_i18n_attributes(html_file)
        print("\n Ahora puedes usar el sistema de traducciones")
        print("Recarga la página y prueba los botones EN/ES")
