"use client"
import HeroSection from "@/components/hero-section"
import ExperienceCard from "@/components/experience-card"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"

const experiences = [
  {
    id: 11,
    title: "Emerging Leaders Conference",
    organization: "Guardians of the Nation International (GOTNI)",
    role: "Media Team",
    date: "December 12 & 13, 2025",
    description:
      "Served on the Media Team for the Emerging Leaders Conference, capturing impactful moments and supporting the digital documentation of this transformative leadership event.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 10,
    title: "Edensprime Hospitality Summit",
    organization: "FLE Global",
    role: "Event Setup",
    date: "November 29, 2025",
    description:
      "Contributed to the success of the Edensprime Hospitality Summit through dedicated event setup and coordination, ensuring a welcoming and professional atmosphere for all attendees.",
    images: ["/hospitality-event.jpg", "/event-setup.jpg", "/conference-hall.jpg", "/team-work.jpg"],
  },
  {
    id: 9,
    title: "Faith life, Leadership & Entrepreneurship (FLE) Conference",
    organization: "FLE Global",
    role: "Event Setup",
    date: "November 22, 2025",
    description:
      "Supported the FLE Conference by managing event setup logistics. Worked behind the scenes to create a seamless environment for leadership and entrepreneurship discussions.",
    images: ["/leadership-conference.jpg", "/stage-setup.jpg", "/event-planning.jpg", "/conference-crowd.jpg"],
  },
  {
    id: 8,
    title: "DevFest Owerri 2025",
    organization: "Google Developer Groups Owerri",
    role: "Design Team & Organizing Team",
    date: "November 15, 2025",
    description:
      "Played a key role in the Design and Organizing teams for DevFest Owerri 2025. Crafted visual assets and helped coordinate the largest developer gathering in the region.",
    images: ["/devfest-event.jpg", "/tech-community.jpg", "/developer-conference.jpg", "/google-developer-groups.jpg"],
  },
  {
    id: 7,
    title: "Gold In Real Estate Conference",
    organization: "Gold In Real Estate",
    role: "Media Team & Welfare Team",
    date: "November 13 & 14, 2025",
    description:
      "Served on both the Media and Welfare teams, capturing key moments of the conference while ensuring the comfort and well-being of guests and speakers.",
    images: ["/gire-solo.jpg", "/gire-work.jpg", "/gire-table.jpg", "/gire-hall.jpg"],
  },
  {
    id: 6,
    title: "FUTO Alumni Homecoming 2025",
    organization: "FUTO Alumni",
    role: "Media and Photography",
    date: "August 15, 2025",
    description:
      "Captured the spirit of reunion at the FUTO Alumni Homecoming. Documented memorable moments and connected with alumni through photography and media coverage.",
    images: [
      "/alumni-event.jpg",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 5,
    title: "DevFest Owerri 2024",
    organization: "Google Developer Groups Owerri",
    role: "Design and Event Setup",
    date: "November 16, 2024",
    description:
      "Contributed to the success of DevFest Owerri 2024 through creative design and hands-on event setup. Helped create an engaging atmosphere for the local tech community.",
    images: ["/devfest24-group.jpg", "/devfest24-duo.jpg", "/devfest24-solo.jpg", "/devfest24-friends.jpg"],
  },
  {
    id: 4,
    title: "Tech Nexus",
    organization: "Google Developer Group on Campus FUTO",
    role: "Design, Event Setup and Photography",
    date: "Aug 23, 2025",
    description:
      "Participated in Tech Nexus, a dynamic tech community event at FUTO, contributing to event design, setup, and photography. Collaborated with fellow developers to create an inspiring environment.",
    images: ["/tech-nexus-team.jpg", "/tech-nexus-me.jpg", "/tech-nexus-csc.jpg", "/tech-nexus-godfirst.jpg"],
  },
  {
    id: 3,
    title: "Build With AI 2025",
    organization: "Google Developer group Owerri",
    role: "Design and Photography",
    date: "July 26, 2025",
    description:
      "Contributing to Build With AI 2025 through design and photography, capturing and creating visual content for the Google Developer group Owerri community. Focused on storytelling and showcasing innovation in AI-driven projects.",
    images: ["/bwai-team.jpg", "/bwai-me.jpg", "/bwai-imma.jpg", "/bwai-i.jpg"],
  },
  {
    id: 2,
    title: "AWS Community Event",
    organization: "AWS Community",
    role: "Front Desk and Design",
    date: "Sept 13, 2025",
    description:
      "Collaborated with the AWS community team, supporting event organization and attendee engagement. Focused on creative coordination and smooth event flow.",
    images: ["/aws-team-moment.jpg", "/aws-team-csc.jpg", "/aws-team.jpg", "/aws-me.jpg"],
  },
  {
    id: 1,
    title: "Gida Skillup Tour Owerri",
    organization: "Ginakev Digital Academy Gida",
    role: "Front Desk, Protocol & Event Setup",
    date: "October 11, 2025",
    description:
      "An inspiring experience supporting the Gida Skillup Tour in Owerri — helping with coordination, protocol, and event setup to empower young learners through digital creativity.",
    images: ["/gida-group-photo.jpg", "/gida-team-moment.jpg", "/gida-large-group.jpg", "/gida-casual-moment.jpg"],
  },
]

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <div id="home">
          <HeroSection />
        </div>

        <section id="experiences" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6">
              My Volunteering Moments
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              A collection of events and initiatives where I've had the privilege to serve and lead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </section>

        <div id="about">
          <AboutSection />
        </div>

        <SkillsSection />

        <div id="contact">
          <ContactSection />
        </div>

        <Footer />
      </main>
    </>
  )
}
