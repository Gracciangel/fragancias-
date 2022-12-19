import Style from "./styles/card.module.css"

const Card =({prod}) => {
    return (
        <div className={Style.card}>
            <img src={prod.img} alt="" />
            <h4 className={Style.title}>{prod.title}</h4>
        </div>
    )
}
export default Card ; 