import './ItemCount.css';
import React, {useState} from 'react';




function ItemCount ({stock, initial, onAdd}) {


const [count, setCount] = useState(initial);

onAdd = stock;

if (count > stock){
  setCount(initial);
} 
if (count === (initial-1)){
  setCount(initial);
}
if(onAdd > 0){
  return (
    
      <div className="card--container">
        <span className="NumberCount">{count}</span>
        <div className="DivButtonStore">
          <button className="StoreButton" onClick = { ()=> {setCount(Math.max(count-1));}}>-</button>
          <button className="StoreButton" onClick = { ()=> {setCount(Math.min(count+1));}}>+</button>
        </div> 
        <button className="CartButton">Agregar a carrito</button>
      </div>
  )
}
}
export default ItemCount;
