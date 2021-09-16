import React from 'react'
import './contact.scss'
import logo1 from'./images/gmail.png'
import logo2 from'./images/github.png'
import logo3 from'./images/linkedin.png'

function Contact(){

    return(
        <div className="contact">
        <p> Contact Me</p>

        <p id="thanks">Thank you for visiting my page.
        <br />
        I am a new developer and learning new skills everyday.
        <br />
        I will be happy to join you for some coding adventures.
        <br />
        If you feel there is a suggestion or anything
        <br />
        just drop it down on the below given links.
        </p>
        <div className="links">
       <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bhupendersinghbhauriyal@gmail.com" target="_blank" rel="noreferrer"> 
       <img src={logo1} alt="gmail" title="gmail" /> 
       </a>
       <a href="https://www.linkedin.com/in/bhupender-singh-bhauriyal/" target="_blank" rel="noreferrer">
        <img src={logo3} alt="linkedin" title="linkedin" />
        </a>
        <a href="https://github.com/bunny1351" target="_blank" rel="noreferrer">
        <img src={logo2} alt="github" title="github" />
        </a>
        </div>  
         </div>
    )

}

export default Contact;