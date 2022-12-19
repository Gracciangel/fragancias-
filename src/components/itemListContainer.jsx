import ItemList from "./itemList";
import mock from "../mock.json" ; 
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer =() => {
    const categoryName = useParams()
const [items , setItem] = useState([])//==> con un estado persistimos la informacion. Es la única manera que hay de persistir la informacion en este caso persistimos un array.

useEffect(()=>{
    const prod =()=> { //==> la funcion prod retorna una promesa de igual manera que cuando se consume una API
        return new Promise((res , rej)=>{
            setTimeout(()=>{
                res(mock)
            }, 2000)
        })
      
    }
    prod() //==>>> aqui se resuelve la promesa ejecutamos la funcion y resolvemos. 
    .then((res)=>{
        setItem(res)
    })
    .catch((err)=>{
        console.log(err)
    })
})
return (

    <ItemList items={items}/>
    )
}

export default ItemListContainer ; 