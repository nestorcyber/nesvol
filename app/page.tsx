import HeroSection from "@/components/hero-section"
import ExperienceCard from "@/components/experience-card"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import { experiences } from "@/lib/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const highlightedIds = [14, 13, 2, 1] // IDs for DevFest 25, Futo 25, AWS, Gida
  const highlightedExperiences = experiences.filter((exp) => highlightedIds.includes(exp.id))

  return (
    <>
      <main className="min-h-screen bg-background">
        <section id="home" aria-label="Introduction">
          <HeroSection />
        </section>

        <section id="experiences" className="py-20 px-4 md:px-8 max-w-7xl mx-auto" aria-label="Selected experiences">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6">
              Selected Highlights
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              A glimpse into my journey of community building and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlightedExperiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/experiences">
              <Button
                size="lg"
                className="rounded-full text-lg px-8 py-6 bg-slate-900 hover:bg-slate-800 text-white font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                View All Experiences
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>

        <section id="about" aria-label="About Nestor">
          <AboutSection />
        </section>

        <SkillsSection />

        <section id="contact" aria-label="Contact information">
          <ContactSection />
        </section>

        <Footer />
      </main>
    </>
  )
}
