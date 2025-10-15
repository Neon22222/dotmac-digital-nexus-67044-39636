import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageSquare, FileQuestion } from "lucide-react";
import { Link } from "react-router-dom";

const Support = () => {
  const faqs = [
    {
      question: "What areas do you provide internet services?",
      answer: "Our internet services (Fiber to the Home, Dedicated Internet, and Unlimited Plans) are primarily available in Abuja and Lagos. However, we offer cloud services, consulting, and other ICT solutions nationwide."
    },
    {
      question: "How long does internet installation take?",
      answer: "Installation typically takes 3-7 business days after your subscription is confirmed, depending on your location and infrastructure availability. We'll schedule a convenient time with you."
    },
    {
      question: "Do you provide 24/7 technical support?",
      answer: "Yes, we offer 24/7 technical support for all our services. You can reach us via phone, email, or WhatsApp anytime you need assistance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, online payments, and direct office payments. For enterprise clients, we also offer invoicing and payment terms."
    },
    {
      question: "Can I upgrade my plan at any time?",
      answer: "Yes, you can upgrade your plan at any time. The upgrade takes effect immediately, and we'll pro-rate your existing subscription."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 7-day money-back guarantee for new subscriptions. If you're not satisfied with our service within the first week, we'll refund your payment in full."
    },
    {
      question: "Do you offer custom solutions for enterprises?",
      answer: "Absolutely! We specialize in custom ICT solutions for enterprises and government agencies. Contact our sales team to discuss your specific requirements."
    },
    {
      question: "What is included in your cloud services?",
      answer: "Our cloud services include IaaS, PaaS, SaaS, virtual private servers, colocation, cloud backup, and disaster recovery. All plans include 24/7 support and SLA guarantees."
    },
    {
      question: "How secure is your data center?",
      answer: "We operate Tier III data centers with redundant power, cooling, and network infrastructure. We implement bank-grade security measures including physical security, encryption, and regular audits."
    },
    {
      question: "Can you help with government digital transformation?",
      answer: "Yes, we offer specialized government digital services including GovConnect, GovNet Direct, Govmail, and GovDNS, designed specifically for government agencies and MDAs."
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us for immediate assistance",
      action: "02019125161",
      link: "tel:02019125161"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Chat",
      description: "Quick support via WhatsApp",
      action: "+234 812 117 9536",
      link: "https://wa.me/2348121179536"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed inquiry",
      action: "Send Email",
      link: "/contact"
    },
    {
      icon: FileQuestion,
      title: "Submit a Ticket",
      description: "Track your support requests",
      action: "Open Ticket",
      link: "/contact"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Support Center</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions or get in touch with our support team
          </p>
        </div>

        {/* Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {supportChannels.map((channel) => (
            <Card key={channel.title} className="glass border-border/50 hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{channel.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{channel.description}</p>
                {channel.link.startsWith('http') ? (
                  <a href={channel.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full">
                      {channel.action}
                    </Button>
                  </a>
                ) : channel.link.startsWith('tel') ? (
                  <a href={channel.link}>
                    <Button variant="outline" className="w-full">
                      {channel.action}
                    </Button>
                  </a>
                ) : (
                  <Link to={channel.link}>
                    <Button variant="outline" className="w-full">
                      {channel.action}
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Card className="glass border-border/50">
            <CardContent className="p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="glass border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Still need help?</h3>
              <p className="text-muted-foreground mb-6">
                Our support team is ready to assist you with any questions or concerns
              </p>
              <Link to="/contact">
                <Button size="lg" className="text-lg">
                  Contact Support Team
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Support;
