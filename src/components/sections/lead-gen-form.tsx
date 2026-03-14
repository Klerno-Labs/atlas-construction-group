"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export function LeadGenForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    _gotcha: "", // Honeypot
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData._gotcha) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "", _gotcha: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-surface p-8 md:p-10 shadow-card max-w-3xl mx-auto w-full rounded-card">
      {status === "success" ? (
        <div className="text-center py-12 animate-fade-up">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-primary-900 mb-2">
            Message Received
          </h3>
          <p className="text-text-muted">
            Thank you for contacting Atlas Construction Group. A project manager
            will review your request and reach out within 24 hours.
          </p>
          <Button
            variant="primary"
            onClick={() => setStatus("idle")}
            className="mt-8"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name */}
            <div className="relative group">
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="peer placeholder-transparent h-12"
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-3.5 text-text-muted text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-text-muted peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-xs cursor-text"
              >
                Full Name *
              </label>
            </div>

            {/* Phone */}
            <div className="relative group">
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="peer placeholder-transparent h-12"
              />
              <label
                htmlFor="phone"
                className="absolute left-0 -top-3.5 text-text-muted text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-text-muted peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-xs cursor-text"
              >
                Phone Number *
              </label>
            </div>
          </div>

          {/* Email */}
          <div className="relative group">
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="peer placeholder-transparent h-12"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-text-muted text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-text-muted peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-xs cursor-text"
            >
              Email Address *
            </label>
          </div>

          {/* Service Type */}
          <div className="relative">
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full border-b-2 border-text-muted bg-transparent px-0 py-3 text-sm text-primary-900 focus:outline-none focus:border-secondary focus:ring-0 transition-colors appearance-none cursor-pointer"
            >
              <option value="" disabled className="text-gray-400">
                Select Project Type
              </option>
              <option value="commercial" className="text-black">Commercial Construction</option>
              <option value="residential" className="text-black">Residential New Build</option>
              <option value="renovation" className="text-black">Renovation & Remodeling</option>
              <option value="industrial" className="text-black">Industrial Services</option>
              <option value="other" className="text-black">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-muted">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>

          {/* Message */}
          <div className="relative group">
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="peer placeholder-transparent min-h-[120px]"
            />
            <label
              htmlFor="message"
              className="absolute left-0 -top-3.5 text-text-muted text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-text-muted peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-xs cursor-text"
            >
              Project Details *
            </label>
          </div>

          {/* Honeypot */}
          <input
            type="text"
            name="_gotcha"
            value={formData._gotcha}
            onChange={handleChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Error Message */}
          {status === "error" && (
            <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 p-3 rounded-md">
              <AlertCircle className="w-4 h-4" />
              Something went wrong. Please try again or call us directly.
            </div>
          )}

          {/* Submit */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full group"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Request Free Estimate
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </>
            )}
          </Button>
          
          <p className="text-xs text-center text-text-muted mt-4">
            By submitting this form, you agree to our privacy policy. We respect your privacy.
          </p>
        </form>
      )}
    </div>
  );
}