import NewsCard from "@/components/news-card"

export default function HomeExperiencePreview() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-4xl font-bold text-primary mb-12">Professional Experience</h2>
        
        <NewsCard
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eden3%280%29-Md3eT61Brp60MhmfTcGcfxvEaFIHqs.jpg"
          title="Building Excellence Through Experience"
          description="With experience in event management, media production, and community leadership, I've contributed to initiatives that reached thousands of people. From developer conferences to entrepreneurship programs, my focus is on excellence and meaningful collaboration."
          href="/experience"
        />
      </div>
    </section>
  )
}
