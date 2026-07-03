import { ScrollTrigger } from './gsap'

function debounce<T extends (...args: never[]) => void>(fn: T, ms: number) {
  let timer: ReturnType<typeof setTimeout> | undefined
  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn(...args), ms)
  }
}

let teardown: (() => void) | undefined

/** Global resize / load / font listeners so all ScrollTriggers stay in sync. */
export function bindScrollTriggerLifecycle() {
  if (typeof window === 'undefined' || teardown) return teardown ?? (() => {})

  const refresh = () => ScrollTrigger.refresh()
  const onResize = debounce(refresh, 120)

  window.addEventListener('resize', onResize)
  window.addEventListener('load', refresh)

  document.fonts?.ready.then(refresh).catch(() => {})

  const onImageLoad = (event: Event) => {
    if (event.target instanceof HTMLImageElement) refresh()
  }

  document.addEventListener('load', onImageLoad, true)

  teardown = () => {
    window.removeEventListener('resize', onResize)
    window.removeEventListener('load', refresh)
    document.removeEventListener('load', onImageLoad, true)
    teardown = undefined
  }

  return teardown
}

export function refreshScrollTriggers() {
  ScrollTrigger.refresh()
}
