import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.gif' // relative path to image 
import '../assets/css/header.css';

class Header extends Component {
    state = {  }
    render() { 
        return ( <header>
            <Link  to="/">
                <img src={logo} alt="One Degree Team" className='odt-logo'/>
            </Link>
            <div className="header-icons">
                <div className="header-icon"><i className="fa fa-search" aria-hidden="true"></i></div>
                <div className="header-icon"><i className="fa fa-bell-o" aria-hidden="true"></i></div>
                <div className="header-icon"><i className="fa fa-user-o" aria-hidden="true"></i></div>
            </div>
        </header> );
    }
}
 
export default Header;