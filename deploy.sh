#!/usr/bin/env bash
# Build the deck and the site, then publish both together to the gh-pages branch.
#
# This is an internal repo, so GitHub Pages serves it from a random
# <name>.pages.github.io subdomain (not <org>.github.io/<repo>/) with the
# content at the subdomain's root — hence deck/site build under /deck/ and
# /site/, not /unified-filters/deck/ and /unified-filters/site/.
set -euo pipefail

echo "==> Building deck"
(cd deck && npm install && npx slidev build --base /deck/ --out ../dist/deck)

echo "==> Building site"
(cd site && npm install && npx vitepress build --outDir ../dist/site)

cat > dist/index.html <<'EOF'
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Unified Filters</title>
    <meta http-equiv="refresh" content="0; url=./site/" />
  </head>
  <body>
    <p><a href="./site/">Unified Filters reference portal</a></p>
    <p><a href="./deck/">Unified Filters onboarding deck</a></p>
  </body>
</html>
EOF

touch dist/.nojekyll   # serve asset dirs verbatim (no Jekyll processing)

# Pages access control (private/internal repos) gates every asset behind a
# session cookie. Vite emits `crossorigin` on module scripts, which fetches
# them WITHOUT that cookie -> redirect-to-login -> module fails -> blank page.
# Strip it so same-origin assets carry the cookie. Same fix as the old GHE deploy.
LC_ALL=C find dist -name '*.html' -print0 | xargs -0 sed -i '' 's/ crossorigin//g'

npx --yes gh-pages -d dist -b gh-pages -m "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"

PAGES_URL=$(gh api repos/plangrid/unified-filters/pages --jq .html_url 2>/dev/null || echo "(run: gh api repos/plangrid/unified-filters/pages)")
echo "Published to gh-pages."
echo "  Deck: ${PAGES_URL}deck/"
echo "  Site: ${PAGES_URL}site/"
