"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, HardHat, Ruler, Wrench, Cog, Home, Building2, Hammer } from "lucide-react";
import { images } from "@/config/images";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = {
  title: "Services | Atlas Construction Group",
  description: "Explore Atlas Construction Group's full range of services including commercial, residential, and industrial construction in Houston.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "Full-scale commercial construction services including office buildings, retail centers, and hospitality venues. We handle everything from site selection to final inspection.",
      features: ["Office Build-outs", "Retail Centers", "Hospitality", "Tenant Improvements"],
      image: images["service-1"]
    },
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom home building and high-end renovations. We bring architectural vision to life with meticulous attention to detail and premium materials.",
      features: ["Custom Homes", "Kitchen & Bath Remodel", "Home Additions", "Outdoor Living"],
      image: images["service-2"]
    },
    {
      icon: Cog,
      title: "Industrial Services",
      description: "Heavy industrial construction requiring specialized knowledge of safety regulations, equipment, and operational workflows.",
      features: ["Warehousing", "Manufacturing Plants", "Distribution Centers", "Infrastructure"],
      image: images["service-3"]
    },
    {
      icon: Hammer,
      title: "Design-Build",
      description: "A unified workflow where design and construction teams work together under one contract. This method reduces risk and delivers projects faster.",
      features: ["Single Point of Contact", "Cost Efficiency", "Faster Delivery", "Collaborative Process"],
      image: images["gallery-1"]
    },
    {
      icon: Ruler,
      title: "Project Management",
      description: "Comprehensive oversight for your construction project. We manage schedules, budgets, subcontractors, and quality control.",
      features: ["Scheduling", "Budget Control", "Subcontractor Management", "Quality Assurance"],
      image: images["gallery-2"]
    },
    {
      icon: Wrench,
      title: "Renovation & Retrofitting",
      description: "Updating existing structures for modern efficiency, aesthetics, and code compliance while preserving historical character where desired.",
      features: ["Structural Updates", "Energy Efficiency", "Seismic Retrofitting", "Historic Preservation"],
      image: images["gallery-3"]
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-slate-50 border-b border-gray-200">
        <div className="container-custom text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-text-heading mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted max-w-3xl mx-auto"
          >
            From ground-up construction to intricate renovations, Atlas Construction Group offers a complete suite of building services tailored to Houston&apos;s diverse market.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 border border-gray-100 group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={service.image.src}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-secondary/10 text-secondary rounded-sm">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-text-heading">{service.title}</h2>
                  </div>
                  <p className="text-text-muted mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Capabilities</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-text-muted">
                          <ChevronRight className="w-4 h-4 text-accent mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href="#contact"
                    className="inline-flex items-center text-secondary font-bold hover:text-accent transition-colors group/link"
                  >
                    Request Quote for {service.title} <ChevronRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-blue-200">
              A proven methodology that ensures efficiency, quality, and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {["Consultation", "Design & Planning", "Construction", "Walkthrough"].map((step, index) => (
              <div key={index} className="relative text-center md:text-left">
                <div className="text-6xl font-bold text-white/10 absolute -top-8 -left-2 md:-left-4 z-0">
                  0{index + 1}
                </div>
                <div className="relative z-10 pl-0 md:pl-8 pt-8">
                  <h3 className="text-2xl font-bold text-accent mb-3">{step}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {index === 0 && "We meet to understand your vision, budget, and timeline, providing an initial feasibility assessment."}
                    {index === 1 && "Our architects and engineers create detailed blueprints, obtain permits, and finalize materials."}
                    {index === 2 && "Construction begins with regular updates, strict safety protocols, and quality control checkpoints."}
                    {index === 3 && "We conduct a final inspection together, ensuring every detail meets our high standards before handover."}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ChevronRight className="w-8 h-8 text-white/20" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}