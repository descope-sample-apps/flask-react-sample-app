import '../App.css';
import { Link, Navigate } from 'react-router-dom';
import { useSession } from '@descope/react-sdk';

function Home() {
    const { isAuthenticated, isSessionLoading } = useSession();

    if (isSessionLoading) {
        return (
            <div className="page">
                <p>Loading...</p>
            </div>
        );
    }

    if (isAuthenticated) {
        return <Navigate to="/profile" replace />;
    }

    return (
        <div className="page">
            <h1 className="title">Home</h1>
            <Link className="link btn" to="/login">
                Login
            </Link>
            <iframe
                title="Welcome animation"
                src="https://giphy.com/embed/bKj0qEKTVBdF2o5Dgn"
                width="480"
                height="352"
                allowFullScreen
            />
        </div>
    );
}

export default Home;
