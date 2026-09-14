# Sync Triggering (UD-42 Support)

::: warning Coming soon!
Sync Triggering hasn't shipped yet — this page describes the intended design.
:::

A domain's local data is a bounded subset of what's on the server — with no filter applied, a list intentionally shows only what's already been downloaded. The moment a real filter is applied, that's a request to see data matching it, which may not exist locally yet. So the filter change triggers a responsive sync (UD-42) that fetches exactly what the new filter needs.

## You author

- **`ResponsiveSyncHandler`** — the per-scope collaborator that decides whether a sync should run right now, maps the domain's filter model into an actual sync request, and issues it.

## Provided

- **`ResponsiveSyncCoordinator`** — owns *when*, not *what*, so no feature or platform reimplements this timing on its own. It debounces rapid filter edits and plugs straight into the framework's own write paths — so triggering a sync on a filter change is a couple of constructor parameters, not a hand-rolled coordinator per domain.
