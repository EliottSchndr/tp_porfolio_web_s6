import {LogoItem} from "./LogoItem.jsx";

export const Logos = ({logos}) => {
    return (
        <div className="flex space-x-6 mb-4">
            {logos.map(lg => (
                <LogoItem style="w-10 md:w-12 p-2 hover:scale-110 transition-transform" logo={lg.logo} link={lg.link} key={lg.id}/>
            ))}
        </div>
    )
}