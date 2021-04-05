# No Compromises Website

Make [No Compromises](https://nocompromises.io).

## Production

* This deploys automatically from the `master` branch to Netlify.  
* There is no build process as part of the deploy.
* The Netlify configuration points to `dist` as the public code. 
* Redirects are handled on Netlify with the `dist/_redirects` configuration file.

## Development

* The main website is served from the `dist` directory so edit files directly in it.  It uses Boostrap.
* The Laravel Validation Book is in the `dist/laravel-validation-book`.  It uses TailwindCSS.  The `compiled.css` is versioned and served.
  * To build any new TailwindCSS code, run `npm build-css` to get a **development version** of the CSS. *You likely have to do this when you check this out so you can get the full Tailwind version again.*
  * To build **production version** of TailwindCSS, run `npm build-css-prod`.
* To test the local development, run `live-server dist` from the root of this project.
