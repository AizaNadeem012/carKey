// app/testimonials/page.tsx

import type { Metadata } from "next";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Testimonials - Car Keys Stockport",
  description: "Read what our customers say about our car key replacement and locksmith services in Stockport.",
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "James Wilson",
      location: "Stockport",
      rating: 5,
      text: "Lost my BMW keys on a Saturday night. These guys were out within 20 minutes and had new keys cut and programmed in 30 minutes. Brilliant service!",
    },
    {
      name: "Sarah Mitchell",
      location: "Cheadle",
      rating: 5,
      text: "Professional service from start to finish. Fair pricing, no hidden costs, and the locksmith was very knowledgeable. Highly recommended.",
    },
    {
      name: "David Brown",
      location: "Bramhall",
      rating: 5,
      text: "Needed a replacement key for my Mercedes. The locksmith arrived quickly, was very professional, and had the key working perfectly. Great value for money.",
    },
    {
      name: "Emma Johnson",
      location: "Hazel Grove",
      rating: 5,
      text: "Amazing mobile service! My car keys were replaced on-site and everything worked perfectly. Very friendly staff.",
    },
    {
      name: "Oliver Smith",
      location: "Marple",
      rating: 4,
      text: "Quick response and good service. A bit pricey but worth it for the convenience.",
    },
  ];

  return (
    <main className="bg-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See why our customers trust Car Keys Stockport for mobile car key replacement and locksmith services.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                ))}
              </div>
              {/* Text */}
              <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
              {/* Name & Location */}
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-400">{testimonial.location}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Need Car Key Replacement?</h2>
          <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
            Contact our mobile locksmiths in Stockport for fast, professional car key replacement service today.
          </p>
          <a
            href="tel:07309903243"
            className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-colors"
          >
            Call: 07309903243
          </a>
        </div>
      </section>
    </main>
  );
}
