#!/usr/bin/env bash
# Build the deck and publish dist/ to the gh-pages branch.
set -euo pipefail

# GHE subdomain isolation serves at pages.HOST/<user>/<repo>/, so the base
# must include the username segment, not just the repo.
BASE=/aburusb/unified-filters-deck/

npx slidev build --base "$BASE" --out dist
touch dist/.nojekyll   # serve asset dirs verbatim (no Jekyll processing)

# GHE Pages access control gates every asset. Vite emits `crossorigin` on the
# module scripts, which fetches them WITHOUT the session cookie -> 302-to-login
# -> module fails -> blank page. Strip it so same-origin assets carry the cookie.
LC_ALL=C sed -i '' 's/ crossorigin//g' dist/index.html dist/404.html

npx --yes gh-pages -d dist -b gh-pages -m "Deploy deck $(date -u +%Y-%m-%dT%H:%M:%SZ)"

echo "Published to gh-pages. Ensure Pages source = gh-pages branch."
