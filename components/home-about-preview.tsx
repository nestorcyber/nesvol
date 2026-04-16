import NewsCard from "@/components/news-card"

export default function HomeAboutPreview() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-4xl font-bold text-primary mb-12">Who is Nestor?</h2>
        
        <NewsCard
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eden2-sUzI0wvGmZMjB5UUP911IAB6WvBM5c.jpg"
          title="About Me"
          description="I'm passionate about creating meaningful connections and driving positive change through community engagement, event leadership, and creative design. My journey has been shaped by volunteering experiences across tech and community organizing, where impact comes from intentional action and genuine care."
          href="/about"
        />
      </div>
    </section>
  )
}
