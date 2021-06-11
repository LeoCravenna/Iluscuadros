import React from 'react'
import './Navbar.css'

//COMPONENTES
import CartWidget from '../CartWidget/CartWidget'
import MenuWidget from '../MenuWidget/MenuWidget'

function Navbar() {
    return (
        <nav className="nav">
      
            <div className="navLink">
                <h1>Iluscuadros</h1>
            </div>
            <div className="iconMenu"><MenuWidget /></div>

            <ul className="navMenu">
                <li className="navLink"><a href="https://es.reactjs.org/">Sobre mí</a></li>
                <li className="navLink"><a href="https://es.reactjs.org/">Productos</a></li>
                <li className="navLink"><a href="https://es.reactjs.org/">Contactarme</a></li>
            </ul>

            <div className="navBtn">
                <div className="navLink2"><a href="https://es.reactjs.org/">Registrarme</a></div>
                <div className="navBtnLink">Iniciar Sesión</div>
                <CartWidget />
            </div>

        </nav>
    )
}

export default Navbar