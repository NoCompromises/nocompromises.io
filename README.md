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

After running `npm install`, you can generate PDFs with `npm run generate-pdfs`.
