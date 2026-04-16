import Link from "next/link"
import Image from "next/image"

export default function HomeAboutPreview() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-4xl font-bold text-primary mb-12">Who is Nestor?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <Link href="/about" className="block overflow-hidden rounded-lg cursor-pointer group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eden2-sUzI0wvGmZMjB5UUP911IAB6WvBM5c.jpg"
              alt="Nestor Anyanwu"
              width={500}
              height={600}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
            />
          </Link>

          {/* Content */}
          <div>
            <div className="space-y-4 mb-10">
              <p className="text-lg leading-relaxed text-foreground font-medium">
                I&apos;m passionate about creating meaningful connections and driving positive change through community engagement, event leadership, and creative design.
              </p>

              <p className="text-lg leading-relaxed text-muted font-medium">
                My journey has been shaped by volunteering experiences across tech and community organizing, where impact comes from intentional action and genuine care.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center text-primary hover:text-accent transition-colors font-bold text-base group"
            >
              Learn More
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
