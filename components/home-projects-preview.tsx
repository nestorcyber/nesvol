import NewsCard from "@/components/news-card"

export default function HomeProjectsPreview() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-4xl font-bold text-primary mb-12">Featured Projects</h2>

        <NewsCard
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fle2-vxhPppzWjtjP9M63pBTb8yALMDUPmb.jpg"
          title="Design & Project Excellence"
          description="I've designed and organized major projects including DevFest Owerri 2025, FLE Conference branding, and the GIDA Skillup Tour. Each project reflects my commitment to creating impactful experiences and pushing creative boundaries."
          href="https://www.behance.net/nestorcyber"
        />
      </div>
    </section>
  )
}
