import React from "react";
import { Row, Col} from "reactstrap";
import {DISHES} from "../DISHES"
import DishCardComponent from "./DishCardComponent";

const DishCardComponentList = () => {
  return (
    <div>
        <Row>
           { DISHES.map((eachdish)=>{
            return(
              <Col xs='12' sm='6' md='4' xl='4' key={eachdish.id}>
                <DishCardComponent dish={eachdish}/>
              </Col>
            );
           })}
        </Row>
    </div>
  );
};

export default DishCardComponentList;
