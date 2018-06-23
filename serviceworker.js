console.log('sw');

const STATIC_CACHE = "1.1";

var urlsToCache =[
    '/',
    '/index.html',
    '/dist/main.css',
    '/dist/bundle.js',
    '/resources/scripts/script.js'
];

self.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(STATIC_CACHE)
        .then((cache)=>{
            console.log('cache opened');
            return cache.addAll(urlsToCache);
        })
    )
})
