import { LeadForm } from "./LeadForm";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Ready to Break Ground?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're planning a commercial build-out or a residential renovation, our team is ready to bring your vision to life. Get a comprehensive estimate today.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="bg-white p-3 rounded-full shadow-sm text-secondary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-primary">Call Us Directly</h3>
                  <p className="text-gray-600">(713) 555-0198</p>
                  <p className="text-sm text-gray-500">Mon-Fri: 8am-6pm</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="bg-white p-3 rounded-full shadow-sm text-secondary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-primary">Email Us</h3>
                  <p className="text-gray-600">info@atlasconstructiongroup.com</p>
                  <p className="text-sm text-gray-500">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="bg-white p-3 rounded-full shadow-sm text-secondary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-primary">Visit Office</h3>
                  <p className="text-gray-600">4521 Westheimer Rd, Suite 200</p>
                  <p className="text-sm text-gray-500">Houston, TX 77027</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
              Get Your Free Quote
            </h3>
            <LeadForm />
          </div>

        </div>
      </div>
    </section>
  );
}