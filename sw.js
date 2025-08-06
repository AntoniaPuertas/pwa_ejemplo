/**
 * SERVICE WORKER - PWA Ejemplo
 * Este archivo maneja el cache offline y las peticiones de red
 */

// Nombre del cache actual - incrementar versión para actualizar
const CACHE_NAME = 'mi-app-v1';

// Lista de archivos que se guardarán en cache para funcionamiento offline
const urlsToCache = [
    '/',                           // Página principal
    '/index.html',                 // HTML principal
    '/manifest.json',              // Configuración PWA
    '/icons/icon-192x192.png',     // Icono pequeño
    '/icons/icon-512x512.png'      // Icono grande
];

/**
 * EVENTO INSTALL
 * Se ejecuta cuando se instala el Service Worker por primera vez
 */
self.addEventListener('install', event => {
    // Activar inmediatamente sin esperar al siguiente reload
    self.skipWaiting();
    
    // Esperar a que termine la instalación del cache
    event.waitUntil(
        caches.open(CACHE_NAME)                    // Abrir/crear el cache
            .then(cache => cache.addAll(urlsToCache))  // Guardar todos los archivos
    );
});

/**
 * EVENTO FETCH
 * Intercepta todas las peticiones de red de la aplicación
 */
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)                     // Buscar en cache primero
            .then(response => response || fetch(event.request))  // Si no está, ir a red
    );
});

/**
 * EVENTO ACTIVATE
 * Se ejecuta cuando el Service Worker se activa
 * Limpia caches antiguos para ahorrar espacio
 */
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {             // Obtener todos los nombres de cache
            return Promise.all(
                cacheNames.map(cacheName => {          // Para cada cache existente
                    if (cacheName !== CACHE_NAME) {   // Si no es el cache actual
                        return caches.delete(cacheName);  // Eliminarlo
                    }
                })
            );
        })
    );
});