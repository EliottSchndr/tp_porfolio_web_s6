import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

function PublicRoute({ children }) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Navigate to="/" replace /> : children;
}

export default PublicRoute;
