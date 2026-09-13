import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ allowedRole }) => {
  const { user, loading } = useAuth();

  // Optionally render a loading spinner if you have real async auth checking
  if (loading) {
    return null; 
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && user.role !== allowedRole) {
    // If authenticated but wrong role, route to their correct dashboard
    return <Navigate to={user.role === 'doctor' ? '/doctor-dashboard' : '/patient-dashboard'} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
