import Link from "next/link"

export default function HomeAboutPreview() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">About</h2>

        <div className="prose prose-lg text-foreground space-y-4 mb-10">
          <p className="text-lg leading-relaxed">
            I&apos;m passionate about creating meaningful connections and driving positive change through community engagement, event leadership, and creative design. With a background in technology and entrepreneurship, I believe in the power of collaboration to solve problems and build stronger communities.
          </p>

          <p className="text-lg leading-relaxed">
            My journey has been shaped by volunteering experiences across tech, design, and community organizing, where I&apos;ve learned that impact comes from intentional action and genuine care for the people around me.
          </p>
        </div>

        <Link
          href="/about"
          className="inline-flex items-center text-accent hover:text-primary transition-colors font-medium text-lg group"
        >
          Learn More
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </section>
  )
}
