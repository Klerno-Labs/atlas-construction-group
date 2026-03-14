"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-gray-100 py-4"
          : "bg-white/80 backdrop-blur-md border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-white p-1.5 rounded-sm group-hover:bg-secondary transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18" />
                <path d="M5 21V7l8-4 8 4v14" />
                <path d="M8 21v-2a2 2 0 0 1 4 0v2" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-primary tracking-tight">
                ATLAS
              </span>
              <span className="text-[0.6rem] font-bold text-secondary uppercase tracking-[0.2em]">
                Construction Group
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors uppercase tracking-wide"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors"
            >
              <Phone size={16} />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <Button asChild variant="primary" size="sm">
              <Link href="/#contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary hover:bg-gray-100 rounded-md transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-primary z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          <nav className="flex flex-col gap-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-heading font-bold text-white hover:text-accent transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pb-12">
            <Button asChild variant="accent" size="lg" className="w-full justify-center mb-6">
              <Link href="/#contact">Get a Free Quote</Link>
            </Button>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
              className="block text-center text-white/80 hover:text-white transition-colors text-lg"
            >
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}