import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register Chart.js modules
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Profit', 'Expense'],
  datasets: [
    {
      data: [23450, 23450],
      backgroundColor: ['#4caf50', '#ff7043'],
    },
  ],
};

const SalesOverview = () => {
  return (
    <div style={{ padding: '20px', borderRadius: '8px', backgroundColor: '#fff' }}>
      <h4>Sales Overview</h4>
      <Doughnut data={data} />
    </div>
  );
};

export default SalesOverview;
