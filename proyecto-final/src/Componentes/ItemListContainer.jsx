import { collection,  getDocs, getFirestore, query, where } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

useEffect(()=>{
    const db = getFirestore();
    const itemsColection = collection(db, "Items");
    const filtro = id ? query(itemsColection, where ("categoria", "==", id)) : itemsColection;
    
    getDocs(filtro).then((snapShop) =>{
        setItems(snapShop.docs.map((doc => ({id:doc.id,...doc.data()})))
    )});

},[id]);

    return (
        <div className="container py-5">
                <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;
