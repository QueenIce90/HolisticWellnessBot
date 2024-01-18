import NavBar from "../component/NavBar";
import {NavLink} from "react-router-dom"



function Home({currentUser, logout}) {


    return (
        <>


        <NavBar currentUser={currentUser} logout={logout} />
        <div class="image-container">
            <img src="background1.png" alt="Home"/>
    
            {/* <NavLink to ="/signup">
                <button onClick="/signup'">Sign Up</button>
                </NavLink> */}

        <div className="home-text">
            <img src="background2.png" alt="Home"/>
        </div>
        <div className="home-text">
            <img src="background3.png" alt="Home"/>
        </div>
        <div className="home-text">
            <img src="background4.png" alt="Home"/>
        </div>
        <div className="home-text">
            <img src="background5.png" alt="Home"/>
            <img src="background6.png" alt="Home"/>
            
        </div>
    
    </div>
    <div class="signup-buttons">
                    <NavLink to ="/signup">
                    <button onClick="/signup'">Sign Up Now</button>
                    </NavLink>
                    </div>

    </>
    );
}

export default Home;