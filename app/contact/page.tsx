"use client"

import Footer from "@/components/footer"
import { Mail, MessageCircle, Linkedin, Twitter, Github, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FormEvent, useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // In a real application, you would send this to a backend API
      console.log("Form submitted:", formData)
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500))
      
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-slate-600 font-medium max-w-2xl">
              I&apos;d love to hear from you. Whether you have a project in mind, want to collaborate, or just want to say hello—feel free to reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Methods</h2>
              
              <div className="space-y-6">
                {/* Email */}
                <a
                  href="mailto:nestoranyanwu@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
                >
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Mail size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Email</h3>
                    <p className="text-slate-600 break-all">nestoranyanwu@gmail.com</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/2347016614444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
                >
                  <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                    <MessageCircle size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">WhatsApp</h3>
                    <p className="text-slate-600">+234 701 661 4444</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/nestoranyanwu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
                >
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Linkedin size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">LinkedIn</h3>
                    <p className="text-slate-600">linkedin.com/in/nestoranyanwu</p>
                  </div>
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com/nestoranyanwu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
                >
                  <div className="p-3 bg-sky-100 rounded-lg group-hover:bg-sky-200 transition-colors">
                    <Twitter size={24} className="text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Twitter/X</h3>
                    <p className="text-slate-600">@nestoranyanwu</p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/nestorcyber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
                >
                  <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors">
                    <Github size={24} className="text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">GitHub</h3>
                    <p className="text-slate-600">github.com/nestorcyber</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-700 font-semibold">Message sent successfully! I&apos;ll get back to you soon.</p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 font-semibold">There was an error sending your message. Please try again.</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send size={18} />}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
