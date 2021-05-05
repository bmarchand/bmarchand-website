const resource = [ /* --- CSS --- */ '/~marchand/assets/css/style.css', /* --- JavaScripts --- */ '/~marchand/assets/js/dist/home.min.js', '/~marchand/assets/js/dist/page.min.js', '/~marchand/assets/js/dist/post.min.js', '/~marchand/assets/js/dist/categories.min.js', '/~marchand/assets/js/data/search.json', '/~marchand/app.js', '/~marchand/sw.js', /* --- HTML --- */ '/~marchand/index.html', '/~marchand/404.html', '/~marchand/publications/', '/~marchand/cv/', /* --- Favicons --- */ '/~marchand/assets/img/favicons/android-chrome-192x192.png', '/~marchand/assets/img/favicons/android-chrome-512x512.png', '/~marchand/assets/img/favicons/apple-touch-icon.png', '/~marchand/assets/img/favicons/favicon-16x16.png', '/~marchand/assets/img/favicons/favicon-32x32.png', '/~marchand/assets/img/favicons/favicon.ico', '/~marchand/assets/img/favicons/mstile-150x150.png', '/~marchand/assets/img/favicons/site.webmanifest', '/~marchand/assets/img/favicons/browserconfig.xml' ]; /* The request url with below domain will be cached */ const allowedDomains = [ 'www.lix.polytechnique.fr/~marchand/', 'fonts.gstatic.com', 'fonts.googleapis.com', 'cdn.jsdelivr.net', 'polyfill.io' ]; /* Requests that include the following path will be banned */ const denyUrls = [ ];
