import React, { Component } from 'react';
import logo from '../logo.gif' // relative path to image 

class Header extends Component {
    state = {  }
    render() { 
        return ( <header>
            <img src={logo} alt="One Degree Team"/>
            <div class="header-icons">
                <div class="header-icon"><i class="fa fa-search" aria-hidden="true"></i></div>
                <div class="header-icon"><i class="fa fa-bell-o" aria-hidden="true"></i></div>
                <div class="header-icon"><i class="fa fa-user-o" aria-hidden="true"></i></div>
            </div>
        </header> );
    }
}
 
export default Header;