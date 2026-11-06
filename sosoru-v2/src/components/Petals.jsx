import { motion } from 'framer-motion'

// Deterministic scatter, so the fall looks the same every time it is shaken.
const PETALS = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: (index * 41) % 100,
  delay: (index % 8) * 0.11,
  duration: 2.5 + (index % 5) * 0.26,
  drift: (index % 2 === 0 ? 1 : -1) * (16 + (index % 4) * 15),
  spin: 140 + (index % 6) * 80,
  size: 7 + (index % 4) * 3,
}))

export default function Petals() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[85] overflow-hidden">
      {PETALS.map((petal) => (
        <motion.span
          key={petal.id}
          initial={{ y: '-8vh', x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: '108vh',
            x: petal.drift,
            opacity: [0, 1, 1, 0.35],
            rotate: petal.spin,
          }}
          transition={{ duration: petal.duration, delay: petal.delay, ease: 'easeIn' }}
          className="absolute top-0 block"
          style={{
            left: `${petal.left}%`,
            width: petal.size,
            height: petal.size * 1.5,
            borderRadius: '62% 38% 54% 46%',
            background: 'linear-gradient(155deg, #F8F1E4 10%, #E6D8C0 90%)',
            boxShadow: '0 0 0 0.5px rgba(201, 143, 79, 0.45)',
          }}
        />
      ))}
    </div>
  )
}
