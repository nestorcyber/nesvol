import Image from "next/image"
import { ReactNode } from "react"

interface NewsCardProps {
  image: string
  title: string
  description: string
  href: string
  children?: ReactNode
}

export default function NewsCard({ image, title, description, href }: NewsCardProps) {
  const isExternal = href.startsWith("http")
  const linkProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {}

  return (
    <div className="group cursor-pointer">
      {/* Hero Image - Clickable */}
      <a
        href={href}
        className="block overflow-hidden rounded-lg mb-6 hover:opacity-90 transition-opacity duration-300"
        {...linkProps}
      >
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </a>

      {/* Content */}
      <div className="space-y-4">
        {/* Headline - Clickable */}
        <a
          href={href}
          className="block hover:opacity-75 transition-opacity duration-300"
          {...linkProps}
        >
          <h3 className="text-3xl md:text-4xl font-sans font-bold text-primary group-hover:text-accent transition-colors duration-300 cursor-pointer">
            {title}
          </h3>
        </a>

        {/* Description - Clickable */}
        <a
          href={href}
          className="block hover:opacity-75 transition-opacity duration-300"
          {...linkProps}
        >
          <p className="text-lg text-foreground font-medium leading-relaxed group-hover:text-muted transition-colors duration-300 cursor-pointer">
            {description}
          </p>
        </a>

        {/* CTA Link */}
        <a
          href={href}
          className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300 font-bold text-base group/link"
          {...linkProps}
        >
          Learn More
          <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>
    </div>
  )
}
