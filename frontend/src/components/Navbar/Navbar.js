import { NavLink, useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa"
import { MdLibraryBooks } from "react-icons/md"
import { RiAdminFill } from "react-icons/ri"
import {AiTwotoneSetting} from "react-icons/ai"

//app logo
import logo from '../../pics/test-02.jpg'


const Navbar = () => {
  let navigate = useNavigate()
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation' >

      <img src={logo} width='250' height='max-height' onClick={()=>navigate("/")} style={{ paddingTop: 10, paddingBottom:10 }} />

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink className="navbar-item" to="/"> 
        <FaHome/> 
        <p style={{paddingLeft: "5px"}}>  Home</p>
      </NavLink>
          <NavLink className="navbar-item" to="/documentation"> 
        <MdLibraryBooks/>
        <p style={{paddingLeft: "5px"}}>  Documentation</p>    
          </NavLink>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link"> More </a>

            <div className="navbar-dropdown">
              <NavLink className="navbar-item" to="/about"> About  </NavLink>
              {/* <NavLink className="navbar-item" to="/charts"> All Subscriptions  </NavLink> */}
              <NavLink className="navbar-item" to="/contact">  Contact  </NavLink>
              <hr className="navbar-divider" />
              <NavLink className="navbar-item" to="/error"> Report an issue  </NavLink>
            </div>
          </div>
        </div>
      </div>

      <section className="hero">
  <div className="hero-body columns is-multiline">
    <div className='column'>
    <p className="title" style={{paddingTop: 10}}> 
    <RiAdminFill size="1em" color='#999999'/>
    <RiAdminFill size="0.5em" color='#ffffff'/>
    <AiTwotoneSetting size="1em" color='#999999' />
    </p>
    
    </div>
  </div>
</section>


    </nav>
  )
}

export default Navbar;