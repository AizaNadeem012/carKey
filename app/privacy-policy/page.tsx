// app/privacy-policy/page.jsx
import React from "react";
export const metadata = {
    title: "Privacy Policy – Car Keys Stockport",
    description:
      "Learn how Car Keys Stockport collects, uses, and protects your personal information. Transparent and secure services for car key replacement and lockout assistance.",
  };
  
  export default function PrivacyPolicyPage() {
    return (
      <main className="max-w-5xl mx-auto p-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
  
        {/* Introduction */}
        <section className="mb-8">
          <p className="text-lg leading-relaxed">
            At <strong>Car Keys Stockport</strong>, we value your privacy and are committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.
          </p>
        </section>
  
        {/* Information Collection */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Contact information such as name, email address, and phone number.</li>
            <li>Vehicle details required for key replacement or programming services.</li>
            <li>Usage data collected automatically through our website.</li>
          </ul>
        </section>
  
        {/* How We Use Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>To provide car key replacement, lockout, and other related services.</li>
            <li>To communicate with you about service updates or inquiries.</li>
            <li>To improve our website and services.</li>
          </ul>
        </section>
  
        {/* Information Protection */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Information Protection</h2>
          <p className="text-lg leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal data
            from unauthorized access, disclosure, or alteration.
          </p>
        </section>
  
        {/* Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
          <p className="text-lg leading-relaxed">
            Our website may use cookies to enhance user experience. You can manage cookie preferences
            through your browser settings.
          </p>
        </section>
  
        {/* Contact */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
          <p className="text-lg leading-relaxed">
            If you have any questions about this Privacy Policy, please <strong>contact us</strong> at 
            <a href="tel:+441234567890" className="text-blue-600 ml-1">+44 123 456 7890</a> or via our contact form on the website.
          </p>
        </section>
      </main>
    );
  }
  