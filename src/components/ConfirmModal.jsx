function ConfirmModal({ message, onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-[var(--color-bg-gray)]/80 backdrop-blur-sm" onClick={onCancel} />
            <div className="relative bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm flex flex-col gap-6 mx-4">
                <div className="flex flex-col gap-2">
                    <h3 className="font-[Playfair_Display] font-bold text-lg text-[var(--color-font-high-emphasis)]">
                        Confirmation
                    </h3>
                    <p className="font-[Nunito] text-sm text-[var(--color-font-medium-emphasis)] leading-relaxed">
                        {message}
                    </p>
                </div>
                <div className="flex gap-3 justify-end">
                    <button
                        onClick={onCancel}
                        className="px-5 py-2 font-[Nunito] text-sm text-[var(--color-font-medium-emphasis)] hover:text-[var(--color-font-high-emphasis)] transition-colors"
                    >
                        Annuler
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-5 py-2 bg-red-500 text-white font-[Nunito] font-semibold text-sm rounded-lg hover:bg-red-600 transition-colors"
                    >
                        Supprimer
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmModal;
