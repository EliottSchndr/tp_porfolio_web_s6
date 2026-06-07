export const TestimonialItem = ({ name, role, message }) => {
    return (
        <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col gap-4 w-full max-w-sm">
            <p className="font-nunito text-font-medium-emphasis text-base leading-relaxed flex-1">
                "{message}"
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center font-playfair font-bold text-font-high-emphasis text-sm flex-shrink-0">
                    {name.charAt(0)}
                </div>
                <div>
                    <p className="font-nunito font-bold text-font-high-emphasis text-sm">{name}</p>
                    <p className="font-nunito text-font-low-emphasis text-xs">{role}</p>
                </div>
            </div>
        </div>
    );
};
