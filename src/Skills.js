import React from 'react'
import './skills.scss'
import logo1 from './images/basics.png'
import logo2 from './images/react js.png'
import logo3 from '././images/sass.png'
import logo4 from '././images/figma.png'
import logo5 from '././images/wordpress.png'
import logo6 from '././images/bootstrap.png'
import logo7 from '././images/c++.png'



function Skills(){
    return(
        <div className="skills">
            <p>My Skills</p>
            <div className="line1">
            <a href="https://www.freecodecamp.org/news/html-css-and-javascript-explained-for-beginners/" target="_blank" rel="noreferrer">
                    <img src={logo1} alt="HTML CSS JS" title="HTML CSS JS" id="basics" />
                </a>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                    <img src={logo2} alt="React JS" title="React JS" />
                </a>
                <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
                    <img src={logo3} alt="SASS" title="SASS" />
                    </a>
               
            </div>
            <div className="line2">
           
                <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
                    <img src={logo4} alt="Figma" title="Figma" />
                </a>
                <a href="https://wordpress.com/" target="_blank" rel="noreferrer">
                    <img src={logo5} alt="Wordpress" title="Wordpress" />
                </a>
            </div>

            <div className="line3">
            <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
                    <img src={logo6} alt="Bootstrap" title="Bootstrap" />
                </a>
                <a href="https://www.w3schools.com/CPP/default.asp" target="_blank" rel="noreferrer">
                    <img src={logo7} alt="C++" title="C++" />
                </a>
            </div>

        </div>
    )

}

export default Skills;