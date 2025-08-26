"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutRahamSection from "@/components/about-raham-section"
import TeamSection from "@/components/team-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen />
      <main
        className={`min-h-screen scroll-smooth transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <Header />

        <div id="home">
          <HeroSection />
        </div>

        <div id="services">
          <ServicesSection />
        </div>

        <div id="about">
          <AboutRahamSection />
        </div>

        <div id="team">
          <TeamSection />
        </div>

        <div id="projects">
          <ProjectsSection />
        </div>

        <div id="contact">
          <ContactSection />
        </div>

        <Footer />
      </main>
    </>
  )
}
