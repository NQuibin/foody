import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  user?: boolean;
  children: React.ReactElement;
}

const ProtectedRoute = ({ user = false, children }: ProtectedRouteProps) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
