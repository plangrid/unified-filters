---
theme: default
title: Unified Filters Framework
info: |
  ## Unified Filters Framework — Integration Guide
  A cross-platform handover & onboarding deck.
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: Overpass
  mono: Fira Code
---

<div class="h-full flex flex-col justify-center">

<div class="cover-title">Unified Filters<br/>Framework</div>
<div class="cover-sub">One shared contract<span class="sep">·</span>two platforms<span class="sep">·</span>every filterable surface</div>

</div>

<div class="abs-br m-6 text-xs opacity-40">
Press <kbd>Space</kbd> to advance
</div>

<!--
Speaker note: readable narrative; the always-current source of truth lives in-repo
(pgf/feature/filters/CLAUDE.md, android/filters/CLAUDE.md).
-->

---

# One filtering experience, everywhere

<div class="text-2xl mt-4 mb-8" style="color:#d6d6dc; line-height:1.55; max-width:56rem">Every list in the product filters the same way — the same filters presentations (Filters Panel, Quick Filters, Saved Filters) — across <span class="a">Issues</span>, <span class="a">RFIs</span>, <span class="a">Forms</span> and more, on both <span class="a">iOS</span> and <span class="a">Android</span>.</div>

<div class="callout" v-click="1">Users learn filtering <span class="a">once</span> — and every tool behaves the same.</div>

<!--
PM track
-->

---

# Why it matters

<div class="flex flex-col gap-3 max-w-5xl mt-2">
  <div class="give" v-click="1"><span class="gn">Consistency</span><span class="gd">One mental model — every tool filters the same way.</span></div>
  <div class="give" v-click="2"><span class="gn">Platform parity</span><span class="gd">Identical behavior on iOS and Android.</span></div>
  <div class="give" v-click="3"><span class="gn">Free for new tools</span><span class="gd">Teams plug in — they don't rebuild filtering each time.</span></div>
  <div class="give" v-click="4"><span class="gn">Persistent filters</span><span class="gd">A user's filters persist per list when they return to their view.</span></div>
  <div class="give" v-click="5"><span class="gn">Built-in insight</span><span class="gd">Filter usage is tracked automatically — no extra wiring.</span></div>
</div>

---

# What users get

<div class="muted mb-5" style="margin-top:-0.4rem">Three ways to filter — consistent across every tool.</div>

<div class="flex flex-col gap-3 max-w-5xl">
  <div class="give" v-click="1"><span class="gn">Filters Panel</span><span class="gd">The full drilldown panel — now unified across every tool.</span></div>
  <div class="give" v-click="2"><span class="gn">Quick Filters</span><span class="gd">One-tap presets for faster access.</span></div>
  <div class="give" v-click="3"><span class="gn">Saved Filters</span><span class="gd">Faster access to commonly used filters in a project or account.</span></div>
</div>

---

# Filters Panel

<div class="flex gap-12 items-center mt-3">
  <div class="flex-1 max-w-lg">
    <div class="text-2xl" style="color:#e6e6ea; line-height:1.5">The filters drilldown panel — now <span class="a">unified</span> across every tool.</div>
    <div class="text-lg mt-4" style="color:#a8a8b0; line-height:1.6">One consistent way to filter by status, assignee, location, dates, etc — whatever the tool tracks.</div>
  </div>
  <div class="shots">
    <div class="shot"><img src="/screenshots/panel-1.png"/></div>
    <div class="shot"><img src="/screenshots/panel-2.png"/></div>
  </div>
</div>

---

# Quick Filters

<div class="flex gap-12 items-center mt-3">
  <div class="flex-1 max-w-lg">
    <div class="text-2xl" style="color:#e6e6ea; line-height:1.5">One-tap filter <span class="a">presets</span> that give users faster access.</div>
    <div class="text-lg mt-4" style="color:#a8a8b0; line-height:1.6">Common filters like <em>Assigned to Me</em>, <em>My Company</em>, and <em>Due in 7 Days</em> — applied in a single tap.</div>
  </div>
  <div class="shots">
    <div class="shot"><img src="/screenshots/quick-1.png"/></div>
  </div>
</div>

---

# Saved Filters

<div class="flex gap-12 items-center mt-3">
  <div class="flex-1 max-w-lg">
    <div class="text-2xl" style="color:#e6e6ea; line-height:1.5"><span class="a">Faster access</span> to commonly used filters inside a project or account.</div>
    <div class="text-lg mt-4" style="color:#a8a8b0; line-height:1.6">Save a filter combination once, then reapply it anytime, anywhere (Mobile & Web).</div>
  </div>
  <div class="shots">
    <div class="shot"><img src="/screenshots/saved-1.png"/></div>
    <div class="shot"><img src="/screenshots/saved-2.png"/></div>
  </div>
</div>

---
layout: center
class: text-center
---

<div class="text-5xl font-extrabold" style="color:var(--amber)">Engineering deep-dive</div>
<div class="muted mt-3 text-xl">How the framework works — and how to integrate a new domain.</div>

---

# What is Unified Filters?

The shared framework behind the <span class="a">Filters Panel</span>, <span class="a">Quick Filters</span>, and <span class="a">Saved Filters</span>.

<div class="mt-6"></div>

A feature team plugs a domain in by **declaring what its filters are** — their ids, types, and options — not *how* to render, persist, or track them. The framework provides all of that: **Unified filters presentation and behavior, persistence, and analytics**.

<div class="callout mt-8">

**The idea:** the core pipeline is a <span class="a">shared PGF behavior</span>, consumed by iOS *and* Android.<br> Only the presentation, mappings and DI wiring is done per platform.

</div>

---

# Architecture at a glance

<div class="flex gap-6 mt-2">

<div class="shrink-0" style="width:360px">
<div class="stack">
  <div class="fbox amber" v-click="2"><span class="n">FiltersModel</span><span class="r">UI shape</span></div>
  <div class="conn-v bi" v-click="2"><span class="lbl">DomainFiltersModelMapper</span></div>
  <div class="fbox heart" v-click="1"><span class="n">DomainFiltersModel</span><span class="r"><span class="star">★</span> the heart<span class="sep">·</span>your model</span></div>
  <div class="conn-v bi" v-click="3"><span class="lbl">FilterQueryParametersMapper</span></div>
  <div class="fbox" v-click="3"><span class="n">FilterQueryParameters</span><span class="r">persisted shape<span class="sep">·</span>ids only</span></div>
  <div class="conn-v" v-click="4"><span class="lbl">persisted by</span></div>
  <div class="fbox dash" v-click="4"><span class="n">DomainFiltersModelStore</span></div>
  <div class="conn-v" v-click="4"></div>
  <div class="fbox amber" v-click="4"><span class="n">FiltersScopeRepository</span></div>
  <div class="conn-v" v-click="4"></div>
  <div class="fbox amber" v-click="4"><span class="n">Current List Filters DB Table</span></div>
</div>
</div>

<div class="flex-1 flex flex-col gap-4 pt-1">
  <div class="note" v-click="1"><b>DomainFiltersModel</b> — the feature team's in-memory model: the filter selection + domain-owned state (sort, search, template). <span class="a">The whole design is built around it.</span></div>
  <div class="note" v-click="2"><span class="a">FiltersModel</span> — the generic UI shape the panel renders. The <b>DomainFiltersModelMapper</b> translates your model ↔ UI, both ways.</div>
  <div class="note" v-click="3"><b>FilterQueryParameters</b> — the persisted shape, ids only. The <b>FilterQueryParametersMapper</b> translates your model ↔ persisted, both ways.</div>
  <div class="note" v-click="4"><b>The persistence machinery</b> (provided) — the <span class="a">Store</span> holds <code>currentFilter</code> and writes the query params through the <span class="a">Repository</span> into the shared <span class="a">Current List Filters DB Table</span>.</div>
  <div class="flegend" style="justify-content:flex-start; margin-top:1rem" v-click="4">
    <div class="k"><span class="sw amber"></span> framework-provided</div>
    <div class="k"><span class="sw dash"></span> provided<span class="sep">·</span>overridable</div>
    <div class="k"><span class="sw"></span> you implement</div>
  </div>
</div>

</div>

---

# What the framework gives you

<div class="muted mb-5" style="margin-top:-0.4rem">All of this is provided — you never build it.</div>

<div class="flex flex-col gap-3 max-w-5xl">
  <div class="give" v-click="1"><span class="gn">Filters Panel UI</span><span class="gd">The drilldown panel — option lists, selection, apply / clear / reset behavior.</span></div>
  <div class="give" v-click="2"><span class="gn">Quick Filters</span><span class="gd">The preset chip row, plus the filter icon and its active-count badge.</span></div>
  <div class="give" v-click="3"><span class="gn">Persistence stack</span><span class="gd">Typed, scope-keyed storage — Store → Repository → DB. A domain never writes its own.</span></div>
  <div class="give" v-click="4"><span class="gn">Name resolution</span><span class="gd">Hydrates persisted filter's options ids back into display names at read time.</span></div>
  <div class="give" v-click="5"><span class="gn">Analytics</span><span class="gd">Filter events dispatched for you — no wiring needed.</span></div>
</div>

---

# The integration seam

<div class="muted mb-4" style="margin-top:-0.6rem">What a feature team authors — plus the provided defaults it can override.</div>

<div class="flex gap-8" style="height:360px">

<div class="shrink-0" style="width:340px">
<div class="text-sm muted mb-2 font-bold uppercase tracking-wider">You author</div>
<div class="flex flex-col gap-1">
  <div class="chk" v-click="1"><span class="tick">✓</span> FiltersScope</div>
  <div class="chk" v-click="2"><span class="tick">✓</span> FilterQueryParameters</div>
  <div class="chk" v-click="3"><span class="tick">✓</span> FiltersDisplayNamesResolver</div>
  <div class="chk" v-click="4"><span class="tick">✓</span> The two Mappers</div>
  <div class="chk" v-click="5"><span class="tick">✓</span> Drilldown options providers</div>
  <div class="chk" v-click="6"><span class="tick">✓</span> QuickFiltersProvider</div>
  <div class="chk" v-click="7"><span class="tick">✓</span> FiltersModelHolderFactory</div>
</div>
<div class="text-sm muted mt-3 mb-2 font-bold uppercase tracking-wider">Provided — override when…</div>
<div class="flex flex-col gap-1">
  <div class="chk" v-click="8"><span class="dtick"></span> DomainFiltersModelStore</div>
  <div class="chk" v-click="9"><span class="dtick"></span> FiltersModelProvider</div>
  <div class="chk" v-click="10"><span class="dtick"></span> DomainFiltersModelUpdater</div>
</div>
</div>

<div class="seam"></div>

<div class="flex-1 spotwrap">
  <div class="spot" v-click="[1,2]"><span class="sn">FiltersScope</span><span class="sd">The key for one filterable surface (a log, a picker) — a sealed class in PGF. It keys both the persisted selection and analytics; the framework resolves everything else from it.</span></div>
  <div class="spot" v-click="[2,3]"><span class="sn">FilterQueryParameters</span><span class="sd">The <code>@Serializable</code> persisted shape. Holds ids — never display names — so filters options survive being renamed. This is what actually gets stored.</span></div>
  <div class="spot" v-click="[3,4]"><span class="sn">FiltersDisplayNamesResolver</span><span class="sd">Turns persisted ids back into display names (Text, Members, Hierarchy type of filters) at read time. Shared across platforms — it's why FilterQueryParameters can stay ids-only.</span></div>
  <div class="spot" v-click="[4,5]"><span class="sn">The two Mappers</span><div class="sd">Two translation seams:<ul class="spotlist"><li><b>DomainFiltersModelMapper</b> — your model ↔ the panel's UI shape.</li><li><b>FilterQueryParametersMapper</b> — your model ↔ the persisted shape.</li></ul></div></div>
  <div class="spot" v-click="[5,6]"><span class="sn">Drilldown options providers</span><span class="sd">Feed the option lists behind <em>every</em> filter drilldown — statuses, types, members, locations, custom fields, and whatever else your domain filters by. One provider per filter.</span></div>
  <div class="spot" v-click="[6,7]"><span class="sn">QuickFiltersProvider</span><span class="sd">Supplies the preset chips, applied atomically. The out-of-the-box set is <em>Assigned to Me<span class="sep">·</span>My Company<span class="sep">·</span>Due in 7 Days</em>.</span></div>
  <div class="spot" v-click="[7,8]"><span class="sn">FiltersModelHolderFactory</span><span class="sd">The final wiring — assembles the read-side <b>FiltersModelProvider</b> and the write-side <b>Updater</b> into the <b>FiltersModelHolder</b> (the filters presentation state machine). One holder per scope.</span></div>
  <div class="spot" v-click="[8,9]"><span class="sn">DomainFiltersModelStore</span><div class="sd"><div class="sov">The top of the persistence stack — exposes <code>currentFilter</code> (observed by filters presentations and feature teams' list), persists every change, and holds the <b>default filter</b> applied when nothing is stored yet, and on reset.</div><div class="mt-2"><span class="plabel">Default</span> — the generic impl derives your model straight from the persisted params.</div><div class="mt-2"><span class="plabel">Override when</span> — your model blends other reactive sources (dynamic types, custom attributes).</div></div></div>
  <div class="spot" v-click="[9,10]"><span class="sn">FiltersModelProvider</span><div class="sd"><div><span class="plabel">Default</span> — reads the store, maps to the UI shape, merges resolved display names.</div><div class="mt-2"><span class="plabel">Override when</span> — options are dynamically available (derive the lists from the live filtered data).</div></div></div>
  <div class="spot" v-click="10"><span class="sn">DomainFiltersModelUpdater</span><div class="sd"><div><span class="plabel">Default</span> — writes the filters presentation's edits straight back to the store.</div><div class="mt-2"><span class="plabel">Override when</span> — you must preserve non-filter fields (sort, search, template) or make filters depend on each other.</div></div></div>
</div>

</div>

---
layout: center
class: text-center
---

<div class="text-4xl font-extrabold" style="color:var(--amber)">How it flows</div>

---
layout: center
class: text-center
---

<div class="text-2xl font-bold" style="color:var(--amber)">Filters Boundaries</div>
<div class="muted mt-1">The big-picture data flow &amp; framework / feature-team boundaries</div>

<video controls muted class="mediaframe mx-auto mt-5 max-h-95">
  <source src="/FiltersFlow.mp4" type="video/mp4" />
</video>

---

# Applying a filter — inside the framework

<div class="flow mt-8">
  <div class="fbox amber" v-click="1"><span class="n">Filters Panel /<br/>Quick Filters</span></div>
  <div class="conn h" v-click="1"></div>
  <div class="fbox amber" v-click="1"><span class="n">FiltersModel<br/>Holder</span></div>
  <div class="conn h" v-click="2"></div>
  <div class="fbox dash" v-click="2"><span class="n">Updater</span></div>
  <div class="conn h" v-click="3"></div>
  <div class="fbox dash" v-click="3"><span class="n">Store</span></div>
  <div class="conn h" v-click="4"></div>
  <div class="fbox amber" v-click="4"><span class="n">FiltersScope<br/>Repository</span></div>
  <div class="conn h" v-click="4"></div>
  <div class="fbox amber" v-click="4"><span class="n">Persistence</span></div>
</div>

<div class="flow-notes mt-10 max-w-4xl mx-auto">
  <div class="note" v-click="1">Each filters presentation (<span class="a">Filters Panel</span> / <span class="a">Quick Filters</span>) is injected with its <span class="a">FiltersScope</span>'s <span class="a">FiltersModelHolder</span>.</div>
  <div class="note" v-click="2">The <span class="a">Holder</span> takes the filter change and dispatches the <span class="a">Updater</span>, alongside analytics.</div>
  <div class="note" v-click="3">The <span class="a">Updater</span> maps it through the <b>DomainFiltersModelMapper</b> and updates the <span class="a">Store</span>.</div>
  <div class="note" v-click="4">The <span class="a">Store</span> maps to <b>FilterQueryParameters</b>, then the <span class="a">Repository</span> serializes &amp; persists it.</div>
  <div class="note" v-click="5"><span class="a">currentFilter</span> emits — the panel and the list observe that one stream.</div>
</div>

<div class="flegend">
  <div class="k"><span class="sw amber"></span> framework-provided</div>
  <div class="k"><span class="sw dash"></span> provided<span class="sep">·</span>overridable</div>
  <div class="k"><span class="sw"></span> you implement</div>
</div>

---
layout: center
class: text-center
---

<div class="text-2xl font-bold" style="color:var(--amber)">How a Filter is Applied</div>
<div class="muted mt-1">Panel → Holder → Updater (Mapper → Store) → Repository → persistence</div>

<video controls muted class="mediaframe mx-auto mt-5 max-h-95">
  <source src="/ApplyPipeline.mp4" type="video/mp4" />
</video>

---

# Entering a screen — the read path

<div class="flow mt-6">
  <div class="fbox amber" v-click="1"><span class="n">Persistence</span></div>
  <div class="conn h" v-click="1"></div>
  <div class="fbox amber" v-click="1"><span class="n">FiltersScope<br/>Repository</span></div>
  <div class="conn h" v-click="2"></div>
  <div class="fbox dash" v-click="2"><span class="n">Store</span></div>
  <div class="conn h" v-click="3"></div>
  <div class="fbox dash" v-click="3"><span class="n">FiltersModel<br/>Provider</span></div>
  <div class="conn h" v-click="4"></div>
  <div class="fbox amber" v-click="4"><span class="n">FiltersModel<br/>Holder</span></div>
  <div class="conn h" v-click="4"></div>
  <div class="fbox amber" v-click="4"><span class="n">Filters Presentation</span></div>
</div>

<div class="flow mt-5" v-click="5">
  <div class="fbox dash"><span class="n">Store<span class="sep">·</span>currentFilter</span></div>
  <div class="conn h"></div>
  <div class="fbox"><span class="n">List query</span></div>
  <div class="conn h"></div>
  <div class="fbox"><span class="n">Filtered list</span></div>
</div>

<div class="flow-notes mt-8 max-w-4xl mx-auto">
  <div class="note" v-click="2">On open, the <span class="a">Store</span> reads the persisted <b>FilterQueryParameters</b> from the <span class="a">Repository</span>…</div>
  <div class="note" v-click="3">The <span class="a">FiltersModelProvider</span> maps it to <span class="a">FiltersModel</span> and hydrates stored ids into names via the <b>DisplayNamesResolver</b>.</div>
  <div class="note" v-click="4">The <span class="a">FiltersModelHolder</span> = <span class="a">Provider</span> (read) + <span class="a">Updater</span> (write) — the <span class="a">filters presentation</span> observes it.</div>
  <div class="note" v-click="5">Meanwhile <b>the screen</b> observes the <span class="a">Store's currentFilter</span> — the <b>list</b> renders filtered.</div>
</div>

<div class="flegend" v-click="1">
  <div class="k"><span class="sw amber"></span> framework-provided</div>
  <div class="k"><span class="sw dash"></span> provided<span class="sep">·</span>overridable</div>
  <div class="k"><span class="sw"></span> you implement</div>
</div>

---

# One core, two platforms

<div class="muted mb-5" style="margin-top:-0.4rem">The PGF contract is shared — only the domain model, its mappers, and the UI are platform-specific.</div>

<div class="note max-w-5xl" v-click="1"><b>Shared verbatim</b> — <span class="a">FiltersScope</span><span class="sep">·</span><span class="a">FilterQueryParameters</span><span class="sep">·</span><span class="a">FiltersDisplayNamesResolver</span><span class="sep">·</span>the persistence stack, identical on both platforms.</div>

<div class="diverge mt-5" v-click="2">
  <div class="dlabel">Where the platforms diverge</div>
  Each platform defines its <b>own DomainFiltersModel</b> — so it also writes its <b>own Mappers</b> (always), plus a custom <b>Updater</b> only when the model carries non-filter state to preserve.
</div>

<div class="note mt-5 max-w-5xl" v-click="3"><b>But the contract stays identical</b> — different presentations, yet every screen drives its list the same way: by observing the <span class="a">Store's currentFilter</span>.</div>

---
layout: center
class: text-center
---

<div class="text-4xl font-extrabold" style="color:var(--amber)">Integrating a new domain</div>
<div class="muted mt-2 text-xl">Start with the skill — then ship three stacked PRs</div>

---

# Start with the `/integrate-filters` skill

<div class="text-xl mt-2 mb-6">Don't hand-roll it — the <code>/integrate-filters</code> skill <span class="a">orchestrates the whole integration</span>.</div>

<div class="flow-notes max-w-4xl">
  <div class="note" v-click="1">📖 Reads the <b>in-repo design docs</b> (the source of truth) and picks your platform.</div>
  <div class="note" v-click="2">🔎 Explores your feature's <b>existing filters code</b> and deduces how they map onto the unified filters model.</div>
  <div class="note" v-click="3">🧩 Walks the integration <b>phase by phase</b>, scaffolding the classes for your domain.</div>
  <div class="note" v-click="4">🧱 Follows the same <b>three-PR structure</b> — pgf → domain-core → screen-integration.</div>
</div>

<div class="callout mt-8" v-click="5">It turns this deck's concepts into concrete, per-domain code — <span class="a">you review and refine</span>.</div>

---

# Three stacked PRs

<div class="flow mt-6">
  <div class="fbox amber" v-click="1"><span class="n">① pgf</span><span class="r">shared contract</span></div>
  <div class="conn h" v-click="2"></div>
  <div class="fbox amber" v-click="2"><span class="n">② domain-core</span><span class="r">flag OFF</span></div>
  <div class="conn h" v-click="3"></div>
  <div class="fbox amber" v-click="3"><span class="n">③ screen-integration</span><span class="r">flag gating</span></div>
</div>

<div class="grid grid-cols-3 gap-4 mt-8">
<div class="tile amber" v-click="1"><strong class="a">① pgf — shared contract</strong>
<ul class="tlist">
<li>FiltersScope</li>
<li>Filter + QuickFilter ids</li>
<li>Date-option ids</li>
<li>FilterQueryParameters</li>
<li>FiltersDisplayNamesResolver</li>
<li>Feature flag</li>
</ul>
</div>
<div class="tile" v-click="2"><strong>② domain-core — flag OFF</strong>
<ul class="tlist">
<li>The two Mappers</li>
<li>DomainFiltersModelStore</li>
<li>Provider + Updater</li>
<li>Options + hierarchy providers</li>
<li>QuickFiltersProvider</li>
<li>HolderFactory + DI wiring</li>
</ul>
</div>
<div class="tile" v-click="3"><strong>③ screen-integration — flag gating</strong>
<ul class="tlist">
<li>Entry point (Quick filters or Toolbar icon)</li>
<li>Onboarding tooltip</li>
<li>Launch the panel</li>
<li>Observe store → query</li>
<li>Gate unified vs legacy</li>
</ul>
</div>
</div>

<div class="muted text-xs mt-6 text-center" v-click="4">Per-phase file lists: <code>pgf/feature/filters/CLAUDE.md</code> · <code>android/filters/guides/domain-core.md</code> · <code>.../screen-integration.md</code></div>

---
class: vocab
---

# The vocabulary

| Concept | Role / intent |
|---|---|
| **FiltersScope** | The key identifying a filterable surface. Keys persistence *and* analytics; shared across platforms. |
| **FilterQueryParameters** | The **persisted** shape — ids only, never display names, so state survives renames. |
| **DomainFiltersModel** | The **in-memory** model — filter selection + domain-owned state (sort, search, other domain-specific properties). |
| **FiltersModel** | The generic **UI** shape the panel renders: Status, Text, Date, Members, Hierarchy, Input, Toggle. |
| **The two Mappers** | *QueryParametersMapper* (persistence boundary)<span class="sep">·</span>*DomainFiltersModelMapper* (UI boundary). |
| **Store / Repository stack** | The framework's typed, scope-keyed persistence — a domain never writes its own. |
| **FiltersModelProvider** | Read side — derives the displayed *FiltersModel* (maps the store, merges resolved names); use the default, or a custom for dynamic option availability. |
| **DomainFiltersModelUpdater** | Write side — writes the panel's edits back; use the default, or a custom to preserve non-filter fields / create dependency between filters. |
| **FiltersModelHolder** | The presentation **state machine**. One cached holder per scope. |
| **FiltersDisplayNamesResolver** | Resolves persisted ids → display names. *Why* query params store ids only. |
| **Quick Filters** | Preset filters chips. OOTB default: *Assigned to Me<span class="sep">·</span>My Company<span class="sep">·</span>Due in 7 Days*. |

---

# Invariants — never violate

<div class="grid grid-cols-2 gap-3 mt-2">
<div class="tile"><strong class="a">Persisted ids are forever</strong> — no rename without a migration.</div>
<div class="tile"><strong class="a">Store ids, not names</strong> — display names resolved separately.</div>
<div class="tile"><strong class="a">Date-option ids are bare</strong> — no domain prefix.</div>
<div class="tile"><strong class="a">FiltersScope is the shared key</strong> — same contract both platforms.</div>
<div class="tile"><strong class="a">Drive from <code>currentFilter</code></strong> — not the listener.</div>
<div class="tile"><strong class="a">One cached holder per scope</strong> — shared live state per surface.</div>
<div class="tile"><strong class="a">Preserve non-filter fields</strong> in custom stores/updaters.</div>
<div class="tile"><strong class="a">Ship behind the flag</strong> — keep legacy until rollout completes.</div>
</div>

---
layout: center
class: text-center
---

<div class="text-5xl font-extrabold">Happy filtering!</div>

<div class="muted mt-6">More in <code>pgf/feature/filters/CLAUDE.md</code>.</div>
