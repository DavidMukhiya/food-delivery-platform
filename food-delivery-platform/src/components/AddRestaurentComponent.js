import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import "../css/addrestaurantstyle.css";

const AddRestaurentComponent = () => {
  return (
    <div className="addRestaurantComponentStyle">
      <p style={{ textTransform: "uppercase", color: "#5B4F47" }}>
        Add Restaurant
      </p>
      <Form>
        <FormGroup>
          <Label
            for="restaurantName"
            className="visually-hidden"
            style={{ color: "#5B4F47" }}
          >
            Restaurant Name
          </Label>
          <Input
            id="restaurantName"
            name="restaurantName"
            placeholder="Restaurant Name *"
            type="text"
            style={{ backgroundColor: "#DDC1A7", width: "25rem" }}
          />
        </FormGroup>
        <FormGroup>
          <Label
            for="restaurantName"
            className="visually-hidden"
            style={{ color: "#5B4F47" }}
          >
            Email Address
          </Label>
          <Input
            id="emailAddress"
            name="emailAddress"
            placeholder="Email Address *"
            type="email"
            className="addRestaurantInputStyle"
            style={{ backgroundColor: "#DDC1A7", width: "25rem" }}
          />
        </FormGroup>
        <FormGroup>
          <Label
            for="password"
            className="visually-hidden"
            style={{ color: "#5B4F48" }}
          >
            password
          </Label>
          <Input
            id="password"
            name="password"
            placeholder="Set A Password*"
            type="password"
            className="addRestaurantInputStyle"
            style={{ backgroundColor: "#DDC1A7", width: "25rem" }}
          />
        </FormGroup>
        <Button style={{ backgroundColor: "#BD9479", color: "#5B4F47", display: 'block',}} className='mx-auto'>
          Sign Up
        </Button>
      </Form>
      '
    </div>
  );
};

export default AddRestaurentComponent;
