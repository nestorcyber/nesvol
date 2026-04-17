import Footer from "@/components/footer"
import { Metadata } from "next"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Work Experience",
  description: "Explore Nestor&apos;s professional experience in technology, design, and community leadership.",
}

const workExperience = [
  {
    title: "Director Of Information Communication Technology",
    organization: "NACOS Federal University of Technology Owerri",
    duration: "Dec 2025 - Present",
    description: "Leading digital strategy and technological infrastructure for the Nigeria Association of Computing Students chapter at FUTO, overseeing digital initiatives and community engagement.",
    details: ["ICT Strategy & Management", "Community Engagement", "Digital Infrastructure"],
  },
  {
    title: "Director Of Information Communication Technology",
    organization: "Nigeria Association of Computing Students (NACOS National)",
    duration: "Dec 2025 - Present",
    description: "Directing information communication technology initiatives for NACOS National, supporting thousands of computing students across Nigeria.",
    details: ["National ICT Strategy", "Technology Leadership", "Community Support"],
  },
  {
    title: "Graphic Designer",
    organization: "GDG Owerri (Google Developer Group)",
    duration: "Sep 2024 - Present",
    description: "Creating compelling visual designs and brand assets for Google Developer Group initiatives, helping shape the visual identity of community events and communications.",
    details: ["Visual Design", "Brand Identity", "Event Graphics"],
  },
  {
    title: "Information Technology Consultant",
    organization: "Nobelton Consults",
    duration: "May 2024 - Present",
    description: "Providing strategic IT consulting services, helping businesses navigate technology challenges and implement effective technological solutions.",
    details: ["IT Strategy", "System Implementation", "Technical Advisory"],
  },
  {
    title: "Campus Ambassador",
    organization: "Cowrywise",
    duration: "Dec 2025 - Present",
    description: "Promoting financial technology and investment literacy among students, helping young Nigerians develop better financial habits through Cowrywise platform.",
    details: ["Financial Literacy", "Community Outreach", "Brand Advocacy"],
  },
  {
    title: "Progress Tracking Lead",
    organization: "The Investment Society FUTO",
    duration: "Feb 2026 - Present",
    description: "Leading progress tracking initiatives for The Investment Society at FUTO, helping students understand and engage with investment opportunities.",
    details: ["Progress Management", "Student Engagement", "Financial Education"],
  },
  {
    title: "Graphic Designer",
    organization: "Nobelton Consults",
    duration: "Jan 2023 - Feb 2024",
    description: "Designed visual content and branding materials, creating compelling graphics for marketing and communications.",
    details: ["Graphic Design", "Visual Content", "Brand Development"],
  },
]

const memberships = [
  {
    title: "Member",
    organization: "AAAI, Nigeria Chapter (Association for the Advancement of Artificial Intelligence)",
    duration: "Feb 2026 - Present",
    description: "Active member of Africa&apos;s largest AI advocacy organization, contributing to AI advancement and research.",
  },
  {
    title: "Member",
    organization: "Internet Society Nigeria Chapter",
    duration: "Feb 2026 - Present",
    description: "Supporting internet accessibility, digital rights, and technological infrastructure development in Nigeria.",
  },
  {
    title: "Student Member",
    organization: "Fintech Association Of Nigeria",
    duration: "Feb 2026 - Present",
    description: "Engaged in fintech innovation and digital financial services development.",
  },
  {
    title: "Member",
    organization: "Nigeria Association of Computing Students (NACOS National)",
    duration: "Feb 2026 - Present",
    description: "Contributing to computing education and professional development initiatives.",
  },
]

export default function ExperiencePage() {
  return (
    <>
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-2xl md:text-3xl font-sans font-bold text-primary mb-6 uppercase tracking-wide">
              Professional Experience
            </h1>
            <p className="text-sm md:text-base text-foreground font-medium max-w-2xl">
              A timeline of leadership roles, professional experience, and community contributions.
            </p>
          </div>

          {/* Work Experience Section */}
          <section className="mb-20">
            <h2 className="text-base font-sans font-bold text-primary mb-10 uppercase tracking-wide">Current & Recent Roles</h2>
            <div className="space-y-6">
              {workExperience.map((exp, idx) => (
                <Card
                  key={idx}
                  className="p-6 md:p-8 border border-border hover:border-accent transition-colors duration-300 bg-secondary"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-primary mb-2">{exp.title}</h3>
                      <p className="text-lg text-foreground font-semibold mb-1">{exp.organization}</p>
                      <p className="text-sm text-muted-foreground font-medium">{exp.duration}</p>
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.details.map((detail, i) => (
                      <span key={i} className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                        {detail}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Memberships Section */}
          <section>
            <h2 className="text-2xl font-serif font-600 text-primary mb-10">Professional Memberships</h2>
            <div className="space-y-6">
              {memberships.map((member, idx) => (
                <Card
                  key={idx}
                  className="p-6 md:p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.title}</h3>
                      <p className="text-lg text-slate-600 font-semibold mb-1">{member.organization}</p>
                      <p className="text-sm text-slate-500 font-medium">{member.duration}</p>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{member.description}</p>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
