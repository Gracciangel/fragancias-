const ItemDeatil =({item}) => {
    return(
        <div className="detail">
            <img src={item.img} alt="" />
            <h4>{item.title}</h4>
        </div>
    )
}

export default ItemDeatil ;