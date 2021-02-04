import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideNavBar extends Component {
    state = {  }
    render() { 
        return ( 
        <ul className="nav flex-column">
            <li className="nav-item">
                <Link className="nav-link" to="/">Dashboard</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/calendar">Calendar</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/create-project">Create Project</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/tasks">Tasks</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/user-manager">Users Manager</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/managers">Managers</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/payments">Payments</Link>
            </li>
        </ul> 
      );
    }
}
 
export default SideNavBar;