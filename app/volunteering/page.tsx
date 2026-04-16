import ExperienceCard from "@/components/experience-card"
import Footer from "@/components/footer"
import { experiences } from "@/lib/data"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Volunteering & Community Impact",
  description: "Explore Nestor&apos;s volunteering journey and community impact through events, conferences, and initiatives.",
}

export default function VolunteeringPage() {
  return (
    <>
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-3xl md:text-4xl font-serif font-600 text-primary mb-6">
              Volunteering & Community
            </h1>
            <p className="text-lg md:text-lg text-foreground font-medium max-w-3xl leading-relaxed">
              Every volunteering experience I&apos;ve had tells a story of collaboration, creativity, and community impact. Here&apos;s a look at the moments that shaped my journey.
            </p>
          </div>

          {/* All Experiences Section */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
