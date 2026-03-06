'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail, Navigation as NavigationIcon, Car, Bus, Building } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/pexels-n-voitkevich-7235804.jpg"
            alt="Location background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/50 to-background/70" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Visit Our <span className="text-primary">Location</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find us at our conveniently located office in Nairobi
          </motion.p>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Address Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-foreground">Our Location</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Address</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Thika Road, Spur Mall, 2nd Floor S28<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Office Hours</h3>
                    <p className="text-foreground/70">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Getting Here</h3>
                    <p className="text-foreground/70">
                      Located on Thika Road, easily accessible by public transport and private vehicles. 
                      Ample parking available at Spur Mall.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button 
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeZU6Pl82NN9ZOIrQgHshdBj-G3SEB7T1N64PHWfyxT4SSJ7Q/viewform', '_blank')}
                >
                  Book Free Consultation
                </Button>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-muted/30 border border-border rounded-xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Interactive Map</h3>
                  <p className="text-foreground/60 mb-4">
                    Google Maps integration coming soon
                  </p>
                  <p className="text-sm text-foreground/50">
                    Thika Road, Spur Mall, 2nd Floor S28
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nearby Landmarks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Nearby <span className="text-primary">Landmarks</span>
            </h2>
            <p className="text-foreground/60 text-lg">Conveniently located near major landmarks</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Shopping Centers',
                description: 'Spur Mall offers various shopping and dining options',
                icon: '🛍️'
              },
              {
                title: 'Transport Access',
                description: 'Easy access to Thika Road highway and public transport',
                icon: '🚌'
              },
              {
                title: 'Educational Hub',
                description: 'Located near major educational institutions',
                icon: '🎓'
              }
            ].map((landmark, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{landmark.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{landmark.title}</h3>
                <p className="text-foreground/70 text-sm">{landmark.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
