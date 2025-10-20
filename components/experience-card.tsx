"use client"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Calendar, Briefcase, ChevronLeft, ChevronRight } from "lucide-react"

interface Experience {
  id: number
  title: string
  organization: string
  role: string
  date: string
  description: string
  images: string[]
}

interface ExperienceCardProps {
  experience: Experience
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % experience.images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [experience.images.length])

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index)
  }

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + experience.images.length) % experience.images.length)
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % experience.images.length)
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-80 bg-muted overflow-hidden group">
        <img
          src={experience.images[currentImageIndex] || "/placeholder.svg"}
          alt={experience.title}
          className="w-full h-full object-cover transition-transform duration-300"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
          <h3 className="text-2xl font-bold text-white mb-1">{experience.title}</h3>
          <p className="text-white/90 text-sm">{experience.organization}</p>
        </div>

        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute top-4 right-4 flex gap-2">
          {experience.images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="p-6">
        {/* Date and Role with icons */}
        <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{experience.date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Briefcase className="w-4 h-4 text-primary" />
            <span>{experience.role}</span>
          </div>
        </div>

        {/* Story section */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Story</h4>
          <p className="text-sm text-foreground/80 leading-relaxed">{experience.description}</p>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {experience.images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all border-2 ${
                index === currentImageIndex
                  ? "border-primary ring-2 ring-primary/50"
                  : "border-transparent hover:border-primary/50"
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${experience.title} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </Card>
  )
}
