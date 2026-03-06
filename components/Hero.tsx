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
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/50 to-background/70" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 right-4 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-blob" />
      <div className="absolute bottom-10 left-4 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-blob animation-delay-2000" />

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
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight"
          variants={itemVariants}
        >
          Study Abroad Made <span className="text-primary">Simple</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed px-2"
          variants={itemVariants}
        >
          Get expert guidance for university admissions, student visas, scholarships, and travel preparation. We've helped 1200+ students achieve their dreams abroad.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
          variants={itemVariants}
        >
          <button 
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeZU6Pl82NN9ZOIrQgHshdBj-G3SEB7T1N64PHWfyxT4SSJ7Q/viewform', '_blank')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 group"
          >
            Book Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
          <Link href="/destinations" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition border border-border flex items-center justify-center">
            Explore Study Destinations
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto px-4"
          variants={itemVariants}
        >
          {[
            { value: '1200+', label: 'Students Placed' },
            { value: '95%', label: 'Visa Success Rate' },
            { value: '10+', label: 'Partner Countries' },
            { value: '50+', label: 'Partner Universities' },
          ].map((stat) => (
            <div key={stat.label} className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-3 sm:p-4">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-xs sm:text-sm text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
