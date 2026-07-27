#!/usr/bin/env bash
# Build the deck and publish dist/ to the gh-pages branch.
set -euo pipefail

BASE=/unified-filters-deck/

npx slidev build --base "$BASE" --out dist
touch dist/.nojekyll   # serve asset dirs verbatim (no Jekyll processing)

npx --yes gh-pages -d dist -b gh-pages -m "Deploy deck $(date -u +%Y-%m-%dT%H:%M:%SZ)"

echo "Published to gh-pages. Ensure Pages source = gh-pages branch."
