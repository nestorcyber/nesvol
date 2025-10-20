export default function AboutSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-accent/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">About My Journey</h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Volunteering is where passion meets purpose — where we give our time, creativity, and energy to make
              lasting impact.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Through my experiences in community events, tech initiatives, and creative projects, I've learned that the
              most meaningful work happens when we collaborate, listen, and serve with genuine care.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Every event, every conversation, and every project has shaped my understanding of what it means to be part
              of a community that grows together.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-foreground/70">Community Events</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-foreground/70">Hours of Service</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <p className="text-foreground/70">Major Initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
