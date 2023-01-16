import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContex } from "./Context/CartContext";

const CartWidget = () => {
    const{cartTotal} = useContext(CartContex);

    if(cartTotal() === 0 ){
        return(
            ""
        )
    }

    return(
        <div>
        <Link to={"/cart"} id="boton-carrito" className="position-absolute top-50 end-0 translate-middle-y">
            <img src={"./Imagenes/icons8-carro-favorito-48.png"} alt={""} />
            <span id="contadorCarrito">{cartTotal()}</span>
        </Link>
        </div>
    )
}

export default CartWidget;