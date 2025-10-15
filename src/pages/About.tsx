import { Target, Eye, Award, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Dotmac Technologies</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading ICT and digital infrastructure provider transforming how businesses and 
            government agencies operate in Nigeria
          </p>
        </div>

        {/* Company Overview */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="glass border-border/50">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Dotmac Technologies is a comprehensive ICT and digital infrastructure provider in Nigeria, 
                dedicated to delivering innovative solutions that empower organizations to thrive in the digital age. 
                We serve a diverse clientele including government agencies, private sector organizations, SMEs, and 
                residential customers across Nigeria.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                With offices in Abuja and Lagos, we offer end-to-end ICT services ranging from cloud solutions 
                and cybersecurity to custom system development, network infrastructure, and professional consulting. 
                Our mission is to be the trusted technology partner that enables digital transformation and 
                operational excellence for our clients.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card className="glass border-border/50 hover-lift">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To provide world-class ICT solutions and digital infrastructure services that enable 
                organizations to achieve their strategic objectives, enhance productivity, and deliver 
                exceptional value to their stakeholders through innovative technology and exceptional service.
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-border/50 hover-lift">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To be Nigeria's most trusted and innovative ICT solutions provider, recognized for our 
                commitment to excellence, customer satisfaction, and our role in driving digital transformation 
                across public and private sectors throughout the nation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Innovation",
                description: "Continuously adopting cutting-edge technologies to deliver superior solutions"
              },
              {
                title: "Integrity",
                description: "Operating with transparency and honesty in all our business dealings"
              },
              {
                title: "Excellence",
                description: "Committed to delivering the highest quality services and support"
              },
              {
                title: "Customer Focus",
                description: "Placing our clients' needs at the center of everything we do"
              }
            ].map((value) => (
              <Card key={value.title} className="glass border-border/50 text-center hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Dotmac Technologies?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Award,
                title: "Proven Expertise",
                description: "Years of experience serving government agencies, enterprises, and SMEs with successful project deliveries and satisfied clients"
              },
              {
                icon: Users,
                title: "Comprehensive Solutions",
                description: "One-stop shop for all your ICT needs - from cloud infrastructure to cybersecurity, consulting to custom development"
              },
              {
                icon: Target,
                title: "Scalable Infrastructure",
                description: "Solutions designed to grow with your organization, ensuring long-term value and adaptability"
              },
              {
                icon: Eye,
                title: "24/7 Support",
                description: "Round-the-clock technical support and maintenance to keep your operations running smoothly"
              }
            ].map((item) => (
              <div key={item.title} className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
