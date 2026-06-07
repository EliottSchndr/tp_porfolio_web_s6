import { createContext, useContext, useReducer } from 'react';

const ContactsContext = createContext(null);

const STORAGE_KEY = 'contacts_messages';

function save(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return state;
}

function contactsReducer(state, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return save([{ ...action.payload, id: Date.now(), read: false }, ...state]);
        case 'MARK_READ':
            return save(state.map((msg) => msg.id === action.payload ? { ...msg, read: true } : msg));
        default:
            return state;
    }
}

export function ContactsProvider({ children }) {
    const [messages, dispatch] = useReducer(
        contactsReducer,
        JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
    );

    const addMessage = (message) => dispatch({ type: 'ADD_MESSAGE', payload: message });
    const markRead = (id) => dispatch({ type: 'MARK_READ', payload: id });

    return (
        <ContactsContext.Provider value={{ messages, addMessage, markRead }}>
            {children}
        </ContactsContext.Provider>
    );
}

export function useContacts() {
    return useContext(ContactsContext);
}
