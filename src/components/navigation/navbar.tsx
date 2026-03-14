"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-primary-900 px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-primary-600/95 backdrop-blur-md transition-all duration-300">
        {/* Top Bar - Utility */}
        <div className="bg-primary-900 py-2 hidden md:block">
          <div className="container mx-auto flex justify-end items-center px-6 text-xs text-text-muted uppercase tracking-wider">
            <span className="mr-6 text-white/80">
              Houston's Premier General Contractor
            </span>
            <a
              href="tel:7135550198"
              className="flex items-center text-accent hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 mr-2" />
              (713) 555-0198
            </a>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className="bg-accent h-10 w-10 flex items-center justify-center rounded-sm">
              <span className="text-primary-900 font-heading font-black text-xl">
                A
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-heading font-bold text-xl tracking-tight leading-none group-hover:text-accent transition-colors">
                ATLAS
              </span>
              <span className="text-text-muted text-[10px] uppercase tracking-[0.2em]">
                Construction
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-wider transition-colors hover:text-white",
                  pathname === link.href ? "text-accent" : "text-text-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="primary" size="md" asChild className="ml-4">
              <Link href="/#contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-accent z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-primary-900 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center gap-8",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-2xl font-heading font-bold text-white hover:text-accent transition-colors",
                pathname === link.href ? "text-accent" : ""
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="primary"
            size="lg"
            className="mt-8 w-full max-w-xs"
            onClick={() => setIsOpen(false)}
            asChild
          >
            <Link href="/#contact">Get a Free Quote</Link>
          </Button>
        </div>
      </header>
    </>
  );
}