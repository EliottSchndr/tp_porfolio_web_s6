import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export const Navbar = ({ name }) => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="flex justify-between items-center py-6 px-10">
            <div className="font-comfortaa font-bold text-xl text-font-high-emphasis text-[18px]">
                {name}
            </div>
            <ul className="flex gap-8 items-center font-raleway font-medium text-font-high-emphasis text-[18px]">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li>
                    {isAuthenticated ? (
                        <button onClick={handleLogout}>Déconnexion</button>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </li>
            </ul>
        </nav>
    );
};
