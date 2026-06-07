import { createContext, useContext, useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

const TestimonialsContext = createContext(null);

const DEFAULT_TESTIMONIALS = [
    { id: 1, name: 'Sophie Martin', role: 'Chef de projet', message: 'Un travail remarquable, très professionnel et livré dans les délais. Je recommande vivement !', visible: true },
    { id: 2, name: 'Lucas Bernard', role: 'Développeur senior', message: 'Code propre, bien structuré et facile à maintenir. Une vraie valeur ajoutée pour notre équipe.', visible: true },
    { id: 3, name: 'Emma Dupont', role: 'Designer UX', message: "Très à l'écoute, capable de transformer une idée vague en interface soignée. Excellent travail !", visible: true },
];

function testimonialsReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [...state, { ...action.payload, id: Date.now(), visible: true }];
        case 'TOGGLE_VISIBILITY':
            return state.map((t) => t.id === action.payload ? { ...t, visible: !t.visible } : t);
        case 'DELETE':
            return state.filter((t) => t.id !== action.payload);
        default:
            return state;
    }
}

export function TestimonialsProvider({ children }) {
    const [stored, setStored] = useLocalStorage('testimonials_data', DEFAULT_TESTIMONIALS);

    const [testimonials, dispatch] = useReducer(testimonialsReducer, stored);

    const addTestimonial = (testimonial) => {
        const next = [...testimonials, { ...testimonial, id: Date.now(), visible: true }];
        setStored(next);
        dispatch({ type: 'ADD', payload: testimonial });
    };

    const toggleVisibility = (id) => {
        const next = testimonials.map((t) => t.id === id ? { ...t, visible: !t.visible } : t);
        setStored(next);
        dispatch({ type: 'TOGGLE_VISIBILITY', payload: id });
    };

    const deleteTestimonial = (id) => {
        const next = testimonials.filter((t) => t.id !== id);
        setStored(next);
        dispatch({ type: 'DELETE', payload: id });
    };

    return (
        <TestimonialsContext.Provider value={{ testimonials, addTestimonial, toggleVisibility, deleteTestimonial }}>
            {children}
        </TestimonialsContext.Provider>
    );
}

export function useTestimonials() {
    return useContext(TestimonialsContext);
}
