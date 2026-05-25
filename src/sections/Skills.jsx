const skills = [
  'React JS',
  'JavaScript',
  'Tailwind CSS',
  'Python',
  'Shopify',
  'WordPress',
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8">

      <h2 className="text-5xl font-bold text-center mb-16">
        My <span className="text-purple-400">Skills</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:scale-105 hover:-translate-y-2 transition duration-500"
          >
            <h3 className="text-2xl font-semibold text-cyan-300">
              {skill}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}