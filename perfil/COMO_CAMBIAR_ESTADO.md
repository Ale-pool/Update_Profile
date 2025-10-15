# 📍 Cómo Cambiar el Estado de Disponibilidad

Este documento explica cómo actualizar tu estado de disponibilidad en el portafolio.

---

## 🔧 Método 1: Cambiar en el Código (Permanente)

**Archivo:** `js/script.js`  
**Línea:** ~326

```javascript
// ⚠️ CAMBIAR AQUÍ PARA ACTUALIZAR EL ESTADO ⚠️
// true = Disponible para trabajar (verde)
// false = No disponible (naranja)
this.isAvailable = true;  // <-- Cambia esto
```

### Pasos:
1. Abre el archivo `js/script.js`
2. Busca la clase `StatusIndicator` (línea ~319)
3. En el constructor, cambia el valor de `this.isAvailable`:
   - `true` → **Disponible para trabajar** (punto verde 🟢)
   - `false` → **No disponible** (punto naranja 🟠)
4. Guarda el archivo
5. Recarga la página

---

## 🎮 Método 2: Cambiar desde la Consola del Navegador (Temporal)

Ideal para probar o hacer cambios rápidos sin editar código.

### Pasos:
1. Abre tu portafolio en el navegador
2. Presiona **F12** para abrir las herramientas de desarrollador
3. Ve a la pestaña **Console** (Consola)
4. Ejecuta uno de estos comandos:

### Comandos Disponibles:

```javascript
// Cambiar a DISPONIBLE (verde)
window.statusIndicator.setAvailable();

// Cambiar a NO DISPONIBLE (naranja)
window.statusIndicator.setUnavailable();

// Alternar entre disponible/no disponible
window.statusIndicator.toggle();

// Con texto personalizado
window.statusIndicator.setAvailable("Disponible ahora mismo");
window.statusIndicator.setUnavailable("Ocupado hasta Enero 2026");
```

---

## 📝 Ejemplos de Uso

### Ejemplo 1: Marcar como No Disponible Temporalmente
```javascript
window.statusIndicator.setUnavailable("De regreso en Diciembre 2025");
```

### Ejemplo 2: Disponible Solo Para Proyectos Específicos
```javascript
window.statusIndicator.setAvailable("Disponible para proyectos de IA");
```

### Ejemplo 3: Alternar Estado Rápidamente
```javascript
window.statusIndicator.toggle();  // Cambia al estado opuesto
```

---

## 🎨 Estados Visuales

| Estado | Color | Texto Default | Box Shadow |
|--------|-------|---------------|------------|
| **Disponible** | Verde (`#00FF88`) | "Disponible para trabajar" | Resplandor verde |
| **No Disponible** | Naranja (`#FF5733`) | "No disponible" | Resplandor naranja |

---

## ⚠️ Notas Importantes

1. **Cambios desde la consola son temporales**: Se pierden al recargar la página
2. **Cambios en el código son permanentes**: Persisten después de recargar
3. **El texto personalizado se pierde al recargar**: Si usas texto personalizado, considera agregarlo directamente en el código
4. **El estado se inicializa automáticamente**: Cuando cargue la página, se aplicará el estado definido en el constructor

---

## 🚀 Recomendación

Para un cambio permanente de estado:
1. Edita `this.isAvailable` en `js/script.js` (línea ~326)
2. Si necesitas texto personalizado, modifica las líneas en el método `updateStatus()`:
   ```javascript
   this.statusText.textContent = customText || 'Tu texto aquí';
   ```

---

**Última actualización:** Octubre 2025  
**Versión del portafolio:** 1.0
