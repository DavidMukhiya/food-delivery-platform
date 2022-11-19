import React, { useEffect } from "react";
import { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import "../css/addrestaurantstyle.css";

const AddRestaurentComponent = () => {

  const [data, setData]=useState({
    restaurantName:'',
    emailAddress:'',
    password:'',
    file:''
  })

  const [error, setError] = useState({
    errors:{},
    isError:false
  })

  useEffect(()=>{
    console.log(data)
  },[data])

  const handleChange=(event)=>{
    setData({
      ...data, restaurantName: event.target.value
      
    })
    console.log(data)
  }

  return (
    <div className="addRestaurantComponentStyle">
      <p style={{ textTransform: "uppercase", color: "#5B4F47", fontSize: '1.5rem' }} className='mt-5'>
        Add Restaurant
      </p>

      
      <Form>

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
            style={{ backgroundColor: "#DDC1A7", width: "25rem", margin: "1.5rem 0rem" , textAlign:'center'  }}
            onChange={(e)=>handleChange(e)}
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
            style={{ backgroundColor: "#DDC1A7", width: "25rem", marginBottom:'1.5rem', textAlign:'center'   }}
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
            className="addRestaurantInputStyle"
            style={{ backgroundColor: "#DDC1A7", width: "25rem", margin:'1.5rem 0', textAlign:'center' }}
          />
        </FormGroup>

        {/* file */}
        <FormGroup>
                <Label for="file" className="visually-hidden">Image</Label>
                <Input id="file" name="file" type="file"
                style={{
                    backgroundColor: "#DDC1A7",
                    width: "25rem",
                    margin: "1.5rem 0",
                    textAlign: "center",
                    color: "#6C757D",
                  }} />
              </FormGroup>
        <Button style={{ backgroundColor: "#BD9479", color: "#5B4F47", display: 'block', marginTop:'2.5rem'}} className='mx-auto'>
          Sign Up
        </Button>
      </Form>
      '
    </div>
  );
};

export default AddRestaurentComponent;
