import React, { useState } from 'react';
import Cards from "./Cards";
import Navbar from "./navbar";
import Footer from "./Footer";
import { quadraticContent } from '../cardContent';

function Quadratic(){
    return (
    <>
    <Navbar></Navbar>
    <Cards heading="Quadratic Sorting Algorithms" array={quadraticContent}/>
    <Footer></Footer>
    </>);
}

export default Quadratic;