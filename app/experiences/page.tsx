"use client"

import { experiences } from "@/lib/data"
import ExperienceCard from "@/components/experience-card"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </main>

      <ContactSection />
      <Footer />
    </div>
  )
}
