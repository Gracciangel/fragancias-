import Card from "./card";

const ItemList =({items}) => {
    return (
        <div className="itemList">
            {items.map((prod)=>{
                return <Card prod={prod} key={prod.id} />
            })}
        </div>
    )
}

export default ItemList ;