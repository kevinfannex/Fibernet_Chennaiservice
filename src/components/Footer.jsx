import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="logo-wrap">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
            <div className="logo-icon" style={{ width: '50px', height: '50px', fontSize: '20px' }}>ACT</div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '22px', color: 'white' }}>ACT Fibernet Services</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '2px', textTransform: 'uppercase' }}>Chennai</div>
            </div>
          </div>
        </div>
        <p>ACT broadband Chennai · WiFi connection Chennai · Internet provider Chennai · New broadband connection Chennai</p>
        <p style={{ marginTop: '12px' }}>Serving T Nagar, Velachery, Anna Nagar, Tambaram, Ambattur and all of Chennai</p>
        <div style={{ marginTop: '20px', display: 'flex', gap: '15px', justifyContent: 'center', fontSize: '12px', opacity: 0.6 }}>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Refund Policy</a>
        </div>
        <p style={{ marginTop: '16px', fontSize: '11px', opacity: 0.4 }}>© 2025 ACT Fibernet Services Chennai. All rights reserved. This is an authorized service partner page.</p>
      </div>
    </footer>
  );
};

export default Footer;
