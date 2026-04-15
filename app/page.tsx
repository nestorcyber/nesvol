import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <section aria-label="Introduction">
          <HeroSection />
        </section>

        <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto" aria-label="Navigation to main sections">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Explore My Journey
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl font-medium">
              Discover my work, volunteering experiences, and community impact across technology and entrepreneurship.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/about">
                <Button className="w-full h-auto py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-xl flex items-center justify-between group transition-all hover:shadow-lg">
                  <span>About Me</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/experience">
                <Button className="w-full h-auto py-4 px-6 bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold rounded-xl flex items-center justify-between group transition-all hover:shadow-lg">
                  <span>Work Experience</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/projects">
                <Button className="w-full h-auto py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-bold rounded-xl flex items-center justify-between group transition-all hover:shadow-lg">
                  <span>Projects</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/volunteering">
                <Button className="w-full h-auto py-4 px-6 bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold rounded-xl flex items-center justify-between group transition-all hover:shadow-lg">
                  <span>Volunteering</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button className="w-full h-auto py-4 px-6 bg-amber-600 hover:bg-amber-700 text-white text-lg font-bold rounded-xl flex items-center justify-between group transition-all hover:shadow-lg">
                  <span>Contact</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
