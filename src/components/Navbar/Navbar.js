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

                <Link className="btn_categorias btn dropdown-toggle" to="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Catálogo</Link>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><Link className="linkCategorias dropdown-item" to={'/category/music'}>Música</Link></li>
                        <li><Link className="linkCategorias dropdown-item" to={'/category/movie'}>Películas</Link></li>
                        <li><Link className="linkCategorias dropdown-item" to={'/category/sports'}>Deportes</Link></li>
                        <li><Link className="linkCategorias2 dropdown-item" to="/">Ver todo</Link></li>
                    </ul>
  
                <Link to="/contactMe" className="navLink"><a href="https://es.reactjs.org/">Contactarme</a></Link>
            </ul>

            <div className="navBtn">
                <div className="navLink2"><a href="https://es.reactjs.org/">Registrarme</a></div>
                <div className="navBtnLink">Iniciar Sesión</div>
                <Link to="/cart">
                    <CartWidget />
                </Link>
            </div>

        </nav>
    )
}

export default Navbar