import React from 'react';
import Sidebar from './Sidebar';
import SalesDistribution from './SalesDistribution';
import SalesOverview from './SalesOverview';
import RevenueUpdates from './RevenueUpdates';
import ActiveUsers from './ActiveUsers';
import PaymentGateways from './PaymentGateways';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f4f5f7' }}>
        <SalesDistribution />
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <SalesOverview />
          <RevenueUpdates />
        </div>
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <ActiveUsers />
          <PaymentGateways />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
