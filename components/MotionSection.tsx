'use client'

import { motion } from 'framer-motion'
import { DisplayCardsDemo } from "@/components/DisplayCardsDemo"

export default function MotionSection() {
  return (
    <div className="flex min-h-screen w-full items-start justify-start py-20 px-4">
      <motion.section
        className="w-full max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <DisplayCardsDemo />
      </motion.section>
    </div>
  )
}
