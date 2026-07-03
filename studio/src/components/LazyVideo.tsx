import { useEffect, useRef, useState } from 'react'

type LazyVideoProps = {
  src: string
  poster: string
  className?: string
  posterClassName?: string
}

/**
 * Defers video network load until near the viewport; pauses when off-screen.
 */
export function LazyVideo({
  src,
  poster,
  className = 'absolute inset-0 h-full w-full object-cover',
  posterClassName = className,
}: LazyVideoProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const root = rootRef.current
    const video = videoRef.current
    if (!root || !video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { rootMargin: '120px', threshold: 0.15 },
    )

    observer.observe(root)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!shouldLoad) return
    const video = videoRef.current
    if (!video) return
    video.load()
    video.play().catch(() => {})
  }, [shouldLoad])

  return (
    <div ref={rootRef} className="absolute inset-0">
      <video
        ref={videoRef}
        className={`transition-opacity duration-300 ${videoReady ? 'opacity-100' : 'opacity-0'} ${className}`}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        onLoadedData={() => setVideoReady(true)}
        onError={() => setVideoReady(false)}
      >
        {shouldLoad ? <source src={src} type="video/mp4" /> : null}
      </video>

      <img
        src={poster}
        alt=""
        className={`transition-opacity duration-300 ${videoReady ? 'opacity-0' : 'opacity-100'} ${posterClassName}`}
        loading="lazy"
        decoding="async"
        aria-hidden
      />
    </div>
  )
}
