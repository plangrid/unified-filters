# Filters Panel

The filters drilldown panel — now **unified** across every tool.

One consistent way to filter by status, assignee, location, dates, etc — whatever the tool tracks.

<div class="shots">
  <img src="/screenshots/panel-1.png" alt="Filters Panel screenshot 1" />
  <img src="/screenshots/panel-2.png" alt="Filters Panel screenshot 2" />
</div>

## Supported filter types

Every filter in the panel is one of eight built-in types — feature teams pick which ones they need per filter, no custom UI required.

<div class="tile-grid">
<a href="https://www.figma.com/design/oHi6w955NY5Uf4TpIyYLbJ/%E2%9D%96-ACC-DS-%7C-Mobile--iOS---Android-?node-id=51391-14657&t=SOtsidakoVfoXS61-4"><div class="tile-card"><div class="tile-title">Text</div><div class="tile-desc">Single/Multi-select from a list of text options, with optional avatars.</div></div></a>
<a href="https://www.figma.com/design/oHi6w955NY5Uf4TpIyYLbJ/%E2%9D%96-ACC-DS-%7C-Mobile--iOS---Android-?node-id=51391-14046&t=SOtsidakoVfoXS61-4"><div class="tile-card"><div class="tile-title">Members</div><div class="tile-desc">Single/Multi-select users, roles, or companies — configurable per filter.</div></div></a>
<a href="https://www.figma.com/design/oHi6w955NY5Uf4TpIyYLbJ/%E2%9D%96-ACC-DS-%7C-Mobile--iOS---Android-?node-id=51391-12421&t=SOtsidakoVfoXS61-4"><div class="tile-card"><div class="tile-title">Hierarchy</div><div class="tile-desc">Single/Multi-select tree-structured options (locations, categories) with cascading child selection.</div></div></a>
<a href="https://www.figma.com/design/oHi6w955NY5Uf4TpIyYLbJ/%E2%9D%96-ACC-DS-%7C-Mobile--iOS---Android-?node-id=51391-13277&t=SOtsidakoVfoXS61-4"><div class="tile-card"><div class="tile-title">Date</div><div class="tile-desc">Single date-option selection — presets or a custom range.</div></div></a>
<a href="https://www.figma.com/design/oHi6w955NY5Uf4TpIyYLbJ/%E2%9D%96-ACC-DS-%7C-Mobile--iOS---Android-?node-id=51391-12425&t=SOtsidakoVfoXS61-4"><div class="tile-card"><div class="tile-title">Status</div><div class="tile-desc">Single/Multi-select with badge styling per option.</div></div></a>
<a href="https://www.figma.com/design/oHi6w955NY5Uf4TpIyYLbJ/%E2%9D%96-ACC-DS-%7C-Mobile--iOS---Android-?node-id=50738-11276&t=SOtsidakoVfoXS61-4"><div class="tile-card"><div class="tile-title">Toggle</div><div class="tile-desc">A boolean switch or checkmark.</div></div></a>
<a href="https://www.figma.com/design/oHi6w955NY5Uf4TpIyYLbJ/%E2%9D%96-ACC-DS-%7C-Mobile--iOS---Android-?node-id=50768-2579&t=SOtsidakoVfoXS61-4"><div class="tile-card"><div class="tile-title">Input</div><div class="tile-desc">Free-form text, multiline, or numeric entry.</div></div></a>
<a href="https://www.figma.com/design/oHi6w955NY5Uf4TpIyYLbJ/%E2%9D%96-ACC-DS-%7C-Mobile--iOS---Android-?node-id=53083-10053&t=SOtsidakoVfoXS61-4"><div class="tile-card"><div class="tile-title">Conditional numeric input</div><div class="tile-desc">A comparison operator (=, ≠, &lt;, &gt;, between…), then one or two values.</div></div></a>
</div>

The [Filters Panel Figma file](https://www.figma.com/design/oHi6w955NY5Uf4TpIyYLbJ/%E2%9D%96-ACC-DS-%7C-Mobile--iOS---Android-?node-id=50657-7277&p=f&t=ti99r5Tq3uhD6Zrh-0) is the design source of truth for every one of these types — see also [Reference](../reference/) for the rest of the source material.

## Custom Fields

Custom fields are supported in the panel just like any built-in filter. Up to 10 (defaults to 10, configurable), they're displayed in-place alongside the rest; past that, a custom fields selection screen lets users choose which ones participate in filtering.

## Reset vs. Clear All

Two distinct actions:

<div class="note-row"><b>Clear All</b> — clears every filter's selection back to empty. Shown whenever any filter is active, regardless of domain.</div>
<div class="note-row"><b>Reset</b> — restores the domain's original/default filter configuration, which may itself be non-empty (e.g. a default preset). Only shown for domains that opt into reset support — not every domain has a meaningful default to reset to.</div>

## Default filter

Every domain can configure a **default filter** — the baseline set of filter values applied when a user has nothing saved yet, and restored by **Reset** (see above). It doesn't have to be empty: a domain can default to a meaningful preset (e.g. "open items assigned to me") rather than "no filters applied" — once the user changes any filter, that change is saved like any other, the default is just the starting point.

## Initial Filters <span class="soon soon-inline">Coming soon<span class="hammer">🔨</span></span> {#initial-filters}

A specific navigation route can also apply its own **route-specific** default filters, distinct from the domain-wide default above and never persisted — see [Initial Filters](../integrations/initial-filters) for the full design.

## Filters persistence

Every filter selection made in the panel is saved automatically — it survives app restarts and stays consistent with the rest of the framework, so users never lose their filters between sessions.
