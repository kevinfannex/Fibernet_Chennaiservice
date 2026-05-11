import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    { icon: '♾️', title: 'Unlimited Data Plans', desc: 'No FUP limits. Stream, browse, download as much as you want, all month long.', class: 'f1' },
    { icon: '📡', title: 'Free Dual Band Router', desc: 'Premium AC1200 dual-band router worth ₹2,500 — included at zero cost.', class: 'f2' },
    { icon: '⚡', title: 'Same Day Installation', desc: 'Book before 2 PM and get your connection up and running the same day.', class: 'f3' },
    { icon: '📺', title: 'OTT Benefits', desc: 'Amazon Prime, Netflix, Disney+ Hotstar & more bundled with select plans.', class: 'f4' },
    { icon: '🛜', title: 'AI-Powered Mesh WiFi', desc: 'Full-home coverage with intelligent mesh routers — no dead zones, ever.', class: 'f5' },
    { icon: '📸', title: 'CCTV Camera Solutions', desc: 'Secure your home with high-definition smart cameras bundled with your internet plan.', class: 'f6' }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-label">Why ACT Fibernet?</div>
        <h2 className="section-title">Everything You Need, Nothing You Don't</h2>
        <p className="section-sub">Experience the fastest broadband internet connection in Chennai with premium features included.</p>
        <div className="features-grid">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`feature-icon ${f.class}`}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
