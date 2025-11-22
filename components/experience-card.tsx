"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Briefcase, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

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
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % experience.images.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [experience.images.length, isHovering])

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
    <Card className="overflow-hidden border-0 shadow-lg bg-white h-full flex flex-col">
      {/* Hero Image Carousel */}
      <div
        className="relative h-64 md:h-72 w-full overflow-hidden group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img
          src={experience.images[currentImageIndex] || "/placeholder.svg"}
          alt={experience.title}
          className="h-full w-full object-cover object-top transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Overlay Text */}
        <div className="absolute bottom-0 left-0 p-6 text-white w-full">
          <h3 className="text-3xl font-bold mb-1 leading-tight">{experience.title}</h3>
          <p className="text-blue-200 font-medium">{experience.organization}</p>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute top-4 right-4 flex gap-1.5">
          {experience.images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation()
                handleThumbnailClick(index)
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all shadow-sm",
                index === currentImageIndex ? "bg-white w-4" : "bg-white/50 hover:bg-white/80",
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            handlePrevious()
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation()
            handleNext()
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <CardContent className="p-6 flex-1 flex flex-col">
        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-teal-500" />
            <span>{experience.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-blue-500" />
            <span>{experience.role}</span>
          </div>
        </div>

        {/* Story */}
        <div className="mb-6 flex-1">
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Story</h4>
          <p className="text-slate-700 leading-relaxed font-normal">{experience.description}</p>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-2 mt-auto">
          {experience.images.map((img, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={cn(
                "relative aspect-square rounded-lg overflow-hidden border-2 transition-all",
                index === currentImageIndex
                  ? "border-teal-500 ring-2 ring-teal-500/20"
                  : "border-transparent opacity-70 hover:opacity-100",
              )}
            >
              <img
                src={img || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                className="h-full w-full object-cover object-top"
              />
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
