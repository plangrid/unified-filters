import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import type { Theme } from 'vitepress'
import { defineComponent, h, nextTick, onMounted, watch } from 'vue'
import './custom.css'
import { glossary } from './glossary'

function annotateGlossaryTerms() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  document.querySelectorAll('.vp-doc code').forEach((el) => {
    const text = el.textContent?.trim()
    const entry = text ? glossary[text] : undefined
    if (!entry || el.hasAttribute('data-tooltip')) return
    if (entry.definedOn && entry.definedOn === path) return
    el.setAttribute('data-tooltip', entry.text)
    el.classList.add('has-tooltip')
  })
}

// Hovering a .chk checklist item shows its matching .spot-item. Unlike a
// pure-CSS :hover approach, the active pairing is tracked in JS state, so
// moving the mouse off the last item leaves it active instead of snapping
// back to the first item.
function initSeamHover() {
  document.querySelectorAll<HTMLElement>('.seam-layout').forEach((layout) => {
    if (layout.dataset.seamHoverInit) return
    const items = Array.from(layout.querySelectorAll<HTMLElement>('.chk'))
    const spots = Array.from(layout.querySelectorAll<HTMLElement>('.spot-item'))
    if (!items.length || !spots.length) return
    layout.dataset.seamHoverInit = 'true'
    const setActive = (index: number) => {
      items.forEach((el, i) => el.classList.toggle('is-active', i === index))
      spots.forEach((el, i) => el.classList.toggle('is-active', i === index))
    }
    items.forEach((el, i) => el.addEventListener('mouseenter', () => setActive(i)))
    setActive(0)
  })
}

const Layout = defineComponent({
  name: 'GlossaryLayout',
  setup() {
    const route = useRoute()
    const run = () => nextTick(() => {
      annotateGlossaryTerms()
      initSeamHover()
    })
    onMounted(run)
    watch(() => route.path, run)
    return () => h(DefaultTheme.Layout)
  },
})

export default {
  extends: DefaultTheme,
  Layout,
} satisfies Theme
