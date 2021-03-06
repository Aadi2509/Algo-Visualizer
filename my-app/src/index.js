import React from 'react';
import ReactDOM from 'react-dom';
// import Navbar from './Components/navbar';
// import Heading from './Components/heading';
import App from './Components/App';
import Quadratic from "./Components/Quadratic";
import Logarithmic  from "./Components/Logarithmic";
import FoundSort from "./Components/Found Sort";
import Navbar from "./Components/navbar";
import Footer from "./Components/Footer";

import 'semantic-ui-css/semantic.min.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

//Can implement React-dom nesting
//Q and L are used as capitals but can be used properly by using lodash

ReactDOM.render(
  <React.StrictMode>
  <Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/quadratic" exact element={<Quadratic />} />
    <Route path="/logarithmic" exact element={<Logarithmic />} />
    <Route path="/:type/:name" element={<FoundSort />} />
  </Routes>
  <Footer />
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
