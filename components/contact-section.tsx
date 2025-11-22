"use client"
import { Mail, Linkedin, Instagram, Facebook, Twitter } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"
import { BehanceIcon } from "./behance-icon"
import { Button } from "./ui/button"

export default function ContactSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6 text-balance">Let's Connect</h2>
          <p className="text-lg text-muted-foreground font-medium">
            Do you want to Collaborate or Have an event or project I can support? Let's make it happen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-extrabold text-foreground mb-4">Get in Touch</h3>
            <p className="text-foreground/70 mb-6 font-medium">
              Feel free to reach out through any of these channels. I'd love to hear from you!
            </p>
            <div className="space-y-3">
              <a
                href="mailto:nestoranyanwu@gmail.com"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors font-bold"
              >
                <Mail className="w-5 h-5" />
                <span>nestoranyanwu@gmail.com</span>
              </a>
              <a
                href="https://wa.me/2349060900245"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors font-bold"
              >
                <WhatsAppIcon size={20} />
                <span>+234 906 090 0245</span>
              </a>
              <a
                href="https://behance.net/nestorcyber"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mt-4"
              >
                <Button className="w-full bg-[#1769ff] hover:bg-[#0056e0] text-white gap-2 font-bold">
                  <BehanceIcon className="w-5 h-5" />
                  View Behance Portfolio
                </Button>
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-extrabold text-foreground mb-4">Follow My Journey</h3>
            <p className="text-foreground/70 mb-6 font-medium">
              Stay updated with my latest volunteer experiences and community initiatives.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://facebook.com/neorxpro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/20 hover:bg-primary/30 text-primary rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/nestoranyanwu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/20 hover:bg-primary/30 text-primary rounded-full transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/nestorcyber"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/20 hover:bg-primary/30 text-primary rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/nestorcyber"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/20 hover:bg-primary/30 text-primary rounded-full transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
