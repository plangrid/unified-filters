# One core, two platforms

The PGF contract is shared — only the domain model, its mappers, and the UI are platform-specific.

<div class="note-row"><b>Shared verbatim</b> — <span class="a">FiltersScope</span> · <span class="a">FilterQueryParameters</span> · <span class="a">FiltersDisplayNamesResolver</span> · the persistence stack, identical on both platforms.</div>

<div class="tile-card amber" style="margin-top:0.5rem">
<div class="tile-title a">Where the platforms diverge</div>
<div class="tile-desc">Each platform defines its <b>own DomainFiltersModel</b> — so it also writes its <b>own Mappers</b> (always), plus a custom <b>Updater</b> only when the model carries non-filter state to preserve.</div>
</div>

<div class="note-row" style="margin-top:0.5rem"><b>But the contract stays identical</b> — different presentations, yet every screen drives its list the same way: by observing the <span class="a">Store</span>'s <code>currentFilter</code>.</div>
