import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const navigate = useNavigate();

const handleFormSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
    setErrorMessage('Please fill in all fields.');
    } else if (password !== confirmPassword) {
    setErrorMessage('Passwords do not match.');
    } else {
      // Perform sign-up logic here
    alert('Sign up successful!');
      // Redirect to login page or any other page
    navigate('/login');
    }
};

return (
    <div>
    <form onSubmit={handleFormSubmit}>
        <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
        />
        </div>

        <button type="submit">Sign Up</button>
    </form>

    {errorMessage && <p id="errorMessage">{errorMessage}</p>}
    </div>
);
};

$(document).ready(function() {
    $('#signupForm').submit(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();

        if (name === '' || email === '' || password === '' || confirmPassword === '') {
            $('#errorMessage').text('Please fill in all fields.');
        } else if (password !== confirmPassword) {
            $('#errorMessage').text('Passwords do not match.');
        } else {
            alert('Sign up successful!');
            // Perform sign up logic here
        }
    });
});


export default Signup;
