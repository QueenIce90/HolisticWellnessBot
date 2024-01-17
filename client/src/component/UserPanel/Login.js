import NavBar from "../NavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Login({attemptLogin}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        attemptLogin({email, password});
        navigate("/")
    }

    return (
        
        <>

        <NavBar />
        <div class="container">
        <h1>Login</h1>
        <form id="signupForm">
            <div class="form-group">
                <label for="email">Email:</label>
                <input onChange={e => setEmail(e.target.value)} value = {email} type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input onChange={e => setPassword(e.target.value)} value = {password} type="password" class="form-control" id="password" placeholder="Enter password" name="password"/>
            </div>
            <button type="button" class="btn btn-outline-primary" onClick={handleSubmit}>Login</button>
            <p>Don't have an account? <a href="/signup">Signup</a></p>  
            <div id="errorMessage" class="error-message"></div>
        </form>
    </div>
    </>
    );
}

export default Login;