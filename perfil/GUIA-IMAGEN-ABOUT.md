# 📸 Guía para la Imagen "Acerca de Mí"

## Especificaciones de la Imagen

### **Nombre del archivo:** `about-photo.png`
### **Ubicación:** `img/about-photo.png`

---

## 📐 Dimensiones y Formato

- **Tamaño recomendado:** 900px x 1200px (ratio 3:4)
- **Formato:** PNG con fondo transparente o JPG con fondo negro
- **Peso máximo:** < 400KB (optimizar con TinyPNG)
- **Orientación:** Vertical/Retrato

---

## 🎨 Estilo de la Fotografía

### **Composición:**
- ✅ Foto formal/profesional de cuerpo completo o 3/4
- ✅ Postura elegante (como en tu referencia: brazos cruzados o posición confiada)
- ✅ Vestimenta: Traje formal o business professional
- ✅ Expresión: Segura, profesional y amigable

### **Fondo:**
- ✅ **Preferido:** Fondo negro sólido (se integra perfectamente con el diseño)
- ✅ Alternativa: Fondo transparente (PNG)
- ✅ Evitar: Fondos con distracciones o colores que compitan con el naranja

### **Iluminación:**
- ✅ Iluminación frontal o de tres puntos
- ✅ Contraste definido para destacar sobre fondo negro
- ✅ Evitar sombras duras o sobreexposición

---

## 🎯 Ejemplo de Composición

```
┌─────────────────────┐
│                     │
│    Cabeza/Rostro    │ ← Tercio superior
│                     │
├─────────────────────┤
│                     │
│    Torso/Brazos     │ ← Tercio medio (posición destacada)
│                     │
├─────────────────────┤
│                     │
│  Cintura/Piernas    │ ← Tercio inferior
│     (parcial)       │
└─────────────────────┘
```

---

## ✨ Características del Diseño Implementado

### **Animación Flotante:**
- La imagen tiene un efecto de movimiento suave y elegante
- Rotación sutil de -2° a 2° durante 8 segundos
- Movimiento vertical de hasta -20px
- Efecto continuo e infinito

### **Efectos Visuales:**
- **Sombra:** Box-shadow naranja con 80px de blur
- **Hover:** Scale de 1.03x al pasar el mouse
- **Bordes:** Border-radius de 24px para esquinas suaves
- **Decoraciones:** Círculos flotantes animados en las esquinas

### **Círculos Decorativos:**
- Círculo superior derecho: 120px, gradiente naranja
- Círculo inferior izquierdo: 80px, gradiente naranja
- Ambos con animación de pulso independiente

---

## 🎨 Paleta de Colores para la Foto

Si quieres editar la foto, usa estos colores para consistencia:

- **Fondo:** `#000000` (Negro total)
- **Acento:** `#FF5733` (Naranja brillante)
- **Iluminación:** Tonos cálidos que complementen el naranja

---

## 📝 Notas Importantes

1. **La imagen será vista en:**
   - Desktop: ~450px de ancho
   - Tablet: ~400px de ancho
   - Mobile: Ancho completo del contenedor

2. **Posición en el layout:**
   - Lado izquierdo en desktop
   - Arriba del texto en mobile/tablet

3. **La animación se desactiva en:**
   - Dispositivos móviles (para mejor rendimiento)
   - Cuando se prefiere movimiento reducido

---

## 🛠️ Herramientas Recomendadas

1. **Remover fondo:** [Remove.bg](https://www.remove.bg/)
2. **Editar imagen:** [Photopea](https://www.photopea.com/) (Photoshop online gratis)
3. **Optimizar peso:** [TinyPNG](https://tinypng.com/)
4. **Añadir efectos:** [Canva](https://www.canva.com/)

---

## 🔄 Alternativas si no tienes la foto profesional

### **Opción 1: Usar foto existente**
Puedes usar tu foto actual (`alexx.jpeg`) temporalmente renombrándola:
```powershell
Copy-Item img/alexx.jpeg img/about-photo.png
```

### **Opción 2: Crear placeholder temporal**
Guarda una versión editada de tu foto con:
- Fondo negro sólido
- Recorte vertical
- Iluminación ajustada

### **Opción 3: Sesión fotográfica profesional**
Características recomendadas:
- Fotógrafo profesional con setup de estudio
- Fondo negro infinito o backdrop
- Iluminación de tres puntos
- Varias poses para elegir
- Entrega en alta resolución

---

## 📊 Checklist de Implementación

- [ ] Foto tomada o seleccionada
- [ ] Fondo removido o fondo negro aplicado
- [ ] Imagen recortada a ratio 3:4 (900x1200px)
- [ ] Imagen optimizada (< 400KB)
- [ ] Guardada como `about-photo.png` en carpeta `img/`
- [ ] Verificada en el navegador
- [ ] Probada en diferentes dispositivos

---

## 🎯 Resultado Esperado

Tu foto se verá:
- ✨ **Profesional y elegante** con movimiento sutil
- 🎨 **Integrada perfectamente** con el esquema negro/naranja
- 💫 **Con efecto flotante** que capta la atención
- 📱 **Responsive** en todos los dispositivos
- ⚡ **Optimizada** para carga rápida

---

**Última actualización:** Octubre 14, 2025  
**Sección:** Acerca de Mí  
**Diseño:** Moderno, Minimalista, Profesional
