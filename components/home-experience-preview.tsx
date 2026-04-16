import Link from "next/link"
import Image from "next/image"

export default function HomeExperiencePreview() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-4xl font-bold text-primary mb-12">Professional Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <Link href="/experience" className="block overflow-hidden rounded-lg cursor-pointer group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eden3%280%29-Md3eT61Brp60MhmfTcGcfxvEaFIHqs.jpg"
              alt="Professional Experience"
              width={500}
              height={600}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
            />
          </Link>

          {/* Content */}
          <div>
            <div className="space-y-4 mb-10">
              <p className="text-lg text-foreground leading-relaxed font-medium">
                With experience in event management, media production, and community leadership, I&apos;ve contributed to initiatives that reached thousands of people.
              </p>

              <p className="text-lg text-muted leading-relaxed font-medium">
                From developer conferences to entrepreneurship programs, my focus is on excellence and meaningful collaboration.
              </p>
            </div>

            <Link
              href="/experience"
              className="inline-flex items-center text-primary hover:text-accent transition-colors font-bold text-base group"
            >
              View Experience
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
