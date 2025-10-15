
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import logos
import fmohLogo from "@/assets/logos/fmoh.png";
import sonLogo from "@/assets/logos/son.png";
import petadLogo from "@/assets/logos/petad.png";
import nhiaLogo from "@/assets/logos/nhia.png";
import nnpcLogo from "@/assets/logos/nnpc.png";

const logos = [
  { src: fmohLogo, alt: "FMOH" },
  { src: sonLogo, alt: "SON" },
  { src: petadLogo, alt: "PETAD" },
  { src: nhiaLogo, alt: "NHIA" },
  { src: nnpcLogo, alt: "NNPC" },
];

const LogoCarousel = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Our Partners</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powering digital transformation for government agencies and enterprises across Nigeria
          </p>
        </div>
        
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2500,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {logos.map((logo, index) => (
                <CarouselItem key={index} className="pl-6 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover-lift h-40 flex items-center justify-center">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-h-24 max-w-full object-contain transition-all duration-300 brightness-100 hover:brightness-110 hover:scale-110"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
