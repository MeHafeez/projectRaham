import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Home, Building, Wrench, Shield, Lightbulb } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Services",
    description: "Complete home electrical solutions including wiring, panel upgrades, and smart home installations.",
    features: ["Panel Upgrades", "Outlet Installation", "Smart Home Wiring", "Ceiling Fans"],
  },
  {
    icon: Building,
    title: "Commercial Services",
    description: "Professional electrical services for businesses, offices, and industrial facilities.",
    features: ["Industrial Wiring", "Code Compliance", "Emergency Systems", "Maintenance"],
  },
  {
    icon: Zap,
    title: "Emergency Repairs",
    description: "24/7 emergency electrical services for urgent repairs and safety issues.",
    features: ["Power Outages", "Electrical Faults", "Safety Hazards", "Urgent Repairs"],
  },
  {
    icon: Lightbulb,
    title: "LED & Lighting",
    description: "Energy-efficient lighting solutions and LED retrofits for homes and businesses.",
    features: ["LED Conversion", "Landscape Lighting", "Track Lighting", "Dimmer Systems"],
  },
  {
    icon: Shield,
    title: "Safety Inspections",
    description: "Comprehensive electrical safety inspections and code compliance assessments.",
    features: ["Code Inspections", "Safety Audits", "Compliance Reports", "Risk Assessment"],
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Regular maintenance services to keep your electrical systems running safely and efficiently.",
    features: ["Preventive Care", "System Testing", "Component Replacement", "Performance Optimization"],
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
            Our <span className="text-secondary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            Comprehensive electrical services for residential, commercial, and industrial needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={service.title}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-background/80 backdrop-blur-sm border-2 hover:border-secondary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-6 p-5 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-300">
                    <IconComponent className="w-10 h-10 text-secondary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-secondary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 px-8 pb-8">
                  <p className="text-muted-foreground mb-6 text-center text-base leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
