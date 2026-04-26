import React from 'react';
import { motion } from 'framer-motion';

const Entertainment = () => {
  return (
    <section className="entertainment" id="ott">
      <div className="container">
        <div className="section-label">Entertainment Plans</div>
        <h2 className="section-title">Stream Everything You Love</h2>
        <p className="section-sub">Get premium OTT subscriptions bundled with your broadband — at no extra cost.</p>
        <div className="ott-grid">
          <motion.div 
            className="ott-highlight"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3>Free OTT + 400+ Live Channels</h3>
            <p>Select ACT plans come bundled with India's biggest streaming platforms</p>
            <div className="ott-icons">
              <span className="ott-icon-pill">🎬 Amazon Prime</span>
              <span className="ott-icon-pill">📺 Netflix</span>
              <span className="ott-icon-pill">🎥 Disney+ Hotstar</span>
              <span className="ott-icon-pill">🟣 Zee5</span>
              <span className="ott-icon-pill">☀️ Sun NXT</span>
            </div>
            <a href="https://wa.me/918925505702?text=Tell%20me%20about%20OTT%20plans" className="btn-hero-wa" style={{ display: 'inline-flex', marginTop: '8px' }}>WhatsApp for OTT Plans</a>
          </motion.div>

          {[
            { tier: 'tier1', badges: ['🎬 Amazon Prime', '☀️ Sun NXT'], title: 'Basic OTT Bundle', price: '1,149', speed: '400 Mbps', includes: 'Unlimited Data · Amazon Prime Video · Sun NXT · Free Router' },
            { tier: 'tier2', badges: ['📺 Netflix', '🎬 Prime', '🟣 Zee5'], title: 'Standard OTT Bundle', price: '1,999', speed: '500 Mbps', includes: 'Netflix Basic · Amazon Prime · Zee5 · Unlimited Data' },
            { tier: 'tier3', badges: ['🎥 Hotstar', '📺 Netflix', '🎬 Prime', '🟣 Zee5', '☀️ Sun NXT'], title: 'Ultimate OTT Bundle', price: '2,999', speed: '1 Gbps', includes: 'All 5 OTT Platforms · 400+ Live Channels · Mesh WiFi · VIP Support' }
          ].map((card, i) => (
            <motion.div 
              key={i} 
              className={`ott-card ${card.tier}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="ott-badges">
                {card.badges.map((b, bi) => <span key={bi} className="ott-badge">{b}</span>)}
              </div>
              <h3>{card.title}</h3>
              <div className="ott-price">₹{card.price}<span style={{ fontSize: '16px', color: 'var(--gray)' }}>/mo</span></div>
              <div className="ott-note">{card.speed} + GST</div>
              <div className="ott-includes">✓ {card.includes}</div>
              <a href={`https://wa.me/918925505702?text=I%20want%20OTT%20${card.title}`} className="btn-plan btn-plan-solid" style={{ marginTop: '20px', display: 'block', textDecoration: 'none' }}>Get Plan</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Entertainment;
