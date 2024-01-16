// Navbar.js
import React from 'react';
// import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (

            <div>
            <div  >
            <div >
    
            <NavLink to="/">
            <button className="home-btn" 
            >Home</button>
            </NavLink>

            {/* #Signup Button# */}
            <NavLink to="/signup">
            <button className="signup-btn" 
            >Signup</button>
            </NavLink>



            {/* # Login Button# */}
            <NavLink  to="/login">
            <button className="login-btn" 
            >Login</button>
            </NavLink>

            
            {/* # ChatBot Button# */}
            <NavLink to="/holistic-chat-bot">
            <button className="chatbot-btn" 
            >Holistic ChatBot</button>
            </NavLink>


            <div>
            <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
            </div>
            </div>
    
            </div>
    );

}

export default NavBar;