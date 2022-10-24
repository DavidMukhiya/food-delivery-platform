import React from "react";
import { Row, Col} from "reactstrap";
import {DISHES} from "../DISHES"
import DishCardComponent from "./DishCardComponent";

const DishCardComponentList = () => {
  return (

    <div className="container justify-content-center">
    <h2 style={{textTransform: 'uppercase', backgroundColor:'#DDC1A7', textAlign:'center', color:'#5B4F47', marginBottom:'0px', padding:'1.5rem'}}>Restaurant Name</h2>
        <Row className="gy-5">
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
