import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

// Sample data for active users by region
const activeUserData = [
  { region: 'North America', users: 5000, coordinates: [-100, 40] },
  { region: 'Europe', users: 8000, coordinates: [10, 50] },
  { region: 'Asia', users: 7000, coordinates: [100, 30] },
  { region: 'Africa', users: 3000, coordinates: [20, 0] },
  { region: 'South America', users: 1200, coordinates: [-60, -10] },
  { region: 'Oceania', users: 1000, coordinates: [140, -25] },
];

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json';

const ActiveUsers = () => {
  return (
    <div style={{ padding: '20px', borderRadius: '8px', backgroundColor: '#fff' }}>
      <h4>Active Users</h4>
      <p>Total Active Users: 23,214</p>
      <ComposableMap
        projection="geoMercator"
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: '#ECEFF1', stroke: '#607D8B' },
                  hover: { fill: '#CFD8DC' },
                  pressed: { fill: '#FF5722' },
                }}
              />
            ))
          }
        </Geographies>
        {activeUserData.map(({ region, users, coordinates }) => (
          <Marker key={region} coordinates={coordinates}>
            <circle r={10} fill="#FF5722" stroke="#FFF" strokeWidth={2} />
            <text
              textAnchor="middle"
              style={{ fontSize: '12px', fontFamily: 'Arial', fill: '#5D5A6D' }}
              y={15}
            >
              {users}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default ActiveUsers;
