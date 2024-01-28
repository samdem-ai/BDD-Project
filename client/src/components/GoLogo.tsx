'use client'
import { motion } from 'framer-motion'
import useSound from 'use-sound'
import ToogleSound from '../assets/toggle-theme.mp3'

type CardProps = {
  bg: string
  title: string
}

export const GoLogo = ({ bg, title }: CardProps) => {
  const [play] = useSound(ToogleSound, {
    volume: 0.3,
  })

  return (
    <motion.p
      initial={{ scale: 0, rotate: 90 }}
      animate={{ rotate: -12, scale: 1 }}
      whileHover={{ scale: 1.2, rotate: 0 }}
      whileTap={{ scale: 0.9, rotate: -12 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      onPointerDown={() => play()}
      className={`select-none -rotate-12 font-extrabold text-white text-9xl w-max hover:brightness-100 brightness-90 ${bg} p-16 rounded-3xl cursor-pointer`}
    >
      {title}
    </motion.p>
  )
}
