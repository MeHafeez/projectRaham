"use client"

import { Button } from "@/components/ui/button"
import { Zap, Shield, Clock } from "lucide-react"
import { useEffect, useRef } from "react"
import ParallaxContainer from "./parallax-container"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Simple 3D-like electrical circuit animation
    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      ctx.strokeStyle = "rgba(99, 102, 241, 0.3)"
      ctx.lineWidth = 1

      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })

      // Draw and update particles
      particles.forEach((particle) => {
        ctx.fillStyle = "rgba(99, 102, 241, 0.8)"
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-background">
      <ParallaxContainer speed={0.3} className="absolute inset-0">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />
      </ParallaxContainer>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <ParallaxContainer speed={0.1}>
          <div className="float-animation">
            <Zap className="w-24 h-24 mx-auto mb-12 text-secondary pulse-glow" />
          </div>
        </ParallaxContainer>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance">
          <span className="text-secondary">Raham Electro</span> - Professional Electrical Services
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto text-pretty">
          Led by Raham Shaik with over 10 years of expertise in apartments, houses, and critical electrical projects
        </p>

        <p className="text-lg text-muted-foreground mb-16 max-w-3xl mx-auto text-pretty">
          Delivering reliable and efficient electrical solutions while adhering to the highest safety standards and
          regulations
        </p>

        <ParallaxContainer speed={0.05}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button size="lg" className="text-lg px-10 py-5">
              Get Free Quote
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 py-5 bg-transparent">
              View Our Work
            </Button>
          </div>
        </ParallaxContainer>

        <ParallaxContainer speed={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-4 p-6 rounded-xl bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
              <Shield className="w-10 h-10 text-secondary" />
              <span className="text-xl font-semibold">10+ Years Experience</span>
            </div>
            <div className="flex items-center justify-center gap-4 p-6 rounded-xl bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
              <Clock className="w-10 h-10 text-secondary" />
              <span className="text-xl font-semibold">24/7 Emergency</span>
            </div>
            <div className="flex items-center justify-center gap-4 p-6 rounded-xl bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
              <Zap className="w-10 h-10 text-secondary" />
              <span className="text-xl font-semibold">Expert Team</span>
            </div>
          </div>
        </ParallaxContainer>
      </div>
    </section>
  )
}
