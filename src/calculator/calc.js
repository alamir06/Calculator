import React from "react";
import "./calc.css";

function Caclucator ()
{
    return (
        <div>
              <div class="container">
        <input type="text" />
        <div class="row row5">
            <button id="button1">abs</button>
            <button id="button1">ok</button>
            <button id="button1">X<sup>3</sup></button>
            <button id="button1">X<sup>-1</sup></button>
            <button id="button1">logx⬜</button>
         </div>

         <div class="row">
            <button id="button1">x/y</button>
            <button id="button1">&radic;x</button>
            <button id="button1">x<sup>2</sup></button>
            <button id="button1">x<sup>x</sup></button>
            <button id="button1">log</button>
            <button id="button1">in</button>
         </div>
         <div class="row">
            <button id="button1">(--)</button>
            <button id="button1">.,.,</button>
            <button id="button1">hyp</button>
            <button id="button1">sin</button>
            <button id="button1">cos</button>
            <button id="button1">tan</button>
         </div>
         <div class="row">
            <button id="button1">RCL</button>
            <button id="button1">ENG</button>
            <button id="button1">(</button>
            <button id="button1">)</button>
            <button id="button1">S*D</button>
            <button id="button1">M+</button>
         </div>
         <div class="row row5">
            <button id="button1">7</button>
            <button id="button1">8</button>
            <button id="button1">9</button>
            <button id="button1">DEL</button>
            <button id="button1">AC</button>
         </div>
         <div class="row row5">
            <button id="button1">4</button>
            <button id="button1">5</button>
            <button id="button1">6</button>
            <button id="button1">*</button>
            <button id="button1">/</button>
         </div>
         <div class="row row5">
            <button id="button1">1</button>
            <button id="button1">2</button>
            <button id="button1">3</button>
            <button id="button1">+</button>
            <button id="button1">-</button>
         </div>
         <div class="row row5">
            <button id="button1">0</button>
            <button id="button1">.</button>
            <button id="button1">X10<sup>x</sup></button>
            <button id="button1">Ans</button>
            <button id="button1">=</button>
            
         </div>
        
    </div>
        </div>
    );
}

export default Caclucator;