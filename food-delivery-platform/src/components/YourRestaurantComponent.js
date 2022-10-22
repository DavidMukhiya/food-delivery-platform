import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const YourRestaurantComponent = () => {
  return (
    <div>
       <div className="addRestaurantComponentStyle">
      <p style={{ textTransform: "uppercase", color: "#5B4F47", fontSize: '1.5rem' }} className='mt-5'>
        Your Restaurant
      </p>
      <Form>
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
            style={{ backgroundColor: "#DDC1A7", width: "25rem", margin: "1.5rem 0rem" ,textAlign:'center'}}
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
            placeholder="Password*"
            type="password"
            className="addRestaurantInputStyle"
            style={{ backgroundColor: "#DDC1A7", width: "25rem", margin:'1.5rem 0', textAlign:'center'}}
          />
        </FormGroup>
        <Button style={{ backgroundColor: "#BD9479", color: "#5B4F47", display: 'block', marginTop:'2.5rem', }} className='mx-auto'>
          Log In
        </Button>
      </Form>
      '
    </div>
    </div>
  )
}

export default YourRestaurantComponent