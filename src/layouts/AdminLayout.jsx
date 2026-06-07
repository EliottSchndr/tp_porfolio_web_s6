import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

function AdminLayout({ children }) {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-[var(--color-bg-gray)]">
            <nav className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <span className="font-[Playfair_Display] font-bold text-[var(--color-font-high-emphasis)]">
                        Admin
                    </span>
                    <div className="flex gap-1">
                        <NavLink
                            to="/"
                            className="px-4 py-2 rounded-lg font-[Nunito] text-sm font-semibold text-[var(--color-font-medium-emphasis)] hover:text-[var(--color-font-high-emphasis)] transition-colors"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/admin/projects"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg font-[Nunito] text-sm font-semibold transition-colors ${
                                    isActive
                                        ? 'bg-[var(--color-brand-yellow)] text-[var(--color-font-high-emphasis)]'
                                        : 'text-[var(--color-font-medium-emphasis)] hover:text-[var(--color-font-high-emphasis)]'
                                }`
                            }
                        >
                            Projets
                        </NavLink>
                        <NavLink
                            to="/admin/contacts"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg font-[Nunito] text-sm font-semibold transition-colors ${
                                    isActive
                                        ? 'bg-[var(--color-brand-yellow)] text-[var(--color-font-high-emphasis)]'
                                        : 'text-[var(--color-font-medium-emphasis)] hover:text-[var(--color-font-high-emphasis)]'
                                }`
                            }
                        >
                            Contacts
                        </NavLink>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="font-[Nunito] text-sm text-[var(--color-font-medium-emphasis)]">
                        {user?.firstName} {user?.lastName}
                    </span>
                    <button
                        onClick={handleLogout}
                        className="font-[Nunito] text-sm text-[var(--color-font-medium-emphasis)] hover:text-[var(--color-font-high-emphasis)] transition-colors"
                    >
                        Déconnexion
                    </button>
                </div>
            </nav>
            <div className="p-8">
                {children}
            </div>
        </div>
    );
}

export default AdminLayout;
