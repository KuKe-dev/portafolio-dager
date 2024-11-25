import './Projects.css'

import ThumbProject from './Thumb-Project/ThumbProject';

import WebDevelopmentIcon from '../../Assets/Icons/WebDevelopmentIcon';
import kukeimg from '../../Assets/Img/kukeimg.jpg'

function Projects(){
    return(
        <>
        <main className='Projects'>
        <WebDevelopmentIcon /><h1 className='Projects-Tittle'>Projects</h1>

            <aside className='Projects-Grid'>
                <ThumbProject 
                img={kukeimg}
                tittle="tittle"
                description="Description"/>
                <ThumbProject 
                img={kukeimg}
                tittle="tittle"
                description="Description"/>
                <ThumbProject 
                img={kukeimg}
                tittle="tittle"
                description="Description"/>
                <ThumbProject 
                img={kukeimg}
                tittle="tittle"
                description="Description"/>
            </aside>
        </main>
        </>
        
    );
    }
    
    export default Projects