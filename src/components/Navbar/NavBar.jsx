import React from "react";
import "./navBar.css"

const Navbar = () => {
    return (
        <div className="Navbar">
            <span className="nav-logo">drinks</span>
           
            <div className="nav-items">
                <a href="/home">Tienda</a>
                <a href="/projects">Contacto</a>
                <a href="/contact">Carrito</a>
            </div>
    
        
        </div>
    )
}

export default Navbar ;