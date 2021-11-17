import React from "react";
import './Item.css'
import { Card, Col } from 'react-bootstrap';
import ItemCount from "../ItemCount/ItemCount";
const Item = ({item}) => {

return <div>

  <Col key={item.id} sm="12" md="6" lg="4">
    <Card >
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>
          {item.title}
        </Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <ItemCount stock= {9} initial= {1}/>
      </Card.Body>
    </Card>
  </Col>
  </div>
};

export default Item;