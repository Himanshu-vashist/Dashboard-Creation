import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Revenue',
      data: [12, 19, 3, 5, 2],
      backgroundColor: 'rgba(66, 165, 245, 0.8)', // Semi-transparent blue
      borderRadius: 5, // Rounded bars
      hoverBackgroundColor: 'rgba(66, 165, 245, 1)', // Slightly darker on hover
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide legend for a cleaner look
    },
    tooltip: {
      backgroundColor: '#333',
      titleColor: '#fff',
      bodyColor: '#fff',
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Hide grid lines on X-axis
      },
    },
    y: {
      grid: {
        color: '#e0e0e0', // Light gray grid lines
      },
      ticks: {
        beginAtZero: true,
      },
    },
  },
};

const RevenueUpdates = () => {
  return (
    <div
      style={{
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h4 style={{ marginBottom: '20px', color: '#333', fontWeight: '600' }}>
        Revenue Updates
      </h4>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RevenueUpdates;
