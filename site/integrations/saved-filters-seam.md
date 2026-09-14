# Saved Filters — the integration seam

What's provided — and what a feature team must supply.

::: warning Prerequisite
Saved Filters builds on top of Unified Filters — a domain must first complete the [Unified Filters integration](./unified-filters-seam) before adopting Saved Filters. See the [onboarding phases](./).
:::

<p class="seam-hint">Hover an item on the left to see its detail on the right.</p>

<div class="seam-layout">

<div class="seam-checklist">

<div class="seam-heading">You author</div>

<div class="chk"><span class="tick">✓</span> DomainSavedFilterDataTransformer</div>
<div class="chk"><span class="tick">✓</span> Domain Saved Filters Feature Flag</div>

<div class="seam-heading">Provided</div>

<div class="chk"><span class="tick">✓</span> Saved Filters Sync</div>
<div class="chk"><span class="tick">✓</span> Saved Filters Persistence</div>
<div class="chk"><span class="tick">✓</span> Saved Filters Presentation</div>

</div>

<div class="seam-divider"></div>

<div class="spot-area">

<div class="spot-item"><span class="sn">DomainSavedFilterDataTransformer</span><div class="sd">Takes the saved filter's persisted payload and transforms it into the mobile's <code>FilterQueryParameters</code> model for that <code>FiltersScope</code> — the only piece a feature team writes.<br>Declared once in <b>PGF</b> — applies to both Android and iOS, no per-platform duplication.</div></div>

<div class="spot-item"><span class="sn">Domain Saved Filters Feature Flag</span><div class="sd">A feature flag added inside the <b>FiltersScope</b>. It controls whether that <code>FiltersScope</code> is onboarded onto Saved Filters — allowing syncing and presentation of Saved Filters for it.</div></div>

<div class="spot-item"><span class="sn">Saved Filters Sync</span><div class="sd">Brings project and account saved filters definitions down to the device, kept current as they change server-side.</div></div>

<div class="spot-item"><span class="sn">Saved Filters Persistence</span><div class="sd">Stores the synced saved filters locally, dual-scoped (project / global), ready to list and apply without a network round-trip.</div></div>

<div class="spot-item"><span class="sn">Saved Filters Presentation</span><div class="sd">The UI for browsing and applying a saved filter — consistent across every tool.</div></div>

</div>

</div>
