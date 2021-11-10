import React from 'react'
import './ItemListContainer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHandSpock } from '@fortawesome/free-solid-svg-icons';

function ItemListContainer(props) {
  return (
    <div>
      <h1 className="ItemList"> {props.greeting} <FontAwesomeIcon icon={faHandSpock}></FontAwesomeIcon></h1>
    </div>
  )
}
export default ItemListContainer;

