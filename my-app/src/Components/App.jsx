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

function App()
{
    return (
    <React.StrictMode>
      <Navbar></Navbar>
      <Heading></Heading>
      <div>
        <SectionTitle heading="Quadratic Sorting Algorithms"></SectionTitle>
      
        <Container style={{marginBottom:"5%"}}>
          <Row xs="1" sm="2" md="3">
            {/* <Col>  <Card></Card> </Col>
            <Col >  <Card></Card> </Col>
            <Col>  <Card></Card> </Col> */}
            {quadraticContent.map(content => {
               return (
                <Col className="cardMargin"> <Card 
                  key={content.id}
                  name={content.name}
                  type={content.type}
                  description={content.description}
                /> </Col>
              );
            })};
          </Row>
        </Container>
      </div>
      <div>
        <SectionTitle  heading="Logarithmic Sorting Algorithms"></SectionTitle>
        <Container style={{marginBottom:"5%"}}>
          <Row xs="1" sm="2" md="3">
            {/* <Col>  <Card></Card> </Col>
            <Col >  <Card></Card> </Col>
            <Col>  <Card></Card> </Col>  */}
            {logContent.map(content => {
               return (
                <Col className="cardMargin"> <Card 
                  key={content.id}
                  name={content.name}
                  type={content.type}
                  description={content.description}
                /> </Col>
              );
            })};
          </Row>
        </Container>
      </div>
      
      <Footer></Footer>

    </React.StrictMode>
    );

}

export default App;