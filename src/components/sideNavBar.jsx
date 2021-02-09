import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideNavBar extends Component {
    state = {  }
    render() { 
        return ( 
        <ul className="nav flex-column nav-panel">
            <li className="nav-item">
                <Link className="nav-link" to="/">
                    <i className="fa fa-th-large" aria-hidden="true"></i>
                    <span className="nav-link-text">Dashboard</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/calendar">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <span className="nav-link-text">Calendar</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/create-project">
                    <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                    <span className="nav-link-text">Create Project</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/tasks">
                    <i className="fa fa-pie-chart" aria-hidden="true"></i>
                    <span className="nav-link-text">Tasks</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/user-manager">
                    <i className="fa fa-users" aria-hidden="true"></i>
                    <span className="nav-link-text">Users Manager</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/managers">
                    <i className="fa fa-comments" aria-hidden="true"></i>
                    <span className="nav-link-text">Managers</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/payments">
                    <i className="fa fa-credit-card" aria-hidden="true"></i>
                    <span className="nav-link-text">Payments</span>
                </Link>
            </li>
        </ul> 
      );
    }
}
 
export default SideNavBar;