'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { GraduationCap, FileText, Banknote, BookOpen, Home, Plane, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    id: 'university-admission',
    icon: GraduationCap,
    title: 'University Admission Support',
    description: 'Expert guidance through the entire admission process with personalized application strategies.',
    detailedDescription: 'Our experienced counselors help you select the right universities, prepare compelling applications, write effective personal statements, and navigate complex admission requirements. We have partnerships with 50+ universities across 10+ countries.',
    benefits: [
      'University selection based on profile',
      'Application preparation and review',
      'Personal statement guidance',
      'Document verification and attestation',
      'Application tracking and follow-up',
      'Interview preparation'
    ],
    process: [
      'Profile assessment and counseling',
      'University shortlisting',
      'Application preparation',
      'Submission and tracking',
      'Offer letter acceptance'
    ]
  },
  {
    id: 'visa-processing',
    icon: FileText,
    title: 'Visa Processing Assistance',
    description: 'Complete visa documentation support ensuring smooth processing and approval.',
    detailedDescription: 'Our visa specialists handle the entire visa application process, from document preparation to embassy interview preparation. We maintain a 95% visa success rate through meticulous attention to detail and up-to-date knowledge of visa regulations.',
    benefits: [
      'Document checklist and preparation',
      'Visa application form filling',
      'Financial documentation guidance',
      'Interview preparation and mock sessions',
      'Application tracking and updates',
      'Post-visa services'
    ],
    process: [
      'Eligibility assessment',
      'Document preparation',
      'Application submission',
      'Interview preparation',
      'Visa approval and travel planning'
    ]
  },
  {
    id: 'scholarship-guidance',
    icon: Banknote,
    title: 'Scholarship Guidance',
    description: 'Help securing scholarships and financial aid opportunities worldwide.',
    detailedDescription: 'We identify and help you apply for various scholarships, grants, and financial aid options to make your international education more affordable. Our team maintains a comprehensive database of funding opportunities.',
    benefits: [
      'Scholarship database access',
      'Application assistance',
      'Essay writing guidance',
      'Financial planning support',
      'Education loan guidance',
      'Part-time job information'
    ],
    process: [
      'Financial need assessment',
      'Scholarship identification',
      'Application preparation',
      'Follow-up and tracking',
      'Financial planning'
    ]
  },
  {
    id: 'language-training',
    icon: BookOpen,
    title: 'IELTS & Language Training',
    description: 'Intensive language preparation programs to achieve required test scores.',
    detailedDescription: 'Our language training programs are designed to help you achieve the required scores in IELTS, TOEFL, PTE, and other language proficiency tests. We offer both classroom and online training options.',
    benefits: [
      'Expert faculty with proven results',
      'Comprehensive study materials',
      'Mock tests and evaluations',
      'Flexible batch timings',
      'One-on-one doubt sessions',
      'Score improvement guarantee'
    ],
    process: [
      'Diagnostic assessment',
      'Personalized study plan',
      'Regular training sessions',
      'Practice tests and feedback',
      'Final exam preparation'
    ]
  },
  {
    id: 'accommodation-support',
    icon: Home,
    title: 'Student Accommodation Support',
    description: 'Assistance finding safe, affordable, and convenient student housing.',
    detailedDescription: 'We help you find suitable accommodation options including university dormitories, private apartments, and homestays. Our team ensures you have safe and comfortable housing arrangements before you arrive.',
    benefits: [
      'Accommodation options guidance',
      'Booking assistance',
      'Contract review and support',
      'Airport pickup arrangement',
      'Temporary accommodation setup',
      'Local area orientation'
    ],
    process: [
      'Requirements assessment',
      'Property search and shortlisting',
      'Booking and documentation',
      'Pre-arrival arrangements',
      'Check-in assistance'
    ]
  },
  {
    id: 'flight-booking',
    icon: Plane,
    title: 'Flight Booking and Travel Support',
    description: 'Support booking flights and managing travel logistics abroad.',
    detailedDescription: 'Our travel support team helps you with flight bookings, travel insurance, foreign exchange, and other travel arrangements. We ensure smooth travel logistics from your home country to your study destination.',
    benefits: [
      'Best flight deals and options',
      'Travel insurance assistance',
      'Foreign exchange guidance',
      'Baggage allowance information',
      'Travel documentation check',
      'Pre-departure briefing'
    ],
    process: [
      'Travel requirements assessment',
      'Flight search and booking',
      'Travel arrangements coordination',
      'Pre-departure preparation',
      'Travel day support'
    ]
  }
]

export default function ServicesPage() {
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
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive support for every step of your study abroad journey
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Left Column - Service Info */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
                        <p className="text-foreground/60">Comprehensive Service</p>
                      </div>
                    </div>

                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {service.detailedDescription}
                    </p>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-foreground">Key Benefits</h3>
                      <div className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-foreground/70 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Process & CTA */}
                  <div>
                    {/* Process */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-foreground">Our Process</h3>
                      <div className="space-y-3">
                        {service.process.map((step, stepIndex) => (
                          <div key={step} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-bold text-primary">{stepIndex + 1}</span>
                            </div>
                            <span className="text-foreground/70 text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8">
                      <Button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-2">
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Features */}
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
              Why Choose Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-foreground/60 text-lg">Experience the difference with our comprehensive support</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'End-to-End Support',
                description: 'From initial counseling to pre-departure orientation, we support you at every step.',
                icon: '🎯'
              },
              {
                title: 'Expert Team',
                description: 'Our counselors have 10+ years of experience in international education.',
                icon: '👥'
              },
              {
                title: 'High Success Rate',
                description: '95% visa success rate and 90%+ admission success in partner universities.',
                icon: '📈'
              },
              {
                title: 'Personalized Approach',
                description: 'Tailored solutions based on your unique profile and career goals.',
                icon: '🎨'
              },
              {
                title: 'Transparent Process',
                description: 'Clear communication, no hidden fees, and regular updates.',
                icon: '🔍'
              },
              {
                title: 'Global Network',
                description: 'Strong relationships with universities and embassies worldwide.',
                icon: '🌍'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-foreground/70 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Start Your <span className="text-primary">Journey?</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Get in touch with our expert counselors and take the first step towards your international education dreams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition">
                Book Free Consultation
              </Button>
              <Button variant="outline" className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-accent transition">
                Download Service Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
