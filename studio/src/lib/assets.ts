/**
 * Central image URLs — Unsplash photos sized for web.
 * All images use auto=format&fit=crop for optimal delivery.
 */

const U = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

/* ── Hero / Pinned Scene ─────────────────────────────── */
export const DESK_BG = U('1582719478250-c89cae4dc85b', 2400, 1400)

export const PINNED = {
  sketch: U('1542291026616-b53d31eb5066', 560, 400),
  result1: U('1595950653106-6c9ebd614d3a', 320, 320),
  result2: U('1606107557195-0e29a4b5b4aa', 360, 360),
  result3: U('1549298916-b41d501d3772', 320, 320),
} as const

/* ── Tool Card Posters ───────────────────────────────── */
export const TOOL_POSTERS = {
  productMorph: U('1543163521-1bf539c55dd2', 400, 600),
  conceptExplainer: U('1620712943543-bcc4688e7485', 400, 600),
  virtualTryOn: U('1558618666-fcd25c85f1d7', 400, 600),
  floorPlan: U('1600585154340-be6161a56a0c', 400, 600),
  selfieVlog: U('1611162617213-7d7a39e9b1d7', 400, 600),
  editorial: U('1509631179647-0177331693ae', 400, 600),
  rapAd: U('1514525253161-7a46d19cd819', 400, 600),
  studioShot: U('1441986300917-64674bd600d8', 400, 600),
  productGenerator: U('1523275335684-37898b6baf30', 400, 600),
  socialAd: U('1611162616305-c69b3fa7fbe0', 400, 600),
} as const

/* ── Wild Showcase ───────────────────────────────────── */
export const WILD_POSTERS = {
  lenaJewelry: U('1515562141207-7a88fb7ce338', 800, 1000),
  studioKoto: U('1556742049-0cfed4f6a45d', 800, 1000),
  glowCo: U('1596462502025-75685f53d56c', 800, 1000),
} as const

export const WILD_BEFORE_AFTER = {
  sneakerSketch: U('1542291026616-b53d31eb5066', 400, 600),
  sneakerRender: U('1595950653106-6c9ebd614d3a', 400, 600),
  floorPlan2d: U('1574362848149-11496d93a7c7', 400, 600),
  floorPlan3d: U('1600585154340-be6161a56a0c', 400, 600),
  portraitBefore: U('1534528741775-53994a69daeb', 400, 600),
  portraitAfter: U('1531746020798-e6953c6e8e04', 400, 600),
} as const

/* ── Play to Learn ───────────────────────────────────── */
export const PLAY = {
  phonePoster: U('1512941937-1c142b5e3c41', 360, 640),
} as const

/* ── Prompt screen inspiration photo ─────────────────── */
export const PROMPT_INSPIRATION = U('1542291026616-b53d31eb5066', 128, 128)
