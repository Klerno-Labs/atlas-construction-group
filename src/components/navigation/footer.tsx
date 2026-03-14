import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white pt-20 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-accent h-8 w-8 flex items-center justify-center rounded-sm">
                <span className="text-primary-900 font-heading font-black text-lg">
                  A
                </span>
              </div>
              <span className="text-white font-heading font-bold text-lg">
                ATLAS
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Building Houston's future with precision, integrity, and unmatched
              craftsmanship. From residential renovations to commercial
              skyscrapers.
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="text-text-muted hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="text-text-muted hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter page"
                className="text-text-muted hover:text-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold mb-6 uppercase tracking-wider text-sm">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-text-muted hover:text-accent transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-text-muted hover:text-accent transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-text-muted hover:text-accent transition-colors text-sm"
                >
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-text-muted hover:text-accent transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="text-white font-heading font-bold mb-6 uppercase tracking-wider text-sm">
              Contact
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-text-muted text-sm">
                  {siteConfig.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  className="text-text-muted hover:text-white text-sm transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-text-muted hover:text-white text-sm transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal / CTA */}
          <div>
            <h3 className="text-white font-heading font-bold mb-6 uppercase tracking-wider text-sm">
              Safety First
            </h3>
            <p className="text-text-muted text-xs mb-6 leading-relaxed">
              Atlas Construction Group maintains an EMR rating of 0.85, well
              below the industry average. We are committed to Zero Harm on every
              job site.
            </p>
            <div className="flex flex-col gap-2">
               <Button variant="outline" size="sm" asChild className="w-fit border-white/20 text-white hover:bg-white hover:text-primary-900">
                  <Link href="/#contact">Start Your Project</Link>
               </Button>
               <Link href="#" className="text-xs text-text-muted hover:text-white underline">Privacy Policy</Link>
               <Link href="#" className="text-xs text-text-muted hover:text-white underline">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs text-center md:text-left">
            © {currentYear} {siteConfig.name}. All rights reserved. Licensed
            & Insured in Texas.
          </p>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-primary-800 hover:bg-accent hover:text-primary-900 text-white p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}