"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Wrench } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Davis",
    role: "Commercial Specialist",
    experience: "8+ Years",
    specialties: ["Industrial Systems", "Code Compliance", "Energy Efficiency"],
    image: "/female-electrician-professional-headshot.png",
  },
  {
    name: "Tom Wilson",
    role: "Emergency Response Specialist",
    experience: "7+ Years",
    specialties: ["Emergency Repairs", "Troubleshooting", "Safety Inspections"],
    image: "/electrician-with-safety-gear-headshot.png",
  },
  {
    name: "Mike Rodriguez",
    role: "Residential Expert",
    experience: "6+ Years",
    specialties: ["Home Wiring", "Smart Home Systems", "Panel Upgrades"],
    image: "/professional-electrician-headshot.png",
  },
  {
    name: "Alex Chen",
    role: "Apprentice Electrician",
    experience: "2+ Years",
    specialties: ["Basic Installations", "Maintenance", "Learning & Development"],
    image: "/young-electrician-apprentice-headshot.png",
  },
  {
    name: "David Kumar",
    role: "Solar & Renewable Energy Specialist",
    experience: "5+ Years",
    specialties: ["Solar Installations", "Battery Systems", "Green Energy Solutions"],
    image: "/solar-electrician-professional-headshot.png",
  },
]

export default function TeamSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
            Our <span className="text-secondary">Professional Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            Working alongside Raham, our certified electricians bring specialized expertise and dedication to every
            project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-2 hover:border-secondary/50 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge className="absolute top-5 left-5 bg-secondary text-secondary-foreground px-3 py-1">{member.role}</Badge>
              </div>

              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">{member.name}</h3>

                <div className="flex items-center gap-3 text-base text-muted-foreground mb-5">
                  <Award className="w-5 h-5" />
                  <span>{member.experience} Experience</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Wrench className="w-5 h-5 text-secondary" />
                    <span className="text-base font-semibold">Specialties</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {member.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline" className="text-sm px-3 py-1">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
