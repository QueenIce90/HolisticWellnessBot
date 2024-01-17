import { useState } from "react";
import { useNavigate } from "react-router-dom";




function Signup({attemptSignup}) {

    //STATE//

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: ""
    })

    //EVENTS//
    const handleChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        attemptSignup(userInfo);
        navigate('/login');
    }

    const navigate = useNavigate();

    // const apiUrl = "http://127.0.0.1:5555/api/check_session";

    return(
        <div class="container">
        <div class="text-center">
        <h1 class="text-xxl-start">Signup</h1>
        </div>
        
        <form onSubmit={handleSubmit}id="signupForm">
            <div class="p-2 bg-light border">
                <label for="name">Name:</label>
                <input type="text" class="form-control" onChange={handleChange} id="name" placeholder="Enter name" name="name"/>
            </div>
            <div class="p-2 bg-light border">
                <label for="email">Email:</label>
                <input type="email" class="form-control" onChange={handleChange} id="email" placeholder="Enter email" name="email"/>
            </div>
            <div class="p-2 bg-light border">
                <label for="password">Password:</label>
                <input type="password" class="form-control" onChange={handleChange} id="password" placeholder="Enter password" name="password"/>
            </div>
            <div class="shadow p-3 mb-5 bg-body rounded-">
                <label for="confirmPassword">Confirm Password:</label>
                <input type="password" class="form-control" onChange={handleChange} id="confirmPassword" placeholder="Confirm password" name="confirmPassword"/>
            </div > 
            <div class="text-center">
            <button type="submit" class="btn btn-primary">Sign Up</button>
            </div>
            <div id="errorMessage" class="error-message"></div>
            <div class="d-grid gap-3">
                <div class="text-center">
                <p>Already have an account? <a href="/login">Login</a></p>
                </div>
                
</div>
        </form>
    </div>
    )
}

export default Signup;