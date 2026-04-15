"use client"

import Link from "next/link"
import { Mail, Linkedin, Twitter, Github, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Links Section */}
          <div>
            <h3 className="font-bold text-sm mb-4 text-foreground">Navigation</h3>
            <nav className="space-y-2">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/experience" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Work
              </Link>
              <Link href="/projects" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/volunteering" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Volunteering
              </Link>
              <Link href="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-sm mb-4 text-foreground">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:nestoranyanwu@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={16} />
                Email
              </a>
              <a
                href="https://wa.me/2347016614444"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-sm mb-4 text-foreground">Social</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/nestoranyanwu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-muted-foreground hover:text-foreground" />
              </a>
              <a
                href="https://twitter.com/nestoranyanwu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-muted-foreground hover:text-foreground" />
              </a>
              <a
                href="https://github.com/nestorcyber"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} className="text-muted-foreground hover:text-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground font-bold">
            Built with passion to share stories of service and impact.
          </p>
        </div>
      </div>
    </footer>
  )
}
