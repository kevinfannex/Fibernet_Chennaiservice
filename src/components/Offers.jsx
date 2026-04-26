import React from 'react';
import { motion } from 'framer-motion';

const Offers = () => {
  const offers = [
    { class: 'o1', icon: '📡', title: 'Premium Router', desc: 'AC1200 Dual Band WiFi router worth ₹2,500 — yours at no cost with any new connection.', value: 'Worth ₹2,500', badge: 'FREE' },
    { class: 'o2', icon: '🔧', title: 'Professional Installation', desc: 'Expert technician visits your home, installs & configures everything. Same day available.', value: 'Worth ₹500', badge: 'FREE' },
    { class: 'o3', icon: '📱', title: 'Fire TV Stick', desc: 'Get an Amazon Fire TV Stick with select annual plans. Stream all your OTT on your TV.', value: 'Worth ₹3,999', badge: 'OFFER' },
    { class: 'o4', icon: '🛜', title: 'Mesh WiFi Coverage', desc: 'Two routers working together to eliminate dead zones. Full-home WiFi for large homes.', value: 'Best for 3BHK+', badge: 'ADD-ON' }
  ];

  return (
    <section className="offers" id="offers">
      <div className="container">
        <div className="section-label">Limited Time Offers</div>
        <h2 className="section-title">Incredible Value. Zero Compromise.</h2>
        <p className="section-sub">Sign up today and unlock exclusive benefits worth over ₹5,000 — absolutely free.</p>
        <div className="offers-grid">
          {offers.map((o, i) => (
            <motion.div 
              key={i} 
              className={`offer-card ${o.class}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="offer-badge-free">{o.badge}</div>
              <div className="offer-icon">{o.icon}</div>
              <h3>{o.title}</h3>
              <p>{o.desc}</p>
              <span className="offer-value">{o.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
