import React from 'react';
import { NavLink } from 'react-router-dom';
const Tab = () => {
    return (
        <div>
                <h3 class="portfolio_tt">
                    <NavLink to="/portfolio/Responsive" activeclassname="active">Responsive</NavLink> <span>&#47;</span>&nbsp;
                    <NavLink to="/portfolio/Pc" activeclassname="active">PC</NavLink> <span>&#47;</span> &nbsp;
                    <NavLink to="/portfolio/Mobile" activeclassname="active">Mobile</NavLink>
                </h3>
        </div>
    );
};

export default Tab;