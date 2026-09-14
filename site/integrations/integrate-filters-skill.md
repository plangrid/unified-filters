---
aside: false
---

# Start with the `/integrate-filters` skill

Don't hand-roll it — the `/integrate-filters` skill orchestrates the whole integration.

<div class="note-row">📖 Reads the <b>in-repo design docs</b> (the source of truth) and picks your platform.</div>
<div class="note-row">🔎 Explores your feature's <b>existing filters code</b> and deduces how they map onto the unified filters model.</div>
<div class="note-row">🧩 Walks the integration <b>phase by phase</b>, scaffolding the classes for your domain.</div>
<div class="note-row">🧱 Follows the same <b>three-PR structure</b> — pgf → domain-core → screen-integration.</div>

<div class="tile-card amber" style="margin-top: 1rem">It turns this portal's concepts into concrete, per-domain code — <span class="a">you review and refine</span>.</div>

## Three stacked PRs

<div class="flow" style="justify-content: center">

<div class="flow-unit"><div class="flow-box amber">① pgf<br>shared contract</div></div>
<div class="flow-unit"><span class="flow-arrow">→</span><div class="flow-box amber">② domain-core<br>flag OFF</div></div>
<div class="flow-unit"><span class="flow-arrow">→</span><div class="flow-box amber">③ screen-integration<br>flag gating</div></div>

</div>

<div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin-top: 1.5rem">

<div class="tile-card amber">
<div class="tile-title a">① pgf — shared contract</div>
<ul>
<li>FiltersScope</li>
<li>Filter + QuickFilter ids</li>
<li>Date-option ids</li>
<li>FilterQueryParameters</li>
<li>FiltersDisplayNamesResolver</li>
<li>Feature flag</li>
</ul>
</div>

<div class="tile-card">
<div class="tile-title">② domain-core — flag OFF</div>
<ul>
<li>The two Mappers</li>
<li>DomainFiltersModelStore</li>
<li>Provider + Updater</li>
<li>Options + hierarchy providers</li>
<li>QuickFiltersProvider</li>
<li>HolderFactory + DI wiring</li>
</ul>
</div>

<div class="tile-card">
<div class="tile-title">③ screen-integration — flag gating</div>
<ul>
<li>Entry point (Quick filters or Toolbar icon)</li>
<li>Onboarding tooltip</li>
<li>Launch the panel</li>
<li>Observe store → query</li>
<li>Gate unified vs legacy</li>
</ul>
</div>

</div>

<div class="note-row" style="margin-top: 1rem; font-size: 0.8rem;">Per-phase file lists: <code>pgf/feature/filters/CLAUDE.md</code> · <code>android/filters/guides/domain-core.md</code> · <code>.../screen-integration.md</code></div>
