import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock,onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [itemstock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState (false)

    const incrementarStock = ()  =>{
        if (counter < itemstock)
        setCounter (counter + 1);
     }

     const decrementarStock = ()  =>{
        if (counter > 1)
        setCounter (counter - 1);
     }
   
    const addToCart = (cantidad) => {
        setItemStock(itemstock - cantidad);
        setCounter(1);
        setVendido(true);
        onAdd(cantidad);
    }
    useEffect(()=>{
        setItemStock(stock);
    },[stock]);
  


     return (
        <div className="container text-center">
            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-outline">{counter}</button>
                        <button type="button" className="btn btn-outline" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {vendido ? <Link to={"/cart"} className="btn btn-outline-primary" >Terminar mi compra</Link>:<button className="btn btn-outline-primary" onClick={()=> {addToCart(counter)}}>Agregar al Carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;