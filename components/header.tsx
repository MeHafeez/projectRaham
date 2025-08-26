"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <Image
              src="/raham-electro-logo.png"
              alt="Raham Electro Logo"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold text-foreground">Raham Electro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <a href="#home" className="text-foreground hover:text-secondary transition-colors font-medium">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-secondary transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-secondary transition-colors font-medium">
              About
            </a>
            <a href="#team" className="text-foreground hover:text-secondary transition-colors font-medium">
              Team
            </a>
            <a href="#projects" className="text-foreground hover:text-secondary transition-colors font-medium">
              Projects
            </a>
            <a href="#contact" className="text-foreground hover:text-secondary transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/schedule">
              <Button className="px-8 py-3 text-base">Get Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <nav className="flex flex-col gap-5">
              <a href="#home" className="text-foreground hover:text-secondary transition-colors py-3 font-medium">
                Home
              </a>
              <a href="#services" className="text-foreground hover:text-secondary transition-colors py-3 font-medium">
                Services
              </a>
              <a href="#about" className="text-foreground hover:text-secondary transition-colors py-3 font-medium">
                About
              </a>
              <a href="#team" className="text-foreground hover:text-secondary transition-colors py-3 font-medium">
                Team
              </a>
              <a href="#projects" className="text-foreground hover:text-secondary transition-colors py-3 font-medium">
                Projects
              </a>
              <a href="#contact" className="text-foreground hover:text-secondary transition-colors py-3 font-medium">
                Contact
              </a>
              <Link href="/schedule">
                <Button className="mt-6 w-full py-3">Get Quote</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
