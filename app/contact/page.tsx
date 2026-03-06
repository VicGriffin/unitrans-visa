'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/pexels-borisk-5964658.jpg"
            alt="Contact background"
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
            Contact <span className="text-primary">Us</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in touch with our expert team for personalized guidance
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-foreground">Get in Touch</h2>
              
              <div className="space-y-4 sm:space-y-6">
                {/* Phone Numbers */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">Mobile Numbers</h3>
                    <div className="space-y-1">
                      <a href="tel:+254736210172" className="text-foreground/70 hover:text-primary transition block text-sm sm:text-base">
                        +254 736 210 172
                      </a>
                      <a href="tel:+254781884631" className="text-foreground/70 hover:text-primary transition block text-sm sm:text-base">
                        +254 781 884 631
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">Email</h3>
                    <a href="mailto:unitransvisa@gmail.com" className="text-foreground/70 hover:text-primary transition block text-sm sm:text-base">
                      unitransvisa@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">Office Address</h3>
                    <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                      Thika Road, Spur Mall, 2nd Floor S28<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">Office Hours</h3>
                    <p className="text-foreground/70 text-sm sm:text-base">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 sm:mt-8 space-y-4">
                <Button 
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 text-sm"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeZU6Pl82NN9ZOIrQgHshdBj-G3SEB7T1N64PHWfyxT4SSJ7Q/viewform', '_blank')}
                >
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                  Book Free Consultation
                </Button>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <a 
                    href="tel:+254736210172"
                    className="px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-lg font-semibold hover:bg-accent transition flex items-center justify-center gap-2 text-center text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                  <a 
                    href="mailto:unitransvisa@gmail.com"
                    className="px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-lg font-semibold hover:bg-accent transition flex items-center justify-center gap-2 text-center text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    Email Us
                  </a>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-foreground">Connect With Us</h2>
              
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="text-center mb-6">
                  {/* Office Image */}
                  <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="/images/Turn Your Study Abroad Dreams into Reality! 🌍✈️_NUF Consultants is here to guide you towards your future in Australia, New Zealand, UK, Canada, USA, and Malaysia_ 🎓📞 Contact us today and start your journey!__#Stud.jpg"
                      alt="Unitrans Visa Solutions Office"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">WhatsApp Support</h3>
                  <p className="text-foreground/70 mb-4">
                    Get instant support on WhatsApp for quick queries
                  </p>
                  <div className="space-y-2 mb-6">
                    <a 
                      href="https://wa.me/254736210172"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition block"
                    >
                      +254 736 210 172
                    </a>
                    <a 
                      href="https://wa.me/254781884631"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition block"
                    >
                      +254 781 884 631
                    </a>
                  </div>
                  <Button 
                    className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
                    onClick={() => window.open('https://wa.me/254736210172', '_blank')}
                  >
                    <MessageSquare className="w-5 h-5" />
                    Chat on WhatsApp
                  </Button>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="text-lg font-semibold mb-4 text-foreground text-center">Follow Us</h4>
                  <div className="flex justify-center gap-4">
                    {[
                      { name: 'Facebook', icon: '📘' },
                      { name: 'Instagram', icon: '📷' },
                      { name: 'LinkedIn', icon: '💼' },
                      { name: 'Twitter', icon: '🐦' }
                    ].map((social) => (
                      <button
                        key={social.name}
                        className="w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center hover:bg-primary/10 transition"
                        aria-label={social.name}
                      >
                        <span className="text-xl">{social.icon}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-foreground/60 text-lg">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "How do I start the application process?",
                answer: "Simply fill out our consultation form or call us directly. Our experts will guide you through every step."
              },
              {
                question: "What documents do I need for student visa application?",
                answer: "Requirements vary by country, but generally include academic transcripts, passport, financial proof, and admission letter."
              },
              {
                question: "Do you charge for consultation services?",
                answer: "Our initial consultation is completely free. We only charge fees after you decide to proceed with our services."
              },
              {
                question: "How long does the admission process take?",
                answer: "Typically 4-8 weeks depending on the university and country. We'll provide you with a timeline specific to your case."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-2 text-foreground">{faq.question}</h3>
                <p className="text-foreground/70">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
