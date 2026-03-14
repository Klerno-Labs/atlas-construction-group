import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, HardHat, Ruler, Wrench, ShieldCheck, ChevronRight } from "lucide-react";
import { images } from "@/config/images";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { ContactSection } from "@/components/sections/ContactSection";
import { siteConfig } from "@/config/site";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const services = [
    {
      icon: HardHat,
      title: "Commercial Construction",
      description: "From office complexes to retail spaces, we deliver commercial projects on time and within budget.",
      link: "/services"
    },
    {
      icon: Ruler,
      title: "Residential Renovation",
      description: "Transforming homes with high-end renovations, additions, and complete remodeling services.",
      link: "/services"
    },
    {
      icon: Wrench,
      title: "Industrial Services",
      description: "Specialized construction for manufacturing plants, warehouses, and heavy industrial facilities.",
      link: "/services"
    },
    {
      icon: ShieldCheck,
      title: "Safety & Compliance",
      description: "Uncompromising safety standards ensuring OSHA compliance and zero-incident job sites.",
      link: "/services"
    }
  ];

  const projects = [
    {
      title: "The Westheimer Tower",
      location: "Houston, TX",
      category: "Commercial",
      image: images["gallery-1"]
    },
    {
      title: "Memorial Heights Estate",
      location: "River Oaks, TX",
      category: "Residential",
      image: images["gallery-2"]
    },
    {
      title: "Port Logistics Hub",
      location: "Pasadena, TX",
      category: "Industrial",
      image: images["gallery-3"]
    }
  ];

  const testimonials = [
    {
      name: "Michael R.",
      role: "CEO, TechSpace Solutions",
      text: "Atlas Construction delivered our new headquarters ahead of schedule. Their attention to detail and safety protocols were impressive."
    },
    {
      name: "Sarah L.",
      role: "Homeowner",
      text: "We couldn't be happier with our kitchen renovation. The team was professional, clean, and the craftsmanship is top-notch."
    },
    {
      name: "David K.",
      role: "Operations Director",
      text: "Reliable, honest, and incredibly skilled. They handled our warehouse expansion with zero downtime to our operations."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": siteConfig.name,
            "image": images.hero.src,
            "telephone": siteConfig.contact.phone,
            "email": siteConfig.contact.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4521 Westheimer Rd, Suite 200",
              "addressLocality": "Houston",
              "addressRegion": "TX",
              "postalCode": "77027",
              "addressCountry": "US"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "08:00",
              "closes": "18:00"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            className="object-cover opacity-50"
            sizes="100vw"
          />
        </div>
        
        <div className="container-custom relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-2 mb-6 bg-accent/20 border border-accent text-accent rounded-sm font-bold text-sm tracking-wider uppercase">
              Licensed & Insured
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Building Houston&apos;s <span className="text-accent">Future</span> With Precision.
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
              Atlas Construction Group delivers superior commercial and residential construction services. We turn blueprints into landmarks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="px-8 py-4 bg-accent text-primary font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 text-center"
              >
                Start Your Project
              </Link>
              <Link
                href="/#projects"
                className="px-8 py-4 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 text-center"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 text-white/50 rotate-90" />
        </div>
      </section>

      {/* Stats Section */}
      <StatsStrip />

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-text-heading mb-4">Our Capabilities</h2>
            <p className="text-lg text-text-muted">
              Comprehensive construction solutions tailored to your specific needs, backed by decades of industry experience.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-slate-50 p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-sm flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-text-heading mb-3">{service.title}</h3>
                <p className="text-text-muted mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  href={service.link}
                  className="inline-flex items-center font-bold text-secondary hover:text-accent transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-text-heading mb-4">Featured Projects</h2>
              <p className="text-lg text-text-muted">
                A selection of our most recent work showcasing our commitment to quality and excellence.
              </p>
            </div>
            <Link href="/services" className="hidden md:inline-flex items-center font-bold text-secondary hover:text-accent transition-colors">
              View All Projects <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 p-8 text-white transform transition-transform duration-300 group-hover:-translate-y-2">
                    <span className="text-accent text-sm font-bold uppercase tracking-wider mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-gray-300 text-sm flex items-center gap-1">
                      <ChevronRight className="w-3 h-3" /> {project.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/services" className="inline-flex items-center font-bold text-secondary hover:text-accent transition-colors">
              View All Projects <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-text-heading mb-6">Why Clients Choose Atlas</h2>
              <p className="text-lg text-text-muted mb-8">
                We don't just build structures; we build relationships. Our client-centric approach ensures transparency from the first bid to the final walkthrough.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Transparent pricing with no hidden costs",
                  "Dedicated project manager for every job",
                  "Rigorous safety standards (EMR 0.85)",
                  "On-time delivery guarantee"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-text-heading">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src={images.about.src}
                alt={images.about.alt}
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-none shadow-lg hidden md:block">
                <div className="text-4xl font-bold text-primary">25+</div>
                <div className="text-sm font-bold text-primary uppercase">Years Building</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-heading mb-4">What Our Clients Say</h2>
            <p className="text-lg text-text-muted">Trusted by Houston&apos;s leading businesses and homeowners.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative"
              >
                <div className="text-accent mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-text-muted mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <div className="font-bold text-text-heading">{testimonial.name}</div>
                  <div className="text-sm text-secondary">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary relative">
        <div className="absolute inset-0 opacity-10">
           <Image src={images.cta.src} alt={images.cta.alt} fill className="object-cover" />
        </div>
        <div className="container-custom relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Break Ground?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. Let&apos;s discuss how we can bring your construction vision to life.
          </p>
          <Link 
            href="#contact"
            className="inline-block px-10 py-4 bg-accent text-primary font-bold text-lg hover:bg-white transition-all duration-300 rounded-none"
          >
            Get Free Estimate
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}