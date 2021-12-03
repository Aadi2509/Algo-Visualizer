import React, { useState } from 'react';
import Cards from "./Cards";
import { logContent } from '../cardContent';

function Logarithmic(){
    return(
    <>
    <section id="logarithmic-algorithms">
    <div className="marginTop">
    <Cards heading="Logarithmic Sorting Algorithms" array={logContent} />
    </div>
    </section>
    </>
    );
}

export default Logarithmic;