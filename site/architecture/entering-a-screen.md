# Entering a screen — the read path

<p class="flow-hint">Hover a box or a connecting line to see its detail on the right.</p>

<div class="flow-diagram">

<div class="flow-col">

<div class="flow-box amber">Persistence</div>
<div class="conn-v"></div>
<div class="flow-box amber">FiltersScopeRepository</div>
<div class="conn-v"></div>
<div class="flow-box dashed">Store</div>
<div class="conn-v"></div>
<div class="flow-box dashed">FiltersModelProvider</div>
<div class="conn-v"></div>
<div class="flow-box">DisplayNamesResolver</div>
<div class="conn-v"></div>
<div class="flow-box amber">FiltersModelHolder</div>
<div class="conn-v"></div>
<div class="flow-box amber">Filters Panel /<br>Quick Filters</div>

</div>

<div class="flow-notes">

<p class="flow-note">On open, the read path starts at <span class="a">Persistence</span> — the previously saved filter selection.</p>
<p class="flow-note">The persisted data is loaded through the <span class="a">FiltersScopeRepository</span>.</p>
<p class="flow-note">The <span class="a">Repository</span> reads the persisted <b>FilterQueryParameters</b>.</p>
<p class="flow-note">The <b>FilterQueryParameters</b> flow into the <span class="a">Store</span>.</p>
<p class="flow-note">The <span class="a">Store</span> holds <code>currentFilter</code> and feeds it to the <span class="a">FiltersModelProvider</span>.</p>
<p class="flow-note">The <span class="a">Store</span>'s parameters are handed to the <span class="a">FiltersModelProvider</span>.</p>
<p class="flow-note">The <span class="a">FiltersModelProvider</span> maps the parameters into <span class="a">FiltersModel</span>.</p>
<p class="flow-note">Stored ids still need names before they can be rendered.</p>
<p class="flow-note">The <b>DisplayNamesResolver</b> hydrates stored ids into display names.</p>
<p class="flow-note">The hydrated <span class="a">FiltersModel</span> reaches the <span class="a">FiltersModelHolder</span>.</p>
<p class="flow-note">The <span class="a">FiltersModelHolder</span> = <span class="a">Provider</span> (read) + <span class="a">Updater</span> (write) — the single source the presentation observes.</p>
<p class="flow-note">The Holder exposes the hydrated model to the presentation.</p>
<p class="flow-note">The <span class="a">Filters Panel</span> / <span class="a">Quick Filters</span> observe the <span class="a">Holder</span> and render the current selection.</p>

</div>

</div>

<div style="margin-top: 1.5rem">
<div class="note-row">On open, the <span class="a">Store</span> reads the persisted <b>FilterQueryParameters</b> from the <span class="a">Repository</span>…</div>
<div class="note-row">The <span class="a">FiltersModelProvider</span> maps it to <span class="a">FiltersModel</span> and hydrates stored ids into names via the <b>DisplayNamesResolver</b>.</div>
<div class="note-row">The <span class="a">FiltersModelHolder</span> = <span class="a">Provider</span> (read) + <span class="a">Updater</span> (write) — the <span class="a">Filters Panel</span> / <span class="a">Quick Filters</span> observe it.</div>
</div>

<div class="flow" style="margin-top: 1.5rem; justify-content: center">
  <div class="flow-box dashed">Store · currentFilter</div>
  <span class="flow-arrow">→</span>
  <div class="flow-box">List Screen</div>
  <span class="flow-arrow">→</span>
  <div class="flow-box">Filtered list</div>
</div>

<div class="note-row" style="margin-top: 0.75rem">Meanwhile <b>the screen</b> observes the <span class="a">Store</span>'s <code>currentFilter</code> — the <b>list</b> renders filtered.</div>

<div class="flegend">
  <div class="k"><span class="sw amber"></span> framework-provided</div>
  <div class="k"><span class="sw dash"></span> provided · overridable</div>
  <div class="k"><span class="sw"></span> you implement</div>
</div>
