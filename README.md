# No Compromises Website

Make [No Compromises](https://nocompromises.io).

## Production

- This deploys automatically from the `master` branch to Netlify.
- There is no build process as part of the deploy.
- The Netlify configuration points to `dist` as the public code.
- Redirects are handled on Netlify with the `dist/_redirects` configuration file.

## Development

- The main website is served from the `dist` directory so edit files directly in it. It uses Boostrap.
- To test the local development, run `live-server dist` from the root of this project.

### PDF generation

The PDFs in the `dist/resources/` folder are generated from the documents in the `markdown` folder. If you make any changes to the source documents, you'll need to regenerate the PDFs.

The only prerequisite is the the [md-to-pdf](https://github.com/simonhaenisch/md-to-pdf#readme) library. You can install it globally by running `npm i -g md-to-pdf`.

Once that's installed, run `./generate-pdfs.sh` to export updated PDFs.
