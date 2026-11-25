# Jacob Manhardt

Personal site for an entry-level IT support and networking resume. Quakertown, PA. Open to the Syracuse, NY area and remote, including contract and temp.

Facts on the page come from Jacob's resume. The headline is IT support. Programming shows up as scripting, automation, and systems he runs.

## Build

```bash
npm run build
npm run preview
```

Build command: `npm run build`. It checks the published copy, then writes the output directory `dist/`. Preview serves that folder at http://127.0.0.1:4173.

## Cloudflare Workers

`wrangler.jsonc` names the Worker `jemanhardt-landing` and serves `dist/` as static assets. No routes and no custom domains. The Worker uses its free `*.workers.dev` address.

```bash
npm run build
npx wrangler deploy --dry-run
```

Leave `jemanhardt.dev` and `www` off this Worker.

## Contact

jacob@jemanhardt.dev · [GitHub](https://github.com/manhardt23)
