import ItemList from "./itemList";
// import mock from "../mock.json" ; 
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs} from 'firebase/firestore'
import {dataBase} from '../serivce/firebase'




const ItemListContainer =() => {
    // const categoryName = useParams()
const [items , setItem] = useState([])//==> con un estado persistimos la informacion. Es la única manera que hay de persistir la informacion en este caso persistimos un array.

useEffect(()=>{
    const products = collection(dataBase , 'productos')

    getDocs(products)
    .then((res, rej)=> {
        const prod = res.docs.map((prod) => {
         return {
            id: prod.id,
            ...prod.data()
         }
        })
        setItem(prod)
    })
})
return (

    <ItemList items={items}/>
    )
}

export default ItemListContainer ; 