import Link from "next/link"
import Image from "next/image"

export default function HomeVolunteeringPreview() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-4xl font-bold text-primary mb-12">Volunteering & Community</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="space-y-4 mb-10">
              <p className="text-lg text-foreground leading-relaxed font-medium">
                I&apos;ve contributed to meaningful change through organizing events, supporting community initiatives, and working with emerging leaders.
              </p>

              <p className="text-lg text-muted leading-relaxed font-medium">
                From tech conferences to leadership programs, my passion is facilitating connections and amplifying voices.
              </p>
            </div>

            <Link
              href="/volunteering"
              className="inline-flex items-center text-primary hover:text-accent transition-colors font-bold text-base group"
            >
              Explore Volunteering
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Image */}
          <Link href="/volunteering" className="block overflow-hidden rounded-lg cursor-pointer group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vol-ehxuFInSlnE81JZZijj6Bgoz9s2kcW.jpeg"
              alt="Volunteer Community"
              width={500}
              height={600}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
