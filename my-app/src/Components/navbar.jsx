import React, { useState } from 'react';
import '../styles/navbar.css';
import {Link} from "react-router-dom";

import logo from "../images/logoWhite.png";

function Navbar(props){
  
  const [showNav,setshowNav]=useState("false");
  const [areaControl,setareaControl]=useState("false");

  const cancelImage={
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }

  const navStyle={
    transform: "translateX(0%)",
    backdropFilter: "blur(3em)"
  }

  function handleClick(){
    if(showNav==="false")
    {
      setshowNav("true");
    }
    else
    {
      setshowNav("false");
    }

    if(areaControl==="true")
    {
      setareaControl("false");
    }
    else
    {
      setareaControl("true");
    }
    console.log(showNav);
  }


  return (
    <>
      <div className="flex navbar">
        <div className="headerLogo">
          <a href="/"><img className="img__logo" src={logo} /></a>
        </div>

        <button style={showNav==="true"?cancelImage:null} aria-controls="primary-navigation" className="mobile-toggle" aria-expanded={areaControl} onClick={handleClick} data-visible={showNav}><span className="sr-only">Menu</span></button>
        <nav>
        <ul style={showNav==="true"?navStyle:null} id="primary-navigation" className="primary-navigation flex">
           <li className="nav__child">
             <Link className="nav__links" to="/#quadratic-algorithms">
                  Quadratic 
             </Link>
           </li>
           <li className="nav__child">
               <Link className="nav__links" to="/logarithmic">
                  Logarithmic
               </Link>
           </li>
          </ul>
        </nav>
      </div>
      </>


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

export default Navbar;