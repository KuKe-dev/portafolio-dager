import './ThumbProject.css'

function ThumbProject(props) {
    return(
        <>            
            <article className="ThumbProject">
                <aside>
                    <a className='ThumbProject-Button'>Open</a>
                    <a className='ThumbProject-Button'>Code</a>
                    <img src={props.img} alt="aaa" className="ThumbProject-Img"/>
                </aside>
                <h2>{props.tittle}</h2>
                <p>{props.description}</p>
            </article>
        </>
    )
    }
    
    export default ThumbProject