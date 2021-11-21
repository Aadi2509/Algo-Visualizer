import React, { useState } from 'react';
import Cards from "./Cards";
import { quadraticContent } from '../cardContent';

function Quadratic(){
    return (
    <>
    <Cards heading="Quadratic Sorting Algorithms" array={quadraticContent}/>
    </>);
}

export default Quadratic;