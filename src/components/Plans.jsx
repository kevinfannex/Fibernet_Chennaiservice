import React, { useState } from 'react';

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
      { name: 'Starter Plus', speed: '75', unit: 'Mbps', price: '2035', note: 'Total for 3 Months (inc. GST)', features: ['Unlimited Data', 'Free Dual Band Router', 'Free Installation', '24/7 Support'] },
      { name: 'Basic', speed: '150', unit: 'Mbps', price: '2991', popular: true, note: 'Total for 3 Months (inc. GST)', features: ['Unlimited Data', 'Free Dual Band Router', 'Free Installation', 'Amazon Prime Included'] },
      { name: 'Strom', speed: '400', unit: 'Mbps', price: '4068', note: 'Total for 3 Months (inc. GST)', features: ['Unlimited Data', 'Free WiFi 6 Router', 'Free Installation', 'Netflix + Prime'] },
      { name: 'Incredible', speed: '500', unit: 'Mbps', price: '7077', bestValue: true, note: 'Total for 3 Months (inc. GST)', features: ['Unlimited Data', 'Free WiFi 6 Router', 'Free Installation', 'All OTT Platforms'] }
    ],
    halfyearly: [
      { name: 'Basic', speed: '150', unit: 'Mbps', price: '5983', note: 'Total for 6 Months (inc. GST)', features: ['Unlimited Data', 'Free Dual Band Router', '1 Month Free', 'Priority Support'] },
      { name: 'Strom', speed: '400', unit: 'Mbps', price: '8136', popular: true, note: 'Total for 6 Months (inc. GST)', features: ['Unlimited Data', 'Free WiFi 6 Router', '1 Month Free', 'Netflix Included'] },
      { name: 'Incredible', speed: '500', unit: 'Mbps', price: '14154', note: 'Total for 6 Months (inc. GST)', features: ['Unlimited Data', 'Free WiFi 6 Router', '1 Month Free', 'All OTT Platforms'] },
      { name: 'Giga', speed: '1', unit: 'Gbps', price: '23588', bestValue: true, note: 'Total for 6 Months (inc. GST)', features: ['Unlimited Data', 'Free Mesh Router', '1 Month Free', 'VIP Support'] }
    ],
    annual: [
      { name: 'Basic', speed: '150', unit: 'Mbps', price: '11965', note: 'Total for 12 Months (inc. GST)', features: ['Unlimited Data', 'Free Router + 2 Months Free', 'Priority Support'] },
      { name: 'Strom', speed: '400', unit: 'Mbps', price: '16272', popular: true, note: 'Total for 12 Months (inc. GST)', features: ['Unlimited Data', 'Free Router + 3 Months Free', 'All OTT Platforms'] },
      { name: 'Incredible', speed: '500', unit: 'Mbps', price: '28308', note: 'Total for 12 Months (inc. GST)', features: ['Unlimited Data', 'Free Router + 3 Months Free', 'VIP Support'] },
      { name: 'Giga', speed: '1', unit: 'Gbps', price: '47188', bestValue: true, note: 'Total for 12 Months (inc. GST)', features: ['Unlimited Data', 'Free Mesh Router + 2 Months Free', 'VIP Support'] }
    ]
  };

  return (
    <section className="plans" id="plans">
      <div className="container">
        <div className="section-label">Broadband Plans Chennai</div>
        <h2 className="section-title">Choose Your Perfect Plan</h2>
        <p className="section-sub">All plans include unlimited data, free router & free installation. 18% GST extra.</p>

        <div className="plan-tabs">
          <button 
            type="button"
            className={`plan-tab ${period === 'monthly' ? 'active' : ''}`}
            onClick={() => setPeriod('monthly')}
          >
            Monthly
          </button>
          <button 
            type="button"
            className={`plan-tab ${period === 'quarterly' ? 'active' : ''}`}
            onClick={() => setPeriod('quarterly')}
          >
            3 Months
          </button>
          <button 
            type="button"
            className={`plan-tab ${period === 'halfyearly' ? 'active' : ''}`}
            onClick={() => setPeriod('halfyearly')}
          >
            6 Months
          </button>
          <button 
            type="button"
            className={`plan-tab ${period === 'annual' ? 'active' : ''}`}
            onClick={() => setPeriod('annual')}
          >
            12 Months
          </button>
        </div>

        <div className="plans-grid">
          <div className="plan-content active" style={{ width: '100%' }}>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
