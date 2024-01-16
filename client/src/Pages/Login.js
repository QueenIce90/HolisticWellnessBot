import NavBar from "../component/NavBar";



function Login() {
    return (
        
        <>

        <NavBar />
        <div class="container">
        <h1>Login</h1>
        <form id="signupForm">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" class="form-control" id="password" placeholder="Enter password" name="password"/>
            </div>
            <button type="button" class="btn btn-outline-primary">Login</button>
            <p>Don't have an account? <a href="/signup">Signup</a></p>  
            <div id="errorMessage" class="error-message"></div>
        </form>
    </div>
    </>
    );
}

export default Login;