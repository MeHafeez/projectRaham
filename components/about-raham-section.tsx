"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutRahamSection() {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-visible">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          {/* <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-base font-medium">Meet Our Founder</Badge> */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            About <span className="text-blue-600">Raham Shaik</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-center">
          <Link href="/about-raham" className="block w-full max-w-2xl">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-2 hover:border-blue-500/50 cursor-pointer overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Background Image */}
                  <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-2xl font-bold mb-2">Raham Shaik</h3>
                        <p className="text-blue-100 text-lg">Founder & Lead Electrician</p>
                      </div>
                    </div>
                  </div>

                  {/* Profile Image Overlay */}
                  <div className="absolute -bottom-16 left-8">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden">
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
                    </div>
                  </div>

                  {/* Click to View More */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:bg-white/30 transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-20 pb-6 px-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50 px-3 py-1">
                      <Clock className="w-4 h-4 mr-1" />
                      10+ Years Experience
                    </Badge>
                    <Badge variant="outline" className="border-yellow-200 text-yellow-700 bg-yellow-50 px-3 py-1">
                      <Award className="w-4 h-4 mr-1" />
                      Expert Level
                    </Badge>
                  </div>

                  <p className="text-gray-600 text-base leading-relaxed mb-4">
                    Experienced electrician with a comprehensive background spanning over 10 years. 
                    Successfully worked on apartments, individual houses, and numerous critical projects 
                    that demanded high skill and precision.
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Click to learn more about Raham's journey
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                      <span>View Full Profile</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  )
}
