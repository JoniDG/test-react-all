import React from 'react'
import { useAuth } from '../contexts/useAuth';
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    if (isAuthenticated === false) {
        return <Navigate to='/login' />
    }
    return children
}
