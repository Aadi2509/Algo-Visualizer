import React, { useState } from 'react';
import Cards from "./Cards";
import { quadraticContent } from '../cardContent';

function Quadratic(){
    return (
    <>
    <section id="quadratic-algorithms">
    <div className="marginTop">
    <Cards heading="Quadratic Sorting Algorithms" array={quadraticContent}/>
    </div>
    </section>
    </>);
}

export default Quadratic;