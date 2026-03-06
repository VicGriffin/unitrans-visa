'use client'

import { motion } from 'framer-motion'
import { Phone, BookMarked, FileCheck, Stamp, Plane } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Book Free Consultation',
    description: 'Connect with our expert counselor to understand your goals and options.',
    icon: Phone,
  },
  {
    number: 2,
    title: 'Choose a University',
    description: 'Explore and select universities that match your profile and aspirations.',
    icon: BookMarked,
  },
  {
    number: 3,
    title: 'Submit Application',
    description: 'We guide you through the complete application and documentation process.',
    icon: FileCheck,
  },
  {
    number: 4,
    title: 'Visa Processing',
    description: 'Expert support with visa applications and interview preparation.',
    icon: Stamp,
  },
  {
    number: 5,
    title: 'Fly Abroad',
    description: 'Pre-departure guidance and support to start your new journey.',
    icon: Plane,
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            A simple 5-step process to get you studying abroad
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-30 -z-10" />

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  className="relative flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 mb-6">
                    <div className="w-24 h-24 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg">
                      <div className="text-center">
                        <Icon className="w-8 h-8 mx-auto mb-1" />
                        <span className="text-lg font-bold">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-foreground/60 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
