#!/usr/bin/env bash
# Build the deck and the site, then publish both together to the gh-pages branch.
#
# This is a public repo, so GitHub Pages serves it at
# https://plangrid.github.io/unified-filters/ (org.github.io/repo/), with
# deck/site content living under /unified-filters/deck/ and /unified-filters/site/.
set -euo pipefail

echo "==> Building deck"
(cd deck && npm install && npx slidev build --base /unified-filters/deck/ --out ../dist/deck)

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

npx --yes gh-pages -d dist -b gh-pages -m "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"

echo "Published to gh-pages."
echo "  Deck: https://plangrid.github.io/unified-filters/deck/"
echo "  Site: https://plangrid.github.io/unified-filters/site/"
