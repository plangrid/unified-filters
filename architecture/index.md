# Overview

## What the framework provides

All of this is provided — you never build it.

### Presentation

<div class="give"><span class="gn">Filters Panel</span><span class="gd">The drilldown panel — option lists, selection, apply / clear / reset behavior.</span></div>
<div class="give"><span class="gn">Quick Filters</span><span class="gd">The preset chip row, plus the filter icon and its active-count badge.</span></div>
<div class="give"><span class="gn">Saved Filters</span><span class="gd">Sync, persistence and presentation for viewing and applying a saved filter.</span></div>

### Data & Analytics

<div class="give"><span class="gn">Persistence stack</span><span class="gd">Filter selections are saved and restored automatically — a domain never writes its own storage.</span></div>
<div class="give"><span class="gn">Name resolution</span><span class="gd">Hydrates persisted filter's options ids back into display names at read time.</span></div>
<div class="give"><span class="gn">Analytics</span><span class="gd">Filter events dispatched for you — no wiring needed. <a href="https://autodesk.atlassian.net/wiki/spaces/MPX/pages/767403447/Filters+Framework+Analytics">See what's tracked</a>.</span></div>

## What a domain integrates

Onboarding a domain is mostly mapping, not building: a scope key for identity, the option lists behind each filter drilldown, and mappers translating the domain's own model to the framework's UI shape and to the persisted shape. Everything in **What the framework provides** above stays shared and untouched per domain.

See the full breakdown in [Unified Filters — the integration seam](/integrations/unified-filters-seam).
