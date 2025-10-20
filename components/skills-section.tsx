"use client"

import { Users, Handshake, Heart } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

export default function SkillsSection() {
  const mainSkills = [
    {
      name: "Leadership",
      icon: Users,
      bgColor: "bg-cyan-50",
      iconColor: "text-teal-500",
      iconBg: "bg-teal-500",
    },
    {
      name: "Communication",
      icon: WhatsAppIcon,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500",
    },
    {
      name: "Teamwork",
      icon: Handshake,
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
      iconBg: "bg-green-500",
    },
    {
      name: "Empathy",
      icon: Heart,
      bgColor: "bg-pink-50",
      iconColor: "text-pink-500",
      iconBg: "bg-pink-500",
    },
  ]

  const additionalSkills = [
    "Event Coordination",
    "Problem Solving",
    "Adaptability",
    "Emotional Intelligence",
    "Community Engagement",
    "Collaboration",
    "Creativity",
    "Active Listening",
    "Organization",
    "Conflict Resolution",
    "Time Management",
  ]

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Skills & Strengths</h2>
          <p className="text-lg text-muted-foreground">
            Developed through volunteering experiences and community engagement
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainSkills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                className={`${skill.bgColor} rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-transform hover:scale-105`}
              >
                <div className={`${skill.iconBg} rounded-full p-4 mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{skill.name}</h3>
              </div>
            )
          })}
        </div>

        {/* Additional Skills */}
        <div className="bg-background rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">Additional Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-muted text-foreground rounded-full text-sm font-medium hover:bg-muted/80 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
