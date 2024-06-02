import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import AlertBarChart from './components/AlertBarChart';
import AlertPieChart from './components/AlertPieChart';
import AlertLineChart from './components/AlertLineChart';
import AlertTable from './components/AlertTable';
import './components/Dashboard.css';
import './components/Sidebar.css';
import Sidebar from './components/Sidebar';

const Dashboard = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    axios
      .get('/eve.json')
      .then((response) => setAlerts(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar /> {/* Render the Sidebar component */}
      <div className="dashboard-content">
      <div className="dashboard-heading-container">
    <FontAwesomeIcon icon={faNetworkWired} className="dashboard-heading-icon" />
    <div className="dashboard-heading-text-container">
      <Typography variant="h4" gutterBottom className="dashboard-heading">
        Network Alerts Dashboard
      </Typography>
    </div>
  </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <div className="dashboard-section">
              <h2 className="dashboard-section-heading">Network Activity</h2>
              <AlertBarChart alerts={alerts} />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="dashboard-section">
              <h2 className="dashboard-section-heading">Alert Severity</h2>
              <AlertPieChart alerts={alerts} />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="dashboard-section">
              <h2 className="dashboard-section-heading">Alert Timeline</h2>
              <AlertLineChart alerts={alerts} />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="dashboard-section">
              <h2 className="dashboard-section-heading">Alert Log</h2>
              <AlertTable alerts={alerts} />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;