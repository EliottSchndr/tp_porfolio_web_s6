import { useContacts } from '../../context/ContactsContext.jsx';
import AdminLayout from '../../layouts/AdminLayout.jsx';

function ContactsPage() {
    const { messages, markRead } = useContacts();

    return (
        <AdminLayout>
            <div className="max-w-4xl mx-auto flex flex-col gap-6">
                <div>
                    <h1 className="font-[Playfair_Display] text-3xl font-bold text-[var(--color-font-high-emphasis)]">
                        Contacts
                    </h1>
                    <p className="font-[Nunito] text-sm text-[var(--color-font-medium-emphasis)] mt-1">
                        {messages.filter(m => !m.read).length} non lu(s)
                    </p>
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
                                <div className="flex items-center gap-3 mb-2">
                                    {!msg.read && (
                                        <span className="w-2 h-2 rounded-full bg-[var(--color-brand-yellow)] flex-shrink-0" />
                                    )}
                                    <span className="font-[Nunito] font-bold text-[var(--color-font-high-emphasis)]">
                                        {msg.name}
                                    </span>
                                    <span className="font-[Nunito] text-sm text-[var(--color-font-medium-emphasis)]">
                                        {msg.email}
                                    </span>
                                </div>
                                <p className="font-[Nunito] text-sm text-[var(--color-font-medium-emphasis)] leading-relaxed">
                                    {msg.message}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}

export default ContactsPage;
