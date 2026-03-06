import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import StudyDestinationsPreview from '@/components/StudyDestinationsPreview'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import ConsultationForm from '@/components/ConsultationForm'
import BlogPreview from '@/components/BlogPreview'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <StudyDestinationsPreview />
      <Services />
      <Process />
      <Testimonials />
      <ConsultationForm />
      <BlogPreview />
      <Footer />
    </main>
  )
}
