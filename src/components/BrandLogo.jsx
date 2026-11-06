import { useState } from 'react'

import { brand, images } from '../data/content'

/**
 * The brush wordmark. Height is fixed and the width follows the file's own
 * aspect ratio, so any logo proportion drops in without distortion.
 * If the file is absent the slot says so instead of faking a wordmark.
 */
export default function BrandLogo({ height = 38, className = '', plate = false }) {
  const [missing, setMissing] = useState(false)

  if (missing) {
    return (
      <span
        className={`inline-flex items-center border border-dashed border-seal/60 px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-seal ${className}`}
      >
        Add sosorulogo.png
      </span>
    )
  }

  return (
    <img
      src={images.logo}
      alt={brand.name}
      // Intrinsic size of the supplied artwork (306×279) so the header does not
      // shift while the file decodes; display size still follows the real ratio.
      width={306}
      height={279}
      decoding="async"
      draggable={false}
      onError={() => {
        setMissing(true)
        console.warn('[Sosoru] Missing logo: expected public/images/sosorulogo.png')
      }}
      style={{ height, width: 'auto', maxWidth: '100%' }}
      className={`select-none ${plate ? 'bg-cream' : ''} ${className}`}
    />
  )
}
