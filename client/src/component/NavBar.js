// Navbar.js
import React from 'react';
// import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar({currentUser}) {
    return (

            <div className="navbar">
            
            <NavLink to="/">
            <button className="navbar-button" 
            >Home</button>
            </NavLink>

            {/* #Signup Button# */}
            {/* <NavLink to="/signup">
            <button className="navbar-button" 
            >Signup</button>
            </NavLink> */}
            
            {currentUser? null:  <NavLink to="/signup">
            <button className="navbar-button" 
            >Signup</button>
            </NavLink>}



            {/* # Login Button# */}
            {/* <NavLink  to="/login">
            <button className="navbar-button" 
            >Login</button>
            </NavLink> */}
            {currentUser? null:<NavLink  to="/login">
            <button className="navbar-button" 
            >Login</button>
            </NavLink>}

            
            {/* # ChatBot Button# */}
            <NavLink to="/holistic-chat-bot">
            <button className="navbar-button" 
            >Holistic ChatBot</button>
            </NavLink>

            <NavLink to="/dietplanner">
            <button className="navbar-button"
            >Diet Planner</button>
            </NavLink>

            <NavLink to="/healthsearchpage">
            <button className="navbar-button"
            >Health Search</button>
            </NavLink>

            {/* <NavLink to="/logout">
            <button className="navbar-button"
            >Logout</button>
            </NavLink> */}

            {currentUser? <NavLink to="/logout">
            <button className="navbar-button"
            >Logout</button>
            </NavLink>: null}


{/* 

            <div>
            <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
            
            </div> */}
            </div>
            

    );

}

export default NavBar;