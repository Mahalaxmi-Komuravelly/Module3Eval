import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const adminLogin = JSON.parse(localStorage.getItem("adminLogin"))=== "true";
  const customerLogin = JSON.parse(localStorage.getItem("customerLogin")) === "true";
  if(!adminLogin){
    return <Navigate to="/login" />;
  }
  if(!customerLogin){
    return <Navigate to="/login" />
  }
  return children;
}

export default ProtectedRoute
