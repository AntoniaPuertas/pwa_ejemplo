# PWA Ejemplo - Plantilla de Aplicación Web Progresiva

## 📱 Propósito del Proyecto

Este proyecto sirve como **plantilla base** para crear una Progressive Web App (PWA) que puede ser instalada en dispositivos móviles como una aplicación nativa. Es un ejemplo funcional y minimalista que incluye todas las características esenciales de una PWA.

## ✨ Características

- **📱 Instalable**: Se puede instalar en móviles como una app nativa
- **🔄 Funciona offline**: Utiliza Service Worker para cache de recursos
- **🎨 Diseño responsive**: Adaptado para dispositivos móviles
- **⚡ Carga rápida**: Recursos cacheados para mejor rendimiento
- **🍎 Compatible con iOS y Android**: Metadatos específicos para ambas plataformas

## 🏗️ Estructura del Proyecto

```
pwa_ejemplo/
├── index.html          # Página principal de la aplicación
├── manifest.json       # Configuración PWA (iconos, colores, etc.)
├── sw.js              # Service Worker para funcionamiento offline
└── icons/
    ├── icon-192x192.png   # Icono 192x192px
    └── icon-512x512.png   # Icono 512x512px
```

## 🚀 Cómo Funciona

### 1. **Manifest Web App** (`manifest.json`)
- Define metadatos de la aplicación (nombre, iconos, colores)
- Especifica el comportamiento como app standalone
- Configura la orientación y pantalla de inicio

### 2. **Service Worker** (`sw.js`)
- Cachea recursos para funcionamiento offline
- Intercepta peticiones de red
- Actualiza automáticamente el cache cuando hay cambios

### 3. **Prompt de Instalación** (`index.html`)
- Detecta cuando el navegador puede instalar la PWA
- Muestra un botón de instalación personalizado
- Maneja el evento `beforeinstallprompt`

## 📋 Instrucciones de Instalación

### Para Desarrolladores

1. **Clona o descarga** este repositorio
2. **Sirve los archivos** desde un servidor web (HTTPS requerido para PWA):
   ```bash
   # Opción 1: Usando Python
   python -m http.server 8000
   
   # Opción 2: Usando Node.js (npx)
   npx serve .
   
   # Opción 3: Usando Live Server (VS Code)
   # Instala la extensión Live Server y haz clic derecho > "Open with Live Server"
   ```
3. **Abre el navegador** en `http://localhost:8000`

### Para Usuarios Finales

#### En Android:
1. Abre **Chrome** y navega a la URL de la PWA
2. Aparecerá un banner de instalación automáticamente, o
3. Presiona el botón **"Instalar App"** que aparece en la página
4. Confirma la instalación
5. La app aparecerá en tu cajón de aplicaciones

#### En iOS:
1. Abre **Safari** y navega a la URL de la PWA
2. Presiona el botón **Compartir** (⬆️)
3. Selecciona **"Añadir a pantalla de inicio"**
4. Confirma el nombre y presiona **"Añadir"**
5. La app aparecerá en tu pantalla de inicio

## 🔧 Personalización

Para usar esta plantilla en tu propio proyecto:

1. **Modifica `manifest.json`**:
   - Cambia `name` y `short_name`
   - Actualiza `description`
   - Reemplaza los iconos en la carpeta `icons/`

2. **Actualiza `index.html`**:
   - Cambia el título y contenido
   - Modifica los estilos CSS según tu diseño

3. **Ajusta `sw.js`**:
   - Actualiza `CACHE_NAME` con tu versión
   - Añade/quita archivos de `urlsToCache` según necesites

## 📱 Requisitos Técnicos

- **HTTPS**: Las PWAs requieren conexión segura (excepto en localhost)
- **Manifest válido**: Archivo `manifest.json` con metadatos correctos
- **Service Worker**: Para funcionamiento offline
- **Iconos**: Al menos un icono de 192x192px y otro de 512x512px

## 🌟 Próximos Pasos

Una vez que tengas la plantilla funcionando:

- Añade más funcionalidades a tu aplicación
- Implementa sincronización en segundo plano
- Agrega notificaciones push
- Mejora la experiencia offline
- Optimiza el rendimiento

---

¡Ahora tienes todo lo necesario para crear tu propia PWA! 🎉