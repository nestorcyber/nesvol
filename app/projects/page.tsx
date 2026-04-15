import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Metadata } from "next"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Nestor&apos;s key projects showcasing design, development, and community initiatives.",
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
    description: "Contributed design and photography for Google Developer Group&apos;s AI-focused event, showcasing innovative AI projects and connecting AI enthusiasts.",
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
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-slate-900 mb-4">
              Projects
            </h1>
            <p className="text-xl text-slate-600 font-medium max-w-2xl">
              A selection of key projects that showcase my work in design, event coordination, and community building across technology and entrepreneurship.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="p-6 md:p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-700 leading-relaxed mb-6 flex-grow">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-6 border-t border-slate-200">
                  {project.links.demo && project.links.demo !== "#" && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold text-sm transition-colors"
                    >
                      <span>GitHub</span>
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
