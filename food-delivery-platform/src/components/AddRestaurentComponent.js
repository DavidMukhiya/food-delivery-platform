import React, { useEffect } from "react";
import { useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  FormFeedback,
} from "reactstrap";
import "../css/addrestaurantstyle.css";
import { signUp, uploadDoc } from "../services/user-service";
import { toast } from "react-toastify";

const AddRestaurentComponent = () => {
  const [data, setData] = useState({
    restaurantName: "",
    restaurantEmail: "",
    password: "",
  });

  const [safetyLicenseDoc, setsafetyLicenseDoc] = useState(null);

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
    console.log(event.target.safetyLicenseDoc);
    setsafetyLicenseDoc(event.target.safetyLicenseDoc);
  };

  //submit the form
  const submitForm = (event) => {
    event.preventDefault();
    // if (error.isError) {
    //   toast.error("Form data is invalid, correct all details, then submit");
    //   setError({...error, isError:false})
    //   return;
    // }


    // uploadDoc(safetyLicenseDoc, data.restuarantID).then(data=>{
    //   console.log("Image Uploaded !!")
    // }).catch(error=>{
    //   console.log("Error in Uploading Image.")
    //   console.log(error)
    // })
    console.log(data);

    //data validate

    //call server api for sending data
    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("Success log");
        toast.success("Restaurant is registered Successfully !!");
        setData({
          restaurantName: "",
          restaurantEmail: "",
          password: "",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("Error Log");
        //handle error in proper way
        setError({
          errors: error,
          isError: true,
        });
        toast.error("Restaurant registration unsuccessful. Form data is invalid, correct all details, then submit.");
      });
  };

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
      <Form onSubmit={submitForm}>
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
            invalid={
              error.errors?.response?.data?.restaurantName ? true : false
            }
          />
          <FormFeedback  className="feedback" >
            {error.errors?.response?.data?.restaurantName}
          </FormFeedback>
        </FormGroup>

        {/* email address */}
        <FormGroup>
          <Label
            for="restaurantEmail"
            className="visually-hidden"
            style={{ color: "#5B4F47" }}
          >
            Email Address
          </Label>
          <Input
            id="restaurantEmail"
            name="restaurantEmail"
            placeholder="Email Address *"
            type="email"
            className="addRestaurantInputStyle"
            onChange={(e) => handleChange(e, "restaurantEmail")}
            value={data.restaurantEmail}
            invalid={
              error.errors?.response?.data?.restaurantEmail ? true : false
            }
            style={{
              backgroundColor: "#DDC1A7",
              width: "25rem",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          />
          <FormFeedback className="feedback">
            {error.errors?.response?.data?.restaurantEmail}
          </FormFeedback>
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
            invalid={error.errors?.response?.data?.password ? true : false}
          />
          <FormFeedback  className="feedback">{error.errors?.response?.data?.password}</FormFeedback>
        </FormGroup>

        {/* file */}
        <FormGroup>
          <Label for="safetyLicenseDoc" className="visually-hidden">
            Health Doc
          </Label>
          <Input
            id="safetyLicenseDoc"
            name="safetyLicenseDoc"
            type="file"
            onChange={handleFileChange}
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
    </div>
  );
};

export default AddRestaurentComponent;
