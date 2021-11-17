import React, { Fragment } from 'react';
import Item from './Item';
import { Row } from 'react-bootstrap';
const ItemList = ({items}) => {
  
  return (
  <Fragment>
    <Row>
      {items.map((item) => (
        <Item key={item.id} item={item}/>
      ))}
    </Row>
  </Fragment>
  );
};

export default ItemList;