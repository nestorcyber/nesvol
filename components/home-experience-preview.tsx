import Link from "next/link"

export default function HomeExperiencePreview() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">Work Experience</h2>

        <div className="space-y-4 mb-10">
          <p className="text-lg text-foreground leading-relaxed">
            With a diverse background spanning tech events, media production, and community leadership, I&apos;ve developed expertise in event management, design, and strategic communication. I&apos;ve contributed to initiatives that reached thousands of people and created lasting impact in my community.
          </p>

          <p className="text-lg text-foreground leading-relaxed">
            From organizing major developer conferences to supporting entrepreneurship programs, my professional journey reflects a commitment to excellence and meaningful collaboration.
          </p>
        </div>

        <Link
          href="/experience"
          className="inline-flex items-center text-accent hover:text-primary transition-colors font-medium text-lg group"
        >
          View Experience
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </section>
  )
}
