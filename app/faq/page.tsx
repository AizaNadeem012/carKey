// app/faq/page.jsx
import React from "react";
export const metadata = {
    title: "FAQ – Car Keys Stockport",
    description:
      "Frequently Asked Questions about car key replacement, lockout assistance, ignition repair, and remote key fobs in Stockport. Fast, mobile service available 24/7.",
  };
  
  export default function FAQPage() {
    return (
      <main className="max-w-5xl mx-auto p-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions (FAQ)</h1>
  
        {/* FAQ Section */}
        <section className="mb-8">
          <div className="space-y-6">
            {/* Question 1 */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Q1: What services do you provide?</h2>
              <p className="text-lg leading-relaxed">
                We provide car key replacement, emergency lockout assistance, ignition repair,
                and remote key fob programming for all car makes and models in Stockport.
              </p>
            </div>
  
            {/* Question 2 */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Q2: Are you available 24/7?</h2>
              <p className="text-lg leading-relaxed">
                Yes! Our mobile team is available 24/7 for emergency lockouts and key replacements.
              </p>
            </div>
  
            {/* Question 3 */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Q3: Do you work with insurance?</h2>
              <p className="text-lg leading-relaxed">
                Absolutely. All our services are fully insurance-approved and secure.
              </p>
            </div>
  
            {/* Question 4 */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Q4: How long does a key replacement take?</h2>
              <p className="text-lg leading-relaxed">
                Most key replacements are completed within 20-30 minutes on-site, depending on the vehicle type.
              </p>
            </div>
  
            {/* Question 5 */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Q5: Do you handle remote key fobs?</h2>
              <p className="text-lg leading-relaxed">
                Yes, we can repair, replace, and program remote key fobs for almost all vehicles.
              </p>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="mt-8">
          <p className="text-lg leading-relaxed">
            Have a question that’s not listed here? <strong>Call us now</strong> or use our contact form,
            and our team will assist you immediately.
          </p>
        </section>
      </main>
    );
  }
  