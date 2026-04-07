import '../App.css';
import { useState, useEffect, useCallback } from 'react';
import { useDescope, useUser, getSessionToken, useSession } from '@descope/react-sdk';
import { useNavigate, Link } from 'react-router-dom';

function Profile() {
    const { isSessionLoading, isAuthenticated, sessionToken } = useSession();
    const { user, isUserLoading } = useUser();
    const { logout } = useDescope();
    const navigate = useNavigate();

    const [secret, setSecret] = useState({
        secret: '',
        roles: [],
    });

    const logoutUser = useCallback(async () => {
        await logout();
        navigate('/login');
    }, [logout, navigate]);

    useEffect(() => {
        if (isSessionLoading || isUserLoading) return;
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }

        const token = sessionToken || getSessionToken();
        if (!token) {
            navigate('/login');
            return;
        }

        fetch('/get_roles', {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
            .then((data) => {
                if (data.status === 401) {
                    navigate('/login');
                    return null;
                }
                return data.json();
            })
            .then((jsonData) => {
                if (!jsonData) return;
                setSecret({
                    secret: jsonData.secretMessage,
                    roles: jsonData.roles,
                });
            })
            .catch(() => {
                navigate('/login');
            });
    }, [isSessionLoading, isUserLoading, isAuthenticated, sessionToken, navigate]);

    if (isSessionLoading || isUserLoading) {
        return (
            <div className="page">
                <p>Loading...</p>
            </div>
        );
    }

    if (!isAuthenticated || !user) {
        return null;
    }

    return (
        <div className="page profile">
            <div>
                <h1 className="title">Hello {user.name} 👋</h1>
                <div>My Private Component</div>
                <p>
                    Secret Message:{' '}
                    <span style={{ padding: '5px 10px', color: 'white', backgroundColor: 'black' }}>
                        {secret.secret}
                    </span>
                </p>
                <p>Your Role(s): </p>
                {!secret.roles || secret.roles.length === 0 ? (
                    <p>
                        <span style={{ color: 'green' }}>No role found!</span>
                    </p>
                ) : (
                    secret.roles.map((role, i) => (
                        <p key={i}>
                            <span style={{ color: 'green' }}>{role}</span>
                        </p>
                    ))
                )}
                <Link className="link btn" to="/">
                    Home
                </Link>
                <Link className="link btn" to="/dashboard">
                    Dashboard
                </Link>
                <button className="btn" type="button" onClick={logoutUser}>
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Profile;
