import React from 'react';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import PortfolioTab from './../../components/Tab';
import DataList from './../../assets/api/Pc';
import ItemList from './ItemList';
const Pc = () => {
    return (
        <div id="wrap">
            <Header />
            <p className="skip" id="contents_skip">본문 시작</p>
            <section className="portfolio">
                <PortfolioTab />
                <ItemList DataList={DataList} />
            </section>
            <Footer />
        </div>
    );
};

export default Pc;