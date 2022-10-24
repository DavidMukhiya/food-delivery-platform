import React from "react";
import "../DISHES.js";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const DishCardComponent = ({ dish }) => {
  const { name, description, image, price } = dish;
  return (
    <Card
      style={{
        width: "26rem",
        paddingRight: '0px',
        marginRight: '0px'
      }}
    >
      <img alt={name} src={image} style={{height:"22rem"}}
    />
      <CardBody style={{color:'black', textAlign:'center', backgroundColor:'rgb(221, 193, 167)'}}>
        <CardTitle tag="h5" >{name}</CardTitle>
        <CardText>{description}</CardText>
        <Button style={{backgroundColor:'#EAE9E4', color:'black'}}>{price}</Button>
      </CardBody>
    </Card>
  );
};

export default DishCardComponent;
