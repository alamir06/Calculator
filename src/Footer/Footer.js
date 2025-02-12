import React from "react";
import "./Footer.css";


function Fotter()
{
    return(
        <div className="footer_container">
          <button className="date">{ new Date().toDateString() +' '}</button>
          <button className="copy">All Right Reserverd &copy;</button>
          <button className="name">Develop by :Alamirew Wagaw</button>
        </div>
    );
}

export default Fotter;