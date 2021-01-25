import React, { Component } from 'react';

class SideNavBar extends Component {
    state = {  }
    render() { 
        return ( 
        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link" href="#">Dashboard</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Calendar</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="#">Create Project</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Tasks</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Users Manager</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Managers</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Payments</a>
            </li>
        </ul> 
      );
    }
}
 
export default SideNavBar;