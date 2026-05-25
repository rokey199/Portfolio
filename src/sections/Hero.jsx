import { motion } from 'framer-motion'
import Scene from '../components/Scene'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">

      <Scene />

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-8xl font-black leading-tight z-10"
      >
        KISHAN
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          {' '}DABHI
        </span>
      </motion.h1>

      <p className="mt-6 text-lg text-gray-300 max-w-2xl z-10 leading-relaxed">
        Frontend Developer & React JS Developer crafting modern digital experiences.
      </p>

      <div className="flex gap-4 mt-10 z-10 flex-wrap justify-center">

        <button className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold">
          View Projects
        </button>

        <button className="px-8 py-3 rounded-xl border border-white/20 hover:border-cyan-400 transition">
          Contact Me
        </button>
      </div>
    </section>
  )
}