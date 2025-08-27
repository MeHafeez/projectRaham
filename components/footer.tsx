import { Zap, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-secondary/20">
                <Zap className="w-7 h-7 text-secondary" />
              </div>
              <span className="text-2xl font-bold">Raham Electro</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed text-base">
              Professional electrical services led by Raham Shaik with over 10 years of experience. Licensed, insured,
              and committed to safety and excellence.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-base">
                <Phone className="w-5 h-5 text-secondary" />
                <span>+91 9182389553</span>
              </div>
              <div className="flex items-center gap-3 text-base">
                <Mail className="w-5 h-5 text-secondary" />
                <span>rahamelectro@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-base">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>Guntur And Vijayawada</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-secondary transition-colors text-base">
                  Residential Wiring
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors text-base">
                  Commercial Electrical
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors text-base">
                  Panel Upgrades
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors text-base">
                  Smart Home Systems
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors text-base">
                  Emergency Repairs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors text-base">
                  Safety Inspections
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-secondary transition-colors text-base">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors text-base">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors text-base">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors text-base">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors text-base">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Business Hours</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex justify-between text-base">
                <span>Monday - Friday</span>
                <span>7AM - 6PM</span>
              </div>
              <div className="flex justify-between text-base">
                <span>Saturday</span>
                <span>8AM - 4PM</span>
              </div>
              <div className="flex justify-between text-base">
                <span>Sunday</span>
                <span>Emergency Only</span>
              </div>
              <div className="mt-6 p-4 rounded-lg bg-secondary/20 border border-secondary/30">
                <p className="text-base font-semibold text-secondary">24/7 Emergency Service Available</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-16 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-primary-foreground/60 text-center md:text-left text-base">
              © 2025 Raham Electro. All rights reserved. Licensed & Insured Electrical Contractor.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-primary-foreground/60 text-base">Website by</span>
              <a
                href="https://hallowbyte.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 border border-secondary/30 hover:border-secondary/50"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-secondary to-blue-400 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">H</span>
                </div>
                <span className="text-secondary font-semibold group-hover:text-secondary/90 transition-colors text-base">
                  Hallowbyte
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
