'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { MapPin, DollarSign, GraduationCap, Clock, Users, FileText, Shield, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const destinations = [
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    overview: 'Canada offers world-class education with a multicultural environment and excellent post-graduation work opportunities.',
    tuitionRange: '$15,000 - $35,000/year',
    visaRequirements: 'Study permit, GIC proof, language proficiency (IELTS 6.5+), medical clearance',
    popularUniversities: ['University of Toronto', 'McGill University', 'UBC', 'University of Waterloo'],
    popularPrograms: ['Engineering', 'Business', 'IT', 'Healthcare', 'Environmental Sciences'],
    image: '/images/Best Immigration Consultant Australia, Visa Services in Australia.jpg'
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    overview: 'The UK boasts prestigious universities with rich academic traditions and diverse student communities.',
    tuitionRange: '$20,000 - $40,000/year',
    visaRequirements: 'Tier 4 visa, CAS letter, financial proof, English proficiency (IELTS 6.0+)',
    popularUniversities: ['Oxford University', 'Cambridge', 'Imperial College', 'LSE', 'UCL'],
    popularPrograms: ['Medicine', 'Law', 'Business', 'Engineering', 'Arts & Humanities'],
    image: '/images/pexels-mikhail-nilov-9158358.jpg'
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    overview: 'Germany provides excellent education, often with no tuition fees, and strong engineering programs.',
    tuitionRange: '$0 - $5,000/year',
    visaRequirements: 'Student visa, proof of funds, health insurance, language proficiency',
    popularUniversities: ['TU Munich', 'Heidelberg University', 'RWTH Aachen', 'Free University of Berlin'],
    popularPrograms: ['Engineering', 'Computer Science', 'Research', 'Natural Sciences', 'Business'],
    image: '/images/pexels-n-voitkevich-7235804.jpg'
  },
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    overview: 'The USA offers diverse educational opportunities with cutting-edge research and innovation.',
    tuitionRange: '$25,000 - $60,000/year',
    visaRequirements: 'F-1 visa, I-20 form, SEVIS fee, financial documentation, embassy interview',
    popularUniversities: ['MIT', 'Stanford', 'Harvard', 'Berkeley', 'UCLA'],
    popularPrograms: ['Computer Science', 'MBA', 'Healthcare', 'Engineering', 'Liberal Arts'],
    image: '/images/Studying Abroad In The United States Psd Layering Background Wallpaper Image For Free Download - Pngtree.jpg'
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    overview: 'Australia combines quality education with a relaxed lifestyle and beautiful natural environment.',
    tuitionRange: '$18,000 - $45,000/year',
    visaRequirements: 'Student visa (subclass 500), CoE, GTE statement, health insurance (OSHC)',
    popularUniversities: ['University of Melbourne', 'ANU', 'University of Sydney', 'Monash', 'UNSW'],
    popularPrograms: ['Marine Biology', 'Tourism', 'Agriculture', 'Business', 'Environmental Studies'],
    image: '/images/pexels-tima-miroshnichenko-6549351.jpg'
  },
  {
    id: 'uae',
    name: 'UAE',
    flag: '🇦🇪',
    overview: 'The UAE offers modern education facilities with tax-free income and strategic location.',
    tuitionRange: '$10,000 - $30,000/year',
    visaRequirements: 'Student visa, admission letter, sponsor, medical fitness test, Emirates ID',
    popularUniversities: ['UAE University', 'American University of Sharjah', 'Khalifa University', 'University of Wollongong Dubai'],
    popularPrograms: ['Business', 'Engineering', 'Hospitality', 'IT', 'Architecture'],
    image: '/images/pexels-burst-545068.jpg'
  }
]

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/pexels-tima-miroshnichenko-6549351.jpg"
            alt="Study destinations background"
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
            Study <span className="text-primary">Destinations</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore world-class education opportunities across the globe
          </motion.p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                id={destination.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Left Column - Country Info */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-5xl">{destination.flag}</span>
                      <div>
                        <h2 className="text-3xl font-bold text-foreground">{destination.name}</h2>
                        <p className="text-foreground/60">Popular Study Destination</p>
                      </div>
                    </div>

                    {/* Country Image */}
                    <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={destination.image}
                        alt={`${destination.name} study destination`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {destination.overview}
                    </p>

                    {/* Quick Info Cards */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">Tuition Range</span>
                        </div>
                        <p className="text-primary font-semibold">{destination.tuitionRange}</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">Visa Requirements</span>
                        </div>
                        <p className="text-sm text-foreground/70">{destination.visaRequirements}</p>
                      </div>
                    </div>

                    {/* Popular Programs */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        Popular Programs
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {destination.popularPrograms.map((program) => (
                          <span 
                            key={program}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          >
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Universities & CTA */}
                  <div>
                    {/* Popular Universities */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        Popular Universities
                      </h3>
                      <div className="space-y-2">
                        {destination.popularUniversities.map((university) => (
                          <div key={university} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-foreground/70">{university}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <Button 
                        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-2"
                        onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeZU6Pl82NN9ZOIrQgHshdBj-G3SEB7T1N64PHWfyxT4SSJ7Q/viewform', '_blank')}
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" className="px-6 py-3 border border-border rounded-lg font-semibold hover:bg-accent transition">
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Study <span className="text-primary">Abroad?</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Let our expert counselors help you choose the perfect destination and university
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeZU6Pl82NN9ZOIrQgHshdBj-G3SEB7T1N64PHWfyxT4SSJ7Q/viewform', '_blank')}
              >
                Book Free Consultation
              </Button>
              <Button variant="outline" className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-accent transition">
                Explore Scholarships
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
