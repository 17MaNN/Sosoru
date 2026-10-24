/**
 * Derives the site's image set from the one supplied interior photograph.
 * The source is 1100x1467, so crops are never upscaled beyond native width.
 * Run: node scripts/optimize-images.mjs
 */
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

const SRC = 'caption (1).jpg'
const OUT = 'public/images'

const jobs = [
  // Cinematic wide framing: pendant globes, timber columns, the dining room.
  { name: 'interior-hero', left: 0, top: 372, width: 1100, height: 700 },
  // Mobile hero: taller framing so the room still reads on a phone.
  { name: 'interior-hero-portrait', left: 120, top: 300, width: 860, height: 1100 },
  // The lattice screen, cabinetry and window at the back of the room.
  { name: 'interior-screen', left: 640, top: 430, width: 460, height: 620 },
  // Table, chairs and planting in the foreground.
  { name: 'interior-table', left: 250, top: 780, width: 620, height: 620 },
  // The whole room in service: palms, set tables, the lattice run and the bar.
  { name: 'interior-room-wide', left: 0, top: 600, width: 1100, height: 620 },
  // Full room, lightly cropped, used for the evening section.
  { name: 'interior-evening', left: 0, top: 330, width: 1100, height: 780 },
]

await mkdir(OUT, { recursive: true })

for (const job of jobs) {
  const base = sharp(SRC).extract({
    left: job.left,
    top: job.top,
    width: job.width,
    height: job.height,
  })

  await base
    .clone()
    .webp({ quality: 84, effort: 6 })
    .toFile(`${OUT}/${job.name}.webp`)

  console.log(`${job.name}.webp  ${job.width}x${job.height}`)
}

// Social sharing preview: 1200x630, cropped from the wide framing.
await sharp(SRC)
  .extract({ left: 0, top: 372, width: 1100, height: 700 })
  .resize(1200, 630, { fit: 'cover', position: 'attention' })
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(`${OUT}/social-preview.jpg`)

await sharp(SRC)
  .extract({ left: 0, top: 372, width: 1100, height: 700 })
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(`${OUT}/interior-hero.jpg`)

console.log('social-preview.jpg + interior-hero.jpg')
