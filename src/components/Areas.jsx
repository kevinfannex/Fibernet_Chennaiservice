import React from 'react';
import { motion } from 'framer-motion';

const Areas = () => {
  const areas = [
    'T Nagar', 'Velachery', 'Anna Nagar', 'Tambaram', 'Ambattur', 'Adyar', 'Porur', 'Perambur',
    'Chromepet', 'Pallavaram', 'Sholinganallur', 'Perungudi', 'OMR', 'Guindy', 'Nungambakkam',
    'Kodambakkam', 'Mylapore', 'Besant Nagar', 'Nanganallur', 'Thiruvanmiyur', 'Mogappair', 'Avadi'
  ];

  return (
    <section className="areas" id="areas">
      <div className="container">
        <div className="section-label">Service Coverage</div>
        <h2 className="section-title">Areas We Serve in Chennai</h2>
        <p className="section-sub">ACT Fibernet internet provider Chennai — available across all major localities.</p>
        <div className="areas-grid">
          {areas.map((area, i) => (
            <motion.div 
              key={i} 
              className="area-chip"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              {area}
            </motion.div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: '28px', color: 'var(--gray)', fontSize: '14px' }}>
          Don't see your area? <a href="https://wa.me/918925505702?text=Is%20ACT%20broadband%20available%20in%20my%20area?" style={{ color: 'var(--blue)', fontWeight: 700 }}>WhatsApp us</a> to check availability.
        </p>
      </div>
    </section>
  );
};

export default Areas;
