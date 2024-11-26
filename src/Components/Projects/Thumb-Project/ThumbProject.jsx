import './ThumbProject.css'


function ThumbProject(props) {
    return(
        <>            
            <article className="ThumbProject">
                <span className="ThumbProject-Img">
                    <img src={props.img}alt="aaa"/>
                    <aside className='ThumbProject-Buttons'>
                        <a href={props.page} target='_blank' rel='noreferrer' className='ThumbProject-Button'>Open</a>
                        <a href={props.code} target='_blank' rel='noreferrer' className='ThumbProject-Button'>Code</a>
                    </aside>
                </span>
                <h2>{props.tittle}</h2>
                <p>{props.description}</p>
            </article>
        </>
    )
    }
    
    export default ThumbProject