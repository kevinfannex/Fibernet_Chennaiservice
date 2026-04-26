import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', area: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      alert('Please enter your name and phone number.');
      return;
    }
    const msg = encodeURIComponent(`Hi! I'd like a callback.\nName: ${form.name}\nPhone: ${form.phone}\nArea: ${form.area || 'Not specified'}\n\nPlease help me with ACT Broadband connection.`);
    window.open('https://wa.me/918925505702?text=' + msg, '_blank');
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-label">Get Connected Today</div>
        <div className="contact-inner">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready for Blazing-Fast Internet in Chennai?</h2>
            <p>Call or WhatsApp us right now. Our team will help you pick the perfect plan and schedule your same-day installation.</p>
            <div className="contact-btns">
              <a href="tel:+918925505702" className="contact-btn-call">
                <svg className="contact-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.37 2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91A16 16 0 0 0 14 15.82l.75-.75a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                📞 +91 89255 05702
              </a>
              <a href="https://wa.me/918925505702?text=Hi%2C%20I%20want%20to%20get%20ACT%20Broadband%20in%20Chennai" className="contact-btn-wa" target="_blank" rel="noopener noreferrer">
                <svg className="contact-btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.849L.017 23.483a.5.5 0 0 0 .608.61l5.796-1.52A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.651-.513-5.165-1.41l-.37-.221-3.84 1.007 1.026-3.743-.242-.382A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                💬 WhatsApp Now
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Request a Callback</h3>
            <p>Fill in your details and we'll call you within 30 minutes!</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter your full name" 
                  required 
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="+91 89255 05702" 
                  required 
                  value={form.phone}
                  onChange={(e) => setForm({...form, phone: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label htmlFor="area">Your Area</label>
                <select 
                  id="area" 
                  value={form.area}
                  onChange={(e) => setForm({...form, area: e.target.value})}
                >
                  <option value="">Select your area in Chennai</option>
                  <option>T Nagar</option>
                  <option>Velachery</option>
                  <option>Anna Nagar</option>
                  <option>Tambaram</option>
                  <option>Ambattur</option>
                  <option>Adyar</option>
                  <option>Porur</option>
                  <option>Chromepet</option>
                  <option>Sholinganallur</option>
                  <option>OMR</option>
                  <option>Guindy</option>
                  <option>Nungambakkam</option>
                  <option>Other</option>
                </select>
              </div>
              <button type="submit" className="btn-submit">📞 Request Callback</button>
            </form>
            <p className="form-note">🔒 Your info is 100% private. No spam, ever.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
