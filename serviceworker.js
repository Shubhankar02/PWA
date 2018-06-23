console.log('sw');

const STATIC_CACHE = "1.1";

var urlsToCache =[
    '/',
    '/index.html',
    '/dist/main.css',
    '/dist/bundle.js',
    '/resources/scripts/script.js',
    '/offline.html'
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

//getting the pages up offline
self.addEventListener('fetch',(event)=>{
    event.respondWith(
        caches.match(event.request)
        .then((response)=>{
            if(response){
                return response;
            }
            return fetch(evnt.request)
        })
    )
})

//offline page
self.addEventListener('fetch',(event)=>{
    event.respondWith(
        caches.match(event.request)
        .then((response)=>{
            if(response){
                return response;
            }
            else{
                return fetch(event.request)
                .then((response)=>{
                    return response;
                })
            }
        }).catch((err)=>{
            return caches.open(STATIC_CACHE)
            .then(function(cache){
                return cache.match('/offline.html');
            })
        })
    )
})
