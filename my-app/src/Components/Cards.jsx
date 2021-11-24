import React from "react";
import { Container, Row, Col } from 'reactstrap';
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import '../styles/cards.css';

function Cards(props){
    return (<div className="cards">
        <SectionTitle heading={props.heading} className="cards__title"></SectionTitle>
      
        <Container style={{marginBottom:"5%"}}>
          <Row xs="1" sm="2" md="3">
            {/* <Col>  <Card></Card> </Col>
            <Col >  <Card></Card> </Col>
            <Col>  <Card></Card> </Col> */}
            {props.array.map(content => {
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
      </div>);
}

export default Cards;

{/* <Link to={`/${content.type}/${content.name}`}></Link> */}