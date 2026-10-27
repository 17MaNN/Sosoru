import { motion, useReducedMotion } from 'framer-motion'

const TAGS = {
  div: motion.div,
  span: motion.span,
  p: motion.p,
  li: motion.li,
  ul: motion.ul,
  dl: motion.dl,
  dt: motion.dt,
  dd: motion.dd,
  section: motion.section,
  article: motion.article,
  figure: motion.figure,
  header: motion.header,
  footer: motion.footer,
}

const EASE = [0.22, 1, 0.36, 1]

export default function Reveal({
  as = 'div',
  delay = 0,
  y = 22,
  duration = 0.85,
  amount = 0.2,
  once = true,
  className = '',
  children,
  ...rest
}) {
  const Comp = TAGS[as] ?? motion.div
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <Comp className={className} {...rest}>
        {children}
      </Comp>
    )
  }

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin: '0px 0px -8% 0px' }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Comp>
  )
}
