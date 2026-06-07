import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/AuthContext.jsx';
import { ContactsProvider } from './context/ContactsContext.jsx';
import { ProjectsProvider } from './context/ProjectsContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import PageSkeleton from './components/PageSkeleton.jsx';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID ?? '';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const LoginPage = lazy(() => import('./pages/LoginPage.jsx'));
const ProjectsPage = lazy(() => import('./pages/admin/ProjectsPage.jsx'));
const ContactsPage = lazy(() => import('./pages/admin/ContactsPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));

function App() {
    return (
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <ProjectsProvider>
        <ContactsProvider>
        <AuthProvider>
            <BrowserRouter>
                <Suspense fallback={<PageSkeleton />}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route
                            path="/admin/projects"
                            element={
                                <ProtectedRoute>
                                    <ProjectsPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/admin/contacts"
                            element={
                                <ProtectedRoute>
                                    <ContactsPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </AuthProvider>
        </ContactsProvider>
        </ProjectsProvider>
        </GoogleOAuthProvider>
    );
}

export default App;
