import React, { Component } from 'react';

class SideNavBar extends Component {
    state = {  }
    render() { 
        return ( 
        <ul className="nav flex-column">
            <li className="nav-item">
                <a className="nav-link" href="#">Dashboard</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Calendar</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="#">Create Project</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Tasks</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Users Manager</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Managers</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Payments</a>
            </li>
        </ul> 
      );
    }
}
 
export default SideNavBar;