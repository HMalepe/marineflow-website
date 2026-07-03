import Lenis from '@studio-freight/lenis'
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { ScrollTrigger, finalizeScrollTriggers } from '../lib/gsap'
import { prefersNativeScroll } from '../lib/scrollConfig'
import { bindScrollTriggerLifecycle } from '../lib/scrollTriggerLifecycle'

export type ScrollMode = 'lenis' | 'native'

const ReducedMotionContext = createContext(false)
const LenisContext = createContext<Lenis | null>(null)
const ScrollModeContext = createContext<ScrollMode>('native')
const ScrollReadyContext = createContext(false)

export function usePrefersReducedMotion() {
  return useContext(ReducedMotionContext)
}

export function useLenis() {
  return useContext(LenisContext)
}

export function useScrollMode() {
  return useContext(ScrollModeContext)
}

export function useScrollReady() {
  return useContext(ScrollReadyContext)
}

type SmoothScrollProps = {
  children: ReactNode
}

function applyScrollModeAttribute(mode: ScrollMode | null) {
  if (mode) {
    document.documentElement.setAttribute('data-scroll-mode', mode)
  } else {
    document.documentElement.removeAttribute('data-scroll-mode')
  }
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [scrollMode, setScrollMode] = useState<ScrollMode>(() =>
    typeof window !== 'undefined' && prefersNativeScroll() ? 'native' : 'lenis',
  )
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null)
  const [scrollReady, setScrollReady] = useState(false)
  const rafIdRef = useRef(0)

  useEffect(() => {
    const unbindLifecycle = bindScrollTriggerLifecycle()
    return unbindLifecycle
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updateMotion = () => {
      const prefersReduced = mq.matches
      setReducedMotion(prefersReduced)
      document.documentElement.toggleAttribute(
        'data-reduced-motion',
        prefersReduced,
      )

      if (prefersReduced) {
        document.documentElement.removeAttribute('data-lenis-active')
        applyScrollModeAttribute('native')
        setScrollMode('native')
        finalizeScrollTriggers()
        ScrollTrigger.refresh()
      }
    }

    updateMotion()
    mq.addEventListener('change', updateMotion)
    return () => mq.removeEventListener('change', updateMotion)
  }, [])

  useEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true })

    if (reducedMotion) {
      document.documentElement.removeAttribute('data-lenis-active')
      applyScrollModeAttribute('native')
      setScrollMode('native')
      setLenisInstance(null)
      ScrollTrigger.scrollerProxy(document.documentElement, {})
      ScrollTrigger.refresh()
      setScrollReady(true)
      return () => setScrollReady(false)
    }

    const useNative = prefersNativeScroll()

    if (useNative) {
      document.documentElement.removeAttribute('data-lenis-active')
      applyScrollModeAttribute('native')
      setScrollMode('native')
      setLenisInstance(null)
      ScrollTrigger.scrollerProxy(document.documentElement, {})
      ScrollTrigger.refresh()
      setScrollReady(true)

      return () => {
        applyScrollModeAttribute(null)
        setScrollReady(false)
      }
    }

    let lenis: Lenis | null = null

    try {
      lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
      })

      setLenisInstance(lenis)
      setScrollMode('lenis')
      applyScrollModeAttribute('lenis')
      document.documentElement.setAttribute('data-lenis-active', 'true')

      lenis.on('scroll', ScrollTrigger.update)

      ScrollTrigger.scrollerProxy(document.documentElement, {
        scrollTop(value) {
          if (arguments.length && typeof value === 'number') {
            lenis!.scrollTo(value, { immediate: true })
          }
          return lenis!.scroll
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          }
        },
        pinType: document.documentElement.style.transform
          ? 'transform'
          : 'fixed',
      })

      const onRefresh = () => lenis?.resize()
      ScrollTrigger.addEventListener('refresh', onRefresh)

      const raf = (time: number) => {
        lenis!.raf(time)
        rafIdRef.current = requestAnimationFrame(raf)
      }

      rafIdRef.current = requestAnimationFrame(raf)

      requestAnimationFrame(() => {
        ScrollTrigger.refresh()
        setScrollReady(true)
      })

      return () => {
        cancelAnimationFrame(rafIdRef.current)
        ScrollTrigger.removeEventListener('refresh', onRefresh)
        ScrollTrigger.scrollerProxy(document.documentElement, {})
        lenis!.destroy()
        setLenisInstance(null)
        setScrollMode('native')
        setScrollReady(false)
        document.documentElement.removeAttribute('data-lenis-active')
        applyScrollModeAttribute(null)
      }
    } catch {
      document.documentElement.removeAttribute('data-lenis-active')
      applyScrollModeAttribute('native')
      setScrollMode('native')
      setLenisInstance(null)
      ScrollTrigger.scrollerProxy(document.documentElement, {})
      ScrollTrigger.refresh()
      setScrollReady(true)
      return () => setScrollReady(false)
    }
  }, [reducedMotion])

  return (
    <ReducedMotionContext.Provider value={reducedMotion}>
      <ScrollModeContext.Provider value={scrollMode}>
        <ScrollReadyContext.Provider value={scrollReady}>
          <LenisContext.Provider value={lenisInstance}>
            {children}
          </LenisContext.Provider>
        </ScrollReadyContext.Provider>
      </ScrollModeContext.Provider>
    </ReducedMotionContext.Provider>
  )
}
