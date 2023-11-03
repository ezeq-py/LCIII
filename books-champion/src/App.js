import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import "react-bootstrap/dist/react-bootstrap.min.js";

import Login from "./components/form/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Protected from "./components/protected/Protected";
import { useState } from "react";
import PageNotFound from "./components/pageNotFound/PageNotFound";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (value) => {
    setIsLoggedIn(value)
  }

  const router = createBrowserRouter([
    { path: "/", element: <Navigate to="login" />},
    { path: "/login", element: <Login onLogin={loginHandler}/> },
    {
      path: "/home",
      element: (
        <Protected isSignedIn={isLoggedIn}>
          <Dashboard onLogOut = {loginHandler}/>
        </Protected>
      )
    },
    {
      path: "*",
      element: <PageNotFound />,
    }
  ]);

  return <RouterProvider router={router} />
}

export default App;
