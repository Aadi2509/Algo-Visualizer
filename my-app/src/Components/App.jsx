import React, { useState } from 'react';
import Heading from "./heading";
import Navbar from "./navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import 'semantic-ui-css/semantic.min.css'
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import { Container, Row, Col } from 'reactstrap';
import {quadraticContent,logContent} from "../cardContent";
import Cards from "./Cards";

function App()
{
    return (
    <React.StrictMode>
      <Navbar></Navbar>
      <Heading></Heading>
      <Cards heading="Quadratic Sorting Algorithms" array={quadraticContent}/>
      <Cards heading="Logarithmic Sorting Algorithms" array={logContent} />
      <Footer></Footer>

    </React.StrictMode>
    );

}

export default App;