import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    { name: 'Rajan Krishnamurthy', loc: 'T Nagar, Chennai', avatar: 'R', class: 'av1', text: 'Got my ACT connection in T Nagar installed the same afternoon I called. Speed is consistently 150 Mbps. Absolutely no complaints — best broadband I\'ve ever had in Chennai.' },
    { name: 'Priya Venkataraman', loc: 'Anna Nagar, Chennai', avatar: 'P', class: 'av2', text: 'I work from home and need a reliable connection. ACT Fibernet has been rock solid for 8 months. The mesh WiFi add-on covers our entire 3BHK without any dead spots.' },
    { name: 'Karthik Subramaniam', loc: 'Velachery, Chennai', avatar: 'K', class: 'av3', text: 'Switched from my old provider and the difference is night and day. Netflix 4K streams without buffering, gaming ping is under 10ms. Worth every rupee. Free router was a bonus!' },
    { name: 'Sundaram Pillai', loc: 'Tambaram, Chennai', avatar: 'S', class: 'av4', text: 'The WhatsApp support is amazing. Had a small issue at 9 PM and it was resolved within 30 minutes. Three kids at home, all streaming simultaneously — zero lag. Highly recommend!' }
  ];

  return (
    <section className="testimonials" id="reviews">
      <div className="container">
        <div className="section-label">Customer Reviews</div>
        <h2 className="section-title">What Chennai Says About Us</h2>
        <div className="testi-grid">
          {reviews.map((r, i) => (
            <motion.div 
              key={i} 
              className="testi-card"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="stars">★★★★★</div>
              <p className="testi-text">{r.text}</p>
              <div className="testi-author">
                <div className={`testi-avatar ${r.class}`}>{r.avatar}</div>
                <div>
                  <div className="testi-name">{r.name}</div>
                  <div className="testi-loc">{r.loc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
