'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { GraduationCap, FileText, Banknote, BookOpen, Home, Plane, ArrowRight, CheckCircle, Users, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const services = [
  {
    id: 'university-application',
    icon: GraduationCap,
    title: 'University Application',
    description: 'Complete assistance with university applications and documentation.',
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
    id: 'university-admission',
    icon: FileText,
    title: 'University Admission',
    description: 'Expert guidance through the entire admission process with personalized strategies.',
    detailedDescription: 'We provide comprehensive support for securing admission to your dream universities. Our team ensures your application stands out and meets all requirements for successful admission.',
    benefits: [
      'Admission requirement analysis',
      'Application strategy development',
      'Deadline management',
      'Communication with universities',
      'Offer letter negotiation',
      'Admission confirmation support'
    ],
    process: [
      'Eligibility assessment',
      'University selection',
      'Application submission',
      'Follow-up with universities',
      'Admission acceptance'
    ]
  },
  {
    id: 'student-counselling',
    icon: Users,
    title: 'Student Counselling',
    description: 'Personalized guidance to help you make informed decisions about your education abroad.',
    detailedDescription: 'Our expert counselors provide one-on-one guidance to help you choose the right course, country, and university based on your academic background, career goals, and personal preferences.',
    benefits: [
      'Career guidance and planning',
      'Course and country selection',
      'Scholarship opportunities',
      'Future career prospects',
      'Personal development support',
      'Parent counselling sessions'
    ],
    process: [
      'Initial consultation',
      'Profile analysis',
      'Goal setting',
      'Options exploration',
      'Decision making support'
    ]
  },
  {
    id: 'accommodation-arrangements',
    icon: Home,
    title: 'Accommodation Arrangements',
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
    id: 'visa-processing',
    icon: FileText,
    title: 'Visa Processing',
    description: 'Complete visa documentation support ensuring smooth processing and approval.',
    detailedDescription: 'Our visa specialists handle the entire visa application process, from document preparation to embassy interview preparation. We maintain a 95% visa success rate through meticulous attention to detail.',
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
    id: 'ielts-training',
    icon: BookOpen,
    title: 'IELTS Training',
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
    id: 'student-loans',
    icon: Banknote,
    title: 'Student Loans',
    description: 'Assistance securing education loans and financial aid for your studies abroad.',
    detailedDescription: 'We help you navigate the complex process of securing student loans from banks and financial institutions. Our team provides guidance on loan eligibility, documentation, and application procedures.',
    benefits: [
      'Loan eligibility assessment',
      'Bank selection guidance',
      'Documentation preparation',
      'Application assistance',
      'Interest rate comparison',
      'Repayment planning support'
    ],
    process: [
      'Financial need analysis',
      'Loan options exploration',
      'Documentation preparation',
      'Bank application submission',
      'Loan approval and disbursement'
    ]
  },
  {
    id: 'flight-booking',
    icon: Plane,
    title: 'Flight Booking',
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
  },
  {
    id: 'pre-post-departure',
    icon: Globe,
    title: 'Pre & Post Departure Services',
    description: 'Comprehensive support before and after you arrive at your study destination.',
    detailedDescription: 'We provide end-to-end support from pre-departure orientation to post-arrival assistance. Our team ensures you have a smooth transition and successful start to your international education journey.',
    benefits: [
      'Pre-departure orientation',
      'Airport pickup and transfer',
      'Local registration assistance',
      'Bank account setup support',
      'SIM card and communication setup',
      'Ongoing support during studies'
    ],
    process: [
      'Pre-departure briefing',
      'Travel arrangements confirmation',
      'Airport pickup coordination',
      'Initial settlement support',
      'Regular check-ins and assistance'
    ]
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/pexels-akbissue-29558445.jpg"
            alt="Services background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/50 to-background/70" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive support for every step of your study abroad journey
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
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
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 p-6 lg:p-8">
                  {/* Left Column - Service Info */}
                  <div>
                    <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-xl lg:text-2xl font-bold text-foreground">{service.title}</h2>
                        <p className="text-foreground/60 text-sm lg:text-base">Comprehensive Service</p>
                      </div>
                    </div>

                    <p className="text-foreground/70 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                      {service.detailedDescription}
                    </p>

                    {/* Benefits */}
                    <div className="mb-4 lg:mb-6">
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
                    <div className="mb-4 lg:mb-6">
                      <h3 className="text-base lg:text-lg font-semibold mb-2 lg:mb-3 text-foreground">Our Process</h3>
                      <div className="space-y-2 lg:space-y-3">
                        {service.process.map((step, stepIndex) => (
                          <div key={step} className="flex items-start gap-2 lg:gap-3">
                            <div className="w-5 h-5 lg:w-6 lg:h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-bold text-primary">{stepIndex + 1}</span>
                            </div>
                            <span className="text-foreground/70 text-xs lg:text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-4 lg:mt-8">
                      <Button 
                        className="w-full px-4 lg:px-6 py-2 lg:py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 text-sm"
                        onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeZU6Pl82NN9ZOIrQgHshdBj-G3SEB7T1N64PHWfyxT4SSJ7Q/viewform', '_blank')}
                      >
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Choose Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-foreground/60 text-base sm:text-lg">Experience the difference with our comprehensive support</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'End-to-End Support',
                description: 'From initial counseling to pre-departure orientation, we support you at every step.',
                icon: '🎯',
                image: '/images/pexels-akbissue-29558445.jpg'
              },
              {
                title: 'Expert Team',
                description: 'Our counselors have 10+ years of experience in international education.',
                icon: '👥',
                image: '/images/Best Study Abroad Consultants in Kochi.jpg'
              },
              {
                title: 'High Success Rate',
                description: '95% visa success rate and 90%+ admission success in partner universities.',
                icon: '📈',
                image: '/images/pexels-ekaterinabelinskaya-4922356.jpg'
              },
              {
                title: 'Personalized Approach',
                description: 'Tailored solutions based on your unique profile and career goals.',
                icon: '🎨',
                image: '/images/pexels-burst-545068.jpg'
              },
              {
                title: 'Transparent Process',
                description: 'Clear communication, no hidden fees, and regular updates.',
                icon: '🔍',
                image: '/images/pexels-lina-5624131.jpg'
              },
              {
                title: 'Global Network',
                description: 'Strong relationships with universities and embassies worldwide.',
                icon: '🌍',
                image: '/images/University of Sydney✨.jpg'
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
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-foreground/70 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Ready to Start Your <span className="text-primary">Journey?</span>
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 mb-6 sm:mb-8 px-2">
              Get in touch with our expert counselors and take the first step towards your international education dreams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button 
                className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeZU6Pl82NN9ZOIrQgHshdBj-G3SEB7T1N64PHWfyxT4SSJ7Q/viewform', '_blank')}
              >
                Book Free Consultation
              </Button>
              <Button variant="outline" className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 border border-border rounded-lg font-semibold hover:bg-accent transition">
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
