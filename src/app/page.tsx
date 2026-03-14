import Link from "next/link";
import { ArrowRight, CheckCircle, HardHat, Building2, Home, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={images["hero"].src}
            alt={images["hero"].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-white text-sm font-medium">Currently serving Greater Houston</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Building Houston's <br />
              <span className="text-accent">Future</span> Today.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
              From high-rise commercial developments to custom residential renovations, Atlas Construction Group delivers precision engineering and unmatched craftsmanship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="primary">
                <Link href="/#contact">Get a Free Estimate</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <StatsStrip />

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Comprehensive Construction Services
            </h2>
            <p className="text-gray-600 text-lg">
              We handle every phase of construction with in-house experts, ensuring quality control from the first blueprint to the final walkthrough.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="text-secondary" />,
                title: "Commercial Construction",
                desc: "Office buildings, retail centers, and industrial facilities built to code and on schedule.",
                features: ["Steel Framing", "Concrete Pouring", "Tenant Finish-Outs"]
              },
              {
                icon: <Home className="text-secondary" />,
                title: "Residential Remodeling",
                desc: "Transform your home with luxury renovations including kitchens, bathrooms, and additions.",
                features: ["Custom Cabinetry", "Room Additions", "Whole Home Reno"]
              },
              {
                icon: <Wrench className="text-secondary" />,
                title: "Industrial Services",
                desc: "Heavy-duty solutions for warehouses, factories, and specialized infrastructure.",
                features: ["Equipment Installation", "Structural Repair", "Safety Compliance"]
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={16} className="text-accent" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="secondary" size="lg">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Featured Projects
              </h2>
              <p className="text-gray-600 text-lg">
                A glimpse into our portfolio of award-winning builds across Houston.
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex">
              <Link href="/projects">View Full Portfolio</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "gallery-1", title: "The Galleria Tower Renovation", loc: "Houston, TX", type: "Commercial" },
              { img: "gallery-2", title: "River Oaks Modern Estate", loc: "River Oaks, TX", type: "Residential" },
              { img: "gallery-3", title: "Port of Houston Warehouse", loc: "Pasadena, TX", type: "Industrial" },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3]"
              >
                <img
                  src={images[project.img as keyof typeof images].src}
                  alt={images[project.img as keyof typeof images].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2 block">
                    {project.type}
                  </span>
                  <h3 className="text-xl font-heading font-bold mb-1">{project.title}</h3>
                  <p className="text-gray-300 text-sm flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-accent"></span>
                    {project.loc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={images["testimonial-bg"].src} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12">
            What Our Clients Say
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 text-left">
            {[
              { name: "Maria L.", role: "Property Manager", text: "Atlas Construction transformed our 50-unit apartment complex in record time. Their attention to detail and cleanliness throughout the process was outstanding." },
              { name: "James T.", role: "Homeowner", text: "We hired Atlas for a full kitchen renovation. They stayed on budget and the quality of the cabinetry installation is better than what we see in model homes." }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="w-5 h-5 text-accent fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-gray-200 mb-4 italic">"{t.text}"</p>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-gray-400">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}