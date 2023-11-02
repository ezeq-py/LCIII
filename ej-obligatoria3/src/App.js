
import { useState } from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import Protected from './components/protected/Protected';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isLoggedInHandler = (value) => {
    setIsLoggedIn(value)
  }

  const router = createBrowserRouter([
    { path: "/", element: <Navigate to="login" /> },
    { path: "/login", element: <Login isLoggedInHandler={isLoggedInHandler} /> },
    {
      path: "/home",
      element: (
        <Protected isLoggedIn = {isLoggedIn}>
          <Dashboard isLoggedInHandler = {isLoggedInHandler}/>
        </Protected>
      )
    },
  ])

  return <RouterProvider router={router} />
}

export default App;
