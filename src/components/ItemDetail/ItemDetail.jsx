import React, { Fragment } from "react";
import { Card, Col } from 'react-bootstrap';
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({detail}) => {

return (
<Fragment>
  <Col key={detail.id} className="box" sm="12" md="6" lg="4">
    <Card >
      <Card.Img variant="top" src={detail.image} />
      <Card.Body>
        <Card.Title className="card--tittle">
          {detail.title}
        </Card.Title>
        <Card.Text className="card--description">
          {detail.description}
        </Card.Text>
        <ItemCount stock= {9} initial= {1}/>
      </Card.Body>
    </Card>
  </Col>
  </Fragment>
  )
};

export default ItemDetail;