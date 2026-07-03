import type { ToolCardData } from '../data/toolsCards'
import { LazyVideo } from './LazyVideo'

type ToolCardProps = {
  card: ToolCardData
}

export function ToolCard({ card }: ToolCardProps) {
  return (
    <article
      className={`tool-card group relative overflow-hidden rounded-2xl bg-offwhite transition duration-300 hover:scale-[1.02] hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] motion-reduce:transition-none motion-reduce:hover:scale-100 ${card.rowSpan}`}
    >
      <div className="relative h-full min-h-[220px] w-full md:min-h-[240px]">
        <LazyVideo src={card.video} poster={card.poster} />

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
          aria-hidden
        />

        <div className="absolute bottom-0 left-0 flex max-w-[90%] items-end gap-3 p-4">
          <img
            src={card.poster}
            alt=""
            className="size-10 shrink-0 rounded-lg border border-white/20 object-cover shadow-sm"
            loading="lazy"
            decoding="async"
          />
          <div className="min-w-0 text-left text-paper">
            <h3 className="text-sm font-bold leading-tight">{card.label}</h3>
            <p className="mt-0.5 text-xs font-normal leading-snug text-paper/90">
              {card.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
