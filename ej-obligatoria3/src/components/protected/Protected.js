import React from 'react'
import {Navigate} from "react-router";

const Protected = ({ isLoggedIn, children}) => {
    if (!isLoggedIn) {
        return <Navigate to="/login" replace/>
    } else {
        return children;
    }
}

export default Protected