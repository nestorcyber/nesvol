"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { usePathname, useRouter } from "next/navigation" // Imported usePathname and useRouter

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname() // Get current path
  const router = useRouter() // Get router

  const navItems = [
    { label: "Home", href: "/#home" }, // Updated to absolute paths with hash
    { label: "Experiences", href: "/experiences" }, // Pointing to the new experiences page
    { label: "About", href: "/#about" }, // Updated to absolute paths with hash
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const scrollToSection = (href: string) => {
    setIsOpen(false)

    if (href.startsWith("/#")) {
      // It's a hash link to the home page
      const elementId = href.replace("/#", "")
      if (pathname === "/") {
        const element = document.getElementById(elementId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        router.push(href)
      }
    } else {
      // It's a normal page link
      router.push(href)
    }
  }

  return (
    <>
      {/* Header - Fixed at top */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 px-4 md:px-8 lg:px-16 transition-all duration-300 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-6">
          {/* Logo on the left */}
          <div
            onClick={() => router.push("/")}
            className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center cursor-pointer"
          >
            <span className="text-white font-black text-xl">NA</span>
          </div>

          {/* Navigation on the right with glassmorphism container - desktop only */}
          <div className="hidden md:flex items-center gap-8 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full px-8 py-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors font-bold text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Overlay - behind drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Side Drawer - slides in from left, covers 80% of screen */}
      <div
        className={`fixed top-0 left-0 h-screen w-4/5 max-w-xs bg-background z-50 transition-transform duration-300 ease-in-out transform overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div
            onClick={() => router.push("/")}
            className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center cursor-pointer"
          >
            <span className="text-white font-black text-xl">NA</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu items */}
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-4 py-3 rounded-lg text-foreground hover:bg-white/10 transition-colors font-bold text-sm"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}
