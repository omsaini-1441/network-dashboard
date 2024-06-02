import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartBar,
  faChartPie,
  faChartLine,
  faTable,
  faCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h3 className="sidebar-brand">Network Alerts</h3>
      </div>
      <div className="sidebar-body">
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <a href="#" className="sidebar-link active">
              <FontAwesomeIcon icon={faChartBar} className="sidebar-icon" />
              <span className="sidebar-text">Network Activity</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <FontAwesomeIcon icon={faChartPie} className="sidebar-icon" />
              <span className="sidebar-text">Alert Severity</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <FontAwesomeIcon icon={faChartLine} className="sidebar-icon" />
              <span className="sidebar-text">Alert Timeline</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <FontAwesomeIcon icon={faTable} className="sidebar-icon" />
              <span className="sidebar-text">Alert Log</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <FontAwesomeIcon icon={faCog} className="sidebar-icon" />
              <span className="sidebar-text">Settings</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <FontAwesomeIcon icon={faSignOutAlt} className="sidebar-icon" />
              <span className="sidebar-text">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;