import { Building2, Home, Wrench, Hammer, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { images } from "@/config/images";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Our Services | Atlas Construction Group",
  description: "From commercial build-outs to custom homes, explore the full range of construction services offered by Atlas in Houston.",
};

// Service Data
const servicesData = [
  {
    id: 1,
    title: "Commercial Construction",
    icon: Building2,
    description: "Full-service commercial contracting for office buildings, retail centers, and hospitality venues. We handle everything from core and shell to final tenant finish-out.",
    features: ["Ground-Up Development", "Tenant Improvement", "Historical Renovation", "Facade Replacement"],
    image: images.gallery.src,
    price: "Starting at $500k"
  },
  {
    id: 2,
    title: "Custom Residential Homes",
    icon: Home,
    description: "Building luxury estates that reflect your personal style. Our team works with renowned architects to deliver homes of uncompromising quality.",
    features: ["Custom Build", "Estate Management", "Outdoor Living Spaces", "Smart Home Integration"],
    image: images.gallery2.src,
    price: "Starting at $1M"
  },
  {
    id: 3,
    title: "Renovation & Remodeling",
    icon: Wrench,
    description: "Transforming existing structures into modern, functional spaces. We specialize in structural modifications, seismic retrofits, and interior overhauls.",
    features: ["Kitchen & Bath", "Whole House Remodel", "Structural Additions", "Foundation Repair"],
    image: images.gallery3.src,
    price: "Project-based quotes"
  },
  {
    id: 4,
    title: "Industrial Services",
    icon: Hammer,
    description: "Heavy industrial construction including warehouses, manufacturing plants, and distribution centers. We prioritize safety and operational continuity.",
    features: ["Warehousing", "Manufacturing Floors", "Dock Installation", "Civil Infrastructure"],
    image: "https://images.unsplash.com/photo-1565626424176-8b8b6d07bb58?q=80&w=2070&auto=format&fit=crop",
    price: "Value-based contracts"
  }
];

export default function ServicesPage() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      {/* HERO TYPOGRAPHIC */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 text-center">
           <span className="text-secondary font-bold uppercase tracking-wider text-sm mb-4 block">
            Capabilities
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-900 mb-6 max-w-4xl mx-auto">
            Built for <span className="text-accent">Excellence.</span>
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            We provide a comprehensive suite of construction services tailored to
            commercial, industrial, and residential clients.
          </p>
        </div>
      </section>

      {/* SERVICES ACCORDION LIST */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          {servicesData.map((service) => {
            const Icon = service.icon;
            const isOpen = openId === service.id;

            return (
              <div key={service.id} className="mb-6 border border-gray-200 bg-white rounded-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => toggle(service.id)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none focus:bg-gray-50"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg text-secondary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-900">
                        {service.title}
                      </h3>
                      <p className="text-text-muted text-sm md:text-base mt-1 hidden md:block">
                        {service.description.substring(0, 60)}...
                      </p>
                    </div>
                  </div>
                  <div className="text-secondary ml-4">
                    {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 md:px-8 pb-8 pt-0 animate-fade-up">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-text-muted leading-relaxed mb-6">
                          {service.description}
                        </p>
                        
                        <h4 className="font-bold text-primary-900 mb-4 uppercase text-xs tracking-wider">
                          Key Capabilities
                        </h4>
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-primary-900">
                              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                           <span className="text-sm text-text-muted">Investment Range</span>
                           <span className="font-bold text-primary-900">{service.price}</span>
                        </div>
                      </div>
                      
                      <div className="relative h-64 md:h-full rounded-card overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-100 text-right">
                      <Button variant="primary" size="md" asChild>
                         <Link href="/#contact">Request Quote for {service.title}</Link>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CROSS SELL CTA */}
      <section className="py-20 bg-primary-900 relative">
         <div className="absolute inset-0 opacity-20">
            <Image
               src={images.cta.src}
               alt=""
               fill
               className="object-cover"
            />
         </div>
         <div className="container mx-auto px-6 relative z-10 text-center text-white">
             <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                 Unsure what you need?
             </h2>
             <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                 Our project managers can help you scope your requirements and define a budget that works for you.
             </p>
             <Button variant="secondary" size="lg" asChild>
                 <Link href="/#contact">Consult a Specialist</Link>
             </Button>
         </div>
      </section>
    </>
  );
}