"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Instagram, Mail, Phone, ArrowUpRight } from "lucide-react"
import { FaLinkedin } from "react-icons/fa"
import Wrapper from "../Wrapper" // adjust this path if your Wrapper is located elsewhere

function Contactus() {
    const TO_EMAIL = "example@gmail.com"

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [sending, setSending] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!TO_EMAIL) return

        const safeSubject = encodeURIComponent(subject || "New message from contact form")
        const bodyLines = [`Name: ${name}`, `Email: ${email}`, "", message]
        const safeBody = encodeURIComponent(bodyLines.join("\n"))

        const mailto = `mailto:${TO_EMAIL}?subject=${safeSubject}&body=${safeBody}`

        setSending(true)
        try {
            window.location.href = mailto
        } finally {
            setTimeout(() => setSending(false), 500)
        }
    }

    // Awwwards-style easing curve
    const customEase = [0.16, 1, 0.3, 1]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 1, ease: customEase } 
        }
    }

    return (
        <section id="contact" className="relative w-full bg-zinc-950 text-zinc-100 overflow-hidden pt-24 md:pt-32">
            <Wrapper>
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
                    
                    {/* Massive Header */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="mb-16 md:mb-24"
                    >
                        <motion.h2 variants={itemVariants as any} className="text-[12vw] md:text-[8vw] font-bold leading-[0.85] tracking-tighter uppercase text-white mb-6">
                            Let's Talk.
                        </motion.h2>
                        <motion.p variants={itemVariants as any} className="font-sans text-zinc-400 max-w-xl text-base md:text-lg">
                            Have a question or want to start a collaboration? Drop us an email or fill out the form below. We'd love to hear from you.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 mb-24">
                        
                        {/* Left Column: Contact Info & Socials */}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="flex flex-col gap-12"
                        >
                            {/* Direct Contact */}
                            <div className="flex flex-col gap-6">
                                <motion.div variants={itemVariants as any} className="flex flex-col gap-2">
                                    <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Email</span>
                                    <a href={`mailto:${TO_EMAIL}`} className="text-xl md:text-2xl font-medium hover:text-[#8C1D20] transition-colors flex items-center gap-2 group">
                                        example@gmail.com
                                        <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                                    </a>
                                </motion.div>

                                <motion.div variants={itemVariants as any} className="flex flex-col gap-2">
                                    <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Phone</span>
                                    <a href="tel:+00000000000" className="text-xl md:text-2xl font-medium hover:text-[#8C1D20] transition-colors flex items-center gap-2 group">
                                        +00 0000000000
                                        <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                                    </a>
                                </motion.div>
                            </div>

                            {/* Socials */}
                            <motion.div variants={itemVariants as any} className="flex flex-col gap-4 pt-8 border-t border-zinc-800">
                                <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Follow Us</span>
                                <div className="flex items-center gap-4">
                                    <a href="#" className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                                        <FaLinkedin className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Column: Minimalist Form */}
                        <motion.form 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            onSubmit={handleSubmit} 
                            className="flex flex-col gap-8 font-sans w-full"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                <motion.div variants={itemVariants as any} className="relative group">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder=" "
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="peer w-full bg-transparent border-0 border-b border-zinc-700 px-0 py-3 text-white placeholder-transparent outline-none focus:ring-0 focus:border-white transition-colors"
                                    />
                                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs font-medium text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white uppercase tracking-wider">
                                        Your Name
                                    </label>
                                </motion.div>

                                <motion.div variants={itemVariants as any} className="relative group">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder=" "
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="peer w-full bg-transparent border-0 border-b border-zinc-700 px-0 py-3 text-white placeholder-transparent outline-none focus:ring-0 focus:border-white transition-colors"
                                    />
                                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs font-medium text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white uppercase tracking-wider">
                                        Email Address
                                    </label>
                                </motion.div>
                            </div>

                            <motion.div variants={itemVariants as any} className="relative group mt-4">
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    required
                                    placeholder=" "
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    className="peer w-full bg-transparent border-0 border-b border-zinc-700 px-0 py-3 text-white placeholder-transparent outline-none focus:ring-0 focus:border-white transition-colors"
                                />
                                <label htmlFor="subject" className="absolute left-0 -top-3.5 text-xs font-medium text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white uppercase tracking-wider">
                                    Subject
                                </label>
                            </motion.div>

                            <motion.div variants={itemVariants as any} className="relative group mt-4">
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder=" "
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="peer w-full bg-transparent border-0 border-b border-zinc-700 px-0 py-3 text-white placeholder-transparent outline-none focus:ring-0 focus:border-white transition-colors resize-none"
                                />
                                <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs font-medium text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white uppercase tracking-wider">
                                    Your Message
                                </label>
                            </motion.div>

                            <motion.div variants={itemVariants as any} className="pt-6">
                                <button
                                    type="submit"
                                    disabled={sending || !name || !email || !subject || !message}
                                    className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-white text-zinc-950 font-sans font-medium overflow-hidden transition-all hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
                                >
                                    <span className="relative z-10">{sending ? "Opening Mail App…" : "Send Message"}</span>
                                    {!sending && (
                                        <ArrowUpRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    )}
                                </button>
                            </motion.div>
                        </motion.form>
                    </div>
                </div>
            </Wrapper>

            {/* Footer Bottom Line */}
            <div className="border-t border-zinc-800 py-8 px-6 md:px-12 lg:px-24">
                <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-xs uppercase tracking-widest text-zinc-500">
                    <p>© {new Date().getFullYear()} Euro International. All Rights Reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contactus