import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Github, Linkedin, MapPin, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-balance">Abdullah Ishaq</h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-extralight mb-12 text-balance">
            Mobile and Web Developer
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Islamabad, Pakistan</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <a href="https://wa.me/923462207429" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                +92-346-2207429
              </a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <a href="mailto:abdullahishaq2310@gmail.com" className="hover:text-foreground transition-colors">
                abdullahishaq2310@gmail.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="sm" asChild className="font-light bg-transparent">
              <a href="https://github.com/abdullah2310ishaq" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="font-light bg-transparent">
              <a href="https://linkedin.com/in/abdullah-ishaq" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extralight text-center mb-16 text-balance">Experience</h2>
          <div className="space-y-6">
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-light mb-2">Flutter Developer</h3>
                    <p className="text-muted-foreground font-light">HexaIT Solutions – Islamabad, Pakistan</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>Nov 2024 – Present</span>
                  </div>
                </div>
                <ul className="space-y-3 text-muted-foreground font-light">
                  <li>Built production-grade Flutter applications with Firebase and API integrations</li>
                  <li>Implemented payment systems, maps, and backend connectivity</li>
                  <li>Deployed apps to Google Play Store and Apple App Store</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-light mb-2">Flutter Developer Intern</h3>
                    <p className="text-muted-foreground font-light">HexaIT Solutions – Islamabad, Pakistan</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>Jan 2024 – Sep 2024</span>
                  </div>
                </div>
                <ul className="space-y-3 text-muted-foreground font-light">
                  <li>Contributed to an e-learning platform using Flutter and Firebase</li>
                  <li>Assisted in API integration, state management, and UI/UX refinement</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extralight mb-6 text-balance">Featured Projects</h2>
            <p className="text-muted-foreground font-light text-lg mb-8">
              Mobile applications built with Flutter and modern technologies
            </p>
            <Button asChild variant="outline" className="font-light bg-transparent">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-background">
              <CardContent className="p-8">
                
                <h3 className="text-xl font-light mb-3">iMechano</h3>
                <p className="text-muted-foreground font-light text-sm mb-6 leading-relaxed">
                  Mechanic service booking app with real-time tracking and secure payments for Qatar market.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="font-light">
                    Flutter
                  </Badge>
                  <Badge variant="secondary" className="font-light">
                    Firebase
                  </Badge>
                  <Badge variant="secondary" className="font-light">
                    Maps
                  </Badge>
                   <Badge variant="secondary" className="font-light">
                    REST APIs
                  </Badge>
                  <Badge variant="secondary" className="font-light">
                    Push Notifications
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-background">
              <CardContent className="p-8">
                
                <h3 className="text-xl font-light mb-3">Umrah Packages</h3>
                <p className="text-muted-foreground font-light text-sm mb-6 leading-relaxed">
                  Dual apps for Umrah package bookings with secure flows and admin management tools.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="font-light">
                    Flutter
                  </Badge>
                  <Badge variant="secondary" className="font-light">
                    Firebase
                  </Badge>
                  <Badge variant="secondary" className="font-light">
                    REST APIs
                  </Badge>
                 
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-background">
              <CardContent className="p-8">
                
                <h3 className="text-xl font-light mb-3">MEDI-CONNECT</h3>
                <p className="text-muted-foreground font-light text-sm mb-6 leading-relaxed">
                  Healthcare management system for Fazaia Medical College with patient tracking and prescriptions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="font-light">
                    Flutter
                  </Badge>
                  <Badge variant="secondary" className="font-light">
                    Firebase
                  </Badge>
                  <Badge variant="secondary" className="font-light">
                    Provider
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-background">
              <CardContent className="p-8">
                
                <h3 className="text-xl font-light mb-3">BridgeIt</h3>
                <p className="text-muted-foreground font-light text-sm mb-6 leading-relaxed">
                  Platform connecting students with industry experts, featuring secure payments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="font-light">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="font-light">
                    Stripe
                  </Badge>
                  <Badge variant="secondary" className="font-light">
                    .NET
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-background">
              <CardContent className="p-8">
                
                <h3 className="text-xl font-light mb-3">More Projects</h3>
                <p className="text-muted-foreground font-light text-sm mb-6 leading-relaxed">
                  Explore additional mobile and web applications in our complete portfolio.
                </p>
                <Button asChild variant="outline" className="font-light bg-transparent">
                  <Link href="/projects">
                    View All Projects
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extralight text-center mb-16 text-balance">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <h3 className="text-lg font-light mb-6 text-muted-foreground">Languages</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="font-light">
                  Dart
                </Badge>
                <Badge variant="outline" className="font-light">
                  JavaScript
                </Badge>
                <Badge variant="outline" className="font-light">
                  TypeScript
                </Badge>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-light mb-6 text-muted-foreground">Frameworks</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="font-light">
                  Flutter
                </Badge>
                <Badge variant="outline" className="font-light">
                  Next.js
                </Badge>
                <Badge variant="outline" className="font-light">
                  React
                </Badge>
                <Badge variant="outline" className="font-light">
                  Express
                </Badge>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-light mb-6 text-muted-foreground">Backend & Database</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="font-light">
                  Firebase
                </Badge>
                <Badge variant="outline" className="font-light">
                  REST APIs
                </Badge>
                <Badge variant="outline" className="font-light">
                  SQL
                </Badge>
                <Badge variant="outline" className="font-light">
                  Hive
                </Badge>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-light mb-6 text-muted-foreground">Tools & Deployment</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="font-light">
                  Git
                </Badge>
                <Badge variant="outline" className="font-light">
                  Play Store
                </Badge>
                <Badge variant="outline" className="font-light">
                  App Store
                </Badge>
                <Badge variant="outline" className="font-light">
                  Vercel
                </Badge>
                 <Badge variant="outline" className="font-light">
                  Netlify
                </Badge>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-light mb-6 text-muted-foreground">State Managements</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="font-light">
                  Provider
                </Badge>
                <Badge variant="outline" className="font-light">
                  Bloc
                </Badge>
                <Badge variant="outline" className="font-light">
                  GetX
                </Badge>
                <Badge variant="outline" className="font-light">
                  Zustand
                </Badge>
                 <Badge variant="outline" className="font-light">
                  Context API
                </Badge>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extralight text-center mb-16 text-balance">Education</h2>
          <Card className="border-0 shadow-sm bg-background">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-2xl font-light mb-2">B.S. in Computer Science</h3>
                  <p className="text-muted-foreground font-light">Air University – Islamabad, Pakistan</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span>Aug 2021 – May 2025</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-border">
        <p className="text-sm text-muted-foreground font-light">
          © 2024 Abdullah Ishaq. Built with Next.js and Tailwind CSS.
        </p>
      </footer>
    </div>
  )
}
