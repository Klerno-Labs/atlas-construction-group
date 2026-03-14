"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
    _gotcha: "", // Honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Honeypot check
    if (formData._gotcha) {
      console.log("Bot detected");
      return;
    }

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", projectType: "", message: "", _gotcha: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-2xl font-heading font-bold text-primary mb-2">Message Received!</h3>
        <p className="text-gray-600">Thank you for contacting Atlas Construction. We'll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <div className="hidden">
        <label htmlFor="gotcha">Don't fill this out if you're human:</label>
        <input
          id="gotcha"
          name="_gotcha"
          type="text"
          value={formData._gotcha}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="John Doe" 
            required 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input 
            id="phone" 
            name="phone" 
            type="tel"
            value={formData.phone} 
            onChange={handleChange} 
            placeholder="(713) 555-0198" 
            required 
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input 
          id="email" 
          name="email" 
          type="email"
          value={formData.email} 
          onChange={handleChange} 
          placeholder="john@example.com" 
          required 
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectType">Project Type</Label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="flex h-11 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:border-secondary focus-visible:ring-1 focus-visible:ring-secondary transition-colors"
        >
          <option value="">Select a service...</option>
          <option value="commercial">Commercial Construction</option>
          <option value="residential">Residential Remodel</option>
          <option value="industrial">Industrial Engineering</option>
          <option value="renovation">General Renovation</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Project Details</Label>
        <Textarea 
          id="message" 
          name="message"
          value={formData.message} 
          onChange={handleChange} 
          placeholder="Tell us about your project timeline and goals..."
          rows={4}
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" loading={isSubmitting}>
        {isSubmitting ? "Sending..." : "Request Free Estimate"}
      </Button>
      
      <p className="text-xs text-center text-gray-500">
        By submitting, you agree to our Terms of Service and Privacy Policy.
      </p>
    </form>
  );
}