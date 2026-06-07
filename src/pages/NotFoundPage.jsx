import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-bg-gray)]">
            <h1 className="font-[Playfair_Display] text-8xl font-bold text-[var(--color-font-high-emphasis)]">
                404
            </h1>
            <p className="mt-4 text-xl font-[Nunito] text-[var(--color-font-medium-emphasis)]">
                Page introuvable
            </p>
            <Link
                to="/"
                className="mt-8 px-6 py-3 bg-[var(--color-brand-yellow)] text-[var(--color-font-high-emphasis)] font-[Nunito] font-semibold rounded hover:opacity-90 transition-opacity"
            >
                Retour à l'accueil
            </Link>
        </div>
    );
}

export default NotFoundPage;
