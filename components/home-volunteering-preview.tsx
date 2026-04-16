import NewsCard from "@/components/news-card"

export default function HomeVolunteeringPreview() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-4xl font-bold text-primary mb-12">Volunteering & Community</h2>
        
        <NewsCard
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vol-ehxuFInSlnE81JZZijj6Bgoz9s2kcW.jpeg"
          title="Making Impact Through Volunteering"
          description="I've contributed to meaningful change through organizing events, supporting community initiatives, and working with emerging leaders. From tech conferences to leadership programs, my passion is facilitating connections and amplifying voices."
          href="/volunteering"
        />
      </div>
    </section>
  )
}
