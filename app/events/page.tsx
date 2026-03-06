'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const events = [
  {
    id: 1,
    title: "Study in Canada Information Session",
    date: "March 15, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Online via Zoom",
    description: "Learn about studying in Canada, admission requirements, scholarship opportunities, and visa process.",
    speaker: "Senior Education Counselor",
    type: "Online",
    capacity: 50,
    registered: 23,
    image: "/images/Best Immigration Consultant Australia, Visa Services in Australia.jpg"
  },
  {
    id: 2,
    title: "UK University Fair 2024",
    date: "March 22, 2024",
    time: "10:00 AM - 5:00 PM",
    location: "Spur Mall, 2nd Floor S28",
    description: "Meet representatives from top UK universities. Get on-the-spot assessments and application guidance.",
    speaker: "University Representatives",
    type: "Offline",
    capacity: 100,
    registered: 67,
    image: "/images/pexels-mikhail-nilov-9158358.jpg"
  },
  {
    id: 3,
    title: "IELTS Preparation Workshop",
    date: "March 29, 2024",
    time: "10:00 AM - 1:00 PM",
    location: "Online via Zoom",
    description: "Free workshop to help you prepare for IELTS exam with expert tips and practice sessions.",
    speaker: "IELTS Expert Trainer",
    type: "Online",
    capacity: 30,
    registered: 18,
    image: "/images/pexels-ekaterinabelinskaya-4922356.jpg"
  },
  {
    id: 4,
    title: "Student Visa Application Guidance",
    date: "April 5, 2024",
    time: "3:00 PM - 5:00 PM",
    location: "Spur Mall, 2nd Floor S28",
    description: "Step-by-step guidance on student visa applications, document preparation, and interview tips.",
    speaker: "Visa Specialist",
    type: "Offline",
    capacity: 40,
    registered: 25,
    image: "/images/pexels-burst-545068.jpg"
  },
  {
    id: 5,
    title: "Scholarship Opportunities Webinar",
    date: "April 12, 2024",
    time: "2:00 PM - 3:30 PM",
    location: "Online via Zoom",
    description: "Discover various scholarship opportunities for studying abroad and learn how to apply successfully.",
    speaker: "Scholarship Expert",
    type: "Online",
    capacity: 60,
    registered: 34,
    image: "/images/pexels-lina-5624131.jpg"
  },
  {
    id: 6,
    title: "USA Education Expo",
    date: "April 19, 2024",
    time: "11:00 AM - 4:00 PM",
    location: "Spur Mall, 2nd Floor S28",
    description: "Connect with representatives from prestigious US universities and explore your options.",
    speaker: "US University Delegates",
    type: "Offline",
    capacity: 80,
    registered: 52,
    image: "/images/University of Sydney✨.jpg"
  }
]

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/pexels-lina-5624131.jpg"
            alt="Events background"
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
            Upcoming <span className="text-primary">Events</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join our study abroad seminars, workshops, and university fairs
          </motion.p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="grid lg:grid-cols-3 gap-8 p-8">
                  {/* Event Image */}
                  <div className="lg:col-span-1 relative h-56 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  {/* Event Details */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        event.type === 'Online' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {event.type}
                      </span>
                      <span className="text-foreground/60 text-sm">
                        {event.registered}/{event.capacity} registered
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-foreground">{event.title}</h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">{event.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-foreground/60">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/60">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/60">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/60">
                        <Users className="w-5 h-5 text-primary" />
                        <span>Speaker: {event.speaker}</span>
                      </div>
                    </div>

                    {/* Registration Button */}
                    <Button 
                      className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-2"
                      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeZU6Pl82NN9ZOIrQgHshdBj-G3SEB7T1N64PHWfyxT4SSJ7Q/viewform', '_blank')}
                    >
                      Register Online
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Registration Status */}
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="w-32 h-32 relative mb-4">
                      <svg className="w-32 h-32 transform -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          className="text-muted/30"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 56}`}
                          strokeDashoffset={`${2 * Math.PI * 56 * (1 - event.registered / event.capacity)}`}
                          className="text-primary transition-all duration-500"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-foreground">
                          {Math.round((event.registered / event.capacity) * 100)}%
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-foreground/60 mb-1">Registration Status</p>
                    <p className="text-lg font-semibold text-foreground">
                      {event.registered} of {event.capacity} spots
                    </p>
                    {event.registered >= event.capacity * 0.8 && (
                      <p className="text-sm text-amber-600 mt-2">Filling up fast!</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Can't Find an <span className="text-primary">Event?</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Register for our newsletter to get updates on upcoming events and workshops
            </p>
            <Button 
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeZU6Pl82NN9ZOIrQgHshdBj-G3SEB7T1N64PHWfyxT4SSJ7Q/viewform', '_blank')}
            >
              Get Event Updates
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
