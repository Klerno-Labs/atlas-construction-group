import Link from "next/link";
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { siteConfig } from "@/config/site";
import { images } from "@/config/images";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-accent text-primary p-1.5 rounded-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18" />
                  <path d="M5 21V7l8-4 8 4v14" />
                  <path d="M8 21v-2a2 2 0 0 1 4 0v2" />
                </svg>
              </div>
              <span className="text-xl font-heading font-bold">ATLAS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building Houston's future with integrity, precision, and unmatched quality. 
              Your vision, our expertise.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href={siteConfig.links.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={siteConfig.links.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={siteConfig.links.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm leading-relaxed">
                  {siteConfig.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent flex-shrink-0" size={18} />
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`} 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent flex-shrink-0" size={18} />
                <a 
                  href={`mailto:${siteConfig.contact.email}`} 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter / CTA */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Get Updates</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe for industry insights and company news.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors"
              />
              <button className="w-full bg-accent text-primary font-bold text-sm py-2 hover:bg-white transition-colors rounded">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#06152a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-wider">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
             </svg>
             Safety First Culture
          </div>
        </div>
      </div>
    </footer>
  );
}