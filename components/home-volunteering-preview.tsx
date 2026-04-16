import Link from "next/link"

export default function HomeVolunteeringPreview() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-sans text-3xl md:text-3xl font-600 text-primary mb-8">Volunteering & Community</h2>

        <div className="space-y-4 mb-10">
          <p className="text-base text-foreground leading-relaxed">
            I&apos;ve contributed to meaningful change through organizing events, supporting community initiatives, and working with emerging leaders.
          </p>

          <p className="text-base text-muted leading-relaxed">
            From tech conferences to leadership programs, my passion is facilitating connections and amplifying voices.
          </p>
        </div>

        <Link
          href="/volunteering"
          className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium text-sm group"
        >
          Explore Volunteering
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </section>
  )
}
