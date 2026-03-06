import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Visit Our Office</h1>
          <p className="text-lg text-foreground/70 text-center mb-12">
            Find us at our convenient location
          </p>
          {/* Location content will be added here */}
        </div>
      </div>
      <Footer />
    </main>
  )
}
