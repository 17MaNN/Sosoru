/**
 * Builds the wordmark and icon set from the restaurant's logo artwork.
 *
 * Usage: put the artwork at the project root as `logo.png`, `logo.jpg` or
 * `logo.webp`, then run `npm run logo`.
 *
 * The artwork is dark ink on paper. The paper is knocked out with a luminance
 * key so the mark sits on ivory, walnut or a photograph without a box, an ivory
 * version is produced for the dark sections, and the icon set comes from the
 * same mark. Artwork that already carries transparency is used as supplied.
 */
import sharp from 'sharp'
import { access, mkdir, writeFile } from 'node:fs/promises'

const CANDIDATES = ['logo.png', 'logo.jpg', 'logo.jpeg', 'logo.webp']
const OUT = 'public/images/brand'
const IVORY = [244, 240, 232]
const WALNUT = '#35271f'

const exists = async (file) => {
  try {
    await access(file)
    return true
  } catch {
    return false
  }
}

let source = null
for (const candidate of CANDIDATES) {
  if (await exists(candidate)) {
    source = candidate
    break
  }
}

if (!source) {
  console.error(
    `No logo artwork found. Expected one of ${CANDIDATES.join(', ')} at the project root.`,
  )
  process.exit(1)
}

await mkdir(OUT, { recursive: true })

const { data, info } = await sharp(source)
  .trim({ threshold: 12 })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

const { width, height } = info
const pixels = width * height

// Only trust the alpha channel when the artwork actually has transparent
// pixels. A flattened PNG still reports an alpha channel, but it is all opaque.
let minAlpha = 255
for (let i = 0; i < pixels; i += 1) {
  if (data[i * 4 + 3] < minAlpha) minAlpha = data[i * 4 + 3]
}
const keepSourceColour = minAlpha < 250

/**
 * @param {[number, number, number]} colour ink colour for keyed artwork
 */
const buildMark = (colour) => {
  const out = Buffer.alloc(pixels * 4)
  for (let i = 0; i < pixels; i += 1) {
    const r = data[i * 4]
    const g = data[i * 4 + 1]
    const b = data[i * 4 + 2]
    const a = data[i * 4 + 3]
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b

    if (keepSourceColour) {
      out[i * 4] = r
      out[i * 4 + 1] = g
      out[i * 4 + 2] = b
      out[i * 4 + 3] = a
    } else {
      out[i * 4] = colour[0]
      out[i * 4 + 1] = colour[1]
      out[i * 4 + 2] = colour[2]
      out[i * 4 + 3] = Math.round(255 - luma)
    }
  }
  return sharp(out, { raw: { width, height, channels: 4 } })
}

const inkBuffer = await buildMark([53, 39, 31]).png({ compressionLevel: 9 }).toBuffer()
const lightBuffer = await buildMark(IVORY).png({ compressionLevel: 9 }).toBuffer()

await sharp(inkBuffer).toFile(`${OUT}/logo-ink.png`)
await sharp(lightBuffer).toFile(`${OUT}/logo-ivory.png`)

const iconSide = Math.round(Math.max(width, height) * 1.16)

const ivoryTile = await sharp({
  create: { width: iconSide, height: iconSide, channels: 4, background: '#f4f0e8' },
})
  .composite([{ input: inkBuffer, gravity: 'center' }])
  .flatten({ background: '#f4f0e8' })
  .png()
  .toBuffer()

await sharp(ivoryTile).resize(512, 512).png().toFile('public/brand-icon-512.png')
await sharp(ivoryTile).resize(180, 180).png().toFile('public/apple-touch-icon.png')

const darkMark = await sharp(lightBuffer)
  .resize({
    width: Math.round(iconSide * 0.62),
    height: Math.round(iconSide * 0.62),
    fit: 'inside',
    withoutEnlargement: false,
  })
  .png()
  .toBuffer()

const darkMeta = await sharp(darkMark).metadata()
if ((darkMeta.width ?? 0) > iconSide || (darkMeta.height ?? 0) > iconSide) {
  throw new Error(`Mark did not scale down for the icon (${darkMeta.width}×${darkMeta.height}).`)
}

await sharp({
  create: { width: iconSide, height: iconSide, channels: 4, background: WALNUT },
})
  .composite([{ input: darkMark, gravity: 'center' }])
  .png()
  .toFile('public/brand-icon-dark-512.png')

const ratio = Number((width / height).toFixed(4))

await writeFile(
  'src/data/brand.ts',
  `/**
 * Generated file — do not edit by hand. Run \`npm run logo\` to regenerate.
 *
 * Source artwork: ${source} (${width}×${height} after trimming,
 * ${keepSourceColour ? 'alpha supplied' : 'paper knocked out with a luminance key'}).
 */
export type BrandLogo = {
  available: boolean
  ink: string
  light: string
  ratio: number
}

export const brandLogo: BrandLogo = {
  available: true,
  ink: '/images/brand/logo-ink.png',
  light: '/images/brand/logo-ivory.png',
  ratio: ${ratio},
}
`,
)

console.log(`logo-ink.png / logo-ivory.png  ${width}×${height}`)
console.log('brand-icon-512.png, apple-touch-icon.png, brand-icon-dark-512.png')
console.log('src/data/brand.ts updated')
