import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext(null);

const initialState = {
    user: null,
    isAuthenticated: false,
};

function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload, isAuthenticated: true };
        case 'LOGOUT':
            return initialState;
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
