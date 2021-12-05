import React from 'react'
import {Link} from "react-router-dom";
import _ from "lodash";
import "../styles/card.css";

function getLink(type,name)
{
  type=_.lowerCase(type);
  name=_.lowerCase(name);

  return `/${type}/${name}`;
}

function BlackAndWhiteCard(props){
  return (
      <div className="Card">
        <div className="Card__Circle"></div>
        <div className="Card__Heading">
            <h2>{props.name}</h2>
        </div>
        <div className="Card__content">
            <p>{props.description}</p>
            <div className="Card__content__button">
              <Link className="Card__content__button__a" to={getLink(props.type,props.name)}>Visualise It</Link>
            </div>
        </div>
      </div>
  );
}

export default BlackAndWhiteCard;