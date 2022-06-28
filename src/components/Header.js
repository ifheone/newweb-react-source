import React from 'react';
import { NavLink } from 'react-router-dom';
import subLogo from '../../src/assets/img/common/logo.gif'
import mSubLogo from '../../src/assets/img/common/sgnb_logo.png'

const Header = () => {
    return (
        <>
            <ul className="sknavi_box">
                <li><a href="#contents_skip" className="sknavi">본문바로가기</a></li>
                <li><a href="#header_skip" className="sknavi">메인메뉴 바로가기</a></li>
                <li><a href="#foot_skip" className="sknavi">하단 바로가기</a></li>
            </ul>
            
            <header id="header">
                <h1><NavLink to="/"><img src={subLogo} alt="newweb" /></NavLink></h1>
                <p className="skip" id="header_skip">메인메뉴 시작</p>
                <div className="gnb">
                    <ul>
                        <li><NavLink to="/About" activeclassname="active">About</NavLink></li>
                        <li><NavLink to="/portfolio/Responsive" activeclassname="active">Portfolio</NavLink>
                            <ul className="nb1" style={{display:'none'}}>
                                <li><NavLink to="/portfolio/Responsive">Responsive Web</NavLink></li>                                
                                <li><NavLink to="/portfolio/Pc">PC</NavLink></li>
                                <li><NavLink to="/portfolio/Mobil">Mobile</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/Sitemap" activeclassname="active">Sitemap</NavLink></li>
                    </ul>
                </div>
            </header>
            <div className="mobile_gnb" style={{display:'none', top:'0', position:'fixed'}}>
                <div>
                    <h1><NavLink to="/"><img src={mSubLogo} alt="newweb" /></NavLink></h1>
                    <ul>
                        <li><NavLink to="/About">About</NavLink></li>
                        <li><NavLink to="/portfolio/Responsive">Portfolio</NavLink></li>
                        <li className="end"><NavLink to="/Sitemap">Sitemap</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;