import React from "react";
import { Form, FormGroup, Input, Label, Button, Row, Col } from "reactstrap";
import { MdOutlineArrowDropDown } from "react-icons/md";

const AddDishComponent = () => {
  return (
    <div>
      <div className="addRestaurantComponentStyle">
        <p
          style={{
            textTransform: "uppercase",
            color: "#5B4F47",
            fontSize: "1.5rem",
          }}
          className="mt-5"
        >
          add dish
        </p>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Label
                  for="dishName"
                  className="visually-hidden"
                  style={{ color: "#5B4F47" }}
                >
                  Dish Name
                </Label>
                <Input
                  id="dishName"
                  name="dishName"
                  placeholder="Dish Name *"
                  type="text"
                  className="addRestaurantInputStyle"
                  style={{
                    backgroundColor: "#DDC1A7",
                    width: "25rem",
                    margin: "1.5rem 0rem",
                    textAlign: "center",
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="textArea" className="visually-hidden">
                  Description
                </Label>
                <Input
                  id="textArea"
                  name="textArea"
                  type="textarea"
                  placeholder="Description *"
                  style={{
                    backgroundColor: "#DDC1A7",
                    width: "25rem",
                    margin: "1.5rem 0rem",
                    lineHeight: "3.5rem",
                    textAlign: "center",
                    alignContent: "center",
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label
                  for="price"
                  className="visually-hidden"
                  style={{ color: "#5B4F48" }}
                >
                  Price
                </Label>
                <Input
                  id="price"
                  name="price"
                  placeholder="Price *"
                  type="number"
                  className="addRestaurantInputStyle"
                  style={{
                    backgroundColor: "#DDC1A7",
                    width: "25rem",
                    margin: "1.5rem 0",
                    textAlign: "center",
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="category" className="visually-hidden">
                  Category
                </Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                  style={{
                    backgroundColor: "#DDC1A7",
                    width: "25rem",
                    margin: "1.5rem 0",
                    textAlign: "center",
                    color: "#6C757D",
                  }}
                  placeholder="Category"
                >
                  <option>
                    Category
                    <MdOutlineArrowDropDown />
                  </option>
                  <option>Drink</option>
                  <option>Veg</option>
                  <option>Non-Veg/Mixed</option>
                </Input>
              </FormGroup>
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
            </Col>
          </Row>
          <Button
            style={{
              backgroundColor: "#BD9479",
              color: "#5B4F47",
              display: "block",
              marginTop: "2.5rem",
            }}
            className="mx-auto"
          >
            Log In
          </Button>
        </Form>
        '
      </div>
    </div>
  );
};

export default AddDishComponent;
