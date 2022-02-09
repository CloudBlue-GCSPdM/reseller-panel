import { NavLink, useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa"
import { MdLibraryBooks } from "react-icons/md"

//app logo
import logo from '../../pics/test-02.jpg'


const Navbar = () => {
  let navigate = useNavigate()
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation' >

      <img src={logo} width='250' height='max-height' onClick={()=>navigate("/")} style={{ paddingTop: 10 }} />

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


    </nav>
  )
}

export default Navbar;