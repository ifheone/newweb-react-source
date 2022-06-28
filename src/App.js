import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/common.scss';
import Main from './page/Main';
import About from './page/about/About';
import Responsive from './page/portfolio/Responsive';
import Pc from './page/portfolio/Pc';
import Mobile from './page/portfolio/Mobile';
import Sitemap from './page/sitemap/Sitemap';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="About" element={<About />} />
          <Route path="/portfolio/Responsive" element={<Responsive />} />
          <Route path="/portfolio/Pc" element={<Pc />} />
          <Route path="/portfolio/Mobile" element={<Mobile />} />
          <Route path="Sitemap" element={<Sitemap />} />
        </Routes>
      </BrowserRouter>
      <p className="skip" id="foot_skip">사이트정보 시작</p>
      <footer className="skip">표장헌 | 010.3152.2838 | webdoublef@naver.com <br/>Copyright&copy;2013 newweb. All Rights Reserved.</footer>      
    </>
  );
};

export default App;