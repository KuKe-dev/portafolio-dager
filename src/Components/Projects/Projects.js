import './Projects.css'

import ThumbProject from './Thumb-Project/ThumbProject';

import WebDevelopmentIcon from '../../Assets/Icons/WebDevelopmentIcon';

function Projects(){
    return(
        <>
        <WebDevelopmentIcon /><h1 className='Projects-Tittle'>Projects</h1>
        <main className='Projects'>
            <ThumbProject 
            img="https://yt3.googleusercontent.com/KPVok_m-JqxKG5wD7HaXc5RyYDPPHHZpQP4KquV8fD9er0mGEkZ_9UuQojBehXz6aCxUt0RI=s900-c-k-c0x00ffffff-no-rj"
            tittle="tittle"
            description="Description"/>
        </main>
        </>
        
    );
    }
    
    export default Projects