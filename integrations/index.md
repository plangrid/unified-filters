# Integrating a new domain

## Onboarding phases

Every domain onboards in phases — each one builds on the last.

<div class="flow">
<div class="flow-unit"><a href="./unified-filters-seam"><div class="flow-box amber">① Unified Filters Filters Panel · Quick Filters</div></a></div>
<div class="flow-unit"><span class="flow-arrow">→</span><a href="./saved-filters-seam"><div class="flow-box amber">② Saved Filters layered on top</div></a></div>
</div>

<div class="tile-grid" style="margin-top:2rem">
<div class="tile-card amber"><div class="tile-title a">① Onboard into Unified Filters</div><div class="tile-desc">Wire your domain's <code>FiltersScope</code> into the shared framework — the <span class="a">Filters Panel</span> is required, <span class="a">Quick Filters</span> chips are optional. Every domain starts here.</div></div>
<div class="tile-card"><div class="tile-title">② Onboard into Saved Filters</div><div class="tile-desc">A follow-on phase once ① is in place — reuses the same <code>FilterQueryParameters</code> model, no parallel track.</div></div>
</div>

## Integration skill

Start with the skill — then ship three stacked PRs.

- **[Start with the `/integrate-filters` skill](./integrate-filters-skill)** — don't hand-roll it, let the skill orchestrate the integration across three stacked PRs (pgf → domain-core → screen-integration).
- **[Guidelines & Invariants](./invariants)** — the rules and recommendations that hold across every domain integration.

## Per-feature integration seams

- [Unified Filters — the integration seam](./unified-filters-seam)
- [Saved Filters — the integration seam](./saved-filters-seam)
- [Initial Filters](./initial-filters)
- [Sync Triggering (UD-42 Support)](./responsive-sync-triggering)
