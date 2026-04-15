import { experiences } from "@/lib/data"
import ExperienceCard from "@/components/experience-card"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Volunteering Experiences",
  description:
    "Explore the complete timeline of Nestor Anyanwu's volunteering journey — from DevFest Owerri to AWS Community Days, GIDA Skillup, and beyond.",
  keywords: [
    "Nestor Anyanwu experiences",
    "volunteering timeline",
    "DevFest Owerri",
    "AWS Community Day",
    "GIDA Skillup",
    "tech events Nigeria",
    "community building",
  ],
  openGraph: {
    title: "Volunteering Experiences | Nestor Anyanwu",
    description: "A complete timeline of volunteering, community building, and event organization by Nestor Anyanwu.",
    url: "https://nestor-anyanwu.vercel.app/experiences",
  },
  alternates: {
    canonical: "/experiences",
  },
}

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <Link href="/" className="inline-block mb-6">
            <Button variant="ghost" className="gap-2 pl-0 hover:bg-transparent hover:text-teal-600">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6">
            All Volunteering <br />
            <span className="text-teal-500">Experiences</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl font-medium leading-relaxed">
            A complete timeline of my journey through volunteering, community building, and event organization. Every
            event is a story of impact and connection.
          </p>
        </div>

        <section aria-label="Volunteering experiences timeline">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </section>
      </main>

      <ContactSection />
      <Footer />
    </div>
  )
}
