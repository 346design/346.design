'use strict';var v='346-design-cache-v1',l=['/manifest.json','/','/index.part.html','/privacy/','/privacy/index.part.html'];addEventListener('install',function(e){e.waitUntil(caches.open(v).then(function(c){return c.addAll(l)}))});addEventListener('fetch',function(e){var r=e.request;e.respondWith(caches.match(r).then(function(c){return c||fetch(c).then(function(f){return caches.open(v).then(function(n){n.put(r.url,f.clone());return f})})}))})
