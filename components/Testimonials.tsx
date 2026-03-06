'use client'

import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Aarav Singh',
    country: 'Canada',
    university: 'University of Toronto',
    program: 'Computer Science',
    image: '👨‍🎓',
    text: 'Unitrans helped me secure admission at UofT and guided me through the entire visa process. Their team was incredibly supportive throughout my journey.',
  },
  {
    name: 'Priya Sharma',
    country: 'United Kingdom',
    university: 'University of Oxford',
    program: 'Business Administration',
    image: '👩‍🎓',
    text: 'The scholarship guidance was exceptional. I received a partial scholarship that reduced my tuition significantly. Highly recommended!',
  },
  {
    name: 'David Kipchoge',
    country: 'Germany',
    university: 'Technical University of Munich',
    program: 'Engineering',
    image: '👨‍🎓',
    text: 'Best decision to use Unitrans services. They made the entire process from application to visa approval smooth and hassle-free.',
  },
  {
    name: 'Emma Wilson',
    country: 'Australia',
    university: 'University of Melbourne',
    program: 'Medicine',
    image: '👩‍🎓',
    text: 'Their IELTS preparation program was amazing. I improved my scores significantly and got accepted into my dream university.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
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
            Student Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Real stories from students who achieved their dreams with Unitrans
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-lg p-8 sm:p-12"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg sm:text-xl text-foreground mb-8 italic leading-relaxed">
              "{testimonials[current].text}"
            </p>

            {/* Student Info */}
            <div className="flex items-center gap-4 pt-6 border-t border-border">
              <div className="text-4xl">{testimonials[current].image}</div>
              <div>
                <p className="font-bold text-foreground">{testimonials[current].name}</p>
                <p className="text-sm text-foreground/60">
                  {testimonials[current].program} • {testimonials[current].university}
                </p>
                <p className="text-sm text-accent font-semibold">{testimonials[current].country}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition ${
                    i === current ? 'bg-primary w-8' : 'bg-border'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
