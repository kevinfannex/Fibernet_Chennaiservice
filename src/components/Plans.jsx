import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Plans = () => {
  const [period, setPeriod] = useState('monthly');

  const plansData = {
    monthly: [
      { name: 'Starter', speed: '75', unit: 'Mbps', price: '575', features: ['Unlimited Data', 'Free Dual Band Router', 'Free Installation', '24/7 Customer Support'] },
      { name: 'Standard', speed: '150', unit: 'Mbps', price: '845', popular: true, features: ['Unlimited Data', 'Free Dual Band Router', 'Free Installation', 'Amazon Prime Included', '24/7 Priority Support'] },
      { name: 'Plus', speed: '400', unit: 'Mbps', price: '1149', features: ['Unlimited Data', 'Free Dual Band Router', 'Free Installation', 'Amazon Prime + Netflix', '24/7 Priority Support'] },
      { name: 'Pro', speed: '500', unit: 'Mbps', price: '1999', features: ['Unlimited Data', 'Free Dual Band Router', 'Free Installation', 'All OTT Platforms', 'Mesh WiFi Eligible'] },
      { name: 'Ultra', speed: '1', unit: 'Gbps', price: '2999', bestValue: true, features: ['Unlimited Data', 'Free Dual Band Router', 'Free Installation', 'All OTT Platforms', 'Mesh WiFi Included', 'VIP Support Line'] }
    ],
    quarterly: [
      { name: 'Starter · 3M', speed: '75', unit: 'Mbps', price: '1650', note: 'save ₹75', features: ['Unlimited Data', 'Free Router + Installation', '24/7 Support'] },
      { name: 'Standard · 3M', speed: '150', unit: 'Mbps', price: '2450', popular: true, note: 'save ₹85', features: ['Unlimited Data', 'Free Router + Installation', 'Amazon Prime', 'Priority Support'] },
      { name: 'Ultra · 3M', speed: '1', unit: 'Gbps', price: '8499', bestValue: true, note: 'save ₹498', features: ['Unlimited Data', 'All OTT Platforms', 'Mesh WiFi', 'VIP Support'] }
    ],
    halfyearly: [
      { name: 'Starter · 6M', speed: '75', unit: 'Mbps', price: '3250', note: 'save ₹200', features: ['Unlimited Data', 'Free Router + Installation', '24/7 Support'] },
      { name: 'Standard · 6M', speed: '150', unit: 'Mbps', price: '4799', popular: true, note: 'save ₹271', features: ['Unlimited Data', 'Free Router + Installation', 'Amazon Prime', 'Priority Support'] },
      { name: 'Ultra · 6M', speed: '1', unit: 'Gbps', price: '16499', bestValue: true, note: 'save ₹1,495', features: ['Unlimited Data', 'All OTT Platforms', 'Mesh WiFi', 'VIP Support'] }
    ],
    annual: [
      { name: 'Starter · 12M', speed: '75', unit: 'Mbps', price: '5999', note: 'save ₹901', features: ['Unlimited Data', 'Free Router + Installation', '24/7 Support'] },
      { name: 'Standard · 12M', speed: '150', unit: 'Mbps', price: '8999', popular: true, note: 'save ₹1,141', features: ['Unlimited Data', 'Free Router + Installation', 'Amazon Prime Full Year', 'Priority Support'] },
      { name: 'Ultra · 12M', speed: '1', unit: 'Gbps', price: '29999', bestValue: true, note: 'save ₹5,989', features: ['Unlimited Data', 'All OTT Platforms', 'Mesh WiFi', 'VIP Support', 'Free Fire TV Stick'] }
    ]
  };

  return (
    <section className="plans" id="plans">
      <div className="container">
        <div className="section-label">Broadband Plans Chennai</div>
        <h2 className="section-title">Choose Your Perfect Plan</h2>
        <p className="section-sub">All plans include unlimited data, free router & free installation. 18% GST extra.</p>

        <div className="plan-tabs">
          {['monthly', 'quarterly', 'halfyearly', 'annual'].map((t) => (
            <button 
              key={t}
              className={`plan-tab ${period === t ? 'active' : ''}`}
              onClick={() => setPeriod(t)}
            >
              {t === 'monthly' ? 'Monthly' : t === 'quarterly' ? '3 Months' : t === 'halfyearly' ? '6 Months' : '12 Months'}
            </button>
          ))}
        </div>

        <div className="plans-grid">
          <AnimatePresence mode="wait">
            <motion.div 
              key={period}
              className="plan-content active"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{ width: '100%' }}
            >
              {plansData[period].map((plan, i) => (
                <div key={i} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && <div className="badge-popular">🔥 Most Popular</div>}
                  {plan.bestValue && <div className="badge-value">⭐ Best Value</div>}
                  <div className="plan-name">{plan.name}</div>
                  <div className="plan-speed">{plan.speed}<span> {plan.unit}</span></div>
                  <div className="plan-price"><sub>₹</sub>{plan.price}</div>
                  <div className="plan-price-note">{plan.note || 'per month + GST'}</div>
                  <ul className="plan-features">
                    {plan.features.map((f, fi) => <li key={fi}>{f}</li>)}
                  </ul>
                  <a href={`https://wa.me/918925505702?text=I%20want%20ACT%20${plan.speed}${plan.unit}%20plan%20(${period})`} className={`btn-plan ${plan.popular ? 'btn-plan-solid' : 'btn-plan-outline'}`}>Get This Plan</a>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Plans;
