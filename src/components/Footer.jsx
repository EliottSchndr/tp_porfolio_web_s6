import {Logos} from "./Logos.jsx";

export const Footer = ({name, logos}) => {
    return (
        <footer className="relative w-full mt-20">

            <img
                src="/assets/img_footer.png"
                alt="Vague de décoration"
                className="w-full h-auto min-h-[150px] object-cover object-bottom select-none pointer-events-none block"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 sm:pt-12 md:pt-16">

                <Logos logos={logos} />

                <div className="font-nunito text-font-medium-emphasis text-xs sm:text-sm md:text-base">
                    {name} 2026
                </div>

            </div>

        </footer>
    )
}