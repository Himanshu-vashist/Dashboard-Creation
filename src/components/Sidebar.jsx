import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography,
  Box,
} from '@mui/material';
import { Home, Chat, CalendarToday, Email, Support } from '@mui/icons-material';

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <Home /> },
    { text: 'Chats', icon: <Chat /> },
    { text: 'Calendar', icon: <CalendarToday /> },
    { text: 'Email', icon: <Email /> },
    { text: 'Tickets', icon: <Support /> },
  ];

  const dummyData = [
    { title: 'New Orders', count: 23 },
    { title: 'Pending Tickets', count: 5 },
    { title: 'Unread Messages', count: 14 },
  ];

  return (
    <div
      style={{
        width: '240px',
        backgroundColor: '#f4f5f7',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Sidebar Header */}
      <Typography
        variant="h5"
        component="h2"
        style={{
          fontWeight: 'bold',
          color: '#3f51b5',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        eCommerce
      </Typography>

      {/* Menu Items */}
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            style={{
              borderRadius: '8px',
              marginBottom: '10px',
              backgroundColor: '#fff',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e3f2fd')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
          >
            <ListItemIcon style={{ color: '#3f51b5' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} style={{ color: '#333' }} />
          </ListItem>
        ))}
      </List>

      <Divider style={{ margin: '20px 0' }} />

      {/* Dummy Data Section */}
      <Box>
        {dummyData.map((data, index) => (
          <Box
            key={index}
            style={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              padding: '10px 15px',
              marginBottom: '10px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography
              variant="body1"
              style={{ color: '#555', fontWeight: '600', marginBottom: '5px' }}
            >
              {data.title}
            </Typography>
            <Typography
              variant="h6"
              style={{ color: '#3f51b5', fontWeight: 'bold' }}
            >
              {data.count}
            </Typography>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Sidebar;
