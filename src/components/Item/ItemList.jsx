import React from 'react';
import Item from './Item';
import { Row } from 'react-bootstrap';
const ItemList = ({items}) => {
  
  return (
    <Row>
      {items.map((item) => (
        <Item key={item.id} item={item}/>
      ))}
    </Row>
  );
};

export default ItemList;