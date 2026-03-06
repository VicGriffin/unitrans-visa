'use client'

import Link from 'next/link'
import { ArrowRight, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 pb-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5 -z-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-blob" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-blob animation-delay-2000" />

      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div 
          className="flex items-center justify-center gap-2 mb-6"
          variants={itemVariants}
        >
          <Globe className="w-5 h-5 text-primary" />
          <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-1 rounded-full">
            Your Global Education Partner
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight"
          variants={itemVariants}
        >
          Study Abroad Made <span className="text-primary">Simple</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Get expert guidance for university admissions, student visas, scholarships, and travel preparation. We've helped 1200+ students achieve their dreams abroad.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={itemVariants}
        >
          <Link href="/contact" className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-2 group">
            Book Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </Link>
          <Link href="/destinations" className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition border border-border">
            Explore Study Destinations
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {[
            { value: '1200+', label: 'Students Placed' },
            { value: '95%', label: 'Visa Success Rate' },
            { value: '10+', label: 'Partner Countries' },
            { value: '50+', label: 'Partner Universities' },
          ].map((stat) => (
            <div key={stat.label} className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
              <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-xs sm:text-sm text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
