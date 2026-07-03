import { useEffect, useRef, useState } from 'react'
import type { ToolCardData } from '../data/toolsCards'

type ToolCardProps = {
  card: ToolCardData
}

export function ToolCard({ card }: ToolCardProps) {
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

  const handleEnter = () => {
    videoRef.current?.play().catch(() => {})
  }

  const handleLeave = () => {
    const article = articleRef.current
    const video = videoRef.current
    if (!article || !video) return

    const rect = article.getBoundingClientRect()
    const inView = rect.top < window.innerHeight && rect.bottom > 0
    if (!inView) video.pause()
  }

  return (
    <article
      ref={articleRef}
      className={`tool-card group relative overflow-hidden rounded-2xl bg-offwhite transition duration-300 hover:scale-[1.02] hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] ${card.rowSpan}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="relative h-full min-h-[220px] w-full md:min-h-[240px]">
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
          onError={() => setVideoReady(false)}
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
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
          aria-hidden
        />

        <div className="absolute bottom-0 left-0 flex max-w-[90%] items-end gap-3 p-4">
          <img
            src={card.poster}
            alt=""
            className="size-10 shrink-0 rounded-lg border border-white/20 object-cover shadow-sm"
          />
          <div className="min-w-0 text-left text-paper">
            <h3 className="text-sm font-bold leading-tight">{card.label}</h3>
            <p className="mt-0.5 text-xs font-normal leading-snug text-paper/75">
              {card.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
