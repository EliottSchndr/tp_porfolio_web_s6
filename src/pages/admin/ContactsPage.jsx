import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { useContacts } from '../../context/ContactsContext.jsx';

function ContactsPage() {
    const { user, logout } = useAuth();
    const { messages, markRead } = useContacts();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-[var(--color-bg-gray)] p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="font-[Playfair_Display] text-3xl font-bold text-[var(--color-font-high-emphasis)]">
                            Contacts
                        </h1>
                        <p className="font-[Nunito] text-sm text-[var(--color-font-medium-emphasis)] mt-1">
                            {messages.filter(m => !m.read).length} non lu(s)
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="font-[Nunito] text-sm text-[var(--color-font-medium-emphasis)]">
                            {user?.firstName} {user?.lastName}
                        </span>
                        <button onClick={handleLogout} className="font-[Nunito] text-sm text-[var(--color-font-medium-emphasis)] hover:text-[var(--color-font-high-emphasis)] transition-colors">
                            Déconnexion
                        </button>
                    </div>
                </div>

                {messages.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow p-8 text-center text-[var(--color-font-medium-emphasis)] font-[Nunito]">
                        Aucun message reçu pour l'instant.
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                onClick={() => markRead(msg.id)}
                                className={`bg-white rounded-2xl shadow p-6 cursor-pointer transition-opacity ${msg.read ? 'opacity-60' : 'opacity-100'}`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        {!msg.read && (
                                            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-yellow)] inline-block" />
                                        )}
                                        <span className="font-[Nunito] font-bold text-[var(--color-font-high-emphasis)]">
                                            {msg.name}
                                        </span>
                                        <span className="font-[Nunito] text-sm text-[var(--color-font-medium-emphasis)]">
                                            {msg.email}
                                        </span>
                                    </div>
                                </div>
                                <p className="font-[Nunito] text-[var(--color-font-medium-emphasis)] text-sm leading-relaxed">
                                    {msg.message}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ContactsPage;
