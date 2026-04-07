import '../App.css';
import React, { useEffect } from 'react';
import { Descope, useSession, useUser } from '@descope/react-sdk';
import { useNavigate } from 'react-router-dom';

function Login() {
    const { isAuthenticated, isSessionLoading } = useSession();
    const { isUserLoading } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/profile');
        }
    }, [isAuthenticated, navigate]);

    if (isSessionLoading || isUserLoading) {
        return (
            <div className="page">
                <p>Loading...</p>
            </div>
        );
    }

    if (isAuthenticated) {
        return (
            <div className="page">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="page">
            <h1 className="title">Login/SignUp to see the Secret Message!</h1>
            <Descope
                flowId="sign-up-or-in"
                theme="light"
                onSuccess={(e) => {
                    console.log(e.detail.user);
                }}
                onError={(err) => {
                    console.log('Error!', err);
                }}
            />
        </div>
    );
}

export default Login;
