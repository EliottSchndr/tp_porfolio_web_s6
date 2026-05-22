export const TitleLine = ({name}) => {
    return(
        <div className="justify-items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-bold font-playfair flex-col">
                {name}
                <div className="mt-1 border-b-brand-yellow border-b-4 w-full"></div>
            </h2>

        </div>
    )
}