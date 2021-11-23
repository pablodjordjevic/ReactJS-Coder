import React from 'react'
import './Navbar.css';
import './CartWidget.jsx'
import CartWidget from './CartWidget.jsx';


function Header() {
  return (
    <div className="Navbar">
      
      <div className="LadoIzquierdo">
        <div className="Links">
          <a href="/home">Home</a>
          <a href="/Products">Productos</a>
        </div>
      </div>
      
      <div className="LadoDerecho">
      
        <input type="text" placeholder="Encuentra aqui..."/>
        <button className="BotonBuscador">Buscar</button>
        <CartWidget/>
        
      </div>
    
    </div>
  )
}

export default Header;



