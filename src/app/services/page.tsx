import Link from "next/link";
import { ChevronRight, Ruler, Paintbrush, Hammer, Truck, Building, HomeIcon } from "lucide-react";
import { motion } from "framer-motion";
import { images } from "@/config/images";
import { Button } from "@/components/ui/Button";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = {
  title: "Our Services",
  description: "Comprehensive construction services including commercial, residential, and industrial projects in Houston.",
};

const services = [
  {
    id: "commercial",
    title: "Commercial Construction",
    icon: <Building />,
    desc: "Ground-up construction for office buildings, retail spaces, and mixed-use developments.",
    image: "service-1",
    details: [
      "Steel Erection & Framing",
      "Concrete Foundations & Flatwork",
      "Office Build-outs & TI",
      "Retail Storefronts",
      "ADA Compliance Upgrades"
    ]
  },
  {
    id: "residential",
    title: "Residential Remodeling",
    icon: <HomeIcon />,
    desc: "High-end renovations for kitchens, bathrooms, and whole-home remodels.",
    image: "service-2",
    details: [
      "Custom Kitchen Remodels",
      "Luxury Bathroom Renovations",
      "Room Additions & ADUs",
      "Outdoor Living Spaces",
      "Historical Restorations"
    ]
  },
  {
    id: "industrial",
    title: "Industrial Services",
    icon: <Truck />,
    desc: "Heavy-duty construction for warehouses, manufacturing plants, and logistics centers.",
    image: "service-3",
    details: [
      "Warehouse Structural Repair",
      "Equipment Foundation Pours",
      "Loading Dock Installation",
      "Facility Paving",
      "Safety Railing Systems"
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Our Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From single-family homes to industrial complexes, we have the manpower, machinery, and experience to execute projects of any scale.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-secondary/10 text-secondary rounded-lg">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-primary">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <h3 className="text-sm font-bold text-secondary uppercase tracking-wider mb-4">Capabilities Include:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <ChevronRight size={16} className="text-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <Button asChild>
                    <Link href="/#contact">Get a Quote for {service.title}</Link>
                  </Button>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={images[service.image as keyof typeof images].src}
                      alt={images[service.image as keyof typeof images].alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">The Atlas Process</h2>
            <p className="text-gray-600 text-lg">How we ensure your project stays on time and on budget.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Consultation", desc: "We meet on-site to discuss your vision and assess feasibility.", icon: "01" },
              { title: "Design & Plan", desc: "Our architects create detailed blueprints and material lists.", icon: "02" },
              { title: "Construction", desc: "Permits are pulled, ground is broken, and work begins.", icon: "03" },
              { title: "Walkthrough", desc: "Final inspection ensures every detail meets our standards.", icon: "04" }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-heading font-bold text-gray-200 absolute -top-4 -left-2 -z-10">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-6">
            Unsure What You Need?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team specializes in assessing project requirements. Contact us for a professional consultation.
          </p>
          <Button asChild variant="accent" size="lg">
            <Link href="/#contact">Talk to a Specialist</Link>
          </Button>
        </div>
      </section>

      <ContactSection />
    </>
  );
}