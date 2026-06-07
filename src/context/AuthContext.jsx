import { createContext, useContext, useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

const AuthContext = createContext(null);

function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload, isAuthenticated: true };
        case 'LOGOUT':
            return { user: null, isAuthenticated: false };
        default:
            return state;
    }
}

export function AuthProvider({ children }) {
    const [storedUser, setStoredUser, removeStoredUser] = useLocalStorage('auth_user', null);

    const [state, dispatch] = useReducer(authReducer, {
        user: storedUser,
        isAuthenticated: storedUser !== null,
    });

    const login = (user) => {
        setStoredUser(user);
        dispatch({ type: 'LOGIN', payload: user });
    };

    const logout = () => {
        removeStoredUser();
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <AuthContext.Provider value={{ ...state, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
