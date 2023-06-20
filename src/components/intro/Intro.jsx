

import './intro.css'

import { TypeAnimation } from 'react-type-animation';
function Intro() {



    return (
        <div className="intro pattern-grid-lg" id="intro">
            <div className='left'>
                <div className='img-container'>
                    <img src="/assets/images/me.png" alt="" />
                </div>
            </div>

            <div className='right pattern-dots-sm'>
                <div className='wrapper'>
                    <h2>Hello, I am</h2>
                    <h1>Ghous Ali Khan</h1>
                    <h3>Freelance
                        <TypeAnimation
                            className='animation'
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                ' Solutions Architect',
                                1000,
                                ' Cyber Consultant',
                                1000,
                                ' Fullstack Developer',
                                1000,

                            ]}
                            speed={60}
                            deletionSpeed={40}
                            delay
                            repeat={Infinity}
                        />

                    </h3>
                </div>
                <a href="#portfolio">
                    <img src="/assets/images/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro;