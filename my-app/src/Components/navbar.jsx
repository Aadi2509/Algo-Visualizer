import React, { useState } from 'react';
import '../styles/navbar.css';
import {Link} from "react-router-dom";

import logo from "../images/logoWhite.png";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <div className="flex navbar">
        <div className="headerLogo">
          <a href="/"><img className="img__logo" src={logo} /></a>
        </div>
        <nav className="flex__gap">
           <li className="nav__child">
             <Link className="nav__links" to="/quadratic">
                  Quadratic 
             </Link>
           </li>
           <li className="nav__child">
               <Link to="/logarithmic">
                  Logarithmic
               </Link>
           </li>
        </nav>
      </div>


    /* // <div>
    //   <Navbar color="dark" dark expand="md">
    //     <NavbarBrand href="/" id="large" className="algoVisualizer">AlgoVisualizer</NavbarBrand>
    //     <NavbarToggler onClick={toggle} />
    //     <Collapse isOpen={isOpen} navbar>
    //       <Nav className="nav" navbar>
            
            
    //         <NavItem style={{marginRight:"15px"}}>
    //         <Link to="/quadratic">
    //         <NavLink >Quadratic Algorithm</NavLink>
    //         </Link>
    //         </NavItem>

    //         <NavItem>
    //         <Link to="/logarithmic">
    //         <NavLink href="/components/">Logarithmic Algorithm</NavLink>
    //         </Link>
    //         </NavItem>
            

    //       </Nav>
    //     </Collapse>
    //   </Navbar>
    // </div> */
    
  );
}

export default Example;