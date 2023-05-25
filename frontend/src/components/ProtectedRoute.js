import { Navigate } from 'react-router-dom';
import { useSession } from '@descope/react-sdk'


function ProtectedRoute ({ children }) {
    const { isAuthenticated } = useSession()

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};


export default ProtectedRoute