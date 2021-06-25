import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

//COMPONENTES
import CartWidget from '../CartWidget/CartWidget'
import MenuWidget from '../MenuWidget/MenuWidget'

function Navbar() {
    return (
        <nav className="nav">
      
            <div className="navLink">
                <Link to="/"><h1>Iluscuadros</h1></Link>
            </div>
            <div className="iconMenu"><MenuWidget /></div>

            <ul className="navMenu">
                <Link to="/aboutMe" className="navLink"><a href="https://es.reactjs.org/">Sobre mí</a></Link>

                <div className="dropdown">
                    <Link to="/" className="navLink"><a href="https://es.reactjs.org/">Catálogo</a></Link>
                
                    <ul>
                        <Link className="Link" to={'/category/Alive'}>Vivos</Link>
                        <Link className="Link" to={'/category/Presumed dead'}>Presunto Muerto</Link>
                        <Link className="Link" to={'/category/Deceased'}>Fallecido</Link>
                    </ul>
                
                </div>    
                
                <Link to="/contactMe" className="navLink"><a href="https://es.reactjs.org/">Contactarme</a></Link>
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