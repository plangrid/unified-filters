#!/usr/bin/env bash
# Build the deck and the site, then publish both together to the gh-pages branch.
set -euo pipefail

BASE_ROOT=/unified-filters

echo "==> Building deck"
(cd deck && npm install && npx slidev build --base "$BASE_ROOT/deck/" --out ../dist/deck)

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

echo "Published to gh-pages. Ensure Pages source = gh-pages branch."
echo "  Deck: https://plangrid.github.io/unified-filters/deck/"
echo "  Site: https://plangrid.github.io/unified-filters/site/"
