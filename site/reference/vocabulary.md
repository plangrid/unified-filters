# The vocabulary

| Concept | Role / intent |
|---|---|
| **FiltersScope** | The key identifying a filterable surface. Keys persistence *and* analytics; shared across platforms. |
| **FilterQueryParameters** | The **persisted** shape — ids only, never display names, so state survives renames. |
| **DomainFiltersModel** | The **in-memory** model — filter selection + domain-owned state (sort, search, other domain-specific properties). |
| **FiltersModel** | The generic **UI** shape the panel renders: Status, Text, Date, Members, Hierarchy, Input, Toggle. |
| **The two Mappers** | *QueryParametersMapper* (persistence boundary) · *DomainFiltersModelMapper* (UI boundary). |
| **Store / Repository stack** | The framework's typed, scope-keyed persistence — a domain never writes its own. |
| **FiltersModelProvider** | Read side — derives the displayed *FiltersModel* (maps the store, merges resolved names); use the default, or a custom for dynamic option availability. |
| **DomainFiltersModelUpdater** | Write side — writes the panel's edits back; use the default, or a custom to preserve non-filter fields / create dependency between filters. |
| **FiltersModelHolder** | The presentation **state machine**. One cached holder per scope. |
| **FiltersDisplayNamesResolver** | Resolves persisted ids → display names. *Why* query params store ids only. |
| **Quick Filters** | Preset filters chips. OOTB default: *Assigned to Me · My Company · Due in 7 Days*. |
