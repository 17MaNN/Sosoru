/**
 * Generated file — do not edit by hand.
 *
 * Run `npm run logo` after placing the restaurant's logo artwork at the project
 * root (`logo.png`, `logo.jpg` or `logo.webp`). The script knocks the paper out
 * of the artwork, produces ink and ivory versions plus the icon set, and
 * rewrites this file.
 *
 * Until then `available` is false and the wordmark is set in type.
 */
export type BrandLogo = {
  available: boolean
  ink: string
  light: string
  ratio: number
}

export const brandLogo: BrandLogo = {
  available: false,
  ink: '/images/brand/logo-ink.png',
  light: '/images/brand/logo-ivory.png',
  ratio: 1,
}
