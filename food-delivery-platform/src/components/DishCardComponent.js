import React from "react";
import "../DISHES.js";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const DishCardComponent = ({ dish }) => {
  const { name, description, image, price } = dish;
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt={name} src={image} 
    />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText>{description}</CardText>
        <Button>{price}</Button>
      </CardBody>
    </Card>
  );
};

export default DishCardComponent;
