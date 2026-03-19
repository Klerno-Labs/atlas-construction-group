"use client";

import Image from "next/image";
import { HardHat, Users, Award, Zap } from "lucide-react";
import { images } from "@/config/images";

export const metadata = {
  title: "About Us | Atlas Construction Group",
  description: "Learn about Atlas Construction Group's history, safety records, and our commitment to building excellence in Texas.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO SPLIT */}
      <section className="relative bg-white pt-20 overflow-hidden">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 animate-fade-up">
              <span className="text-secondary font-bold uppercase tracking-wider text-sm mb-4 block">
                Who We Are
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight">
                Building Trust <br /> <span className="text-secondary">Since 1998.</span>
              </h1>
              <p className="text-lg text-text-muted mb-6 leading-relaxed">
                Founded in Houston, Atlas Construction Group started as a small
                family operation with a simple mission: to treat every project
                as if it were our own home. Over two decades later, we have
                evolved into one of Texas&apos;s most trusted general
                contractors, but our core values remain unchanged.
              </p>
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                We specialize in complex commercial builds and high-end
                residential construction, leveraging technology and time-honored
                craftsmanship to deliver exceptional results.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-accent" />
                  <span className="font-bold text-primary-900">Award Winning</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-8 h-8 text-accent" />
                  <span className="font-bold text-primary-900">Efficient Process</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative h-[500px] w-full rounded-card overflow-hidden shadow-card">
              <Image
                src={images.about.src}
                alt={images.about.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-primary-900 py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
             <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                25+
              </div>
              <div className="text-white/80 text-sm uppercase tracking-wider">
                Years in Business
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                $500M+
              </div>
              <div className="text-white/80 text-sm uppercase tracking-wider">
                Project Value
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                100%
              </div>
              <div className="text-white/80 text-sm uppercase tracking-wider">
                Safety Record
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                5.0
              </div>
              <div className="text-white/80 text-sm uppercase tracking-wider">
                Client Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS ZIG-ZAG */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              The Atlas Process
            </h2>
            <p className="text-lg text-text-muted">
              We believe transparency is the foundation of any successful
              project. Here is how we bring your vision to life.
            </p>
          </div>

          <div className="space-y-24">
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-card overflow-hidden shadow-card order-2 md:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop"
                  alt="Consultation meeting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-accent text-primary-900 font-heading font-bold text-2xl w-12 h-12 flex items-center justify-center rounded-lg">
                    01
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-primary-900">
                    Discovery & Consultation
                  </h3>
                </div>
                <p className="text-text-muted leading-relaxed mb-6">
                  Every great project starts with a conversation. We meet to
                  understand your goals, budget, and timeline. We perform a
                  thorough site assessment and provide preliminary feasibility
                  studies.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-primary-900">
                    <HardHat className="w-5 h-5 text-accent" /> Site Walkthrough
                  </li>
                  <li className="flex items-center gap-3 text-primary-900">
                    <HardHat className="w-5 h-5 text-accent" /> Budget Estimation
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-card overflow-hidden shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
                  alt="Planning phase"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-accent text-primary-900 font-heading font-bold text-2xl w-12 h-12 flex items-center justify-center rounded-lg">
                    02
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-primary-900">
                    Design & Pre-Construction
                  </h3>
                </div>
                <p className="text-text-muted leading-relaxed mb-6">
                  Our in-house architects and engineers collaborate with your
                  design team to refine blueprints. We secure all necessary
                  permits and establish a detailed project schedule.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-primary-900">
                    <Zap className="w-5 h-5 text-accent" /> Blueprints
                  </li>
                  <li className="flex items-center gap-3 text-primary-900">
                    <Zap className="w-5 h-5 text-accent" /> Permitting
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-card overflow-hidden shadow-card order-2 md:order-1">
                <Image
                  src={images.service2.src}
                  alt="Construction execution"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-accent text-primary-900 font-heading font-bold text-2xl w-12 h-12 flex items-center justify-center rounded-lg">
                    03
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-primary-900">
                    Construction & Execution
                  </h3>
                </div>
                <p className="text-text-muted leading-relaxed mb-6">
                  This is where the vision becomes reality. Our skilled craftsmen
                  manage every aspect of the build, with daily site supervision
                  and weekly progress reports to keep you informed.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-primary-900">
                    <Users className="w-5 h-5 text-accent" /> Daily Supervision
                  </li>
                  <li className="flex items-center gap-3 text-primary-900">
                    <Users className="w-5 h-5 text-accent" } > Quality Control
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Leadership Team
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Member 1 */}
            <div className="text-center">
              <div className="relative w-full aspect-[3/4] rounded-card overflow-hidden mb-6 mx-auto max-w-[300px]">
                <Image
                  src={images.team1.src}
                  alt={images.team1.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-900">
                Marcus Thorne
              </h3>
              <p className="text-secondary text-sm font-bold uppercase tracking-wider mb-3">
                CEO & Founder
              </p>
              <p className="text-sm text-text-muted px-4">
                30 years of construction management experience. Marcus oversees
                all major commercial developments.
              </p>
            </div>

            {/* Member 2 */}
             <div className="text-center">
              <div className="relative w-full aspect-[3/4] rounded-card overflow-hidden mb-6 mx-auto max-w-[300px] bg-gray-100 flex items-center justify-center text-text-muted">
                 <Users className="w-16 h-16 opacity-50" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-900">
                Sarah Jenkins
              </h3>
              <p className="text-secondary text-sm font-bold uppercase tracking-wider mb-3">
                Director of Operations
              </p>
              <p className="text-sm text-text-muted px-4">
                Sarah ensures every project meets Atlas standards for safety and
                timeline efficiency.
              </p>
            </div>

            {/* Member 3 */}
             <div className="text-center">
              <div className="relative w-full aspect-[3/4] rounded-card overflow-hidden mb-6 mx-auto max-w-[300px] bg-gray-100 flex items-center justify-center text-text-muted">
                 <HardHat className="w-16 h-16 opacity-50" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-900">
                David Chen
              </h3>
              <p className="text-secondary text-sm font-bold uppercase tracking-wider mb-3">
                Lead Architect
              </p>
              <p className="text-sm text-text-muted px-4">
                David brings modern design principles to our residential
                division, creating functional masterpieces.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}