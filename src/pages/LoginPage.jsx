import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useAuth } from '../context/AuthContext.jsx';
import { MOCK_CREDENTIALS, MOCK_USER } from '../services/mockAuth.js';

const hasGoogleClientId = Boolean(import.meta.env.VITE_GOOGLE_CLIENT_ID);

function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleGoogleSuccess = (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);
        login({
            firstName: decoded.given_name,
            lastName: decoded.family_name,
            email: decoded.email,
        });
        navigate('/admin/contacts');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === MOCK_CREDENTIALS.email && password === MOCK_CREDENTIALS.password) {
            login(MOCK_USER);
            navigate('/admin/contacts');
        } else {
            setError('Email ou mot de passe incorrect.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-gray)]">
            <div className="bg-white rounded-2xl shadow-lg p-12 flex flex-col gap-5 w-full max-w-sm">
                <h1 className="font-[Playfair_Display] text-3xl font-bold text-[var(--color-font-high-emphasis)] text-center">
                    Administration
                </h1>

                {hasGoogleClientId && (
                    <>
                        <div className="flex justify-center">
                            <GoogleLogin
                                onSuccess={handleGoogleSuccess}
                                onError={() => setError('Échec de la connexion Google.')}
                                useOneTap
                            />
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-px bg-gray-200" />
                            <span className="font-[Nunito] text-sm text-[var(--color-font-low-emphasis)]">ou</span>
                            <div className="flex-1 h-px bg-gray-200" />
                        </div>
                    </>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="font-[Nunito] text-sm text-[var(--color-font-medium-emphasis)]">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="eliott.schneider@efrei.fr"
                            className="border border-gray-200 rounded-lg px-4 py-2 font-[Nunito] text-sm text-[var(--color-font-high-emphasis)] outline-none focus:border-[var(--color-brand-yellow)] transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-[Nunito] text-sm text-[var(--color-font-medium-emphasis)]">
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                            className="border border-gray-200 rounded-lg px-4 py-2 font-[Nunito] text-sm text-[var(--color-font-high-emphasis)] outline-none focus:border-[var(--color-brand-yellow)] transition-colors"
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 font-[Nunito] text-sm text-center">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="bg-[var(--color-brand-yellow)] text-[var(--color-font-high-emphasis)] font-[Nunito] font-semibold py-2 rounded-lg hover:opacity-90 transition-opacity"
                    >
                        Se connecter
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
