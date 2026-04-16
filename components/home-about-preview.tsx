import Link from "next/link"

export default function HomeAboutPreview() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-sans text-3xl md:text-3xl font-600 text-primary mb-8">About</h2>

        <div className="space-y-4 mb-10">
          <p className="text-base leading-relaxed text-foreground">
            I&apos;m passionate about creating meaningful connections and driving positive change through community engagement, event leadership, and creative design.
          </p>

          <p className="text-base leading-relaxed text-muted">
            My journey has been shaped by volunteering experiences across tech and community organizing, where impact comes from intentional action.
          </p>
        </div>

        <Link
          href="/about"
          className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium text-sm group"
        >
          Learn More
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </section>
  )
}
