/**
 * The Indian veg / non-veg mark: a bordered square with a filled dot.
 * Green for vegetarian, the seal red for everything else.
 */
export default function DietMark({ veg, className = '', size = 'sm' }) {
  const edge = size === 'sm' ? 'h-[13px] w-[13px]' : 'h-4 w-4'

  return (
    <span
      role="img"
      aria-label={veg ? 'Vegetarian' : 'Non-vegetarian'}
      className={`inline-flex shrink-0 items-center justify-center border ${edge} ${
        veg ? 'border-[#4A6B4F]' : 'border-seal'
      } ${className}`}
    >
      <span className={`h-1/2 w-1/2 rounded-full ${veg ? 'bg-[#4A6B4F]' : 'bg-seal'}`} />
    </span>
  )
}
