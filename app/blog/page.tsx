// app/blog/page.jsx
import React from "react";

export const metadata = {
    title: "24/7 Car Key Replacement & Lockout Assistance in Stockport",
    description:
      "Fast, reliable, and affordable car key replacement and emergency lockout services in Stockport. Mobile service, insurance approved, available 24/7.",
  };
  
  export default function BlogPage() {
    return (
      <main className="max-w-5xl mx-auto p-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-6">
          24/7 Car Key Replacement & Lockout Assistance in Stockport
        </h1>
  
        {/* Intro Section */}
        <section className="mb-8">
          <p className="text-lg leading-relaxed">
            Losing your car keys or getting locked out of your vehicle can be stressful. 
            At <strong>Car Keys Stockport</strong>, we provide <strong>fast, reliable,
            and affordable car key replacement and emergency lockout services</strong>. 
            Our team is fully insured, mobile, and ready to assist you <strong>anytime, day or night</strong>.
          </p>
        </section>
  
        {/* Services Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Car Key Replacement:</strong> Lost or broken keys? We can cut and program keys for <strong>all car makes and models</strong>.
            </li>
            <li>
              <strong>Emergency Lockout Assistance:</strong> Locked out? Our technicians arrive quickly to get you back on the road.
            </li>
            <li>
              <strong>Remote Key Fobs & Transponders:</strong> We repair, replace, and program remote key fobs for all vehicles.
            </li>
            <li>
              <strong>Ignition Repair & Replacement:</strong> Avoid expensive towing – we fix ignition issues on-site.
            </li>
          </ul>
        </section>
  
        {/* Why Choose Us Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Fast Response:</strong> Mobile service across Stockport – we come to you.</li>
            <li><strong>Insurance Approved:</strong> Safe and secure services accepted by all major insurers.</li>
            <li><strong>Expert Technicians:</strong> Trained professionals with years of experience.</li>
            <li><strong>Affordable Prices:</strong> Transparent pricing with no hidden fees.</li>
          </ul>
        </section>
  
        {/* Tips Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tips to Prevent Lockouts</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Always have a spare key stored in a safe place.</li>
            <li>Keep a digital record of your key codes for replacements.</li>
            <li>Regularly check the battery of your remote key fobs.</li>
            <li>Be cautious when locking your car to avoid accidental lockouts.</li>
          </ul>
        </section>
  
        {/* Call to Action */}
        <section className="mt-8">
          <p className="text-lg leading-relaxed">
            Need immediate car key assistance in Stockport? <strong>Call us now!</strong> Our team is ready 24/7 to help you get back on the road quickly and safely.
          </p>
        </section>
      </main>
    );
  }
  