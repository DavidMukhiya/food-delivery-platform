import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import "../css/addrestaurantstyle.css";
import { loginUser } from '../services/user-service';

const YourRestaurantComponent = () => {

  const[loginDetail, setLoginDetail] = useState({
    username:'',
    password:''
  })

  const handleChange = (event, field)=>{
    let actualValue = event.target.value
    setLoginDetail({
      ...loginDetail,
      [field]:actualValue
    })
  }

  const handleFormSubmit = (event)=>{
    event.preventDefault();
    console.log(loginDetail)
    //validation
    if(loginDetail.username.trim()===''|| loginDetail.password.trim()===''){
      toast.error("username or password is required !!")
      return
    }
    //submit the data to server to generate token
    loginUser(loginDetail).then((jwtTokenData)=>{
      console.log("user login: ")
      console.log(jwtTokenData)
    }).catch(error=>{
      console.log(error)
      if(error.response.status === 400 || error.response.status === 404){
        toast.error(error.response.data.message)
      }else{
      toast.error("Something went wrong on server !!")
      }
    })
  }
  return (
    <div>
       <div className="addRestaurantComponentStyle">
      <p style={{ textTransform: "uppercase", color: "#5B4F47", fontSize: '1.5rem' }} className='mt-5'>
        Your Restaurant
      </p>
      <Form onSubmit={handleFormSubmit} >
        <FormGroup>
          <Label
            for="username"
            className="visually-hidden"
            style={{ color: "#5B4F47" }}
          >
            Email Address
          </Label>
          <Input
            id="username"
            name="username"
            placeholder="Email Address *"
            type="email"
            className="addRestaurantInputStyle"
            value = {loginDetail.username}
            onChange={(e)=>handleChange(e,'username')}
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
            value={loginDetail.password}
            onChange={(e)=>handleChange(e,'password')}
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