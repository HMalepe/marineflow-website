export type VideoShowcaseCard = {
  type: 'video'
  id: string
  name: string
  subtitle: string
  video: string
  poster: string
  minHeight: string
}

export type BeforeAfterShowcaseCard = {
  type: 'before-after'
  id: string
  before: string
  after: string
  alt: string
  minHeight: string
}

export type WildShowcaseCard = VideoShowcaseCard | BeforeAfterShowcaseCard

export const WILD_SHOWCASE_CARDS: WildShowcaseCard[] = [
  {
    type: 'video',
    id: 'lena-jiao',
    name: 'Lena Jiao',
    subtitle: 'Loire Jewelry',
    poster: '/wild/posters/lena-jewelry.svg',
    video:
      'https://assets.mixkit.co/videos/preview/mixkit-woman-modeling-a-necklace-39881-large.mp4',
    minHeight: 'min-h-[420px]',
  },
  {
    type: 'before-after',
    id: 'sneaker-render',
    before: '/wild/before/sneaker-sketch.svg',
    after: '/wild/after/sneaker-render.svg',
    alt: 'Sneaker sketch transformed into a product render',
    minHeight: 'min-h-[340px]',
  },
  {
    type: 'video',
    id: 'marcus-chen',
    name: 'Marcus Chen',
    subtitle: 'Studio Koto',
    poster: '/wild/posters/studio-koto.svg',
    video:
      'https://assets.mixkit.co/videos/preview/mixkit-photographer-taking-pictures-of-a-model-34402-large.mp4',
    minHeight: 'min-h-[360px]',
  },
  {
    type: 'before-after',
    id: 'floor-plan',
    before: '/wild/before/floor-plan-2d.svg',
    after: '/wild/after/floor-plan-3d.svg',
    alt: '2D floor plan converted to a 3D render',
    minHeight: 'min-h-[400px]',
  },
  {
    type: 'video',
    id: 'amara-osei',
    name: 'Amara Osei',
    subtitle: 'Glow Co',
    poster: '/wild/posters/glow-co.svg',
    video:
      'https://assets.mixkit.co/videos/preview/mixkit-woman-applying-makeup-in-front-of-a-mirror-42876-large.mp4',
    minHeight: 'min-h-[380px]',
  },
  {
    type: 'before-after',
    id: 'portrait-grade',
    before: '/wild/before/portrait-before.svg',
    after: '/wild/after/portrait-after.svg',
    alt: 'Casual portrait enhanced into editorial photography',
    minHeight: 'min-h-[360px]',
  },
]
