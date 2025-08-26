"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Zap, Award, Clock, Shield, Home, Building, Wrench, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AboutRahamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/#about" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-xl font-semibold text-gray-900">About Raham Shaik</h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-2xl overflow-hidden mx-auto">
              <img
                src="/professional-electrician-headshot.jpg"
                alt="Raham Shaik - Lead Electrician"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/professional-electrician-portrait.png"
                }}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Raham Shaik</span>
          </h1>
          <p className="text-xl text-gray-600 mb-6">Founder & Lead Electrician</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-blue-600 text-white px-4 py-2 text-base">
              <Clock className="w-4 h-4 mr-2" />
              10+ Years Experience
            </Badge>
            <Badge className="bg-yellow-500 text-white px-4 py-2 text-base">
              <Award className="w-4 h-4 mr-2" />
              Expert Level
            </Badge>
            <Badge className="bg-green-500 text-white px-4 py-2 text-base">
              <Shield className="w-4 h-4 mr-2" />
              Licensed & Insured
            </Badge>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Professional Journey */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-5 shadow-lg">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Professional Journey</h2>
                </div>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    This is Raham Shaik, I am an experienced electrician with a comprehensive background spanning over
                    10 years. Throughout my career, I have undertaken diverse projects, showcasing my expertise in
                    various domains.
                  </p>
                  
                  <p className="text-lg">
                    I have successfully worked on apartments, individual houses, and participated in
                    numerous critical projects that demanded a high level of skill and precision. My journey in the
                    electrical industry has been marked by continuous learning and adaptation to new technologies
                    and safety standards.
                  </p>
                  
                  <p className="text-lg">
                    From residential wiring to complex commercial installations, I've developed a deep understanding
                    of electrical systems and the importance of quality craftsmanship in every project.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">10+</div>
                    <div className="text-gray-600 text-sm">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-600 mb-1">500+</div>
                    <div className="text-gray-600 text-sm">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
                    <div className="text-gray-600 text-sm">Safety Record</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Info</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>Available 24/7 for emergencies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-600" />
                    <span>Certified Professional</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Expertise & Commitment */}
        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm mb-16">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mr-5 shadow-lg">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Expertise & Commitment</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Residential Electrical Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Commercial & Industrial Wiring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Panel Upgrades & Maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Smart Home Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Emergency Repairs & Troubleshooting</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Commitment to Quality</h3>
                <p className="text-gray-700 leading-relaxed">
                  My career journey has equipped me with the knowledge and hands-on experience necessary to tackle a
                  wide range of electrical challenges. I take pride in my ability to deliver reliable and efficient
                  solutions while adhering to safety standards and regulations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Thank you for considering my profile, and I am enthusiastic about the opportunity to bring my
                  extensive electrical expertise to your projects.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Types */}
        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm mb-16">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Types of Projects I Handle</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Residential</h3>
                <p className="text-gray-600 text-sm">
                  Home wiring, panel upgrades, smart home systems, and electrical repairs for houses and apartments.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-yellow-50 hover:bg-yellow-100 transition-colors">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Commercial</h3>
                <p className="text-gray-600 text-sm">
                  Office buildings, retail spaces, restaurants, and industrial facilities requiring professional electrical work.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Maintenance</h3>
                <p className="text-gray-600 text-sm">
                  Regular maintenance, safety inspections, and emergency repairs to keep electrical systems running safely.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Work Together?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Let's discuss your electrical project needs. I'm here to provide professional, reliable, and safe electrical services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact">
                  <Button size="lg" variant="secondary" className="px-8 py-3">
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/schedule">
                  <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
