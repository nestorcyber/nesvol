"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const scrollToExperiences = () => {
    const element = document.querySelector("section:nth-of-type(2)")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-2 text-balance leading-tight">
          A Journey of Impact —
        </h1>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
          <span className="text-teal-500">One Step at a Time</span>
          <span className="inline-block w-3 h-3 bg-blue-500 rounded-full ml-2 align-middle"></span>
        </h2>

        <p className="text-lg md:text-xl text-slate-700 mb-6 max-w-3xl mx-auto text-balance leading-relaxed">
          Hi, I'm <span className="font-semibold">Nestor Anyanwu</span>. Every volunteering experience I've had tells a
          story of collaboration, creativity, and community impact. Here's a look at the moments that shaped my journey.
        </p>

        <p className="text-lg text-slate-700 mb-12 max-w-3xl mx-auto font-medium">
          I'm passionate about Design, Technology, Self-Development, Community, and Volunteering.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={scrollToExperiences}
            size="lg"
            className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white rounded-full px-8 py-6 text-lg font-semibold"
          >
            Explore My Volunteering Moments
          </Button>
          <Button
            onClick={scrollToContact}
            size="lg"
            variant="outline"
            className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 rounded-full px-8 py-6 text-lg font-semibold bg-transparent"
          >
            Let's Collaborate
          </Button>
        </div>
      </div>
    </section>
  )
}
