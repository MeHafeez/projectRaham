"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Zap } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Modern Smart Home Installation",
    category: "Residential",
    location: "Downtown District",
    date: "2024",
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
    date: "2024",
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
    date: "2024",
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
]

const categories = ["All", "Residential", "Commercial", "Renewable", "Emergency"]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
            Our <span className="text-secondary">Recent Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            Explore our portfolio of successful electrical installations and see the quality craftsmanship we deliver
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-5 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="px-8 py-3 text-base"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <Link key={project.id} href={`/photos/${project.id}`}>
              <Card
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-2 hover:border-secondary/50 overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-5 left-5 bg-secondary text-secondary-foreground px-3 py-1">
                    {project.category}
                  </Badge>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-5 text-base text-muted-foreground mb-5">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      {project.date}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 text-base leading-relaxed">{project.description}</p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-secondary" />
                      <span className="text-base font-semibold">Key Features</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-sm px-3 py-1">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/projects">
            <Button size="lg" variant="outline" className="px-10 py-5 bg-transparent text-lg">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
