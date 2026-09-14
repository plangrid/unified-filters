# Architecture at a glance

The core pipeline is a **shared PGF behavior**, consumed by iOS *and* Android. Only the presentation, mappings and DI wiring is done per platform.

<p class="flow-hint">Hover a box or a connecting line to see its detail on the right.</p>

<div class="flow-diagram">

<div class="flow-col">

<div class="flow-box amber">FiltersModel<br>UI shape</div>

<div class="conn-v bi"><span class="lbl">DomainFiltersModelMapper</span></div>

<div class="flow-box heart"><span class="star">★</span> DomainFiltersModel<br>the heart · your model</div>

<div class="conn-v bi"><span class="lbl">FilterQueryParametersMapper</span></div>

<div class="flow-box">FilterQueryParameters<br>persisted shape · ids only</div>

<div class="conn-v"><span class="lbl">persisted by</span></div>

<div class="flow-box dashed">DomainFiltersModelStore</div>

<div class="conn-v"></div>

<div class="flow-box amber">FiltersScopeRepository</div>

<div class="conn-v"></div>

<div class="flow-box amber">Current List Filters DB Table</div>

</div>

<div class="flow-notes">

<p class="flow-note"><b>FiltersModel</b> — the generic UI shape the panel renders.</p>
<p class="flow-note">The <b>DomainFiltersModelMapper</b> translates your model to the UI shape, both ways.</p>
<p class="flow-note"><b>DomainFiltersModel</b> — the feature team's in-memory model: the filter selection plus domain-owned state (sort, search, template). The whole design is built around it.</p>
<p class="flow-note">The <b>FilterQueryParametersMapper</b> translates your model to the persisted shape, both ways.</p>
<p class="flow-note"><b>FilterQueryParameters</b> — the persisted shape, ids only. Never display names.</p>
<p class="flow-note">The <b>Store</b> is what actually persists <b>FilterQueryParameters</b>.</p>
<p class="flow-note"><b>DomainFiltersModelStore</b> (provided) — holds <code>currentFilter</code> and writes the query params onward.</p>
<p class="flow-note">The <b>Store</b> writes through the <b>FiltersScopeRepository</b>.</p>
<p class="flow-note"><b>FiltersScopeRepository</b> (provided) — serializes the query params.</p>
<p class="flow-note">The <b>Repository</b> persists into the shared table.</p>
<p class="flow-note"><b>Current List Filters DB Table</b> — the shared table every platform reads from and writes to.</p>

</div>

</div>

<div style="margin-top: 1.5rem">

<div class="note-row"><b>DomainFiltersModel</b> — the feature team's in-memory model: the filter selection + domain-owned state (sort, search, template). <span class="a">The whole design is built around it.</span></div>
<div class="note-row"><span class="a">FiltersModel</span> — the generic UI shape the panel renders. The <b>DomainFiltersModelMapper</b> translates your model ↔ UI, both ways.</div>
<div class="note-row"><b>FilterQueryParameters</b> — the persisted shape, ids only. The <b>FilterQueryParametersMapper</b> translates your model ↔ persisted, both ways.</div>
<div class="note-row"><b>The persistence machinery</b> (provided) — the <span class="a">Store</span> holds <code>currentFilter</code> and writes the query params through the <span class="a">Repository</span> into the shared <span class="a">Current List Filters DB Table</span>.</div>

</div>

<div class="flegend">
  <div class="k"><span class="sw amber"></span> framework-provided</div>
  <div class="k"><span class="sw dash"></span> provided · overridable</div>
  <div class="k"><span class="sw"></span> you implement</div>
</div>
