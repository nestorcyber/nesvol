import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Navigation from "@/components/navigation"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Nestor Anyanwu – Volunteer, Community Builder & Tech Enthusiast",
    template: "%s | Nestor Anyanwu",
  },
  description:
    "Discover the volunteering journey of Nestor Anyanwu — a passionate community builder, event organizer, and tech enthusiast making impact through service at DevFest, AWS, GIDA, and more.",
  keywords: [
    "Nestor Anyanwu",
    "volunteer",
    "community builder",
    "tech enthusiast",
    "DevFest Owerri",
    "AWS Community",
    "GIDA Skillup",
    "event organizer",
    "Nigeria tech",
    "Google Developer Groups",
    "GDG Owerri",
    "media team",
    "design team",
  ],
  authors: [{ name: "Nestor Anyanwu" }],
  creator: "Nestor Anyanwu",
  publisher: "Nestor Anyanwu",
  metadataBase: new URL("https://nestor-anyanwu.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://nestor-anyanwu.vercel.app",
    siteName: "Nestor Anyanwu Portfolio",
    title: "Nestor Anyanwu – Volunteer, Community Builder & Tech Enthusiast",
    description:
      "Discover the volunteering journey of Nestor Anyanwu — stories of creativity, service, and community impact at DevFest, AWS, GIDA, and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nestor Anyanwu - Volunteer & Community Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nestor Anyanwu – Volunteer & Community Builder",
    description:
      "Discover the volunteering journey of Nestor Anyanwu — stories of creativity, service, and community impact.",
    images: ["/og-image.jpg"],
    creator: "@nestoranyanwu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nestor Anyanwu",
              url: "https://nestor-anyanwu.vercel.app",
              jobTitle: "Volunteer & Community Builder",
              description:
                "Passionate community builder, event organizer, and tech enthusiast making impact through service.",
              sameAs: [
                "https://twitter.com/nestoranyanwu",
                "https://linkedin.com/in/nestoranyanwu",
                "https://github.com/nestoranyanwu",
              ],
              knowsAbout: ["Community Building", "Event Organization", "Media Production", "Design", "Technology"],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
