import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return(
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}><img src={"./Imagenes/ECLIPSE.png"} alt={"logo"}  width={75}/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to={"/category/sahumerios"}>Sahumerios</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/category/kits"}>Kits</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/category/accesorios"}>Accesorios</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <CartWidget />
                </div>
            </nav>

        </div>
    )
}

export default NavBar; 