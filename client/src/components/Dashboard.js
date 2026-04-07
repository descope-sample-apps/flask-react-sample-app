import '../App.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getSessionToken, useSession } from '@descope/react-sdk';

function Dashboard() {
    const { isSessionLoading, isAuthenticated, sessionToken } = useSession();
    const navigate = useNavigate();
    const [roles, setRoles] = useState({
        teacherRole: false,
        studentRole: false,
    });

    useEffect(() => {
        if (isSessionLoading) return;
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }

        const token = sessionToken || getSessionToken();
        if (!token) {
            navigate('/login');
            return;
        }

        fetch('/get_role_data', {
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
                setRoles({
                    teacherRole: jsonData.valid_teacher,
                    studentRole: jsonData.valid_student,
                });
            })
            .catch(() => {
                navigate('/login');
            });
    }, [isSessionLoading, isAuthenticated, sessionToken, navigate]);

    if (isSessionLoading) {
        return (
            <div className="page">
                <p>Loading...</p>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="page">
            <h1 className="title">Dashboard</h1>
            <Link className="link btn" to="/profile">
                Profile
            </Link>
            {roles.teacherRole && (
                <div className="page">
                    <h1>Welcome back Teacher!</h1>
                    <p className="students">You have 50+ students currently 🧑‍🎓</p>
                </div>
            )}
            {roles.studentRole && (
                <div className="page">
                    <h1>Welcome back Student!</h1>
                    <p className="student">Unlucky! You have homework!</p>
                    <iframe
                        title="Homework gif"
                        src="https://giphy.com/embed/H9UeFGxZz4cBG"
                        width="469"
                        height="480"
                        allowFullScreen
                    />
                </div>
            )}
        </div>
    );
}

export default Dashboard;
