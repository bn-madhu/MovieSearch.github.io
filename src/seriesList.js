import {useState} from "react";



const SeriesList = () =>{
    let[seriesData , setData] = useState([{title:"madhu", genre:"Masss", cast:"Kingg", quotes:"Jai"},
    {title:"Family Man", genre:"Bajpa", cast:"asdad", quotes:"Jai"},
    {title:"Money hesit", genre:"Masss", cast:"Kingg", quotes:"Jai"},
    {title:"", genre:"Masss", cast:"Kingg", quotes:"Jai"},
    {title:"Narcos", genre:"", cast:"Kingg", quotes:"Jai"}])
return(
        <div className="data">
            {seriesData.map((val)=>{
                return(
                        <div className="display">
                        <h1>Title: {val.title}</h1>
                        <h2>Genre: {val.genre}</h2>
                        <h3>Famous Quote: {val.quotes}</h3>
                        </div>
                    )
             })}
        </div>)
}
export default SeriesList;
