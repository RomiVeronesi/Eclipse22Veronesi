import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {doc,getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();


    useEffect(() =>{
        const db = getFirestore();
        const documento = doc(db,"Items", id);
        getDoc(documento).then((snapShop)=>{
            if(snapShop.exists ()){
                setItem({id:snapShop.id,...snapShop.data()})
            }else{
                console.log("error");
            }
        })
    },[id]);
    
    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;