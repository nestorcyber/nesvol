import Link from "next/link"

const projects = [
  {
    title: "DevFest Owerri 2025",
    description: "Organized and designed the largest developer festival in South-East Nigeria",
  },
  {
    title: "FLE Conference",
    description: "Faith, Life, Leadership & Entrepreneurship conference branding and coordination",
  },
  {
    title: "GIDA Skillup Tour",
    description: "Tech skills development initiative reaching emerging entrepreneurs",
  },
]

export default function HomeProjectsPreview() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-secondary p-8 rounded-lg border border-border hover:border-accent transition-colors"
            >
              <h3 className="font-serif text-xl font-bold text-primary mb-3">{project.title}</h3>
              <p className="text-foreground text-sm leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center text-accent hover:text-primary transition-colors font-medium text-lg group"
        >
          View All Projects
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </section>
  )
}
