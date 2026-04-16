import Image from "next/image"
import Footer from "@/components/footer"
import { experiences } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery - Volunteering & Community",
  description: "Visual collection of moments from volunteering experiences, events, and projects.",
}

export default function GalleryPage() {
  // Get all images from all experiences
  const allImages = experiences.flatMap((exp) =>
    (exp.images || []).map((img) => ({
      src: img,
      title: exp.title,
      date: exp.date,
    }))
  )

  return (
    <>
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-5xl font-sans font-bold text-primary mb-6">Gallery</h1>
            <p className="text-lg text-muted max-w-3xl leading-relaxed">
              A visual collection of moments from volunteering experiences, community events, and meaningful projects that shaped my journey.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allImages.map((image, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-lg bg-muted h-64">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-secondary font-bold text-sm">{image.title}</h3>
                  <p className="text-secondary/80 text-xs">{image.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
