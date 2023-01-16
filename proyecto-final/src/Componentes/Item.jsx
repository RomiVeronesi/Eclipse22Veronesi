import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({item}) =>{
    return (
        <Link to={"/item/" + item.id}>
            <div className="products">
                <div className="all-products">
                    <div className="product">
                        <img src={item.img} alt="..." />
                        <div className="product-info">
                            <h4 className="product-title">{item.nombre}</h4>
                            <p className="product-price"><b>${item.precio}</b></p>
                            <ItemCount/>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item;