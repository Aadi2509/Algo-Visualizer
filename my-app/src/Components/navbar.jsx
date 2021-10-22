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


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" id="large" className="algoVisualizer">AlgoVisualizer</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav" navbar>
            
            
            <NavItem>
            <NavLink href="/components/"  >Quadratic Algorithm</NavLink>
            </NavItem>

            <NavItem>
            <NavLink href="/components/">Logarithmic Algorithm</NavLink>
            </NavItem>
            

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;