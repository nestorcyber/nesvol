"use client"
import HeroSection from "@/components/hero-section"
import ExperienceCard from "@/components/experience-card"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"

const experiences = [
  {
    id: 1,
    title: "Gida Skillup Tour Owerri",
    organization: "Ginakev Digital Academy Gida",
    role: "Front Desk and Design",
    date: "October 11, 2025",
    description:
      "An inspiring experience supporting the Gida Skillup Tour in Owerri — helping with coordination and design to empower young learners through digital creativity.",
    images: ["/gida-group-photo.jpg", "/gida-team-moment.jpg", "/gida-large-group.jpg", "/gida-casual-moment.jpg"],
  },
  {
    id: 2,
    title: "AWS Community Event",
    organization: "AWS Community",
    role: "Front Desk and Design",
    date: "Sept 13, 2025",
    description:
      "Collaborated with the AWS community team, supporting event organization and attendee engagement. Focused on creative coordination and smooth event flow.",
    images: [
      "/aws-team-moment.jpg",
      "/tech-conference-networking.jpg",
      "/aws-workshop-attendees.jpg",
      "/cloud-computing-event.jpg",
    ],
  },
  {
    id: 3,
    title: "Build With AI 2025",
    organization: "Google Developer group Owerri",
    role: "Design and Photography",
    date: "July 26, 2025",
    description:
      "Contributing to Build With AI 2025 through design and photography, capturing and creating visual content for the Google Developer group Owerri community. Focused on storytelling and showcasing innovation in AI-driven projects.",
    images: [
      "/google-developer-group-event.jpg",
      "/gdg-community-meetup.jpg",
      "/developer-conference.png",
      "/tech-community-gathering.jpg",
    ],
  },
  {
    id: 4,
    title: "Tech Nexus",
    organization: "Google Developer Group on Campus FUTO",
    role: "Design and Community Support",
    date: "Aug 23, 2025",
    description:
      "Participated in Tech Nexus, a dynamic tech community event at FUTO, contributing to event design and community engagement. Collaborated with fellow developers and designers to create an inspiring learning environment.",
    images: [
      "/tech-nexus-team.jpg",
      "/tech-nexus-me.jpg",
      "/tech-nexus-csc.jpg",
      "/tech-nexus-godfirst.jpg",
    ],
  },
]

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <div id="home" className="pt-16">
          <HeroSection />
        </div>

        <section id="experiences" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Volunteer Experiences</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Real stories of service, creativity, and community impact
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
