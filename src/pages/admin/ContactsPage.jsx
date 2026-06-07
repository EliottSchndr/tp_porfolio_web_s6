import { useAuth } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

function ContactsPage() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-[var(--color-bg-gray)] p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="font-[Playfair_Display] text-3xl font-bold text-[var(--color-font-high-emphasis)]">
                        Gestion des Contacts
                    </h1>
                    <div className="flex items-center gap-4">
                        <span className="font-[Nunito] text-[var(--color-font-medium-emphasis)] text-sm">
                            {user?.name}
                        </span>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-[var(--color-font-high-emphasis)] text-white font-[Nunito] text-sm rounded hover:opacity-80 transition-opacity"
                        >
                            Déconnexion
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow p-8 text-center text-[var(--color-font-medium-emphasis)] font-[Nunito]">
                    Liste des messages — à venir
                </div>
            </div>
        </div>
    );
}

export default ContactsPage;
