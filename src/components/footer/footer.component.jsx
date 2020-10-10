import React from 'react';
import './footer.style.css';

const Footer  = () => {
    return (
        <div id="footer">
            <div className="py-2 bg-dark text-center footer-style">© SANKET DEVDAS DESAI &nbsp; {new Date().getFullYear()}</div>
        </div>
    )
}

export default Footer;