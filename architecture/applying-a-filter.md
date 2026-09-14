# Applying a filter — inside the framework

<p class="flow-hint">Hover a box or a connecting line to see its detail on the right.</p>

<div class="flow-diagram">

<div class="flow-col">

<div class="flow-box amber">Filters Panel /<br>Quick Filters</div>
<div class="conn-v"></div>
<div class="flow-box amber">FiltersModel Holder</div>
<div class="conn-v"></div>
<div class="flow-box dashed">Updater</div>
<div class="conn-v"></div>
<div class="flow-box">DomainFiltersModelMapper</div>
<div class="conn-v"></div>
<div class="flow-box dashed">Store</div>
<div class="conn-v"></div>
<div class="flow-box amber">FiltersScopeRepository</div>
<div class="conn-v"></div>
<div class="flow-box amber">Persistence</div>

</div>

<div class="flow-notes">

<p class="flow-note">Each filters presentation — the <b>Filters Panel</b> or <b>Quick Filters</b> — is injected with its <b>FiltersScope</b>'s <b>FiltersModelHolder</b>.</p>
<p class="flow-note">The filter change flows from the presentation into its <b>FiltersModelHolder</b>.</p>
<p class="flow-note">The <b>Holder</b> takes the change and dispatches the <b>Updater</b>, alongside analytics.</p>
<p class="flow-note">The <b>Updater</b> hands the change to the <b>DomainFiltersModelMapper</b>.</p>
<p class="flow-note">The <b>Updater</b> maps the change through the <b>DomainFiltersModelMapper</b> and updates the <b>Store</b>.</p>
<p class="flow-note">The mapped model is written into the <b>Store</b>.</p>
<p class="flow-note">The <b>DomainFiltersModelMapper</b> translates your domain model into the shape the <b>Store</b> persists.</p>
<p class="flow-note">The <b>Store</b> maps the model to <b>FilterQueryParameters</b>.</p>
<p class="flow-note">The <b>Store</b> maps to <b>FilterQueryParameters</b>, then hands them to the <b>Repository</b>.</p>
<p class="flow-note">The <b>FilterQueryParameters</b> are handed to the <b>FiltersScopeRepository</b>.</p>
<p class="flow-note">The <b>Repository</b> serializes the parameters and persists them.</p>
<p class="flow-note">The serialized parameters are written to <b>Persistence</b>.</p>
<p class="flow-note">The filter selection is durably saved for this <b>FiltersScope</b>.</p>

</div>

</div>

<div style="margin-top: 1.5rem">
<div class="note-row">Each filters presentation (<span class="a">Filters Panel</span> / <span class="a">Quick Filters</span>) is injected with its <span class="a">FiltersScope</span>'s <span class="a">FiltersModelHolder</span>.</div>
<div class="note-row">The <span class="a">Holder</span> takes the filter change and dispatches the <span class="a">Updater</span>, alongside analytics.</div>
<div class="note-row">The <span class="a">Updater</span> maps it through the <b>DomainFiltersModelMapper</b> and updates the <span class="a">Store</span>.</div>
<div class="note-row">The <span class="a">Store</span> maps to <b>FilterQueryParameters</b>, then the <span class="a">Repository</span> serializes &amp; persists it.</div>
</div>

<div class="flegend">
  <div class="k"><span class="sw amber"></span> framework-provided</div>
  <div class="k"><span class="sw dash"></span> provided · overridable</div>
  <div class="k"><span class="sw"></span> you implement</div>
</div>
