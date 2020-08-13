import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import Routing from "./routes";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
const App = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div className="my-app">
            <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand to="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
              <NavLink to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
              <NavLink to="/posts" activeClassName="is-active" className="navbar-item">Post</NavLink>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink to="/about">
                      About
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
        {/* ตัว Routing คือ ให้มันเปลี่ยนแค่ของในนั้น header อยู่เหมือนเดิม ต้องใช้คู่กับ Navlink */}
        <Routing />
        <div className="footer-custom">d</div>
      </div>
    );
  }


export default App;
