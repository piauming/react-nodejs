import React from 'react';
import useAuth from '../../hooks/useAuth'
import { Routes, Route, NavLink, Navigate, useNavigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();
  const location = useLocation();

  if (!auth?.accessToken) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;