function ThumbProject(props) {
    return(
        <>            
            <article className="ThumbProject">
                <img src={props.img} alt="aaa"/>
                <h2>{props.tittle}</h2>
                <p>{props.description}</p>
            </article>
        </>
    )
    }
    
    export default ThumbProject