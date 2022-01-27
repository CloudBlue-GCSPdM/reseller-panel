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

    <img src={logo} width='250'height='max-height' style={{paddingTop:20}} />

      <div className="navbar-brand">
        <a class="navbar-item" href="https://bulma.io" style={{height:100}}>
        
        </a>
      </div>
      

      <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider"/>
          <a class="navbar-item">
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
