import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HardHat, Building2, Home, Wrench, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";
import { LeadGenForm } from "@/components/sections/lead-gen-form";

export const metadata: Metadata = {
  title: "Houston General Contractor | Commercial & Residential",
  description: "Atlas Construction Group delivers industry-leading construction services in Houston. From commercial build-outs to luxury custom homes.",
};

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            className="object-cover"
            quality={85}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-primary-900/70 mix-blend-multiply" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-white pt-20">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 border border-accent/50 text-accent text-xs font-bold uppercase tracking-wider mb-6">
              Licensed & Insured in Texas
            </span>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-[64px] font-bold leading-[1.1] mb-6">
              Building Houston&apos;s <br />
              <span className="text-accent">Legacy.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
              We are Atlas Construction Group. A premier general contractor
              delivering industrial precision to commercial and residential
              projects across Texas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="primary" asChild>
                <Link href="/#contact">
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <section className="bg-gray-900 py-8 border-b border-gray-800">
        <div className="container mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Simple text representation for logos to avoid external SVG dependency issues in this demo, normally these are images */}
           <span className="text-white font-heading font-bold text-lg tracking-widest uppercase">Bechtel</span>
           <span className="text-white font-heading font-bold text-lg tracking-widest uppercase">Turner</span>
           <span className="text-white font-heading font-bold text-lg tracking-widest uppercase">Skanska</span>
           <span className="text-white font-heading font-bold text-lg tracking-widest uppercase">OSHA</span>
           <span className="text-white font-heading font-bold text-lg tracking-widest uppercase">USGBC</span>
        </div>
      </section>

      {/* SERVICES BENTO GRID */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-lg text-text-muted">
              From groundbreaking to final walkthrough, we provide end-to-end
              general contracting services tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 border border-gray-100 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 rounded-card group">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-900 mb-3">
                Commercial Construction
              </h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                Office build-outs, retail spaces, and industrial facilities. We
                understand deadlines and budget constraints in the commercial
                sector.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-secondary font-bold hover:underline"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 border border-gray-100 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 rounded-card group">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-900 mb-3">
                Residential Builds
              </h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                Custom luxury homes and large-scale renovations. We bring
                architectural visions to life with unmatched craftsmanship.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-secondary font-bold hover:underline"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 border border-gray-100 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 rounded-card group">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-900 mb-3">
                Renovation & Remodel
              </h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                Transforming existing structures into modern spaces. Structural
                modifications, tenant improvements, and historical
                preservations.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-secondary font-bold hover:underline"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-text-muted max-w-2xl">
                A portfolio of excellence across Houston and Greater Texas.
              </p>
            </div>
            <Button variant="ghost" asChild className="hidden md:inline-flex mt-4 md:mt-0">
              <Link href="/services">View All Projects</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
            {/* Large Feature */}
            <div className="lg:col-span-2 relative group overflow-hidden rounded-card cursor-pointer h-[400px] lg:h-full">
              <Image
                src={images['gallery-1'].src}
                alt={images['gallery-1'].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 text-white transform transition-transform duration-300 group-hover:-translate-y-2">
                <span className="text-accent text-sm font-bold uppercase tracking-wider mb-2 block">
                  Commercial
                </span>
                <h3 className="font-heading text-3xl font-bold mb-2">
                  Westheimer Office Tower
                </h3>
                <p className="text-gray-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>{" "}
                  Completed 2023 • Houston, TX
                </p>
              </div>
            </div>

            {/* Stacked Side Cards */}
            <div className="flex flex-col gap-6 h-full">
              <div className="relative flex-1 group overflow-hidden rounded-card cursor-pointer">
                <Image
                  src={images['gallery-2'].src}
                  alt={images['gallery-2'].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1 block">
                    Residential
                  </span>
                  <h3 className="font-heading text-xl font-bold">
                    River Oaks Custom Estate
                  </h3>
                </div>
              </div>
              <div className="relative flex-1 group overflow-hidden rounded-card cursor-pointer">
                <Image
                  src={images['gallery-3'].src}
                  alt={images['gallery-3'].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1 block">
                    Industrial
                  </span>
                  <h3 className="font-heading text-xl font-bold">
                    Port of Houston Warehouse
                  </h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button variant="ghost" asChild>
              <Link href="/services">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-primary-900 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                25+
              </div>
              <div className="text-white/80 text-sm uppercase tracking-wider">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                500+
              </div>
              <div className="text-white/80 text-sm uppercase tracking-wider">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                120
              </div>
              <div className="text-white/80 text-sm uppercase tracking-wider">
                Expert Craftsmen
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                0.85
              </div>
              <div className="text-white/80 text-sm uppercase tracking-wider">
                EMR Safety Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD GEN SECTION */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Ready to Break Ground?
              </h2>
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                Whether you have a blueprint on a napkin or full architectural
                plans, our team is ready to guide you through the construction
                process. Get a free, no-obligation estimate today.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-secondary">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-900">Licensed & Insured</h4>
                    <p className="text-sm text-text-muted">TDLR #12345 | Fully bonded for all projects.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-secondary">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-900">On-Time Delivery</h4>
                    <p className="text-sm text-text-muted">We pride ourselves on meeting deadlines without compromising quality.</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 p-6 rounded-card border border-primary-100">
                 <p className="font-heading font-bold text-primary-900 mb-2">Call Us Directly</p>
                 <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`} className="text-2xl text-secondary font-bold hover:underline">
                   {siteConfig.contact.phone}
                 </a>
              </div>
            </div>

            <LeadGenForm />
          </div>
        </div>
      </section>
    </>
  );
}