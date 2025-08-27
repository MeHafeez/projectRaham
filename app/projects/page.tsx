"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Zap, ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

const allProjects = [
  {
    id: 1,
    title: "Modern Smart Home Installation",
    category: "Residential",
    location: "Downtown District",
    date: "2025",
    description:
      "Complete electrical rewiring with smart home automation, LED lighting systems, and energy-efficient panel upgrade.",
    image: "/modern-smart-home-electrical-installation.png",
    features: ["Smart Switches", "LED Lighting", "Panel Upgrade", "Home Automation"],
  },
  {
    id: 2,
    title: "Commercial Office Complex",
    category: "Commercial",
    location: "Business Park",
    date: "2025",
    description:
      "Large-scale electrical infrastructure for 50,000 sq ft office complex with advanced lighting controls and backup systems.",
    image: "/placeholder-l81wi.png",
    features: ["Industrial Wiring", "Emergency Systems", "LED Retrofit", "Code Compliance"],
  },
  {
    id: 3,
    title: "Restaurant Kitchen Upgrade",
    category: "Commercial",
    location: "City Center",
    date: "2023",
    description:
      "Specialized electrical work for commercial kitchen including high-voltage equipment and safety systems.",
    image: "/placeholder-1mabd.png",
    features: ["High Voltage", "Safety Systems", "Equipment Wiring", "Code Updates"],
  },
  {
    id: 4,
    title: "Historic Home Restoration",
    category: "Residential",
    location: "Heritage District",
    date: "2023",
    description: "Careful restoration of electrical systems in 1920s home while preserving historical integrity.",
    image: "/historic-home-electrical-restoration.png",
    features: ["Heritage Compliance", "Modern Safety", "Custom Solutions", "Restoration"],
  },
  {
    id: 5,
    title: "Solar Panel Integration",
    category: "Renewable",
    location: "Suburban Area",
    date: "2025",
    description: "Complete solar panel system installation with battery backup and grid-tie capabilities.",
    image: "/solar-panel-electrical-installation.png",
    features: ["Solar Integration", "Battery Backup", "Grid-Tie", "Energy Storage"],
  },
  {
    id: 6,
    title: "Emergency Generator Setup",
    category: "Emergency",
    location: "Medical Facility",
    date: "2023",
    description: "Critical backup power system installation for medical facility with automatic transfer switches.",
    image: "/placeholder-7jcba.png",
    features: ["Backup Power", "Auto Transfer", "Medical Grade", "Emergency Systems"],
  },
  {
    id: 7,
    title: "Industrial Warehouse Lighting",
    category: "Industrial",
    location: "Manufacturing District",
    date: "2025",
    description:
      "High-bay LED lighting installation with motion sensors and energy management systems for 100,000 sq ft warehouse.",
    image: "/industrial-warehouse-led-lighting-installation.png",
    features: ["High-Bay LED", "Motion Sensors", "Energy Management", "Industrial Grade"],
  },
  {
    id: 8,
    title: "Apartment Complex Rewiring",
    category: "Residential",
    location: "Residential Area",
    date: "2023",
    description:
      "Complete electrical system upgrade for 24-unit apartment complex including panel upgrades and safety systems.",
    image: "/apartment-building-electrical-panel-upgrade.png",
    features: ["Multi-Unit", "Panel Upgrades", "Safety Systems", "Code Compliance"],
  },
  {
    id: 9,
    title: "Hospital Emergency Power",
    category: "Emergency",
    location: "Medical Center",
    date: "2025",
    description:
      "Critical power infrastructure for hospital including UPS systems, generators, and automatic transfer switches.",
    image: "/hospital-emergency-power-generator-system.png",
    features: ["UPS Systems", "Critical Power", "Medical Grade", "Redundancy"],
  },
  {
    id: 10,
    title: "Shopping Mall Electrical",
    category: "Commercial",
    location: "Shopping District",
    date: "2023",
    description:
      "Comprehensive electrical installation for new shopping mall including retail spaces and common areas.",
    image: "/shopping-mall-electrical-installation-retail-light.png",
    features: ["Retail Lighting", "Common Areas", "High Capacity", "Energy Efficient"],
  },
  {
    id: 11,
    title: "Wind Farm Connection",
    category: "Renewable",
    location: "Rural Area",
    date: "2025",
    description:
      "Electrical infrastructure for wind farm including high-voltage connections and grid integration systems.",
    image: "/wind-farm-electrical-grid-connection-high-voltage.png",
    features: ["High Voltage", "Grid Integration", "Renewable Energy", "Transmission"],
  },
  {
    id: 12,
    title: "Data Center Power",
    category: "Industrial",
    location: "Tech Park",
    date: "2025",
    description:
      "Mission-critical power infrastructure for data center including redundant systems and cooling integration.",
    image: "/data-center-electrical-power-infrastructure-server.png",
    features: ["Redundant Systems", "Mission Critical", "Cooling Integration", "High Reliability"],
  },
]

const categories = ["All", "Residential", "Commercial", "Industrial", "Renewable", "Emergency"]

export default function AllProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredProjects =
    activeCategory === "All" ? allProjects : allProjects.filter((project) => project.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/raham-electro-logo.png" alt="Raham Electro" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-foreground">Raham Electro</span>
            </Link>

            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              All <span className="text-secondary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Browse our complete portfolio of electrical installations and see the quality craftsmanship we deliver
              across all project types
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="px-6 py-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <Link key={project.id} href={`/photos/${project.id}`}>
                <Card
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-2 hover:border-secondary/50 overflow-hidden cursor-pointer h-full"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                      {project.category}
                    </Badge>
                  </div>

                  <CardContent className="p-5">
                    <h3 className="text-lg font-bold mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.date}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-semibold">Key Features</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.features.slice(0, 3).map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {project.features.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Showing {filteredProjects.length} of {allProjects.length} projects
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
