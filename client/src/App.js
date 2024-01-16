
import './App.css';
import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Home from './pages/Home';
import HolisticChatBot from './pages/HolisticChatBot'

const POST_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [user, setUser] = useState(null);

  // const login = (user) => {
  //   setIsLoggedIn(true);
  //   setUser(user);
  // }

  // const logout = () => {
  //   setIsLoggedIn(false);
  //   setUser(null);
  // }
// SIGNUP //
async function attemptSignup(userInfo) {
  const res = await fetch(URL + '/users', {
    method: 'POST',
    headers: POST_HEADERS,
    body: JSON.stringify(userInfo)
  })
  if (res.ok) {
    const data = await res.json()
    setCurrentUser(data)
  } else {
    alert('Invalid sign up')
  }
}

// LOGIN //
async function attemptLogin(userInfo) {
  const res = await fetch(URL + '/login', {
    method: 'POST',
    headers: POST_HEADERS,
    body: JSON.stringify(userInfo)
  })
  if (res.ok) {
    const data = await res.json()
    setCurrentUser(data)
  } else {
    alert('Invalid sign up')
  }
}

// LOGOUT //
function logout() {
  setCurrentUser(null)
  fetch(URL + '/logout', { method: "DELETE" })
}

  const routes = [
    {
      path: "/",
      element: <Home currentUser={currentUser}/>
    },
    {
      path: "/signup",
      element: <Signup attemptSignup={attemptSignup} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    },
    {
      path: "/login",
      element: <Login attemptLogin={attemptLogin} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    },
    
    {
      path: "/logout",
      element: <Logout logout={logout} currentUser={currentUser} />
    },
    {
      path: "/holistic-chat-bot",
      element: <HolisticChatBot />
    }

    
  ]
  const router = createBrowserRouter(routes);

  return (
    <RouterProvider router={router} />
    
  )
}

export default App;
