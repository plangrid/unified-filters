import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Unified Filters',
  description: 'One shared filtering contract, two platforms, every filterable surface.',
  base: '/site/',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: 'Overview', link: '/guide/why-it-matters' },
      { text: 'Components', link: '/components/' },
      { text: 'Architecture', link: '/architecture/' },
      { text: 'Integrating a domain', link: '/integrations/' },
      { text: 'Reference', link: '/reference/' },
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Why it matters', link: '/guide/why-it-matters' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Overview', link: '/components/' },
          { text: 'Filters Panel', link: '/components/filters-panel' },
          { text: 'Quick Filters', link: '/components/quick-filters' },
          { text: 'Saved Filters', link: '/components/saved-filters' },
        ],
      },
      {
        text: 'Architecture',
        items: [
          { text: 'Overview', link: '/architecture/' },
          { text: 'Architecture at a glance', link: '/architecture/architecture-at-a-glance' },
          { text: 'Applying a filter', link: '/architecture/applying-a-filter' },
          { text: 'Entering a screen', link: '/architecture/entering-a-screen' },
          { text: 'One core, two platforms', link: '/architecture/one-core-two-platforms' },
        ],
      },
      {
        text: 'Integrating a domain',
        items: [
          { text: 'Overview', link: '/integrations/' },
          { text: 'Start with the /integrate-filters skill', link: '/integrations/integrate-filters-skill' },
          { text: 'Unified Filters — the integration seam', link: '/integrations/unified-filters-seam' },
          { text: 'Saved Filters — the integration seam', link: '/integrations/saved-filters-seam' },
          { text: 'Initial Filters <span class="soon">Coming<br>soon<span class="hammer">🔨</span></span>', link: '/integrations/initial-filters' },
          { text: 'Sync Triggering (UD-42 Support) <span class="soon">Coming<br>soon<span class="hammer">🔨</span></span>', link: '/integrations/responsive-sync-triggering' },
          { text: 'Guidelines & Invariants', link: '/integrations/invariants' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'Links', link: '/reference/' },
          { text: 'Vocabulary', link: '/reference/vocabulary' },
          { text: 'Changelog', link: '/reference/changelog' },
        ],
      },
    ],

    search: {
      provider: 'local',
      options: {
        detailedView: true,
      },
    },

    socialLinks: [],

    footer: {
      message: 'Unified Filters Framework — Integration Portal',
      copyright: 'See pgf/feature/filters/CLAUDE.md for the always-current source of truth.',
    },
  },
})
