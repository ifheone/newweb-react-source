import React from 'react';

const ItemList = ({DataList}) => {
    return (
        <div id="cont">
            {
                DataList.map( item => <div className="item" key={item.id}>
                    <a href={ item.link ? `//${item.link}` : '#' }  target={item.target} title={`${item.title} 홈페이지보기(새창)`}>
                        <span className="img_cont"><img src={item.img} alt={item.title} /></span>
                        <h4>{item.title}</h4>
                        <span className="explain">{item.link}</span>
                        <div className="over">
                            <h5>웹사이트 제작</h5>
                            <ul>
                                <li>{item.title}</li>
                                {
                                    item.enTitle && <li>{item.enTitle}</li>
                                }
                            </ul>
                        </div>
                    </a>
                </div>)
            }
        </div>
    );
};

export default ItemList;