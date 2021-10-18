import React, { useState } from 'react';
import Heading from "./heading";
import Navbar from "./navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import Card from "./Card";
import { Container, Row, Col } from 'reactstrap';

function App()
{
    return (
    <React.StrictMode>
       <Navbar></Navbar>
      <Heading></Heading>
      <div>
      <Container>
      <Row xs="1" sm="2" md="3">
        <Col>  <Card></Card> </Col>
        <Col >  <Card></Card> </Col>
        <Col>  <Card></Card> </Col>
      </Row>
      </Container>
      </div>

    </React.StrictMode>
    );

}

export default App;