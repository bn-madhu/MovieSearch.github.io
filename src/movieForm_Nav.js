import kannada from './images/kannada.jpg';
import { useState } from 'react';
import './movieForm.css'

const MovieForm_Nav = () => {
    let handelSubmit = (e) =>{
        e.preventDefault();   //to prevent the reloading of the page
        let data = {Name,actor,genre,yearOfRelease,language}
        // console.log(data);
        fetch("http://localhost:5000/series", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        })
        .then(()=>{
            alert('data added successfully')
        })
    }

    let[Name,setName] = useState("");
    let[actor,setActor] = useState("");
    let[genre,setGenre] = useState("");
    let[yearOfRelease,setYearOfRelease] = useState("");
    let[language,setLanguage] = useState("");



    return ( 
        <div className="movies_name_form">
            <div>
                <img src={kannada} alt="" style={{width:"50%", height:"50%"}} />
            </div>
            <div >
                <form action="" onSubmit={handelSubmit}>
                    <div>
                        <label htmlFor="name">Title</label>
                        <input type="text" id="name" placeholder="Movie Name" value={Name} onChange={(e)=>{setName(e.target.value)}}/>
                    </div>
                    <div>
                        <label htmlFor="actor">Actor</label>
                        <input type="text" id="actor" placeholder="Actor" value={actor} onChange={(e)=>{setActor(e.target.value)}}/>
                    </div>
                    <div>
                        <label htmlFor="genre">Genre</label>
                        <input type="text" id="genre" placeholder="Genre" value={genre} onChange={(e)=>{setGenre(e.target.value)}}/>
                    </div>
                    <div>
                        <label htmlFor="year">year Of Release</label>
                        <input type="text" id="year" placeholder="Realease" value={yearOfRelease} onChange={(e)=>{setYearOfRelease(e.target.value)}}/>
                    </div>
                    <div>
                        <label htmlFor="language">Language</label>
                        <input type="text" id="language" placeholder="Language" value={language} onChange={(e)=>{setLanguage(e.target.value)}}/>
                    </div>
                    <button type='submit' className='submit'>Submit</button>
                </form>
                {/* <h1>{title}</h1> */}
            </div>
        </div>
     );
}
 
export default MovieForm_Nav;
