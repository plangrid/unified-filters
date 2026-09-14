# Guidelines & Invariants

## Invariants

- **Persisted ids are forever** — no rename without a migration.
- **Store ids, not names** — display names resolved separately.
- **Migrate `DomainSavedFilterDataTransformer` whenever your domain's saved-filter schema changes** — it's what turns a synced saved filter back into your domain's model; leaving it unmigrated doesn't fail loudly, it silently buckets the fields it no longer recognizes as unsupported.

## Guidelines

- **Drive from `DomainFiltersModelClient`, not `DomainFiltersModelStore`**, whenever a feature writes filters outside the filters presentations — e.g. from a deep link, or an empty state's "Clear All" button. The <span class="a">Client</span> keeps the change attributed via analytics and picked up by [`ResponsiveSyncCoordinator`](/integrations/responsive-sync-triggering).<br>The <span class="a">Store</span> skips both, so the change would go unattributed and unsynced.
- **Override `DomainFiltersModelStore` only when your model blends other reactive sources** — e.g. dynamic types or custom attributes the default store can't express.
- **Override `FiltersModelProvider` only when filter options are dynamically available** — e.g. deriving option lists from live filtered data instead of the default read of the store.
- **Override `DomainFiltersModelUpdater` only when you must preserve non-filter fields or make filters depend on each other** — e.g. sort/search/template state, or one filter's selection affecting another filter's options.
