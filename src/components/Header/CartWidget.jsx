import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {
  return (
    <div>
      <FontAwesomeIcon className="IconCart" icon={faShoppingCart}></FontAwesomeIcon>
    </div>
  )
}

export default CartWidget;
