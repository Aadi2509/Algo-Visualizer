import React, { useState } from 'react';
import Cards from "./Cards";
import { logContent } from '../cardContent';

function Logarithmic(){
    return(
    <>
    <Cards heading="Logarithmic Sorting Algorithms" array={logContent} />
    </>
    );
}

export default Logarithmic;