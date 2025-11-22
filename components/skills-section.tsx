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
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 mb-4">Skills & Strengths</h2>
          <p className="text-xl text-slate-600 font-medium">
            Developed through volunteering experiences and community engagement
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mainSkills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                className={`${skill.bgColor} rounded-[2rem] p-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-105 cursor-default group`}
              >
                <div
                  className={`w-20 h-20 ${skill.iconBg} rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20`}
                >
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{skill.name}</h3>
              </div>
            )
          })}
        </div>

        <div className="bg-slate-50 rounded-[2.5rem] p-10 md:p-12 border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center md:text-left tracking-tight">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 bg-white text-slate-700 rounded-full text-base font-semibold shadow-sm border border-slate-200 hover:border-blue-400 hover:text-blue-600 hover:shadow-md transition-all cursor-default hover:-translate-y-0.5"
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
