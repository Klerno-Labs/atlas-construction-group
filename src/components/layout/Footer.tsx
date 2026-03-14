"use client";

import Link from "next/link";
import { ArrowUp, MapPin, Mail, Phone, Linkedin, Twitter, Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useState, useEffect } from "react";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.scrollY > 300) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.scrollY <= 300) {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">ATLAS CONSTRUCTION</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building Houston&apos;s future with integrity, precision, and unwavering commitment to quality. From commercial complexes to dream homes.
            </p>
            <div className="flex gap-4">
              <a 
                href={siteConfig.links.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig.links.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Twitter page"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig.links.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/#projects" className="text-gray-400 hover:text-accent transition-colors">Projects</Link></li>
              <li><Link href="/#contact" className="text-gray-400 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-400">Commercial Construction</span></li>
              <li><span className="text-gray-400">Residential Renovation</span></li>
              <li><span className="text-gray-400">Project Management</span></li>
              <li><span className="text-gray-400">Design-Build</span></li>
              <li><span className="text-gray-400">Industrial Services</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-400">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`} className="text-gray-400 hover:text-accent transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-400 hover:text-accent transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-accent text-primary rounded-full shadow-lg hover:bg-white transition-all duration-300 animate-bounce"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
}