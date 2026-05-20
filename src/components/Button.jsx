export const Button = ({title, style, onClick}) => {
    return (
        <button
            className={style} onClick={onClick}>{title}
        </button>
    )
}