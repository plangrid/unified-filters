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

The deck is served as a project page at `/unified-filters-deck/`, so it must be
built with a matching base path:

```bash
npx slidev build --base /unified-filters-deck/ --out dist
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
