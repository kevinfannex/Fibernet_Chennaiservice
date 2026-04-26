import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const reasons = [
    { num: '01', title: 'Same Day Installation', desc: 'Our trained technicians are available 7 days a week. Book before 2 PM, get connected today.' },
    { num: '02', title: 'Trusted Local Service', desc: 'Serving Chennai residents for years. Local team, local support — people you can trust.' },
    { num: '03', title: 'Best-in-Class Speeds', desc: 'ACT Fibernet consistently ranks among India\'s fastest broadband networks by TRAI data.' },
    { num: '04', title: 'Rapid Support Response', desc: 'WhatsApp support, quick resolution. Most issues resolved within hours, not days.' }
  ];

  return (
    <section className="why" id="why">
      <div className="container">
        <div className="section-label">Why Choose Us</div>
        <h2 className="section-title">The ACT Advantage</h2>
        <div className="why-grid">
          {reasons.map((r, i) => (
            <motion.div 
              key={i} 
              className="why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="why-num">{r.num}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
