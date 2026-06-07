import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));

function PageLoader() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-gray)]">
            <div className="w-10 h-10 border-4 border-[var(--color-brand-yellow)] border-t-transparent rounded-full animate-spin" />
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
