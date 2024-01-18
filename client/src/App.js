
import './App.css';
import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Signup from './component/UserPanel/Signup';
import Login from './component/UserPanel/Login';
import Logout from './component/UserPanel/Logout';
import Home from './pages/Home';
import HolisticChatBot from './pages/HolisticChatBot'
import Calendar from './component/GoogleCalendar/DietPlanner';
import HealthSearchPage from './component/Health Search/HealthSearchPage';
import DietPlanner from './component/GoogleCalendar/DietPlanner';

const POST_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

const URL = '/api'
function App() {
  const [currentUser, setCurrentUser] = useState(null)

  console.log(currentUser)
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

  useEffect(()=> {
    fetch(URL + '/check_session')
    .then(res => {
      if (res.ok) {
        res.json().then(user => {
          setCurrentUser(user)
        })
      }
    })
  }, [])

  
// SIGNUP //
async function attemptSignup(userInfo) {
  const res = await fetch(URL + '/signup', {
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
    alert('Email or password is incorrect')
  }
}

// LOGOUT //
function logout() {
  setCurrentUser(null)
  fetch(URL + '/api/logout', { method: "DELETE" })
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
      element: <HolisticChatBot currentUser={currentUser}/>
    },
    {
      path: "/dietplanner",
      element: <DietPlanner currentUser={currentUser} />

    },
    {
      path: "/healthsearchpage",
      element: <HealthSearchPage  currentUser={currentUser} />
    }

    
  ]
  const router = createBrowserRouter(routes);

  return (
    <>
    <header style = {{background : "#ffffff", color :"#ffffff"}}>
    <img class="logo" src="/logo3.png" alt="Schmooze"/>
    </header>
    <RouterProvider router={router} />
    </>
  )
}

export default App;
