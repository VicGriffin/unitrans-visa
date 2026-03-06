'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-primary">Unitrans Visa Solutions</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your trusted partner in achieving international education dreams since 2015
          </motion.p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-foreground/70 mb-4">
                Unitrans Visa Solutions began with a simple mission: to make international education accessible to every deserving student. Founded in 2015, we've grown from a small consultancy to a trusted partner for thousands of students worldwide.
              </p>
              <p className="text-foreground/70 mb-4">
                Our team of experienced counselors and visa specialists has helped over 1,200 students secure admissions in prestigious universities across 10+ countries. We believe in personalized guidance, transparent processes, and unwavering support throughout your study abroad journey.
              </p>
              <p className="text-foreground/70">
                Whether you're looking for undergraduate programs, postgraduate studies, or professional courses, we're here to turn your international education dreams into reality.
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">1200+</h3>
                <p className="text-sm text-foreground/60">Students Placed</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">10+</h3>
                <p className="text-sm text-foreground/60">Countries</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">95%</h3>
                <p className="text-sm text-foreground/60">Visa Success Rate</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
                <p className="text-sm text-foreground/60">Partner Universities</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Our <span className="text-primary">Foundation</span>
            </h2>
            <p className="text-foreground/60 text-lg">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-card border border-border rounded-lg p-8 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Our Mission</h3>
                <p className="text-foreground/70">
                  To provide comprehensive, ethical, and personalized guidance to students aspiring to study abroad, ensuring they achieve their academic and career goals through international education.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-card border border-border rounded-lg p-8 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Our Vision</h3>
                <p className="text-foreground/70">
                  To become the most trusted and preferred international education consultancy, recognized for our excellence in student services and success in creating global education opportunities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-card border border-border rounded-lg p-8 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Our Values</h3>
                <ul className="text-foreground/70 space-y-2">
                  <li>• Student-first approach</li>
                  <li>• Transparency and honesty</li>
                  <li>• Excellence in service</li>
                  <li>• Continuous innovation</li>
                  <li>• Cultural sensitivity</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Why Choose <span className="text-primary">Unitrans</span>
            </h2>
            <p className="text-foreground/60 text-lg">What sets us apart from the rest</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Expert Counselors',
                description: 'Experienced education specialists with in-depth knowledge of universities and admission processes.'
              },
              {
                title: 'Personalized Approach',
                description: 'Tailored guidance based on your academic profile, career goals, and preferences.'
              },
              {
                title: 'High Success Rate',
                description: '95% visa success rate and 90%+ admission success in partner universities.'
              },
              {
                title: 'End-to-End Support',
                description: 'From university selection to visa processing and pre-departure orientation.'
              },
              {
                title: 'Transparent Process',
                description: 'Clear communication, no hidden fees, and regular updates throughout your journey.'
              },
              {
                title: 'Strong Network',
                description: 'Partnerships with 50+ universities across 10+ study destinations.'
              },
              {
                title: 'Financial Guidance',
                description: 'Help with scholarships, education loans, and cost-effective study options.'
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock assistance for urgent queries and emergency situations.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Our <span className="text-primary">Leadership Team</span>
            </h2>
            <p className="text-foreground/60 text-lg">Meet the experts behind your success</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Founder & CEO',
                experience: '15+ years in international education',
                expertise: 'University admissions, visa processing'
              },
              {
                name: 'Michael Chen',
                role: 'Head of Counseling',
                experience: '12+ years in student guidance',
                expertise: 'Career counseling, university selection'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Visa Operations Manager',
                experience: '10+ years in visa processing',
                expertise: 'Documentation, compliance, pre-departure'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-lg p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-foreground/60 mb-1">{member.experience}</p>
                <p className="text-sm text-foreground/60">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
