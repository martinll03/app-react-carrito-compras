import { useContext } from "react"
import {  ShoppingCart } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { NavLink } from "react-router-dom"
import { CarritoContext } from "../context/CarritoContext"

export const NavBar = () => {
    const { listaCompras} = useContext(CarritoContext)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to='/carrito' className="navbar-brand" >Carrito </NavLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <NavLink to='/' className="nav-link" >Compras</NavLink>
                        </li>
                    </ul>
                </div>
                <NavLink to='/carrito'>
                    <Badge badgeContent={listaCompras.length} color="secondary">
                        <ShoppingCart color="action" />
                    </Badge>
                    </NavLink>
            </nav>
        </>
    )
}
