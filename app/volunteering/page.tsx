import ExperienceCard from "@/components/experience-card"
import Footer from "@/components/footer"
import { experiences } from "@/lib/data"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Volunteering & Community Impact",
  description: "Explore Nestor&apos;s volunteering journey and community impact through events, conferences, and initiatives.",
}

export default function VolunteeringPage() {
  return (
    <>
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header with Image */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-sans font-bold text-primary mb-6">
                  Volunteering & Community
                </h1>
                <p className="text-lg text-foreground font-medium max-w-2xl leading-relaxed">
                  Every volunteering experience tells a story of collaboration, creativity, and community impact. Here&apos;s a look at the moments that shaped my journey.
                </p>
              </div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vol-ehxuFInSlnE81JZZijj6Bgoz9s2kcW.jpeg"
                alt="Volunteer Portfolio"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
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
