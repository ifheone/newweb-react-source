import React from 'react';
import Logo from '../../src/assets/img/main/logo.png';
import { Link } from 'react-router-dom';

const main = () => {
    return (
    <div id="wrap_m">
        <section className="contants">
            <Link to="/" className="m_logo"><img src={Logo} alt="newweb" /></Link>
            <Link to="/About" className="m_about">About</Link>
            <Link to="/portfolio/Responsive" className="m_portfolio">Portfolio</Link>
            <Link to="/Sitemap" className="m_sitemap">Sitemap</Link>   
        </section>
    </div>
    );
};

export default main;