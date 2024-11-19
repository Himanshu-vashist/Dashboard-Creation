import React from 'react';

const SalesDistribution = () => {
  const salesData = [
    { title: 'Total Sales', value: '$34,343.00' },
    { title: 'By Website', value: '$4.5k (40%)' },
    { title: 'By Mobile', value: '$2.8k (25%)' },
    { title: 'By Market', value: '$2.2k (20%)' },
    { title: 'By Agent', value: '$1.7k (15%)' },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        padding: '20px',
        borderRadius: '8px',
        backgroundImage: 'url("https://imgs.search.brave.com/x7qpiXSOjjjcaWYNsyjdRUcj36-PMOdLdu6Aj8XWiLc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzEwLzU1LzYw/LzM2MF9GXzIxMDU1/NjAyN19wTm1nNEVV/RndybjJXMjVTRGRX/YXlQYWtWSXp0VFNl/OC5qcGc")', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Overlay for better text visibility */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust transparency as needed
          zIndex: 0,
        }}
      ></div>

      {salesData.map((item, index) => (
        <div
          key={index}
          style={{
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1, // Ensures this content is above the overlay
          }}
        >
          <h4
            style={{
              margin: '0 0 10px',
              color: '#333',
              fontSize: '18px',
              fontWeight: '600',
            }}
          >
            {item.value}
          </h4>
          <p
            style={{
              margin: '0',
              color: '#888',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SalesDistribution;
