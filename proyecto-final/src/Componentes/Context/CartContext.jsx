import React, { useState } from "react";
import { createContext } from "react";

export const CartContex = createContext();

const CartContexProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item,cantidad) => {
        if (isInCart(item.id)) {
           let pos = cart.findIndex(x => x.id === item.id);
           cart[pos].cantidad += cantidad;
           setCart([...cart]);
        }else{
            setCart([...cart,{...item,cantidad:cantidad}]);
        }
    }


    const removeItem = (id) => {
        const  productos = cart.filter(x => x.id !== id);
        setCart (productos);
    }

    const clear = () => {
        setCart ([]);
    };

    const isInCart = (id) => {
        return cart.some(x => x.id === id);
    };


    const cartTotal = () =>{
        return cart.reduce((total,item) => total+= item.cantidad, 0);
    }

    
    const sumaTotal = () =>{
        return cart.reduce((total,item) => total+= item.cantidad * item.precio, 0);
    }

    return(
       <CartContex.Provider value={{cart,addItem,removeItem,clear,cartTotal,sumaTotal}}>
        {children}
       </CartContex.Provider>
    )
}

export default CartContexProvider;