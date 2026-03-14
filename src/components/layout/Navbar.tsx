"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/#projects", label: "Projects" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-white/90 backdrop-blur-lg shadow-sm border-gray-100"
            : "bg-primary/95 backdrop-blur-md border-white/10"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            >
              <span className={cn(isScrolled ? "text-primary" : "text-white")}>
                ATLAS <span className="text-accent">CONSTRUCTION</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors uppercase tracking-wider",
                    pathname === link.href
                      ? isScrolled
                        ? "text-accent"
                        : "text-accent"
                      : isScrolled
                      ? "text-text-heading hover:text-primary"
                      : "text-gray-300 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                className={cn(
                  "hidden md:flex items-center gap-2 text-sm font-bold transition-colors",
                  isScrolled ? "text-primary hover:text-accent" : "text-white hover:text-accent"
                )}
              >
                <Phone className="w-4 h-4" />
                {siteConfig.contact.phone}
              </a>
              
              <Link
                href="/#contact"
                className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-primary bg-accent hover:bg-white hover:text-accent transition-all duration-300 rounded-none"
              >
                Get Quote
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className={cn("w-6 h-6", isScrolled ? "text-primary" : "text-white")} />
                ) : (
                  <Menu className={cn("w-6 h-6", isScrolled ? "text-primary" : "text-white")} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-primary transform transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-white hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full max-w-xs px-8 py-4 text-center text-lg font-bold text-primary bg-accent hover:bg-white hover:text-accent transition-colors mt-4"
          >
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </>
  );
}