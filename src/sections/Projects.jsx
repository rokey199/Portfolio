import ecommerce from '../assets/ecommerce.png'
import portfolio from '../assets/portfolio.png'
import shopify from '../assets/shopify.png'

const projects = [
  {
    title: 'NovaCart Ecommerce',
    desc: 'Modern ecommerce platform built using React JS.',
    image: ecommerce,
  },
  {
    title: 'React Portfolio Website',
    desc: 'Animated modern portfolio with premium UI.',
    image: portfolio,
  },
  {
    title: 'Shopify Fashion Store',
    desc: 'Premium Shopify storefront design.',
    image: shopify,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8">

      <h2 className="text-5xl font-bold text-center mb-16">
        Featured <span className="text-cyan-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:-translate-y-4 hover:rotate-1 transition-all duration-500"
          >
            <img
              src={project.image}
              className="rounded-2xl mb-6 w-full h-52 object-cover"
            />

            <h3 className="text-2xl font-bold text-cyan-300 mb-4">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {project.desc}
            </p>

            <div className="flex gap-4">

              <a
                href="#"
                className="px-4 py-2 bg-cyan-500 rounded-xl hover:bg-cyan-400 transition"
              >
                Live Demo
              </a>

              <a
                href="#"
                className="px-4 py-2 border border-white/20 rounded-xl hover:border-cyan-400 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}