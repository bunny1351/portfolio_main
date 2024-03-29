import React from 'react';
import './home.scss';
import logo1 from './images/github.png'
import logo2 from './images/linkedin.png'
import logo3 from './images/frontend mentor.png'
import {Typewriter} from 'react-simple-typewriter'

function Home() {
    return (
        <div>
        <div className="home">
            <p>My Name is <span id="name">Bhupender Singh</span>
                <br /> and I am
                <br /> a <span id="dev">
                <Typewriter 
                 words={['Front End Developer', 'Techie', 'Fast Learner']}
                 loop={0}
                 cursor
                 cursorStyle='|'
                 typeSpeed={70}
                 deleteSpeed={50}
                 delaySpeed={1000}
                />
                </span>
            </p>
            <div className="links">
                <a href="https://github.com/bunny1351" target="_blank" rel="noreferrer">
                    <img src={logo1} alt="Github" title="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/bhupender-singh-bhauriyal/" target="_blank" rel="noreferrer">
                    <img src={logo2} alt="Linkedin" title="Linkedin" />
                </a>
                <a href="https://www.frontendmentor.io/profile/bunny1351" target="_blank" rel="noreferrer">
                    <img src={logo3} alt="Frontend Mentor" title="Frontend Mentor" />
                </a>
            </div>
        </div> 
        </div>
    )
}

export default Home;