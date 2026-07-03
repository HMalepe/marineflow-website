import { gsap } from './gsap'

/** True on phones / tablets — use native scroll + lighter GSAP settings. */
export function prefersNativeScroll(): boolean {
  if (typeof window === 'undefined') return true
  return (
    window.matchMedia('(pointer: coarse)').matches ||
    window.matchMedia('(max-width: 767px)').matches
  )
}

export type ScrollProfile = {
  mobile: boolean
  nativeScroll: boolean
  /** Scrub smoothing for scroll-linked timelines (lower = snappier on touch). */
  scrub: number | boolean
  anticipatePin: number
  fastScrollEnd: boolean
  pinnedTrackVh: number
  phoneScale: { start: number; mid: number; end: number }
  phoneYPercent: number
}

export function getScrollProfile(): ScrollProfile {
  const mobile = prefersNativeScroll()

  return {
    mobile,
    nativeScroll: mobile,
    scrub: mobile ? 0.55 : 1,
    anticipatePin: mobile ? 0 : 1,
    fastScrollEnd: mobile,
    pinnedTrackVh: mobile ? 300 : window.innerWidth < 1024 ? 420 : 540,
    phoneScale: mobile
      ? { start: 0.92, mid: 1.02, end: 1.25 }
      : { start: 0.85, mid: 1.12, end: 1.6 },
    phoneYPercent: mobile ? 4 : 8,
  }
}

/** Cards already above the fold should not stay invisible after batch setup. */
export function revealIfInView(
  elements: Iterable<Element>,
  threshold = 0.88,
): void {
  const limit = window.innerHeight * threshold
  for (const el of elements) {
    if (!(el instanceof HTMLElement)) continue
    if (el.getBoundingClientRect().top < limit) {
      gsap.set(el, { autoAlpha: 1, y: 0 })
    }
  }
}

export function pinTypeForScrollMode(mode: 'lenis' | 'native'): 'fixed' | 'transform' {
  if (mode === 'native') return 'fixed'
  return document.documentElement.style.transform ? 'transform' : 'fixed'
}
