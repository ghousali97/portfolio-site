
import './portfolio.css'
import PortfolioList from '../portfolioList/PortfolioList';
import { useEffect, useState } from 'react';
import { featuredPortfolio, webPortfolio, mobilePortfolio } from '../../data';
function Portfolio() {
    const [selected, setSelected] = useState('featured');
    const [data, setData] = useState([]);

    useEffect(() => {
        switch (selected) {

            case "featured":
                setData(mobilePortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }

    }, [selected]);

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        }

    ];


    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((listItem) => {
                    return <PortfolioList
                        title={listItem.title}
                        active={selected === listItem.id}
                        setSelected={setSelected}
                        id={listItem.id} />
                })}
            </ul>
            <div className='container'>
                {data.map((dataItem) => {

                    return <div className='item'>

                        <img src={dataItem.img} alt="" />
                        <h3>{dataItem.title}</h3>

                    </div>
                })
                }
            </div>
        </div>
    )
}

export default Portfolio;