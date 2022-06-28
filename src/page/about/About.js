import React from 'react';
import Header from './../../components/Header';
import Footer from './../../components/Footer';

const About = () => {
    const data = [
        {id:'1', title:'성명', content:"표장헌"},
        {id:'2', title:'생년월일', content:"1990.11.15"},
        {id:'3', title:'휴대폰', content:"010.3152.2838"},
        {id:'4', title:'이메일', content:"ifheone@naver.com"},
        {id:'5', title:'주소', content:"서울시 구로구"},
        {id:'6', title:'취미', content:"드라마, 웹툰"},
    ]
    return (
        <div id="wrap">
            <Header />
            <p className="skip" id="contents_skip">본문 시작</p>
            <article className="about">
                <h2>About</h2>
                <section className="cont_01">
                    <h3>Summary</h3>
                    <div className="summary_wrap">
                        <ul>
                            {
                                data.map( item => <li key={item.id}>
                                    <dl><dt>{item.title}</dt><dd>{item.content}</dd></dl>
                                </li>)
                            }
                        </ul>
                    </div>
                </section>
                <section className="cont_02">
                    <h3>Future goals</h3>
                    <p className="p_cont">마부작침이라는 사자성어를 좋아합니다. 도끼를 갈아 바늘을 만든다 라는 뜻을 가지고 있습니다.<br/>현재 그리고 앞으로도 저에게 가장 필요한 사자성어입니다.<br/>꾸준히 성장하고, 노력하며 더 나은 홈페이지를 사용자들에게 보여주기 위해 더욱더 열심히 하겠습니다.</p>
                </section>
                <section className="cont_03">
                    <h3>Web Publisher?</h3>
                    <p>보이지 않는 인터넷을 사람들에게 보이게 하는 역할을 합니다.</p>
                </section>
            </article>
            <Footer />
        </div>
    );
};

export default About;