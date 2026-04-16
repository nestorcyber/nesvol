"use client"

import Link from "next/link"
import { Linkedin, Twitter, Github, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white border-t-2 border-accent py-16 px-4 md:px-8 lg:px-16 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
          {/* Links Section */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Navigation</h3>
            <nav className="space-y-3">
              <Link href="/about" className="block text-white/80 hover:text-accent transition-colors text-sm">
                About
              </Link>
              <Link href="/volunteering" className="block text-white/80 hover:text-accent transition-colors text-sm">
                Volunteering
              </Link>
              <Link href="/experience" className="block text-white/80 hover:text-accent transition-colors text-sm">
                Work
              </Link>
              <Link href="/projects" className="block text-white/80 hover:text-accent transition-colors text-sm">
                Projects
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Connect</h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/2347016614444"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-accent transition-colors text-sm"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/nestoranyanwu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded hover:bg-accent/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="text-accent" />
                </a>
                <a
                  href="https://twitter.com/nestoranyanwu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded hover:bg-accent/20 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={18} className="text-accent" />
                </a>
                <a
                  href="https://github.com/nestorcyber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded hover:bg-accent/20 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} className="text-accent" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Nestor Anyanwu. Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  )
}
