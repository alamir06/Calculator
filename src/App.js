import React, { useState } from 'react';
import './App.css';


function App() {
  const [value,setValue]=useState('');



 

    function handleClick(event)
    {
      const{value}=event.target;
      setValue(preValue=>{
        return(
             preValue+value
        )
      });
    }
    function deleteindividual(e)
    {
      setValue(value.slice(0,-1));
    }

    function deleteAll()
    {
      setValue('');
    }
 function calculate()
 {
  try {
    var result=setValue(eval(value));
    return result;
  } catch (error) {
    return setValue('err');
  }
 
 }
    


  return (
      <div className='container'>
        <div className='calulator'>
          <form>
          <div className='display'>
            <input type='text' value={value}/>
         </div> 
         <div>
          <input type='button' value="ABS" onClick={handleClick}/>
          <input type='button' value="OK" onClick={handleClick}/>
          <input type='button' value="X2" onClick={handleClick}/>
          <input type='button' value="X-1" onClick={handleClick}/>
          <input type='button' value="logx1" onClick={handleClick}/>
         </div>
         <div>
          <input type='button' value="x/y" onClick={handleClick}/>
          <input type='button' value="✔x" onClick={handleClick}/>
          <input type='button' value="x2" onClick={handleClick}/>
       
          <input type='button' value="log" onClick={handleClick}/>
          <input type='button' value="ln" onClick={handleClick}/>
         </div>
         <div>
          <input type='button' value="(--)"/>
         
          <input type='button' value="hyp" onClick={handleClick}/>
          <input type='button' value="sin" onClick={handleClick}/>
          <input type='button' value="cos" onClick={handleClick}/>
          <input type='button' value="tan" onClick={handleClick}/>
         </div>
         <div>
          <input type='button' value="RCL"/>
          <input type='button' value="ENG"/>
          <input type='button' value="(" onClick={handleClick}/>
          <input type='button' value=")" onClick={handleClick}/>
          <input type='button' value="M++"/>
         </div>
         <div>
          <input type='button' value="7" onClick={handleClick}/>
          <input type='button' value="8" onClick={handleClick}/>
          <input type='button' value="9" onClick={handleClick}/>
          <input type='button' value="DEL" onClick={deleteindividual}/>
          <input type='button' value="AC" onClick={deleteAll}/>
         </div>
         <div>
          <input type='button' value="4" onClick={handleClick}/>
          <input type='button' value="5" onClick={handleClick}/>
          <input type='button' value="6" onClick={handleClick}/>
          <input type='button' value="/" onClick={handleClick}/>
          <input type='button' value="*" onClick={handleClick}/>
         </div>
         <div>
          <input type='button' value="1" onClick={handleClick}/>
          <input type='button' value="2" onClick={handleClick}/>
          <input type='button' value="3" onClick={handleClick}/>
          <input type='button' value="+" onClick={handleClick}/>
          <input type='button' value="-" onClick={handleClick}/>
         </div>
         <div>
          <input type='button' value="00" onClick={handleClick}/>
          <input type='button' value="0" onClick={handleClick}/>
          <input type='button' value="." onClick={handleClick}/>
          <input type='button' value="=" className='equal' onClick={calculate}/>
          {/* <input type='button' value="ANS"/> */}
         </div>
         
         </form>
        </div>
      </div>
  );
}



export default App;
