import React from "react";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import '../styles/cards.css';

function Cards(props){
    return (<div className="cards">
      <div className="cards__title">
        <SectionTitle heading={props.heading} ></SectionTitle>
      </div>
            <div className="cards__container">
            {props.array.map(content => {
               return (
                <Card 
                  key={content.id}
                  name={content.name}
                  type={content.type}
                  description={content.description}
                />
              );
            })};
            </div>
      </div>);
}

export default Cards;

{/* <Link to={`/${content.type}/${content.name}`}></Link> */}
{/* <Col className="cardMargin">  */}


{/* <Container style={{marginBottom:"5%"}}>
          <Row xs="1" sm="2" md="3"> */}
            {/* <Col>  <Card></Card> </Col>
            <Col >  <Card></Card> </Col>
            <Col>  <Card></Card> </Col> */}

{/* </Row>
        </Container> */}