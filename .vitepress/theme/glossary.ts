interface GlossaryEntry {
  text: string
  /** route path where this term already has its own definition — skip the tooltip there. */
  definedOn?: string
}

export const glossary: Record<string, GlossaryEntry> = {
  DomainFiltersModelClient: {
    text: 'The handle a non-panel owner (e.g. a list screen) injects — a read-through wrapper over the Store that keeps analytics and sync attribution consistent with the panel.',
  },
  DomainFiltersModelStore: {
    text: 'The top of the persistence stack — exposes currentFilter, persists every change, and holds the default filter applied when nothing is stored yet.',
    definedOn: '/integrations/unified-filters-seam',
  },
  DomainFiltersModelUpdater: {
    text: "Writes the filters presentation's edits back to the store. Override to preserve non-filter fields or make filters depend on each other.",
    definedOn: '/integrations/unified-filters-seam',
  },
  FiltersModelProvider: {
    text: 'Reads the store, maps to the UI shape, and merges resolved display names for the panel.',
    definedOn: '/integrations/unified-filters-seam',
  },
  FiltersModelHolder: {
    text: 'The filters presentation state machine — Provider (read) + Updater (write), the single source the presentation observes.',
  },
  FiltersModelHolderFactory: {
    text: 'Assembles the read-side FiltersModelProvider and write-side Updater into a FiltersModelHolder — one holder per scope.',
    definedOn: '/integrations/unified-filters-seam',
  },
  FilterQueryParameters: {
    text: 'The @Serializable persisted shape. Holds ids — never display names — so filter options survive being renamed.',
    definedOn: '/integrations/unified-filters-seam',
  },
  FilterQueryParametersMapper: {
    text: 'Translates your domain model to and from the persisted FilterQueryParameters shape.',
    definedOn: '/integrations/unified-filters-seam',
  },
  DomainFiltersModelMapper: {
    text: "Translates your domain model to and from the panel's UI shape (FiltersModel).",
    definedOn: '/integrations/unified-filters-seam',
  },
  FiltersScope: {
    text: 'The key for one filterable surface — a sealed class in PGF that keys both the persisted selection and analytics.',
    definedOn: '/integrations/unified-filters-seam',
  },
  FiltersDisplayNamesResolver: {
    text: "Turns persisted ids back into display names at read time. Shared across platforms — it's why FilterQueryParameters can stay ids-only.",
    definedOn: '/integrations/unified-filters-seam',
  },
  QuickFiltersProvider: {
    text: "Supplies the Quick Filters preset chips, applied atomically. Optional — skip it if your domain doesn't need Quick Filters chips.",
    definedOn: '/integrations/unified-filters-seam',
  },
  DomainSavedFilterDataTransformer: {
    text: "Transforms a synced saved filter's raw payload into your domain's own filter model.",
    definedOn: '/integrations/saved-filters-seam',
  },
  ResponsiveSyncHandler: {
    text: 'The per-scope collaborator you author — decides whether a sync should run, maps the filter model into a sync request, and issues it.',
    definedOn: '/integrations/responsive-sync-triggering',
  },
  ResponsiveSyncCoordinator: {
    text: "The framework-provided coordinator that owns sync timing — debounces rapid filter edits and plugs into the framework's own write paths.",
    definedOn: '/integrations/responsive-sync-triggering',
  },
  FiltersModel: {
    text: 'The generic UI shape the Filters Panel renders, produced from your domain model by DomainFiltersModelMapper.',
  },
  currentFilter: {
    text: 'The store’s live stream of the current domain filter, observed by filters presentations and feature teams’ lists.',
  },
}
