import React from 'react';
import {Link} from "react-router-dom";
import '../styles/testCard.css';
import { Button } from 'semantic-ui-react'

function TestCard(){
  return (
      <div className="testcard">
          <div className="circle"></div>
          <h2>Bubble Sort</h2>
          <p>Bubble sort is bubble sort it does not involve any bubble but still its name is bubble.bubble get burst we all know that so this is the worst but easy sort.</p>
          
          <Link to="/Quadratic/Bubble Sort">
          <div className="VisualizeIt">
             <Button inverted color='green'>
                Visualize it!
             </Button>
           </div>  
          </Link>

      </div>
  );
}

export default TestCard;