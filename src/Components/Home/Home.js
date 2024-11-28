import React from "react";
import "./Home.css"
import KuKe from '../../Assets/Img/KuKeimg.png'

import GitHubIcon from "../../Assets/Icons/GitHubIcon";
import MailIcon from "../../Assets/Icons/MailIcon";
import InstagramIcon from "../../Assets/Icons/InstagramIcon";

function Home(){
return(
    <>
    <main id="Home">

        <div className="Home-Welcoming">

            <div className="Home-Welcoming-Description">

                    <h1>Welcome to my portfolio</h1>
                    <p>I’m a Physics student and web developer with a focus on frontend development. Currently, I’m honing my skills in technologies like HTML, CSS, JavaScript, and React, with the goal of creating modern, efficient, and scalable projects.</p>

                <aside>
                    <a className="Icon" href="https://github.com/KuKe-dev" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                    <a className="Icon" href="mailto:lucadibene08@gmail.com" rel="noreferrer"><MailIcon/></a>
                    <a className="Icon" href="https://www.instagram.com/lucadi.bene/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
                </aside>
                
            </div>

            <img className="Home-Welcoming-Img" src={KuKe} alt="A"></img>

        </div>
        
    </main>
    </>
    
);
}

export default Home