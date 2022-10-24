import React from "react";
import { Nav, Navbar, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const WecomePageNav = () => {
  return (
   <div className=" d-flex justify-content-center mt-5">
     <Navbar dark sticky="top" color="" expand="md">
      <Nav className="me-auto" navbar>
      <NavItem>
          <NavLink className="nav-link mx-5" to="/login" style={{color:'#5B4F47'}}>
            LOG-IN
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link mx-5" to="/signup" style={{color:'#5B4F47'}}>
            REGISTRATION
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
   </div>
  );
};

export default WecomePageNav;
