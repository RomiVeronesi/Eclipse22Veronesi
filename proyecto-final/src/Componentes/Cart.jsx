import React, { useContext } from "react";
import { CartContex } from "./Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clear, sumaTotal,cartTotal } = useContext(CartContex);

    if (cartTotal () === 0){
        return(
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">
                            ¡No se encontraron productos en el Carrito!
                        </div>
                        <Link to={"/"} id="boton-vaciar" className="">Volver</Link>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Nombre Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                            <tr>
                                <th scope="col" className="text-end" colSpan={5}><Link onClick={clear} id="boton-vaciar" className="">Vaciar Carrito</Link></th>
                            </tr>
                        </thead>

                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.img} alt={""} width={35} /></td>
                                    <td>{item.nombre}</td>
                                    <td>{item.cantidad}</td>
                                    <td>${item.cantidad * item.precio}</td>
                                    <td><Link onClick={() => { removeItem(item.id) }}><img src={"./Imagenes/icons8-eliminar-30.png"} alt={"Eliminar"} width={23} /></Link></td>
                                </tr>
                            ))}

                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center"><b>Suma Total</b></td>
                                <td><b>${sumaTotal()}</b></td>
                                <td className="text-end" ><Link to={"/checkout"} id="boton-vaciar" className="">Finalizar</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}

export default Cart;