import React, { useEffect } from "react";
import { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import "../css/addrestaurantstyle.css";

const AddRestaurentComponent = () => {
  const [data, setData] = useState({
    restaurantName: "",
    emailAddress: "",
    password: "",
  });

  const [file, setfile] = useState();

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
    console.log(data);
  };

  const handleFileChange = (event) => {
    console.log(event.target.files);
    //setfile(event.taget.files);
  };

  const submitForm=(event)=>{
    event.preventDefault()
    console.log(data)
    
    //data validate

    //call server api for sending data
  }

  return (
    <div className="addRestaurantComponentStyle">
      <p
        style={{
          textTransform: "uppercase",
          color: "#5B4F47",
          fontSize: "1.5rem",
        }}
        className="mt-5"
      >
        Add Restaurant
      </p>
      <Form onSubmit={submitForm} >
        {/* Restaurant Name */}
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
            style={{
              backgroundColor: "#DDC1A7",
              width: "25rem",
              margin: "1.5rem 0rem",
              textAlign: "center",
            }}
            onChange={(e) => handleChange(e, "restaurantName")}
            value={data.restaurantName}
          />
        </FormGroup>

        {/* email address */}
        <FormGroup>
          <Label
            for="emailAddress"
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
            onChange={(e) => handleChange(e, "emailAddress")}
            value={data.emailAddress}
            style={{
              backgroundColor: "#DDC1A7",
              width: "25rem",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          />
        </FormGroup>

        {/* passsword */}
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
            onChange={(e) => handleChange(e, "password")}
            className="addRestaurantInputStyle"
            style={{
              backgroundColor: "#DDC1A7",
              width: "25rem",
              margin: "1.5rem 0",
              textAlign: "center",
            }}
            value={data.password}
          />
        </FormGroup>

        {/* file */}
        <FormGroup>
          <Label for="file" className="visually-hidden">
            Health Doc
          </Label>
          <Input
            id="file"
            name="file"
            type="file"
            onChange={(e) => handleFileChange(e)}
            style={{
              backgroundColor: "#DDC1A7",
              width: "25rem",
              margin: "1.5rem 0",
              textAlign: "center",
              color: "#6C757D",
            }}
          />
        </FormGroup>
        <Button
          style={{
            backgroundColor: "#BD9479",
            color: "#5B4F47",
            display: "block",
            marginTop: "2.5rem",
          }}
          className="mx-auto"
        >
          Sign Up
        </Button>
      </Form>
      '
    </div>
  );
};

export default AddRestaurentComponent;
