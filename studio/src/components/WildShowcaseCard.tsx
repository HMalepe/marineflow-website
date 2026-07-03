import { useEffect, useRef, useState } from 'react'
import type { BeforeAfterShowcaseCard, VideoShowcaseCard } from '../data/wildShowcase'

export function VideoCreatorCard({ card }: { card: VideoShowcaseCard }) {
  const articleRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const article = articleRef.current
    const video = videoRef.current
    if (!article || !video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(article)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={articleRef}
      className={`wild-card group relative overflow-hidden rounded-2xl bg-ink transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-24px_rgba(0,0,0,0.35)] ${card.minHeight}`}
    >
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
        poster={card.poster}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        onLoadedData={() => setVideoReady(true)}
      >
        <source src={card.video} type="video/mp4" />
      </video>

      <img
        src={card.poster}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${videoReady ? 'opacity-0' : 'opacity-100'}`}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"
        aria-hidden
      />

      <div className="absolute bottom-0 left-0 p-6 text-paper">
        <p className="text-2xl font-bold leading-tight">{card.name}</p>
        <p className="text-2xl font-bold leading-tight text-paper/90">
          {card.subtitle}
        </p>
      </div>
    </article>
  )
}

export function BeforeAfterCard({ card }: { card: BeforeAfterShowcaseCard }) {
  return (
    <article
      className={`wild-card group overflow-hidden rounded-2xl bg-offwhite transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-24px_rgba(0,0,0,0.25)] ${card.minHeight}`}
    >
      <div className="grid h-full min-h-[inherit] grid-cols-2">
        <div className="relative h-full min-h-[inherit]">
          <img
            src={card.before}
            alt={`${card.alt} — before`}
            className="h-full w-full object-cover"
          />
          <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-sm text-paper">
            Before
          </span>
        </div>
        <div className="relative h-full min-h-[inherit]">
          <img
            src={card.after}
            alt={`${card.alt} — after`}
            className="h-full w-full object-cover"
          />
          <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-sm text-paper">
            After
          </span>
        </div>
      </div>
    </article>
  )
}
