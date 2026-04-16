import { MessageCircle } from "lucide-react"

export default function HomeContactCTA() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-secondary">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Let&apos;s Connect</h2>

        <p className="text-lg text-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Interested in collaborating or discussing community initiatives? I&apos;d love to hear from you.
        </p>

        <a
          href="https://wa.me/2347016614444"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg hover:bg-accent hover:text-primary transition-colors font-medium"
        >
          <MessageCircle size={20} />
          Message on WhatsApp
        </a>
      </div>
    </section>
  )
}
