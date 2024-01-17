// Navbar.js
import React from 'react';
// import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (

            <div class="btn btn-primary">
            
            <NavLink to="/">
            <button className="navbar-brand" 
            >Home</button>
            </NavLink>

            {/* #Signup Button# */}
            <NavLink to="/signup">
            <button className="navbar-brand" 
            >Signup</button>
            </NavLink>



            {/* # Login Button# */}
            <NavLink  to="/login">
            <button className="navbar-brand" 
            >Login</button>
            </NavLink>

            
            {/* # ChatBot Button# */}
            <NavLink to="/holistic-chat-bot">
            <button className="navbar-brand" 
            >Holistic ChatBot</button>
            </NavLink>

            <NavLink to="/calendar">
            <button className="navbar-brand"
            >Calendar</button>
            </NavLink>


            <div>
            <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
            
            </div>
            </div>
            

    );

}

export default NavBar;