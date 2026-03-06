'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, DollarSign, GraduationCap } from 'lucide-react'

const destinations = [
  {
    name: 'Canada',
    flag: '🇨🇦',
    tuitionRange: '$15,000 - $35,000/year',
    popularPrograms: ['Engineering', 'Business', 'IT'],
    id: 'canada'
  },
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    tuitionRange: '$20,000 - $40,000/year',
    popularPrograms: ['Medicine', 'Law', 'Arts'],
    id: 'uk'
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    tuitionRange: '$0 - $5,000/year',
    popularPrograms: ['Engineering', 'Science', 'Research'],
    id: 'germany'
  },
  {
    name: 'United States',
    flag: '🇺🇸',
    tuitionRange: '$25,000 - $60,000/year',
    popularPrograms: ['Computer Science', 'MBA', 'Healthcare'],
    id: 'usa'
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    tuitionRange: '$18,000 - $45,000/year',
    popularPrograms: ['Marine Biology', 'Tourism', 'Agriculture'],
    id: 'australia'
  },
  {
    name: 'UAE',
    flag: '🇦🇪',
    tuitionRange: '$10,000 - $30,000/year',
    popularPrograms: ['Business', 'Engineering', 'Hospitality'],
    id: 'uae'
  }
]

export default function StudyDestinationsPreview() {
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
    <section id="destinations-preview" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
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
            Popular <span className="text-primary">Study Destinations</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Explore our partner universities across the globe
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
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Country Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{destination.flag}</span>
                  <h3 className="text-xl font-semibold text-foreground">{destination.name}</h3>
                </div>
              </div>

              {/* Tuition Range */}
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/70">{destination.tuitionRange}</span>
              </div>

              {/* Popular Programs */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Popular Programs:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {destination.popularPrograms.map((program) => (
                    <span 
                      key={program}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </div>

              {/* Apply Button */}
              <Link 
                href={`/destinations#${destination.id}`}
                className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition text-center block"
              >
                Apply Now
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link 
            href="/destinations"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition border border-border"
          >
            View All Destinations
            <MapPin className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
