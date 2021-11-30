import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // NavbarText
} from 'reactstrap';
import '../styles/navbar.css';
import {Link} from "react-router-dom";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" id="large" className="algoVisualizer">AlgoVisualizer</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav" navbar>
            
            
            <NavItem style={{marginRight:"15px"}}>
            <Link to="/quadratic">
            <NavLink >Quadratic Algorithm</NavLink>
            </Link>
            </NavItem>

            <NavItem>
            <Link to="/logarithmic">
            <NavLink href="/components/">Logarithmic Algorithm</NavLink>
            </Link>
            </NavItem>
            

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;