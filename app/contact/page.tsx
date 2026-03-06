import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <p className="text-lg text-foreground/70 text-center mb-12">
            Get in touch with our expert team
          </p>
          {/* Contact content will be added here */}
        </div>
      </div>
      <Footer />
    </main>
  )
}
