import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 px-8 max-w-6xl mx-auto">

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-10"
      >
        About <span className="text-cyan-400">Me</span>
      </motion.h2>

      <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
        <p className="text-lg text-gray-300 leading-relaxed">
          Passionate Frontend Developer skilled in React JS, Tailwind CSS,
          Shopify, WordPress, Python, and UI/UX design.
        </p>
      </div>
    </section>
  )
}