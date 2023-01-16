import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContex } from "./Context/CartContext";



const Checkout = () => {

    const {cart, clear,sumaTotal} = useContext(CartContex);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido]= useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [ordenId, setOrdenId] = useState ("");

    const generarOrden = ()=> {
        const order  = {
            buyer:{Name:nombre, surname:apellido,  email:email, phone:telefono},
            Items: cart.map(item => ({id: item.id, title:item.nombre, price:item.precio, cantidad:item.cantidad, precio_total:item.cantidad * item.precio})),
            total: sumaTotal()

        };

        const db = getFirestore();
        const ordersCollection = collection (db, "Orders");
        addDoc(ordersCollection,order).then((snapshop) =>{
            setOrdenId(snapshop.id);
            setApellido("");
            setApellido("");
            setEmail("");
            setTelefono("");
            clear();
        });
}
    

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label  htmlFor="Nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control"  placeholder="Nombre" onInput={(e) => {setNombre(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Apellido" className="form-label">Apellido</label>
                            <input type="text" className="form-control" placeholder="Apellido" onInput={(e) => {setApellido(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">Email</label>
                            <input type="text" className="form-control"  placeholder="Email" onInput={(e) => {setEmail(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Teléfono" className="form-label">Teléfono</label>
                            <input type="text" className="form-control"  placeholder="Teléfono" onInput={(e) => {setTelefono(e.target.value)}}/>
                        </div>
                        <button type="button" onClick={generarOrden} id="boton-vaciar">Enviar</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                        {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.img} alt={""} width={35} /></td>
                                    <td>{item.nombre}</td>
                                    <td>{item.cantidad}</td>
                                    <td>${item.cantidad * item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3}> Total: </td>
                                <td>${sumaTotal()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {ordenId ?
                    <div className="alert alert-info" role="alert">
                       <h3>Gracias por tu Compra</h3> 
                       <p>Número de orden: {ordenId}</p>
                    </div> : "" }
                </div>
            </div>
        </div>
    )
}

export default Checkout;