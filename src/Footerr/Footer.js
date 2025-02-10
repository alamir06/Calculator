import React from "react";
import "./footer.css";
function Footer ()
{
    return (
        <div className="footer-container">
            <div className="row"><p>Develop by Alamirew </p></div>
            <div className="row"><p>All Right Reserved &copy; </p></div>
            <div className="row"><p>{new Date().getFullYear()}</p></div>
        </div>
    );
}
export default Footer;