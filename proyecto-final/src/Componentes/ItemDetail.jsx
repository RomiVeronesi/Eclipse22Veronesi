import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContex } from "./Context/CartContext";

const ItemDetail = ({item}) =>{
    const{addItem}  = useContext(CartContex);

    const onAdd = (cantidad) => {
       addItem(item,cantidad);
    }

    return(
        <div className="products">
                <div className="all-products">
                    <div className="product">
                        <img src={item.img} alt="..." />
                        <div className="product-info">
                            <h2 className="product-title">{item.nombre}</h2>
                            <p>{item.descripción}</p>
                            <p className="product-price"><b>${item.precio}</b></p>
                            <ItemCount stock={item.stock} onAdd={onAdd}/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail;