import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = ({ 
  token,
  redirectPath = '/',
  children
 }) => {
  
  if(!token) {
    return <Navigate to={redirectPath} replace />
  }
  return children ? children : <Outlet />
};
