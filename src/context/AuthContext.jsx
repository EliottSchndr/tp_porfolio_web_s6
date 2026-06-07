import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext(null);

const initialState = {
    user: JSON.parse(localStorage.getItem('auth_user')) ?? null,
    isAuthenticated: localStorage.getItem('auth_user') !== null,
};

function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('auth_user', JSON.stringify(action.payload));
            return { user: action.payload, isAuthenticated: true };
        case 'LOGOUT':
            localStorage.removeItem('auth_user');
            return { user: null, isAuthenticated: false };
        default:
            return state;
    }
}

export function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (user) => dispatch({ type: 'LOGIN', payload: user });
    const logout = () => dispatch({ type: 'LOGOUT' });

    return (
        <AuthContext.Provider value={{ ...state, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
