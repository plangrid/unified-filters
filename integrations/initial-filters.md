# Initial Filters

::: warning Coming soon!
Initial Filters hasn't shipped yet — this page describes the intended design.
:::

Initial Filters lets a feature set a different set of default filters upon entering a specific navigation route.

These route-level filters are never persisted — the route always starts from the same set of default filters.

## Regular route vs. Initial Filters route

<p><b>Regular route</b> — filters carry the domain's persisted state.</p>
<div class="flow wrap">
<div class="flow-box">Enter route</div><span class="flow-arrow">→</span><div class="flow-box">Persisted filters restored</div><span class="flow-arrow">→</span><div class="flow-box">Changes saved back</div>
</div>

<p><b>Initial Filters route</b> — filters reset to a route-specific default every time.</p>
<div class="flow wrap">
<div class="flow-box amber">Enter route</div><span class="flow-arrow">→</span><div class="flow-box amber">Route's default filters applied</div><span class="flow-arrow">→</span><div class="flow-box amber">Discarded on exit — nothing persisted</div>
</div>
