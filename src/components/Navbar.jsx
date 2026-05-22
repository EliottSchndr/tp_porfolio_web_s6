export const Navbar = ({name}) => {
    return (
        <nav className="flex justify-between items-center py-6 px-10">
            <div className="font-comfortaa font-bold text-xl text-font-high-emphasis text-[18px]">
                {name}
            </div>
            <ul className="flex gap-8 font-raleway font-medium text-font-high-emphasis text-[18px]">
                <li><a href="#about" className="">About</a></li>
                <li><a href="#projects" className="">Projects</a></li>
                <li><a href="#contact" className="">Contact</a></li>
            </ul>
        </nav>
    );
};
