"use client"

import { useState } from "react"
import { Menu, X, Search, Globe, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DrawerSection {
  title: string
  items: string[]
}

const drawerSections: DrawerSection[] = [
  {
    title: "Learn",
    items: [
      "Courses",
      "Career & Skill Tracks",
      "Technologies",
      "Popular Topics",
      "AI Native",
    ],
  },
  {
    title: "Apply",
    items: [
      "Real-world Projects",
      "Code-Alongs",
      "DataLab",
      "Sandbox",
      "Competitions",
    ],
  },
  {
    title: "AI Upskilling",
    items: ["AI for Business"],
  },
]

export default function HeaderDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background border-b border-border">
        <div className="px-4 md:px-8 lg:px-16 py-4 max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - Left */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-black text-lg">NA</span>
            </div>
            <span className="hidden sm:inline font-bold text-foreground text-sm">
              Nestor
            </span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <button
              aria-label="Search"
              className="p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
            >
              <Search size={20} />
            </button>

            {/* Language Selector */}
            <button
              aria-label="Language selector"
              className="hidden sm:flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-foreground text-sm font-medium"
            >
              <Globe size={16} />
              <span>EN</span>
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={toggleDrawer}
              aria-label="Toggle menu"
              className="p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
            >
              {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 transition-opacity duration-300"
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-full max-w-xs bg-background z-40 transition-transform duration-300 ease-in-out transform overflow-y-auto ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20">
          {/* Close Button */}
          <button
            onClick={closeDrawer}
            aria-label="Close menu"
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <X size={24} />
          </button>

          {/* Drawer Content - Scrollable */}
          <div className="flex-1 overflow-y-auto px-4 py-8">
            {drawerSections.map((section) => (
              <div key={section.title} className="mb-8">
                {/* Section Title */}
                <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
                  {section.title}
                </h3>

                {/* Menu Items */}
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item}>
                      <button className="w-full flex items-center justify-between text-foreground hover:text-primary transition-colors font-medium text-sm group">
                        <span>{item}</span>
                        <ChevronRight
                          size={16}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Actions - Sticky */}
          <div className="border-t border-border px-4 py-6 space-y-3 bg-background">
            <Button
              variant="outline"
              size="lg"
              className="w-full rounded-full font-bold"
            >
              Log in
            </Button>
            <Button size="lg" className="w-full rounded-full font-bold">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
