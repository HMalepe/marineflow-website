import { WILD_BEFORE_AFTER, WILD_POSTERS } from '../lib/assets'

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
    poster: WILD_POSTERS.lenaJewelry,
    video:
      'https://assets.mixkit.co/videos/preview/mixkit-woman-modeling-a-necklace-39881-large.mp4',
    minHeight: 'min-h-[420px]',
  },
  {
    type: 'before-after',
    id: 'sneaker-render',
    before: WILD_BEFORE_AFTER.sneakerSketch,
    after: WILD_BEFORE_AFTER.sneakerRender,
    alt: 'Sneaker sketch transformed into a product render',
    minHeight: 'min-h-[340px]',
  },
  {
    type: 'video',
    id: 'marcus-chen',
    name: 'Marcus Chen',
    subtitle: 'Studio Koto',
    poster: WILD_POSTERS.studioKoto,
    video:
      'https://assets.mixkit.co/videos/preview/mixkit-photographer-taking-pictures-of-a-model-34402-large.mp4',
    minHeight: 'min-h-[360px]',
  },
  {
    type: 'before-after',
    id: 'floor-plan',
    before: WILD_BEFORE_AFTER.floorPlan2d,
    after: WILD_BEFORE_AFTER.floorPlan3d,
    alt: '2D floor plan converted to a 3D render',
    minHeight: 'min-h-[400px]',
  },
  {
    type: 'video',
    id: 'amara-osei',
    name: 'Amara Osei',
    subtitle: 'Glow Co',
    poster: WILD_POSTERS.glowCo,
    video:
      'https://assets.mixkit.co/videos/preview/mixkit-woman-applying-makeup-in-front-of-a-mirror-42876-large.mp4',
    minHeight: 'min-h-[380px]',
  },
  {
    type: 'before-after',
    id: 'portrait-grade',
    before: WILD_BEFORE_AFTER.portraitBefore,
    after: WILD_BEFORE_AFTER.portraitAfter,
    alt: 'Casual portrait enhanced into editorial photography',
    minHeight: 'min-h-[360px]',
  },
]
