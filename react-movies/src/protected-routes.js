import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext2 } from './contexts/authContext'

const ProtectedRoutes = () => {

  const context = useContext(AuthContext2);
  const location = useLocation();

  return context.isAuthenticated === true ? (
    <Outlet /> 
  ) : (
    <Navigate to='/login' replace state={{ from: location }}/>
  );
};

export default ProtectedRoutes;
