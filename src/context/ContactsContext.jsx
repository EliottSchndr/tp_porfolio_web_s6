import { createContext, useContext, useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

const ContactsContext = createContext(null);

function contactsReducer(state, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return [{ ...action.payload, id: Date.now(), read: false }, ...state];
        case 'MARK_READ':
            return state.map((msg) => msg.id === action.payload ? { ...msg, read: true } : msg);
        default:
            return state;
    }
}

export function ContactsProvider({ children }) {
    const [stored, setStored] = useLocalStorage('contacts_messages', []);

    const [messages, dispatch] = useReducer(contactsReducer, stored);

    const addMessage = (message) => {
        const next = [{ ...message, id: Date.now(), read: false }, ...messages];
        setStored(next);
        dispatch({ type: 'ADD_MESSAGE', payload: message });
    };

    const markRead = (id) => {
        const next = messages.map((msg) => msg.id === id ? { ...msg, read: true } : msg);
        setStored(next);
        dispatch({ type: 'MARK_READ', payload: id });
    };

    return (
        <ContactsContext.Provider value={{ messages, addMessage, markRead }}>
            {children}
        </ContactsContext.Provider>
    );
}

export function useContacts() {
    return useContext(ContactsContext);
}
