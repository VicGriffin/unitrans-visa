import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Upcoming Events</h1>
          <p className="text-lg text-foreground/70 text-center mb-12">
            Join our study abroad seminars and workshops
          </p>
          {/* Events content will be added here */}
        </div>
      </div>
      <Footer />
    </main>
  )
}
