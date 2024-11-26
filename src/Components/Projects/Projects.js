import './Projects.css'

import ThumbProject from './Thumb-Project/ThumbProject';

import WebDevelopmentIcon from '../../Assets/Icons/WebDevelopmentIcon';

import img1 from '../../Assets/Img/Projects/1.png'

function Projects(){
    return(
        <>
        <main id='Projects'>
        <WebDevelopmentIcon /><h1 className='Projects-Tittle'>Projects</h1>

            <aside className='Projects-Grid'>
                <ThumbProject
                img={img1}
                tittle="This portfolio"
                description="Portofolio made with react.js aaaaaaaaaa a a a a a a a"
                page="http://localhost:3000/"
                code="https://github.com/KuKe-dev/portafolio-dager"
                />
                <ThumbProject
                img={img1}
                tittle="This portfolio"
                description="Portofolio made with react.js"
                page="http://localhost:3000/"
                code="https://github.com/KuKe-dev/portafolio-dager"
                />
                <ThumbProject
                img={img1}
                tittle="This portfolio"
                description="Portofolio made with react.js"
                page="http://localhost:3000/"
                code="https://github.com/KuKe-dev/portafolio-dager"
                />
                <ThumbProject
                img={img1}
                tittle="This portfolio"
                description="Portofolio made with react.js"
                page="http://localhost:3000/"
                code="https://github.com/KuKe-dev/portafolio-dager"
                />
            </aside>
        </main>
        </>
        
    );
    }
    
    export default Projects