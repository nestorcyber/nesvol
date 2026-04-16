import Footer from "@/components/footer"
import { Metadata } from "next"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Nestor's key projects showcasing design, development, and community initiatives.",
}

const projects = [
  {
    title: "DevFest Owerri 2025",
    description: "Organized and designed Nigeria's largest developer festival in South-East. Led design team, managed logistics, and delivered keynote speeches on emerging technologies.",
    technologies: ["Event Management", "Graphic Design", "Community Building", "Branding"],
    links: {
      demo: "https://devfest.gdgowerri.com",
    },
  },
  {
    title: "FLE Conference Brand Identity",
    description: "Created comprehensive visual identity for Faith, Life, Leadership & Entrepreneurship Conference, including event materials, signage, and digital assets for 500+ attendees.",
    technologies: ["Brand Design", "Visual Identity", "Event Graphics", "Typography"],
    links: {
      demo: "#",
    },
  },
  {
    title: "GIDA Skillup Tour",
    description: "Supported digital creativity tour across Nigeria, managing front desk operations and event coordination. Helped empower 200+ young learners in digital skills.",
    technologies: ["Event Coordination", "Community Outreach", "Digital Literacy"],
    links: {},
  },
  {
    title: "AWS Community Event Design",
    description: "Designed visual assets and coordinated front desk operations for AWS Community event, creating engaging materials for cloud computing enthusiasts.",
    technologies: ["Graphic Design", "Event Coordination", "Web Design"],
    links: {
      demo: "https://aws.amazon.com/developer/community/",
    },
  },
  {
    title: "Tech Nexus FUTO",
    description: "Designed and coordinated event setup for Tech Nexus at FUTO, bringing together developers for knowledge sharing and networking. Managed photography and visual documentation.",
    technologies: ["Event Design", "Photography", "Branding", "Coordination"],
    links: {},
  },
  {
    title: "Build With AI 2025",
    description: "Contributed design and photography for Google Developer Group's AI-focused event, showcasing innovative AI projects and connecting AI enthusiasts.",
    technologies: ["Graphic Design", "Photography", "Visual Storytelling"],
    links: {
      demo: "https://gdgowerri.com",
    },
  },
]

export default function ProjectsPage() {
  return (
    <>
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-primary mb-6">
              Featured Projects
            </h1>
            <p className="text-lg text-foreground font-medium max-w-2xl">
              A selection of key projects that showcase my work in design, event coordination, and community building across technology and entrepreneurship.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 border border-border hover:border-accent transition-colors duration-300 flex flex-col bg-background rounded-lg"
              >
                <h3 className="text-2xl font-sans font-bold text-primary mb-3">{project.title}</h3>
                <p className="text-foreground leading-relaxed mb-6 flex-grow font-medium">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-6 border-t border-border">
                  {project.links.demo && project.links.demo !== "#" && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-accent text-secondary hover:text-primary rounded-lg font-bold text-sm transition-colors cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
