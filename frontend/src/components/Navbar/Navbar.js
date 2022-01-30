import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';

//import views here
import Home from '../Views/Home';
import About from '../Views/About';
import Contact from '../Views/Contact';
import logo from '../../pics/test-02.jpg'



export default function chart() {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation' >

    <img src={logo} width='250'height='max-height' style={{paddingTop:10}} />    

      <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <NavLink className="navbar-item" to="/"> Home </NavLink>
      <NavLink className="navbar-item" to="/documentation"> Documentation </NavLink>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <NavLink className="navbar-item" to="/about"> About  </NavLink>
          <NavLink className="navbar-item" to="/contact"> Charts  </NavLink>
          <NavLink className="navbar-item" to="/contact">  Contact  </NavLink>
          <hr className="navbar-divider"/>
          <NavLink className="navbar-item" to="/error"> Report an issue  </NavLink>
        </div>
      </div>
    </div>
    </div>


    </nav> 
    ) 
}
