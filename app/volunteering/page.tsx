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
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-3xl md:text-4xl font-serif font-600 text-primary mb-6">
              Volunteering & Community
            </h1>
            <p className="text-lg md:text-lg text-foreground font-medium max-w-3xl leading-relaxed">
              Every volunteering experience I&apos;ve had tells a story of collaboration, creativity, and community impact. Here&apos;s a look at the moments that shaped my journey.
            </p>
          </div>

          {/* FLE Conference Section */}
          <section className="mb-20 pb-20 border-b border-border">
            <h2 className="text-2xl font-serif font-600 text-primary mb-8">
              Faith, Life, Leadership & Entrepreneurship (FLE) Conference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  The Faith, Life, Leadership & Entrepreneurship (FLE) Conference represents one of my most significant volunteering experiences. This transformative event brought together young leaders, entrepreneurs, and innovators to discuss critical topics in personal development, business growth, and community impact.
                </p>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Through active participation in event setup, coordination, and support, I contributed to creating an inspiring environment where hundreds of participants could network, learn, and grow. The experience reinforced my commitment to community building and the power of bringing people together around shared values.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">Event Setup</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">Coordination</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">Community Building</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">Leadership</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fle3%280%29-CFKUWQDj8dfMZ5zkDTF9IEEXC6zDID.jpg"
                  alt="FLE Conference team photo with attendees"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover w-full h-64 md:h-72"
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fle2%280%29-FfRbgx2cSla1HuEuvaPzlOe8rKfEcm.jpg"
                  alt="Receiving FLE Festival 2.0 certificate of appreciation"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover w-full h-64 md:h-72"
                />
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fle4-n7IdoFLGvctWYMK2ZspbSaqYEJz6n7.jpg"
                alt="Speaking and engaging with audience at FLE event"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full md:w-1/2 h-64"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fle1%280%29-RFztiDFA8wlZ5TUikrNKon6EVYY0te.jpg"
                alt="Audience engagement at FLE conference"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full md:w-1/2 h-64"
              />
            </div>
          </section>

          {/* All Experiences Section */}
          <section>
            <h2 className="text-4xl font-bold text-slate-900 mb-10">All Volunteering Experiences</h2>
            <p className="text-lg text-slate-600 mb-12 max-w-2xl">
              Below is a comprehensive collection of my volunteering experiences, including event coordination, media coverage, design contributions, and active participation in community-building initiatives.
            </p>
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
