'use client'

import { motion } from 'framer-motion'
import { GraduationCap, FileText, Banknote, BookOpen, Home, Plane } from 'lucide-react'

const services = [
  {
    icon: GraduationCap,
    title: 'University Admission Assistance',
    description: 'Expert guidance through the entire admission process with personalized application strategies.',
  },
  {
    icon: FileText,
    title: 'Student Visa Processing',
    description: 'Complete visa documentation support ensuring smooth processing and approval.',
  },
  {
    icon: Banknote,
    title: 'Scholarship Guidance',
    description: 'Help securing scholarships and financial aid opportunities worldwide.',
  },
  {
    icon: BookOpen,
    title: 'IELTS & Language Training',
    description: 'Intensive language preparation programs to achieve required test scores.',
  },
  {
    icon: Home,
    title: 'Student Accommodation Support',
    description: 'Assistance finding safe, affordable, and convenient student housing.',
  },
  {
    icon: Plane,
    title: 'Flight Booking Assistance',
    description: 'Support booking flights and managing travel logistics abroad.',
  },
]

export default function Services() {
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
    <section id="services" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Comprehensive support for every step of your study abroad journey
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-foreground/60">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
