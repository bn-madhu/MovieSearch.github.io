import delete1 from './images/delete1.png'

const MovieList = (props) => {
    let movieName = props.data;
    let title = props.dataTitle;
    let clickDelete = props.delete;      
    return(
        <div className="movieList">
            <h1 style={{textAlign:"center", color:"midnightblue"}}>{title}</h1>

        {movieName.map((xyz)=>{
            return(
                <div className="namesOfMovies">
 
                    <h2>Name of Movie: {xyz.Name}</h2>
                    <h3>Actor: {xyz.actor}</h3>
                    <p><e>year :{xyz.yearOfRelease}</e></p>  
                    <img src={delete1} alt="" onClick={()=>clickDelete(xyz.id)}/>                      
                </div>
            )
        })}
        </div>
    )
}

export default MovieList;