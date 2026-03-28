// app/terms/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions - Car Keys Stockport",
  description: "Read the terms and conditions for our car key replacement and locksmith services in Stockport.",
};

export default function TermsPage() {
  return (
    <main className="bg-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Please read our terms and conditions carefully before using our car key replacement and locksmith services in Stockport.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto space-y-6 prose prose-invert">
          <h2>1. Introduction</h2>
          <p>
            By using Car Keys Stockport services, you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, please do not use our services.
          </p>

          <h2>2. Service Scope</h2>
          <p>
            We provide mobile car key replacement, remote key fob programming, ignition repair, and lockout assistance across Stockport and surrounding areas. Our services are performed on-site, and prices may vary depending on the complexity of the work.
          </p>

          <h2>3. Pricing & Payment</h2>
          <p>
            All prices are clearly stated and include cutting, programming, and testing of keys. Payment is required upon completion of service. We accept cash and card payments. No hidden charges apply.
          </p>

          <h2>4. Liability</h2>
          <p>
            While we take all necessary precautions, Car Keys Stockport cannot be held responsible for any indirect, incidental, or consequential damages resulting from the use of our services.
          </p>

          <h2>5. Customer Responsibilities</h2>
          <p>
            Customers must provide accurate vehicle information and identification. Any damage caused by incorrect information or attempts to tamper with keys is not the responsibility of Car Keys Stockport.
          </p>

          <h2>6. Cancellation Policy</h2>
          <p>
            You may cancel a scheduled service by contacting us at least 1 hour prior to our arrival. Late cancellations may incur a fee.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These terms and conditions are governed by the laws of England and Wales. Any disputes will be subject to the jurisdiction of the courts of Stockport.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            For any questions regarding our terms, please <Link href="/contact" className="text-primary underline">contact us</Link> directly.
          </p>
        </div>
      </section>
    </main>
  );
}
