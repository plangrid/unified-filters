# Unified Filters Framework — deck

Interactive [Slidev](https://sli.dev) deck for the Unified Filters Framework
(cross-platform handover & onboarding). Internal — do **not** publish to any
public host.

## Develop

```bash
npm install
npm run dev        # http://localhost:3030
```

## Publish to GitHub Enterprise Pages

GHE subdomain isolation serves the site at
`pages.git.autodesk.com/<user>/<repo>/`, so the base must include the **username**
segment (not just the repo), or every asset 404s:

```bash
npx slidev build --base /aburusb/unified-filters-deck/ --out dist
```

Publish the built `dist/` to the `gh-pages` branch (Pages source = `gh-pages`):

```bash
./deploy.sh
```

Live (network/SSO only): https://pages.git.autodesk.com/aburusb/unified-filters-deck/

## Export

```bash
npx slidev export --format pptx --with-clicks --output filters-framework.pptx
```
