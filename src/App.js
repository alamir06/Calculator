import React, { useState } from 'react';
import './App.css';
import Calculator from './Caalculator/Calculator';
import Fotter from './Footer/Footer';
import Heading from "./Heading/Heading";
function App() {
  


  return (
    <div className='main'>
     <Heading />
     <Calculator />
      <Fotter />
      </div>
  );
}



export default App;
