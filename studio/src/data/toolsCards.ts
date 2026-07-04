import { TOOL_POSTERS } from '../lib/assets'

export type ToolCardData = {
  id: string
  label: string
  description: string
  poster: string
  video: string
  rowSpan: string
  accent: string
}

export const TOOL_CARDS: ToolCardData[] = [
  {
    id: 'product-morph-video',
    label: 'Product Morph Video',
    description: 'Create loopable product morph videos.',
    poster: TOOL_POSTERS.productMorph,
    video:
      'https://assets.mixkit.co/videos/preview/mixkit-rotating-showcase-of-a-collection-of-high-heels-4962-large.mp4',
    rowSpan: 'lg:row-span-2',
    accent: '#CCE600',
  },
  {
    id: 'concept-explainer',
    label: 'Concept Explainer',
    description: 'Get clear explanations for any concept',
    poster: TOOL_POSTERS.conceptExplainer,
    video:
      'https://assets.mixkit.co/videos/preview/mixkit-man-under-multicolor-lights-1237-large.mp4',
    rowSpan: 'lg:row-span-3',
    accent: '#FF5C54',
  },
  {
    id: 'virtual-try-on',
    label: 'Virtual Try-on Generator',
    description: 'Try on outfits virtually from your photos',
    poster: TOOL_POSTERS.virtualTryOn,
    video:
      'https://assets.mixkit.co/videos/preview/mixkit-woman-trying-on-clothes-in-a-store-42879-large.mp4',
    rowSpan: 'lg:row-span-2',
    accent: '#111111',
  },
  {
    id: 'floor-plan-3d',
    label: '3D Floor Plan Generator',
    description: 'Convert 2D floor plans into 3D renders',
    poster: TOOL_POSTERS.floorPlan,
    video:
      'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4',
    rowSpan: 'lg:row-span-2',
    accent: '#CCE600',
  },
  {
    id: 'selfie-vlog',
    label: 'Selfie Vlog Generator',
    description: 'Create selfie-style vlog videos from a prompt',
    poster: TOOL_POSTERS.selfieVlog,
    video:
      'https://assets.mixkit.co/videos/preview/mixkit-young-woman-recording-a-video-with-her-cell-phone-42880-large.mp4',
    rowSpan: 'lg:row-span-2',
    accent: '#FF5C54',
  },
  {
    id: 'editorial-shot',
    label: 'Product Editorial Shot',
    description: 'Create high-fashion editorial photography',
    poster: TOOL_POSTERS.editorial,
    video:
      'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-for-the-camera-39880-large.mp4',
    rowSpan: 'lg:row-span-2',
    accent: '#111111',
  },
  {
    id: 'rap-ad',
    label: 'Rap Ad Creator',
    description: 'Create 8-second rap music video ads',
    poster: TOOL_POSTERS.rapAd,
    video:
      'https://assets.mixkit.co/videos/preview/mixkit-a-man-in-a-neon-lighted-room-1230-large.mp4',
    rowSpan: 'lg:row-span-3',
    accent: '#CCE600',
  },
  {
    id: 'studio-shot',
    label: 'Product Studio Shot',
    description: 'Create professional studio product photography',
    poster: TOOL_POSTERS.studioShot,
    video:
      'https://assets.mixkit.co/videos/preview/mixkit-photographer-taking-pictures-of-a-model-34402-large.mp4',
    rowSpan: 'lg:row-span-2',
    accent: '#FF5C54',
  },
  {
    id: 'product-generator',
    label: 'Product Generator',
    description: 'Create product images from ideas',
    poster: TOOL_POSTERS.productGenerator,
    video:
      'https://assets.mixkit.co/videos/preview/mixkit-product-shot-of-a-camera-34403-large.mp4',
    rowSpan: 'lg:row-span-2',
    accent: '#111111',
  },
  {
    id: 'social-ad',
    label: 'Social Media Ad Generator',
    description: 'Generate social media ads',
    poster: TOOL_POSTERS.socialAd,
    video:
      'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smart-phone-with-social-media-icons-32808-large.mp4',
    rowSpan: 'lg:row-span-2',
    accent: '#CCE600',
  },
]
