import { LeadForm } from "./LeadForm";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-text-heading mb-6">Let&apos;s Build Together</h2>
              <p className="text-lg text-text-muted leading-relaxed">
                Ready to start your project? Our team is available to discuss your vision and provide expert guidance. Reach out today.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-text-heading mb-2">Visit Our Office</h3>
                <p className="text-text-muted">4521 Westheimer Rd, Suite 200<br />Houston, TX 77027</p>
              </div>
              
              <div>
                <h3 className="font-bold text-text-heading mb-2">Call Us</h3>
                <a href="tel:7135550198" className="text-xl font-bold text-secondary hover:text-accent transition-colors">
                  (713) 555-0198
                </a>
                <p className="text-sm text-text-muted mt-1">Mon-Fri: 8am-6pm</p>
              </div>

              <div>
                <h3 className="font-bold text-text-heading mb-2">Email Us</h3>
                <a href="mailto:info@atlasconstruction.com" className="text-text-muted hover:text-accent transition-colors">
                  info@atlasconstruction.com
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}