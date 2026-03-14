import Link from "next/link";
import { Check, Users, Shield, Award } from "lucide-react";
import { motion } from "framer-motion";
import { images } from "@/config/images";
import { Button } from "@/components/ui/Button";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = {
  title: "About Us",
  description: "Learn about Atlas Construction Group's history, values, and commitment to safety in Houston, TX.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Split */}
      <section className="pt-10 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Building Legacy <br/> Since 1998
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in Houston, Atlas Construction Group started as a small family operation with a simple promise: do the job right the first time. Twenty-five years later, we've become one of Texas's most trusted general contractors, but our core values remain unchanged.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that construction is more than just materials and machinery—it's about people. From our architects to our site foremen, every member of the Atlas team is invested in the success of your project.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg">
                  <Link href="/#contact">Work With Us</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/projects">See Our History</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <img
                  src={images["about"].src}
                  alt={images["about"].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                <div className="text-4xl font-heading font-bold text-primary mb-1">25+</div>
                <div className="text-sm font-bold text-primary/80">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg">
              These principles guide every decision we make, from the bid process to the final walkthrough.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="text-accent" />,
                title: "Safety First",
                desc: "We maintain an EMR rating of 0.85, well below the industry average, because no deadline is worth compromising safety."
              },
              {
                icon: <Users className="text-accent" />,
                title: "Integrity in Action",
                desc: "Transparent pricing, honest timelines, and open communication ensure you never have to guess where your project stands."
              },
              {
                icon: <Award className="text-accent" />,
                title: "Quality Craftsmanship",
                desc: "We use premium materials and skilled labor to ensure that what we build today stands strong for generations."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Leadership Team</h2>
            <p className="text-gray-600 text-lg">Meet the experts behind our success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Robert Thorne", role: "CEO & Founder", bio: "25+ years in commercial construction. Bob founded Atlas with a truck and a vision." },
              { name: "Sarah Jenks", role: "Director of Operations", bio: "PE certified engineer ensuring structural integrity on every project site." },
              { name: "Michael Chen", role: "Lead Architect", bio: "Award-winning designer specializing in sustainable urban development." },
            ].map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 bg-gray-200 relative">
                  <img
                    src={images["team-1"].src} // Reusing same image for demo as per constraints
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary">{member.name}</h3>
                <p className="text-secondary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 max-w-xs mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Why Houston Chooses Atlas
              </h2>
              <ul className="space-y-4">
                {[
                  "Locally owned and operated in Texas",
                  "Fully licensed and insured (CSLB #123456)",
                  "In-house design-build team",
                  "3-year workmanship warranty",
                  "Transparent fixed-price contracts"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white">
                    <Check className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Ready to Start?</h3>
              <p className="text-gray-300 mb-6">
                Schedule a consultation with our project managers to discuss your specific needs.
              </p>
              <Button asChild variant="accent" size="lg" className="w-full md:w-auto">
                <Link href="/#contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}