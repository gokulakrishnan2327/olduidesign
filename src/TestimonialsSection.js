import { Menu, X, ArrowRight, Star, ChevronDown, ChevronUp } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "Current has transformed how I manage my business finances. The insights and budgeting tools are game-changers for my decision making.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Freelance Designer",
      content: "I've tried many financial apps, but Current stands out with its intuitive interface and powerful features. It's become essential to my financial planning.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Director",
      content: "The transaction tracking and budget forecasting have helped me save more than I ever thought possible. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What our customers say</h2>
          <p className="section-description">
            Thousands of individuals and businesses trust Current to manage their finances.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="star" />
                ))}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div>
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
