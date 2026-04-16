export default function HomeHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
          Nestor Anyanwu
        </h1>

        {/* Professional Identity */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 font-medium">
          Community Builder, Tech Advocate & Designer
        </p>

        {/* Short Statement */}
        <p className="text-xl md:text-2xl text-foreground mb-12 max-w-3xl leading-relaxed font-medium">
          Crafting intentional impact through volunteering, community leadership, and innovative design. Every experience tells a story of collaboration and growth.
        </p>
      </div>
    </section>
  )
}
