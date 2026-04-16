export default function HomeHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <h1 className="font-sans text-3xl md:text-4xl font-600 text-primary mb-4 leading-tight">
          Nestor Anyanwu
        </h1>

        {/* Professional Identity */}
        <p className="text-base md:text-lg text-muted mb-8 font-medium">
          Community Builder, Tech Advocate & Designer
        </p>

        {/* Short Statement */}
        <p className="text-lg text-foreground mb-12 max-w-2xl leading-relaxed font-medium">
          Impact through volunteering, community leadership, and design.
        </p>
      </div>
    </section>
  )
}
