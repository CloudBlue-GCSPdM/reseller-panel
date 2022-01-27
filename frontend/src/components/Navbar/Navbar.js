import React, {useState} from 'react';
import { Link } from 'react-router-dom';

//import views here
import Home from '../Views/Home';
import About from '../Views/About';
import Contact from '../Views/Contact';
import logo from '../../pics/test-02.jpg'



export default function chart() {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation' >

    <img src={logo} width='250'height='max-height' style={{paddingTop:10}} />

      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io" style={{height:100}}>
        
        </a>
      </div>
      

      <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        Home
      </a>

      <a className="navbar-item">
        Documentation
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider"/>
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>
    </div>


      {/* <ul className='nav-links'>
        <Link to="/homepage" className='"Home'> <div className='navbar-item'> </div> <li>Tab goes here</li> </Link>
        <Link to="/about" className='About'>  <div className='navbar-item'> </div> <li>Tab goes here</li> </Link>
        <Link to="/contact" className='Contact'> <div className='navbar-item'> </div> <li>Tab goes here</li> </Link>
      </ul> */}

    </nav> 
    ) 
}
