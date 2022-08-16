import MovieList from './movieList';
import { useState , useEffect } from 'react';


const PopluarMovies = () => {

    let [movieName , newNames] = useState([])
    
    useEffect(()=>{
        fetch("http://localhost:5000/series")
        .then(response => {
            return response.json();
        })
        .then(data=>{
            newNames(data)
        })
    },[])

    let clickDelete = (idAll) => {
        let newData = movieName.filter((val)=>{return val.id!=idAll;});
        newNames(newData);
     }

    return ( 
    <div className="movie">
            <MovieList  data = {movieName} dataTitle= "Popluar Titles" delete ={clickDelete}/>
            <MovieList  data = {movieName.filter((value)=> value.language == "Kannada")} dataTitle= "Popluar KannaDA MoviEs"/>
            <MovieList  data = {movieName.filter((value)=> value.language == "Hindi")} dataTitle= "Popluar hindi MoviEs"/>
       
    </div>
     );
}
 
export default PopluarMovies;