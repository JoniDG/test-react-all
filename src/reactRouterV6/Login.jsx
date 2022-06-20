import React from 'react'
import { useAuth } from './contexts/useAuth';
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate('/');
    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
