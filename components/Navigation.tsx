'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">U</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline text-foreground">Unitrans Visa Solutions</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition">Home</Link>
            <Link href="/about" className="text-foreground hover:text-primary transition">About</Link>
            
            {/* Study Destinations Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-primary p-0">
                  Study Destinations
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/destinations#canada" className="w-full">🇨🇦 Canada</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/destinations#uk" className="w-full">🇬🇧 United Kingdom</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/destinations#germany" className="w-full">🇩🇪 Germany</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/destinations#usa" className="w-full">🇺🇸 United States</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/destinations#australia" className="w-full">🇦🇺 Australia</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/destinations#uae" className="w-full">🇦🇪 UAE</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-primary p-0">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/services#university-application" className="w-full">University Application</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services#university-admission" className="w-full">University Admission</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services#student-counselling" className="w-full">Student Counselling</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services#accommodation-arrangements" className="w-full">Accommodation Arrangements</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services#visa-processing" className="w-full">Visa Processing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services#ielts-training" className="w-full">IELTS Training</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services#student-loans" className="w-full">Student Loans</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services#flight-booking" className="w-full">Flight Booking</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services#pre-post-departure" className="w-full">Pre & Post Departure</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/events" className="text-foreground hover:text-primary transition">Upcoming Events</Link>
            <Link href="/location" className="text-foreground hover:text-primary transition">Location</Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition">Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeZU6Pl82NN9ZOIrQgHshdBj-G3SEB7T1N64PHWfyxT4SSJ7Q/viewform', '_blank')}
            >
              Book Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-foreground hover:bg-muted rounded">Home</Link>
            <Link href="/about" className="block px-4 py-2 text-foreground hover:bg-muted rounded">About</Link>
            <Link href="/destinations" className="block px-4 py-2 text-foreground hover:bg-muted rounded">Study Destinations</Link>
            <Link href="/services" className="block px-4 py-2 text-foreground hover:bg-muted rounded">Services</Link>
            <Link href="/events" className="block px-4 py-2 text-foreground hover:bg-muted rounded">Upcoming Events</Link>
            <Link href="/location" className="block px-4 py-2 text-foreground hover:bg-muted rounded">Location</Link>
            <Link href="/contact" className="block px-4 py-2 text-foreground hover:bg-muted rounded">Contact</Link>
            <Button 
              className="w-full mt-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeZU6Pl82NN9ZOIrQgHshdBj-G3SEB7T1N64PHWfyxT4SSJ7Q/viewform', '_blank')}
            >
              Book Free Consultation
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
