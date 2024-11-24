import React from "react";
import "./Home.css"

import GitHubIcon from "../../Assets/Icons/GitHubIcon";
import YoutubeIcon from "../../Assets/Icons/YoutubeIcon";
import InstagramIcon from "../../Assets/Icons/InstagramIcon";

function Home(){
return(
    <>
    <main id="Home">

        <div className="Home-Welcoming">

            <div className="Home-Welcoming-Description">

                    <h1>Welcome to the Madness  </h1>
                    <p>I’m Dot Dager, a full-stack programmer and content creator. I’m passionate about philosophy, and in my free time, I shred guitar strings while watching cats and pondering existence… and cucumbers, because yes, they’re the best thing that ever happened to me.</p>

                <aside>
                    <a className="Icon" href="https://github.com/MarianoVilla" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                    <a className="Icon" href="https://www.youtube.com/@DotDager" target="_blank" rel="noreferrer"><YoutubeIcon/></a>
                    <a className="Icon" href="https://www.instagram.com/dager.32/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
                </aside>
                
            </div>

            <img className="Home-Welcoming-Img" src="https://yt3.googleusercontent.com/KPVok_m-JqxKG5wD7HaXc5RyYDPPHHZpQP4KquV8fD9er0mGEkZ_9UuQojBehXz6aCxUt0RI=s900-c-k-c0x00ffffff-no-rj" alt="Img"></img>

        </div>
        
    </main>
    </>
    
);
}

export default Home