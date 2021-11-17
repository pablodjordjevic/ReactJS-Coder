import React, { Fragment } from "react";
import './Item.css'
import { Card, Col } from 'react-bootstrap';
import ItemCount from "../ItemCount/ItemCount";
const Item = ({item}) => {

return (
<Fragment>
  <Col key={item.id} className="box" sm="12" md="6" lg="4">
    <Card >
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title className="card--tittle">
          {item.title}
        </Card.Title>
        <Card.Text className="card--description">
          {item.description}
        </Card.Text>
        <ItemCount stock= {9} initial= {1}/>
      </Card.Body>
    </Card>
  </Col>
  </Fragment>
  )
};

export default Item;