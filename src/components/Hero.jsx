import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-grid"></div>
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge"><span></span> Now Available in Chennai</div>
          <h1 className="hero-title">Get High-Speed <em>ACT Broadband</em> Connection in Chennai</h1>
          <p className="hero-sub">Unlimited Data | Free Router | Same Day Installation</p>
          <div className="hero-pills">
            <div className="hero-pill"><svg viewBox="0 0 24 24"><path d="M1 6l11 11L23 6"/></svg>Unlimited Data</div>
            <div className="hero-pill"><svg viewBox="0 0 24 24"><path d="M1 6l11 11L23 6"/></svg>Free Dual Band Router</div>
            <div className="hero-pill"><svg viewBox="0 0 24 24"><path d="M1 6l11 11L23 6"/></svg>Same Day Install</div>
            <div className="hero-pill"><svg viewBox="0 0 24 24"><path d="M1 6l11 11L23 6"/></svg>OTT Benefits</div>
          </div>
          <div className="hero-ctas">
            <a href="tel:+918925505702" className="btn-hero-call">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.37 2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91A16 16 0 0 0 14 15.82l.75-.75a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Call Now</span>
            </a>
            <a href="https://wa.me/918925505702?text=Hi%2C%20I%20want%20to%20know%20about%20ACT%20Broadband%20connection" className="btn-hero-wa" target="_blank" rel="noopener noreferrer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.849L.017 23.483a.5.5 0 0 0 .608.61l5.796-1.52A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.651-.513-5.165-1.41l-.37-.221-3.84 1.007 1.026-3.743-.242-.382A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              <span>WhatsApp Now</span>
            </a>
          </div>
        </motion.div>
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="router-illustration">
            <div className="wifi-ring"></div>
            <div className="wifi-ring"></div>
            <div className="wifi-ring"></div>
            <div className="router-core">
              <div className="router-leds">
                <div className="router-led"></div>
                <div className="router-led"></div>
                <div className="router-led"></div>
              </div>
            </div>
            <div className="speed-badge-hero">
              <div className="speed-num">1<span style={{ fontSize: '18px' }}>Gbps</span></div>
              <div className="speed-lbl">MAX SPEED</div>
            </div>
            <div className="install-badge">
              <span className="big">FREE</span>
              Same Day Install ⚡
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
