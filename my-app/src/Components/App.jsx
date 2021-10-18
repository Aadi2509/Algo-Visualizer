import React, { useState } from 'react';
import Heading from "./heading";
import Navbar from "./navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App()
{
    return (
    <React.StrictMode>
       <Navbar></Navbar>
      <Heading></Heading>
    </React.StrictMode>
    );

}

export default App;