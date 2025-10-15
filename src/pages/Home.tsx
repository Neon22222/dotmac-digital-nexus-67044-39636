import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Cloud, Shield, Network, Building2, Headphones, Code, 
  Wifi, Server, Camera, Mail, Globe, Cpu 
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import LogoCarousel from "@/components/LogoCarousel";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-tech.jpg";
import nigeriaMap from "@/assets/logos/nigeria_map-removebg-preview.png";

const Home = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud & Data Center Solutions",
      description: "Comprehensive cloud infrastructure, hosting, and data center services for businesses of all sizes.",
      features: ["IaaS, SaaS, PaaS", "Virtual Private Servers", "Cloud Backup & Storage", "Disaster Recovery"]
    },
    {
      icon: Building2,
      title: "Government Digital Services",
      description: "Specialized digital infrastructure solutions for government agencies and MDAs.",
      features: ["GovConnect", "GovNet Direct", "Govmail", "GovDNS (.gov.ng)"]
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Enterprise-grade security solutions to protect your digital assets and infrastructure.",
      features: ["Security Consulting (ISMS)", "Protection Services", "Security Advisory", "Compliance Management"]
    },
    {
      icon: Network,
      title: "IT & Network Solutions",
      description: "End-to-end IT solutions from network design to custom system development.",
      features: ["Network Setup & Optimization", "Hardware Procurement", "Custom ERP Systems", "CCTV & Surveillance"]
    },
    {
      icon: Headphones,
      title: "Contact & Collaboration",
      description: "Hosted communication solutions for seamless business operations.",
      features: ["Contact Center Services", "Teleconferencing", "Video Conferencing", "Unified Communications"]
    },
    {
      icon: Code,
      title: "Consulting & Training",
      description: "Expert IT consulting and comprehensive capacity building programs.",
      features: ["IT Consulting", "Project Management", "Training & Certification", "Technical Augmentation"]
    },
    {
      icon: Wifi,
      title: "Internet Services",
      description: "High-speed, reliable internet connectivity for homes and businesses in Abuja and Lagos.",
      features: ["Fiber to the Home (FTTH)", "Dedicated Internet", "Unlimited Plans", "Managed WiFi"]
    },
    {
      icon: Server,
      title: "Email & Domain Services",
      description: "Professional email hosting, domain registration, and web hosting solutions.",
      features: ["Email as a Service", "Domain Sales", "Shared Linux Hosting", "Virtual Machines"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-0 overflow-hidden bg-primary">        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Content */}
            <div className="animate-fade-in text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Empowering Nigeria Through
                <span className="block mt-2">Innovative Technology Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
                Comprehensive ICT and digital infrastructure provider, delivering cutting-edge solutions for homes, businesses, and government agencies across Nigeria.
              </p>
              <Link to="/services">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
                  Learn More
                </Button>
              </Link>
            </div>
            
            {/* Right Side - Map with Floating Cards */}
            <div className="relative hidden lg:block h-[500px]">
              {/* Nigeria Map with Dotted Effect */}
              <div className="absolute inset-0 flex items-center justify-center opacity-60">
                <img 
                  src={nigeriaMap} 
                  alt="Nigeria Map" 
                  className="w-[120%] h-auto object-contain"
                  style={{
                    filter: 'contrast(1.5) brightness(0.9)',
                    mixBlendMode: 'screen'
                  }}
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute top-0 right-0 glass rounded-2xl p-6 w-48 animate-float">
                <Cloud className="h-12 w-12 text-primary mb-3" />
                <h3 className="font-semibold text-foreground">Cloud Solutions</h3>
              </div>
              <div className="absolute top-1/4 left-0 glass rounded-2xl p-6 w-48 animate-float" style={{ animationDelay: '1s' }}>
                <Shield className="h-12 w-12 text-primary mb-3" />
                <h3 className="font-semibold text-foreground">Cybersecurity</h3>
              </div>
              <div className="absolute bottom-1/4 right-12 glass rounded-2xl p-6 w-48 animate-float" style={{ animationDelay: '2s' }}>
                <Building2 className="h-12 w-12 text-primary mb-3" />
                <h3 className="font-semibold text-foreground">Gov Services</h3>
              </div>
              <div className="absolute bottom-0 left-1/4 glass rounded-2xl p-6 w-48 animate-float" style={{ animationDelay: '3s' }}>
                <Network className="h-12 w-12 text-primary mb-3" />
                <h3 className="font-semibold text-foreground">IT Solutions</h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section with Curved Transition */}
        <div className="relative mt-16">
          {/* Curved top edge */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-background" style={{
            clipPath: 'ellipse(70% 100% at 50% 100%)',
            transform: 'translateY(-100%)'
          }} />
          
          <div className="bg-background pt-16 pb-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">Years of Innovation</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Service Solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Technical Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="mask">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                End-to-end ICT solutions tailored to meet the unique needs of your organization
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} direction="up" delay={index * 0.1}>
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg hover:bg-primary hover:text-white transition-colors duration-300">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="mask">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Dotmac?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Trusted by businesses and government agencies across Nigeria
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Cpu, 
                title: "Cutting-Edge Technology", 
                description: "Latest infrastructure and innovative solutions"
              },
              { 
                icon: Shield, 
                title: "Enterprise Security", 
                description: "Bank-grade security and compliance standards"
              },
              { 
                icon: Headphones, 
                title: "24/7 Support", 
                description: "Round-the-clock technical assistance"
              },
              { 
                icon: Building2, 
                title: "Proven Track Record", 
                description: "Serving SMEs, enterprises, and government"
              }
            ].map((feature, index) => (
              <ScrollReveal key={feature.title} direction="up" delay={index * 0.15}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* CTA & Newsletter Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="mask">
            <div className="relative max-w-5xl mx-auto">
              {/* Decorative corner accents */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-3xl" />
              
              <div className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    <span className="text-sm font-semibold text-primary">Let's Work Together</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Ready to Transform
                    <span className="block mt-2 text-gradient">Your Business?</span>
                  </h2>
                  
                  <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                    Get in touch with our team to discuss your ICT infrastructure needs and discover how we can help you achieve your digital transformation goals
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/contact" className="w-full sm:w-auto">
                      <Button size="lg" className="text-lg px-10 py-7 w-full sm:w-auto hover-lift shadow-lg hover:shadow-xl">
                        Get Started Today
                      </Button>
                    </Link>
                    <a 
                      href="https://wa.me/2348121179536" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button size="lg" variant="outline" className="text-lg px-10 py-7 w-full sm:w-auto hover-lift border-2 hover:bg-primary hover:text-white transition-colors duration-300">
                        Chat on WhatsApp
                      </Button>
                    </a>
                  </div>
                  
                  <div className="mt-12 pt-12 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-4">Trusted by 500+ organizations</p>
                    <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground mb-10">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        <span>ISO Certified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Headphones className="h-4 w-4 text-primary" />
                        <span>24/7 Support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-primary" />
                        <span>Government Approved</span>
                      </div>
                    </div>
                    
                    {/* Newsletter */}
                    <div className="max-w-2xl mx-auto">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        Join Our Community
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Stay Updated
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Subscribe to our newsletter for the latest insights on technology solutions and digital transformation.
                      </p>
                      
                      <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="flex-1 px-6 py-3 rounded-lg border border-input bg-background/80 backdrop-blur-sm focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-lg hover:shadow-xl transition-all">
                          Subscribe
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
