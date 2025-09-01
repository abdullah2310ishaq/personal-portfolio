import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Smartphone, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "iMechano Admin + User App",
      description:
        "A comprehensive mechanic service booking application designed for the Qatar market. Features real-time tracking of service requests, secure payment integration, and interactive map navigation to connect users with nearby mechanics.",
      longDescription:
        "iMechano revolutionizes the automotive service industry in Qatar by providing a seamless platform for users to book mechanic services. The app includes advanced features like real-time GPS tracking, multiple payment gateways, service history, ratings and reviews, and push notifications for service updates.",
      icon: "🚗",
      tech: ["Flutter", "Firebase", "REST APIs", "Payment Integration", "Google Maps", "Push Notifications"],
      features: [
        "Real-time service tracking",
        "Secure payment processing",
        "Interactive map navigation",
        "Service history and receipts",
        "Mechanic ratings and reviews",
        "Multi-language support (Arabic/English)",
      ],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.hexaait.imechanoo.user",
      appStoreUrl: "https://apps.apple.com/us/app/imechano-user-app/id6450166091",
      image: "/imechano.jpg",
    },
    {
      id: 2,
      title: "Umrah Packages App",
      description:
        "Dual application system consisting of agency and user versions for Umrah package bookings. Provides secure booking flows, comprehensive package management, and administrative tools for travel agencies.",
      longDescription:
        "A complete ecosystem for Umrah travel management featuring separate applications for travel agencies and end users. The system handles package creation, booking management, payment processing, and customer communication throughout the pilgrimage journey.",
      icon: "🕋",
      tech: ["Flutter", "Firebase", "REST APIs", "Admin Dashboard", "Payment Gateway"],
      features: [
        "Dual app architecture (Agency + User)",
        "Package browsing and comparison",
        "Secure booking and payment system",
        "Document management",
        "Real-time booking status",
        "Multi-currency support",
      ],
      playStoreUrl: "",
      appStoreUrl: "https://apps.apple.com/us/app/ummrah-packages/id6444036677?platform=iphone",
      image: "/umrah.png",
    },
    {
      id: 3,
      title: "Umrah Packages Agency App",
      description:
        "Administrative application designed for travel agencies to manage Umrah packages, bookings, customer relationships, and business operations. Part of the comprehensive Umrah booking ecosystem.",
      longDescription:
        "The agency counterpart of the Umrah packages system, providing travel agencies with powerful tools to create and manage packages, handle customer bookings, process payments, and maintain comprehensive customer relationships. Features real-time dashboard analytics and complete booking lifecycle management.",
      icon: "🏢",
      tech: ["Flutter", "Firebase", "Admin Dashboard", "Analytics", "CRM Integration", "Payment Management"],
      features: [
        "Package creation and management",
        "Customer booking oversight",
        "Revenue and analytics dashboard",
        "Customer relationship management",
        "Payment processing and refunds",
        "Booking status management",
        "Commission tracking",
        "Report generation",
      ],
      playStoreUrl: "#",
      appStoreUrl: "https://apps.apple.com/us/app/ummrah-packages-agency-app/id6499033224",
      image: "/umrah.png",
    },
    {
      id: 4,
      title: "Al Shifa Institute App",
      description:
        "Educational platform with integrated donation system, course purchases, and premium content delivery. Built from scratch with comprehensive source development and subscription management.",
      longDescription:
        "A complete educational ecosystem for Al Shifa Institute featuring course management, donation processing, and premium content delivery. The app includes subscription management through RevenueCat, secure payment processing, and comprehensive user progress tracking.",
      icon: "🎓",
      tech: ["Flutter", "Firebase", "RevenueCat", "Payment Integration", "Content Management"],
      features: [
        "Course catalog and enrollment",
        "Donation management system",
        "Premium content subscriptions",
        "Progress tracking and certificates",
        "Offline content download",
        "Multi-tier access control",
      ],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.hexait.alshifaainstitute&hl=en&pli=1",
      appStoreUrl: "https://apps.apple.com/us/app/al-shifaa-islamic-center/id6737269360",
      image: "/alshifa.png",
    },
    {
      id: 5,
      title: "Afghan Wireless Mobile App",
      description:
        "Comprehensive telecom application providing mobile services, package browsing, account recharges, bill payments, and customer support for Afghan Wireless subscribers.",
      longDescription:
        "A full-featured telecommunications app serving Afghan Wireless customers with complete account management, service activation, bill payment, and customer support. Built with SOAP API integration and real-time service monitoring.",
      icon: "📱",
      tech: ["Flutter", "SOAP APIs", "Push Notifications", "Payment Gateway", "Customer Support"],
      features: [
        "Account balance and usage tracking",
        "Service package browsing and activation",
        "Bill payment and recharge options",
        "Customer support chat",
        "Service outage notifications",
        "Multi-language support",
      ],
    
     
      image: "/afghan.png",
    },
    {
      id: 6,
      title: "Local Music Player App",
      description:
        "Feature-rich offline music player with advanced directory browsing, playlist creation, and comprehensive playback controls. Designed for users who prefer local music storage.",
      longDescription:
        "A sophisticated music player application that excels in local music management. Features include advanced audio format support, customizable equalizer, sleep timer, and intelligent playlist generation based on listening habits.",
      icon: "🎵",
      tech: ["Flutter", "Local Storage", "Audio Processing", "File Management","Hive DB"],
      features: [
        "Directory-based music browsing",
        "Custom playlist creation and management",
        "Advanced audio controls and equalizer",
        "Sleep timer and repeat modes",
        "Album art and metadata display",
        "Background playback support",
      ],
      playStoreUrl: "#",
      appStoreUrl: "#",
      image: "/music-player-app-interface-dark-theme-audio-contro.png",
    },
    {
      id: 7,
      title: "BridgeIt (Final Year Project)",
      description:
        "Innovative platform connecting students with industry experts, featuring secure payment processing and comprehensive project management tools for educational collaboration.",
      longDescription:
        "BridgeIt serves as a bridge between academic learning and industry expertise. The platform facilitates mentorship programs, project collaborations, and skill development through direct interaction with industry professionals. Built with modern web technologies and secure payment processing.",
      icon: "🌉",
      tech: ["Next.js", "Stripe", ".NET APIs", "SQL Database", "Real-time Chat"],
      features: [
        "Expert-student matching system",
        "Secure payment processing via Stripe",
        "Project collaboration tools",
        
        "Progress tracking and milestones",
        "Comprehensive user profiles",
      ],
      githubUrl: "https://github.com/abdullah2310ishaq/bridgeit",
      liveUrl: "https://bridgeit-cyan.vercel.app/",
      image: "/web-platform-interface-student-expert-connection-d.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="py-12 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Button variant="ghost" size="sm" asChild className="mb-6 font-light">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </Button>
          <h1 className="text-4xl md:text-6xl font-extralight tracking-tight mb-4 text-balance">Projects</h1>
          <p className="text-xl text-muted-foreground font-light text-balance">
            Mobile applications and web platforms built with modern technologies
          </p>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card key={project.id} className="border-0 shadow-sm bg-transparent overflow-hidden">
                <CardContent className="p-0">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                  >
                    {/* Project Image */}
                    <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={`${project.title} screenshot`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                          <span className="text-2xl">{project.icon}</span>
                        </div>
                        <h2 className="text-3xl font-light">{project.title}</h2>
                      </div>

                      <p className="text-muted-foreground font-light leading-relaxed">{project.longDescription}</p>

                      {/* Tech Stack */}
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-3">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="font-light">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-3">Key Features</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1 h-1 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                              <span className="font-light">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3 pt-4">
                        {project.playStoreUrl && (
                          <Button variant="outline" size="sm" asChild className="font-light bg-transparent">
                            <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                              <Smartphone className="w-4 h-4 mr-2" />
                              Play Store
                            </a>
                          </Button>
                        )}
                        {project.appStoreUrl && (
                          <Button variant="outline" size="sm" asChild className="font-light bg-transparent">
                            <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer">
                              <Smartphone className="w-4 h-4 mr-2" />
                              App Store
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" asChild className="font-light bg-transparent">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              GitHub
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button variant="outline" size="sm" asChild className="font-light bg-transparent">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <Globe className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
