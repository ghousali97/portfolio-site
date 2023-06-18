
import { useState } from 'react';
import './works.css'



function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);


    function handleClick(direction) {
        if (direction === 'left') {
            currentSlide > 0 ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(data.length - 1);
        } else {
            currentSlide < data.length - 1 ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(0);
        }
    }

    const data = [
        {
            id: "1",
            icon: "/assets/images/mobile.png",
            title: "Web Design",
            desc:
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            img:
                "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
            id: "2",
            icon: "/assets/images/globe.png",
            title: "Mobile Application",
            desc:
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.", img:
                "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
            id: "3",
            icon: "/assets/images/writing.png",
            title: "Branding",
            desc:
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.", img:
                "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
    ];

    return (
        <div className="works" id="works">
            <div className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => {
                    return (<div className='container'>
                        <div className='item'>
                            <div className='left'>
                                <div className='leftContainer'>

                                    <div className='imgContainer'>
                                        <img src={d.icon} alt="" />
                                    </div>

                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>

                                </div>
                            </div>

                            <div className='right'>
                                <img src={d.img}
                                    alt="" />
                            </div>


                        </div>
                    </div>);
                })}

            </div>
            <img
                src="assets/images/arrow.png"
                className="arrow left"
                alt=""
                onClick={() => handleClick("left")}
            />
            <img
                src="assets/images/arrow.png"
                className="arrow right"
                alt=""
                onClick={() => handleClick()}
            />
        </div >
    )
}

export default Works;