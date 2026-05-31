export const LogoItem = ({logo, link, style}) => {
    return (
        <>
            <a href={link} target="_blank" className={style + " flex justify-center items-center"} >
                <img src={logo} alt="logo" className="w-full" />
            </a>
        </>
    )
}