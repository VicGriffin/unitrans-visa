'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const destinations = [
  {
    country: 'Canada',
    tuition: '$15,000 - $35,000',
    programs: 'Engineering, Business, Health Sciences',
    emoji: '🇨🇦',
  },
  {
    country: 'United Kingdom',
    tuition: '$18,000 - $40,000',
    programs: 'Law, Medicine, Business',
    emoji: '🇬🇧',
  },
  {
    country: 'Germany',
    tuition: '$0 - $20,000',
    programs: 'Engineering, IT, Business',
    emoji: '🇩🇪',
  },
  {
    country: 'United States',
    tuition: '$25,000 - $60,000',
    programs: 'All Disciplines',
    emoji: '🇺🇸',
  },
  {
    country: 'Australia',
    tuition: '$15,000 - $45,000',
    programs: 'Engineering, Agriculture, Health',
    emoji: '🇦🇺',
  },
  {
    country: 'United Arab Emirates',
    tuition: '$12,000 - $32,000',
    programs: 'Business, Technology, Engineering',
    emoji: '🇦🇪',
  },
]

export default function Destinations() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="destinations" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Popular Study <span className="text-primary">Destinations</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Explore top universities and education systems worldwide
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {destinations.map((dest) => (
            <motion.div
              key={dest.country}
              className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-lg p-8 hover:border-primary hover:shadow-lg transition group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="text-5xl mb-4">{dest.emoji}</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{dest.country}</h3>
              
              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-sm text-foreground/60 font-semibold mb-1">Average Tuition</p>
                  <p className="text-lg font-semibold text-accent">{dest.tuition}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 font-semibold mb-1">Popular Programs</p>
                  <p className="text-foreground">{dest.programs}</p>
                </div>
              </div>

              <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 group">
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
