import React, { useState } from 'react';
import Cards from "./Cards";
import { logContent } from '../cardContent';
import Navbar from "./navbar";
import Footer from "./Footer";

function Logarithmic(){
    return(
    <>
    <Navbar></Navbar>
    <Cards heading="Logarithmic Sorting Algorithms" array={logContent} />
    <Footer></Footer>
    </>
    );
}

export default Logarithmic;