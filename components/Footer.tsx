'use client'

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                <span className="font-bold">U</span>
              </div>
              <span className="font-bold text-lg">Unitrans</span>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Your trusted partner for study abroad dreams. We've successfully placed 1200+ students in leading universities worldwide.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/40 transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/40 transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/40 transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/40 transition">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/#services" className="hover:opacity-100 transition">Services</Link></li>
              <li><Link href="/#destinations-preview" className="hover:opacity-100 transition">Destinations</Link></li>
              <li><Link href="/#process" className="hover:opacity-100 transition">Our Process</Link></li>
              <li><Link href="/#blog" className="hover:opacity-100 transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:opacity-100 transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/services#university-admission" className="hover:opacity-100 transition">Admission Assistance</Link></li>
              <li><Link href="/services#visa-processing" className="hover:opacity-100 transition">Visa Processing</Link></li>
              <li><Link href="/services#university-admission" className="hover:opacity-100 transition">Scholarship Guidance</Link></li>
              <li><Link href="/services#ielts-training" className="hover:opacity-100 transition">Language Training</Link></li>
              <li><Link href="/services#accommodation-arrangements" className="hover:opacity-100 transition">Accommodation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+254700000000">+254 (700) 000-000</a>
              </div>
              <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@unitrans.com">info@unitrans.com</a>
              </div>
              <div className="flex gap-2 pt-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <p>
                  Nairobi, Kenya<br />
                  Plot 123, Tech Street<br />
                  KE-00100
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/30 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <div>
            <p>&copy; 2024 Unitrans Visa Solutions. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:opacity-100 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:opacity-100 transition">Terms of Service</Link>
            <Link href="/contact" className="hover:opacity-100 transition">Contact</Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254700000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition z-40"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  )
}
