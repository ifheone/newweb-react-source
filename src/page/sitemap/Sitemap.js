import React from 'react';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import { Link } from 'react-router-dom';

const Sitemap = () => {
    return (
        <div id="wrap">
            <Header />
            <p className="skip" id="contents_skip">본문 시작</p>
            <section className="sitemap">
                <article>
                    <h2>Sitemap</h2>
                    <div className="sitemapCont">
                        <dl>
                            <dt>Main</dt>
                            <dd><Link to="/">newweb.kr</Link></dd>
                        </dl>
                        <dl>
                            <dt>About</dt>
                            <dd><Link to="/About">About</Link></dd>
                        </dl>
                        <dl>
                            <dt>portfolio</dt>
                            <dd><Link to="/portfolio/Responsive">Responsive</Link></dd>
                            <dd><Link to="/portfolio/Pc">PC</Link></dd>
                            <dd><Link to="/portfolio/Mobile">Mobile</Link></dd>
                        </dl>
                        <dl>
                            <dt>Sitemap</dt>
                            <dd><Link to="/Sitemap">Sitemap</Link></dd>
                        </dl>
                    </div>
                </article>
            </section>
            <Footer />
        </div>
    );
};

export default Sitemap;