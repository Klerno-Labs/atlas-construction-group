import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users, HardHat, Target } from "lucide-react";
import { images } from "@/config/images";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "About Us | Atlas Construction Group",
  description: "Learn about Atlas Construction Group's history, values, and commitment to building excellence in Houston since 1999.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Integrity",
      description: "We build trust through transparent communication, honest pricing, and delivering on our promises every single time."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Construction is a team sport. We work closely with architects, owners, and subcontractors to ensure success."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We refuse to settle for 'good enough.' Our rigorous quality control processes ensure superior craftsmanship."
    },
    {
      icon: HardHat,
      title: "Safety",
      description: "Safety is not optional. We maintain an EMR of 0.85 and adhere to the strictest OSHA regulations on every site."
    }
  ];

  const team = [
    {
      name: "Robert Martinez",
      role: "Founder & CEO",
      bio: "With 30 years in the industry, Robert founded Atlas on the principles of quality and integrity."
    },
    {
      name: "Jennifer Chen",
      role: "Director of Operations",
      bio: "Jennifer ensures our projects run smoothly, on time, and within budget through meticulous planning."
    },
    {
      name: "Marcus Thorne",
      role: "Lead Superintendent",
      bio: "Marcus oversees on-site operations, maintaining our high standards for safety and craftsmanship."
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold text-text-heading mb-6">Building Legacy Since 1999</h1>
              <p className="text-lg text-text-muted mb-6 leading-relaxed">
                Atlas Construction Group began with a simple mission: to provide Houston with a construction partner that prioritizes quality over quick profits. Over two decades later, we have become the region&apos;s most trusted name in commercial and residential construction.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                From our first renovation project to major industrial complexes, our core values have remained unchanged. We believe in building relationships that last as long as the structures we create.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Image
                src={images.about.src}
                alt={images.about.alt}
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsStrip />

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-text-heading mb-4">Our Core Values</h2>
            <p className="text-lg text-text-muted">
              These principles guide every decision we make, from the bid process to the final walkthrough.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-text-heading mb-3">{value.title}</h3>
                <p className="text-text-muted">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-text-heading mb-4">Leadership Team</h2>
            <p className="text-lg text-text-muted">
              Meet the experienced professionals dedicated to your project&apos;s success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-lg overflow-hidden shadow-sm group"
              >
                <div className="aspect-[4/5] bg-gray-200 overflow-hidden">
                  <Image
                    src={images["team-1"].src}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-heading">{member.name}</h3>
                  <div className="text-accent font-bold text-sm mb-3 uppercase tracking-wider">{member.role}</div>
                  <p className="text-text-muted text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container-custom text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">Join the Atlas Family</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Whether you need a general contractor for a massive development or a trusted partner for your dream home, we are ready to serve.
          </p>
          <a 
            href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
            className="inline-block px-10 py-4 bg-accent text-primary font-bold text-lg hover:bg-white transition-all duration-300 rounded-none"
          >
            Call {siteConfig.contact.phone}
          </a>
        </div>
      </section>
    </>
  );
}