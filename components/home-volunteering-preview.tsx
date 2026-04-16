import Link from "next/link"

export default function HomeVolunteeringPreview() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">Volunteering & Community</h2>

        <div className="space-y-4 mb-10">
          <p className="text-lg text-foreground leading-relaxed">
            Every volunteering experience I&apos;ve had tells a story of collaboration, creativity, and community impact. Through organizing events, supporting community initiatives, and mentoring emerging leaders, I&apos;ve discovered that meaningful change happens when people come together with shared purpose.
          </p>

          <p className="text-lg text-foreground leading-relaxed">
            My passion for community building extends across various initiatives—from tech conferences to leadership programs—where I&apos;ve had the privilege of facilitating connections and amplifying voices.
          </p>
        </div>

        <Link
          href="/volunteering"
          className="inline-flex items-center text-accent hover:text-primary transition-colors font-medium text-lg group"
        >
          Explore Volunteering
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </section>
  )
}
