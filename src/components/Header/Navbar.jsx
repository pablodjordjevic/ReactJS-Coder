import React from 'react'
import './Navbar.css';


function Navbar() {
  return (
    <div className="Navbar">
      
      <div className="LadoIzquierdo">
        <div className="Links">
          <a href="/home">Home</a>
          <a href="/Productos">Productos</a>
          <a href="/Productos">Productos</a>
        </div>
      </div>
      
      <div className="LadoDerecho">
        <input type="text" placeholder="Encuentra aqui..."/>
        <button className="BotonBuscador">Buscar</button>
      </div>
    
    </div>
  )
}

export default Navbar;
