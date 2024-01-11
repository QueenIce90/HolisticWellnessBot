
// LoginForm.js
import React, { useState } from "react";
import Navigation from "../Components/Navigation";
import { useState } from 'react'
import { useNavigate, NavLink } from "react-router-dom";

const Login = ({ handleLogin }) => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    // API call to backend for login authentication
    // Pass the login response data to handleLogin function
    // handleLogin(response.userId);
};

return (
    <div>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
    </form>
    </div>
);
};

export default Login