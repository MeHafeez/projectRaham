import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
            Get In <span className="text-secondary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            Ready to start your electrical project? Contact us through any of these channels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Connect With Us */}
          <div className="space-y-8">
            <Card className="bg-card/80 backdrop-blur-sm border-2">
              <CardContent className="p-10 text-center">
                <h3 className="text-3xl font-bold mb-8">Connect With Us</h3>

                {/* WhatsApp Chat Button */}
                <div className="mb-10">
                  <a
                    href="https://wa.me/5551234567?text=Hi%20Raham%20Electro,%20I%20need%20electrical%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Chat on WhatsApp
                  </a>
                </div>

                {/* Schedule Button */}
                <div className="mb-10">
                  <Link href="/schedule">
                    <Button size="lg" className="w-full text-lg py-4">
                      Schedule Consultation
                    </Button>
                  </Link>
                </div>

                {/* Social Media Links */}
                <div>
                  <h4 className="font-semibold mb-6 text-lg">Follow Us</h4>
                  <div className="flex justify-center gap-5">
                    <a
                      href="https://facebook.com/rahamelectro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a
                      href="https://instagram.com/rahamelectro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-full bg-pink-600 hover:bg-pink-700 text-white transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://twitter.com/rahamelectro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-full bg-blue-400 hover:bg-blue-500 text-white transition-colors"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a
                      href="https://linkedin.com/company/rahamelectro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-full bg-blue-700 hover:bg-blue-800 text-white transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card/80 backdrop-blur-sm border-2 hover:border-secondary/50 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center gap-5">
                  <div className="p-4 rounded-full bg-secondary/10">
                    <Phone className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Phone</h4>
                    <p className="text-muted-foreground text-base">(555) 123-4567</p>
                    <p className="text-sm text-secondary">24/7 Emergency Line</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-2 hover:border-secondary/50 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center gap-5">
                  <div className="p-4 rounded-full bg-secondary/10">
                    <Mail className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Email</h4>
                    <p className="text-muted-foreground text-base">info@rahamelectro.com</p>
                    <p className="text-sm text-secondary">We respond within 2 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-2 hover:border-secondary/50 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center gap-5">
                  <div className="p-4 rounded-full bg-secondary/10">
                    <MapPin className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Service Area</h4>
                    <p className="text-muted-foreground text-base">Greater Metro Area</p>
                    <p className="text-sm text-secondary">50+ mile radius</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-2 hover:border-secondary/50 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center gap-5">
                  <div className="p-4 rounded-full bg-secondary/10">
                    <Clock className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Business Hours</h4>
                    <p className="text-muted-foreground text-base">Mon-Fri: 7AM-6PM</p>
                    <p className="text-muted-foreground text-base">Sat: 8AM-4PM</p>
                    <p className="text-sm text-secondary">Emergency service available 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
