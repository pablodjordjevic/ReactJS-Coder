import React from 'react'
import './ItemListContainer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHandSpock } from '@fortawesome/free-solid-svg-icons';
import { products } from '../Item/Items';
import { useState } from 'react';
import ItemList from '../Item/ItemList';


function ItemListContainer({ saludo }) {
  const [items, setItems] = useState([]);

  const returnProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1500);
  });
  returnProducts.then((res) => {
    setItems(res);
  })
    .catch((error) => {
      console.log(error);
    });
  return (
    <div>
      <h1 className="ItemList"> {saludo} <FontAwesomeIcon icon={faHandSpock}></FontAwesomeIcon></h1>
      <ItemList items={items} />
    </div>
  );
}
export default ItemListContainer;

