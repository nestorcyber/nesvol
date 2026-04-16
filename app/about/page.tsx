import Footer from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Nestor",
  description: "Learn about Nestor Anyanwu - a passionate tech advocate, designer, and community builder.",
}

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-background pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-4 md:px-8">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-3xl md:text-4xl font-serif font-600 text-primary mb-6 leading-tight">
              About Nestor
            </h1>
            <p className="text-lg md:text-lg text-foreground font-medium leading-relaxed">
              A passionate tech advocate, ingenious designer, and community builder dedicated to creating meaningful impact through service, innovation, and leadership.
            </p>
          </div>

          {/* Main Content - Editorial Style */}
          <div className="space-y-8 text-foreground max-w-none">
            <p className="text-lg leading-relaxed mb-8">
              As a highly innovative, detail-oriented, and tech-savvy professional, I bring a unique blend of creativity, strategic thinking, and hands-on expertise to every endeavor. My journey has been defined by a commitment to excellence, community impact, and continuous growth in the rapidly evolving technology landscape.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              With over 4 years of professional experience across multiple domains—from graphic design to virtual assistance, from IT consulting to community leadership—I have developed a comprehensive understanding of how technology, design, and human connection intersect. My professional foundation is built on a philosophy that technology should serve humanity, and that design should communicate with clarity and purpose.
            </p>

            <h2 className="text-2xl font-serif font-600 text-primary mt-12 mb-6">Professional Expertise</h2>

            <p className="text-lg leading-relaxed mb-8">
              My career spans multiple disciplines. As a Graphic Designer, I&apos;ve collaborated with organizations like Nobelton Consults and GDG Owerri to create compelling visual narratives. As a Virtual Assistant, I&apos;ve supported entrepreneurs and organizations with administrative excellence and digital coordination. As an IT Consultant at Nobelton Consults, I&apos;ve helped businesses navigate technological challenges and implement strategic solutions.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Beyond individual roles, I serve as the Director of Information Communication Technology for both the Nigeria Association of Computing Students (NACOS) National and NACOS Federal University of Technology Owerri Chapter. In these leadership positions, I oversee digital strategy, community engagement, and technological infrastructure that supports thousands of students and professionals.
            </p>

            <h2 className="text-2xl font-serif font-600 text-primary mt-12 mb-6">Community & Leadership</h2>

            <p className="text-lg leading-relaxed mb-8">
              My passion for community building is evident through my active involvement with multiple organizations. I serve as Graphic Design Lead for GDG on Campus at FUTO, where I help shape the visual identity and experience of Google Developer Group initiatives. As a member of the Internet Society Nigeria Chapter, I advocate for internet accessibility and digital rights. Through the Fintech Association of Nigeria and The Investment Society FUTO, I contribute to financial literacy and entrepreneurial development.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              I also serve as Campus Ambassador for Cowrywise, a financial technology platform, helping young Nigerians develop better financial habits and investment skills. These roles reflect my belief that technology and financial literacy are keys to personal and national development.
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mt-12 mb-6">Education & Certifications</h2>

            <p className="text-lg leading-relaxed mb-8">
              I am currently pursuing a Bachelor of Technology in Computer Science at the Federal University of Technology Owerri (FUTO), where I&apos;ve distinguished myself as a leader in the tech community. My education is complemented by numerous professional certifications including:
            </p>

            <ul className="space-y-3 mb-8 text-lg leading-relaxed">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Certified Virtual Assistant (ALX Nigeria)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Career Essentials in Generative AI (Microsoft & LinkedIn Learning)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>AI Workplace Proficiency Certification (Superhuman AI)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Introduction to Prompt Engineering (Simplilearn)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Introduction to Figma Basics (Simplilearn)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>McKinsey Forward Program (McKinsey & Company)</span>
              </li>
            </ul>

            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mt-12 mb-6">Technical Skills & Specializations</h2>

            <p className="text-lg leading-relaxed mb-8">
              My technical skill set encompasses:
            </p>

            <ul className="space-y-3 mb-8 text-lg leading-relaxed">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Design & Creative:</strong> Graphic Design, Figma, Visual Communication, Brand Identity</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Technology:</strong> IT Consultation, Information Communication Technology, Tech Stack Management</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>AI & Emerging Tech:</strong> Prompt Engineering, Generative AI, AI Workplace Applications</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Administrative:</strong> Virtual Assistance, Project Coordination, Data Management</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Leadership:</strong> Team Management, Community Building, Strategic Planning</span>
              </li>
            </ul>

            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mt-12 mb-6">Vision & Impact</h2>

            <p className="text-lg leading-relaxed mb-8">
              My vision is to bridge the gap between technology and human potential. I believe that through thoughtful design, strategic communication, and genuine community engagement, we can create lasting positive change. Whether through organizing transformative tech events like DevFest Owerri, contributing to open-source communities, or mentoring young professionals, I&apos;m committed to leaving a legacy of impact.
            </p>

            <p className="text-lg leading-relaxed">
              Every project I undertake, every community I serve, and every person I connect with is part of a larger mission: to empower individuals and organizations to leverage technology responsibly and creatively. This is the essence of who I am and what drives my professional journey.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
