"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Zap, Play, Download, Share2, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

// Extended project data with media galleries
const projectsData = {
  1: {
    title: "Modern Smart Home Installation",
    category: "Residential",
    location: "Downtown District",
    date: "2024",
    description:
      "Complete electrical rewiring with smart home automation, LED lighting systems, and energy-efficient panel upgrade.",
    features: ["Smart Switches", "LED Lighting", "Panel Upgrade", "Home Automation"],
    images: [
      "/modern-smart-home-electrical-installation.png",
      "/smart-home-panel-upgrade.png",
      "/led-lighting-installation.png",
      "/smart-switches-setup.png",
      "/home-automation-control.png",
      "/electrical-wiring-progress.png",
    ],
    videos: ["/smart-home-demo.mp4", "/lighting-control-demo.mp4"],
  },
  2: {
    title: "Commercial Office Complex",
    category: "Commercial",
    location: "Business Park",
    date: "2024",
    description:
      "Large-scale electrical infrastructure for 50,000 sq ft office complex with advanced lighting controls and backup systems.",
    features: ["Industrial Wiring", "Emergency Systems", "LED Retrofit", "Code Compliance"],
    images: [
      "/commercial-office-electrical.png",
      "/industrial-wiring-setup.png",
      "/emergency-systems-install.png",
      "/led-retrofit-progress.png",
      "/electrical-panel-room.png",
      "/office-lighting-complete.png",
    ],
    videos: ["/commercial-project-timelapse.mp4"],
  },
  3: {
    title: "Restaurant Kitchen Upgrade",
    category: "Commercial",
    location: "City Center",
    date: "2023",
    description:
      "Specialized electrical work for commercial kitchen including high-voltage equipment and safety systems.",
    features: ["High Voltage", "Safety Systems", "Equipment Wiring", "Code Updates"],
    images: [
      "/restaurant-kitchen-electrical.png",
      "/high-voltage-equipment.png",
      "/kitchen-safety-systems.png",
      "/commercial-wiring-install.png",
      "/equipment-connections.png",
    ],
    videos: ["/kitchen-electrical-walkthrough.mp4"],
  },
  4: {
    title: "Historic Home Restoration",
    category: "Residential",
    location: "Heritage District",
    date: "2023",
    description: "Careful restoration of electrical systems in 1920s home while preserving historical integrity.",
    features: ["Heritage Compliance", "Modern Safety", "Custom Solutions", "Restoration"],
    images: [
      "/historic-home-electrical-restoration.png",
      "/heritage-electrical-work.png",
      "/vintage-home-wiring.png",
      "/historical-panel-upgrade.png",
      "/restoration-progress.png",
    ],
    videos: ["/historic-restoration-process.mp4"],
  },
  5: {
    title: "Solar Panel Integration",
    category: "Renewable",
    location: "Suburban Area",
    date: "2024",
    description: "Complete solar panel system installation with battery backup and grid-tie capabilities.",
    features: ["Solar Integration", "Battery Backup", "Grid-Tie", "Energy Storage"],
    images: [
      "/solar-panel-electrical-installation.png",
      "/solar-panel-array.png",
      "/battery-backup-system.png",
      "/grid-tie-inverter.png",
      "/energy-monitoring-setup.png",
      "/solar-electrical-connections.png",
    ],
    videos: ["/solar-installation-timelapse.mp4", "/solar-system-demo.mp4"],
  },
  6: {
    title: "Emergency Generator Setup",
    category: "Emergency",
    location: "Medical Facility",
    date: "2023",
    description: "Critical backup power system installation for medical facility with automatic transfer switches.",
    features: ["Backup Power", "Auto Transfer", "Medical Grade", "Emergency Systems"],
    images: [
      "/emergency-generator-install.png",
      "/medical-facility-electrical.png",
      "/auto-transfer-switch.png",
      "/backup-power-system.png",
      "/emergency-electrical-panel.png",
    ],
    videos: ["/generator-testing-demo.mp4"],
  },
}

export default function ProjectPhotosPage({ params }: { params: { projectId: string } }) {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null)
  const [mediaType, setMediaType] = useState<"image" | "video">("image")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const project = projectsData[Number.parseInt(params.projectId) as keyof typeof projectsData]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  const openMedia = (src: string, type: "image" | "video") => {
    setSelectedMedia(src)
    setMediaType(type)
  }

  const handleShare = async () => {
    const shareData = {
      title: `${project.title} - Raham Electro`,
      text: `Check out this electrical project: ${project.description}`,
      url: window.location.href,
    }

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData)
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(window.location.href)
        alert("Project link copied to clipboard!")
      }
    } catch (error) {
      console.error("Error sharing:", error)
      try {
        await navigator.clipboard.writeText(window.location.href)
        alert("Project link copied to clipboard!")
      } catch (clipboardError) {
        console.error("Clipboard error:", clipboardError)
        const textArea = document.createElement("textarea")
        textArea.value = window.location.href
        document.body.appendChild(textArea)
        textArea.select()
        try {
          document.execCommand("copy")
          alert("Project link copied to clipboard!")
        } catch (execError) {
          alert("Unable to copy link. Please copy manually: " + window.location.href)
        }
        document.body.removeChild(textArea)
      }
    }
  }

  const handleDownloadAll = async () => {
    try {
      // Create a zip-like download by triggering multiple downloads
      for (let i = 0; i < project.images.length; i++) {
        const image = project.images[i]
        const link = document.createElement("a")
        link.href = image || "/placeholder.svg"
        link.download = `${project.title.replace(/\s+/g, "_")}_image_${i + 1}.jpg`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        // Add delay between downloads to prevent browser blocking
        if (i < project.images.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, 500))
        }
      }
    } catch (error) {
      console.error("Download error:", error)
      alert("Download failed. Please try downloading images individually.")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card/95 backdrop-blur-md border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="relative">
                <Image
                  src="/raham-electro-logo.png"
                  alt="Raham Electro"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-secondary">Raham Electro</h1>
                <p className="text-xs text-muted-foreground">Professional Electrical Services</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/#team" className="text-muted-foreground hover:text-foreground transition-colors">
                Team
              </Link>
              <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <Link href="/schedule">
                <Button size="sm" className="hidden sm:inline-flex">
                  Get Quote
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t bg-card/95 backdrop-blur-md">
              <nav className="flex flex-col py-4 space-y-2">
                <Link
                  href="/#services"
                  className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/#about"
                  className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/#projects"
                  className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/#team"
                  className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Team
                </Link>
                <Link
                  href="/#contact"
                  className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="px-4 pt-2">
                  <Link href="/schedule">
                    <Button size="sm" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link href="/#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">{project.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" onClick={handleDownloadAll}>
                <Download className="w-4 h-4 mr-2" />
                Download All
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Badge className="bg-secondary text-secondary-foreground">{project.category}</Badge>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {project.location}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {project.date}
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{project.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl text-pretty">{project.description}</p>

          <div className="flex items-center gap-2 mt-6">
            <Zap className="w-5 h-5 text-secondary" />
            <span className="font-semibold mr-4">Key Features:</span>
            <div className="flex flex-wrap gap-2">
              {project.features.map((feature) => (
                <Badge key={feature} variant="outline">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Media Gallery */}
        <div className="space-y-8">
          {/* Images Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Project Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <Card
                  key={index}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
                  onClick={() => openMedia(image, "image")}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image || "/placeholder.svg?height=300&width=400"}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 rounded-full p-3">
                          <Zap className="w-6 h-6 text-secondary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Videos Section */}
          {project.videos && project.videos.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Project Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.videos.map((video, index) => (
                  <Card
                    key={index}
                    className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
                    onClick={() => openMedia(video, "video")}
                  >
                    <div className="relative overflow-hidden">
                      <div className="w-full h-64 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                        <div className="bg-secondary/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-semibold text-sm bg-black/50 rounded px-2 py-1">
                          Video {index + 1}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Media Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-6xl max-h-full">
            <Button
              variant="outline"
              size="sm"
              className="absolute -top-12 right-0 bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => setSelectedMedia(null)}
            >
              Close
            </Button>
            {mediaType === "image" ? (
              <img
                src={selectedMedia || "/placeholder.svg"}
                alt="Project media"
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <video
                src={selectedMedia}
                controls
                className="max-w-full max-h-[80vh] rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
