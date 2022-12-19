import { useEffect, useState } from "react";
import mock from "../mock.json";
import ItemDeatil from "./itemDetail";

const ItemDetailContainer =()=> {
  const  [item , setItem] =useState({})
  useEffect(()=> {
    const getProduct =()=>{
      return new Promise((res , rej) => {
        const product = mock.find((prod) => prod.id === 2)
        res(product)
      })
    }
    getProduct()
    .then((res) => setItem(res))
    .catch((err)=> console.log(err))
  },)

    return(
      <ItemDeatil item={item}/>
    )

}
export default ItemDetailContainer;
