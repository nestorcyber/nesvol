import Link from "next/link"

export default function HomeExperiencePreview() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-sans text-3xl md:text-3xl font-600 text-primary mb-8">Work Experience</h2>

        <div className="space-y-4 mb-10">
          <p className="text-base text-foreground leading-relaxed">
            With experience in event management, media production, and community leadership, I&apos;ve contributed to initiatives that reached thousands of people.
          </p>

          <p className="text-base text-muted leading-relaxed">
            From developer conferences to entrepreneurship programs, my focus is on excellence and meaningful collaboration.
          </p>
        </div>

        <Link
          href="/experience"
          className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium text-sm group"
        >
          View Experience
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </section>
  )
}
