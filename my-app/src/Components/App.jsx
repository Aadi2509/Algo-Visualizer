import React, { useState } from 'react';
import Heading from "./heading";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import {quadraticContent,logContent} from "../cardContent";
import Cards from "./Cards";

function App()
{
    return (
    <React.StrictMode>
    <div className="marginTop">
      <Heading></Heading>
      <Cards heading="Quadratic Sorting Algorithms" array={quadraticContent}/>
      <Cards heading="Logarithmic Sorting Algorithms" array={logContent} />
      </div>
    </React.StrictMode>
    );

}

export default App;