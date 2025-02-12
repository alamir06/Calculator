import React, { useState } from 'react';
import './App.css';
import Fotter from './Footer/Footer';
import Calculate from './calculator/Calculator';
// import Calc from './Calc/Calc';
import Heading from "./Heading/Heading";
function App() {
  


  return (
    <div className='main'>
     <Heading />
      <Calculate />
      <Fotter />
      </div>
  );
}



export default App;
