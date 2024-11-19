import React from 'react';

const PaymentGateways = () => {
  const gateways = [
    { name: 'PayPal', amount: '$6235', icon: '💳' },
    { name: 'Wallet', amount: '$1235', icon: '👜' },
    { name: 'Credit Card', amount: '$5235', icon: '💵' },
  ];

  return (
    <div
      style={{
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#f7f8fc',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h4 style={{ marginBottom: '20px', color: '#333', textAlign: 'center' }}>
        Payment Gateways
      </h4>
      <div style={{ display: 'grid', gap: '15px' }}>
        {gateways.map((gateway, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '15px 20px',
              borderRadius: '8px',
              backgroundColor: '#fff',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  fontSize: '24px',
                  padding: '10px',
                  backgroundColor: '#eaf5fc',
                  borderRadius: '50%',
                  color: '#2196f3',
                }}
              >
                {gateway.icon}
              </span>
              <div>
                <h5 style={{ margin: 0, color: '#333', fontWeight: 600 }}>
                  {gateway.name}
                </h5>
                <p style={{ margin: 0, color: '#777', fontSize: '14px' }}>
                  Total Transactions
                </p>
              </div>
            </div>
            <span style={{ fontSize: '18px', fontWeight: 600, color: '#333' }}>
              {gateway.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentGateways;
