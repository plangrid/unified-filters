# Saved Filters

**Faster access** to commonly used filters inside a project or account.

Save a filter combination once, then reapply it anytime, anywhere (Mobile & Web).

::: info Read-only on Mobile for now
Mobile can view and apply saved filters, but creating or deleting one is Web-only for now.
:::

<div class="shots">
  <img src="/screenshots/saved-1.png" alt="Saved Filters screenshot 1" />
  <img src="/screenshots/saved-2.png" alt="Saved Filters screenshot 2" />
</div>

## Behavior notes

<div class="note-row"><b>Overrides ad-hoc filters</b> — applying a saved filter replaces whatever ad-hoc filters were already active on the list, rather than merging with them.</div>
<div class="note-row"><b>Partial saved filter</b> — if a saved filter contains filters that aren't supported on Mobile, a message is shown letting the user know the saved filter is partial and which filters aren't supported. See the <a href="https://www.figma.com/design/38YkPj4f7A5bf81D7IQ3wh/MPX-2867-Mobile-Filters?node-id=2091-9826&p=f&t=q87Ra6oDvI4ygjOE-0" target="_blank" rel="noreferrer">Figma</a> for how the message looks.</div>
<div class="note-row"><b>Deleting an applied filter</b> — if a saved filter that's currently applied gets deleted (during a sync), its filter selection stays applied. Deleting the saved filter doesn't clear or change what's currently filtering the list, so the experience stays consistent.</div>
