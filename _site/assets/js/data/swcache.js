const resource = [

  /* --- CSS --- */
  '/http://www.lix.polytechnique.fr/~marchand/assets/css/style.css',

  /* --- JavaScripts --- */
  
  '/http://www.lix.polytechnique.fr/~marchand/assets/js/dist/home.min.js',
  '/http://www.lix.polytechnique.fr/~marchand/assets/js/dist/page.min.js',
  '/http://www.lix.polytechnique.fr/~marchand/assets/js/dist/post.min.js',
  '/http://www.lix.polytechnique.fr/~marchand/assets/js/dist/categories.min.js',
  '/http://www.lix.polytechnique.fr/~marchand/assets/js/data/search.json',
  '/http://www.lix.polytechnique.fr/~marchand/app.js',
  '/http://www.lix.polytechnique.fr/~marchand/sw.js',

  /* --- HTML --- */
  '/http://www.lix.polytechnique.fr/~marchand/index.html',
  '/http://www.lix.polytechnique.fr/~marchand/404.html',
  
    '/http://www.lix.polytechnique.fr/~marchand/publications/',
  
    '/http://www.lix.polytechnique.fr/~marchand/cv/',
  

  /* --- Favicons --- */
  

  '/http://www.lix.polytechnique.fr/~marchand/assets/img/favicons/android-chrome-192x192.png',
  '/http://www.lix.polytechnique.fr/~marchand/assets/img/favicons/android-chrome-512x512.png',
  '/http://www.lix.polytechnique.fr/~marchand/assets/img/favicons/apple-touch-icon.png',
  '/http://www.lix.polytechnique.fr/~marchand/assets/img/favicons/favicon-16x16.png',
  '/http://www.lix.polytechnique.fr/~marchand/assets/img/favicons/favicon-32x32.png',
  '/http://www.lix.polytechnique.fr/~marchand/assets/img/favicons/favicon.ico',
  '/http://www.lix.polytechnique.fr/~marchand/assets/img/favicons/mstile-150x150.png',
  '/http://www.lix.polytechnique.fr/~marchand/assets/img/favicons/site.webmanifest',
  '/http://www.lix.polytechnique.fr/~marchand/assets/img/favicons/browserconfig.xml'

];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'www.lix.polytechnique.fr/~marchand/',

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  
];

