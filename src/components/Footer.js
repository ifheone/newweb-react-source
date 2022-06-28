import React from 'react';
import mSubLogo from '../../src/assets/img/common/sgnb_logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <p className="reset"></p>
            <div className="sGnb" style={{display:'block', top:'-500px', position:'fixed'}}>
                <div>
                    <h1><Link to="/"><img src={mSubLogo} alt="newweb" /></Link></h1>
                    <ul>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/portfolio/Responsive">Portfolio</Link>
                            <ul className="nb1" style={{display:'none'}}>
                                <li><Link to="/portfolio/Responsive">Responsive Web</Link></li>                                
                                <li><Link to="/portfolio/Pc">PC</Link></li>
                                <li><Link to="/portfolio/Mobil">Mobile</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/Sitemap">Sitemap</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Footer;