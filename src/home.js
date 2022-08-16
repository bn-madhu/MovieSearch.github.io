import { useState, useEffect } from "react";

const Home = () =>{
    // let [movieName , newNames] = useState([])
    
    // useEffect(()=>{
    //     fetch("http://localhost:5000/series")
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data=>{
    //         newNames(data)
    //     })
    // },[])
    
    let imgArr = [{image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTQlICA0M2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312373-pbuugrzltv-portrait.jpg"},
                  {image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODMlICA4N2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00129624-cyfeqjvtcr-portrait.jpg"},
                  {image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBBcHI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50:q-80/et00323862-grmyhhdgsn-portrait.jpg"},
                  {image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNSBNYXIgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00063757-rbpnqgrwyc-portrait.jpg"}
                ];
    
    

    // let[Name, setName] = useState("Tony")
    // useEffect((e)=>{
    //     console.table("it worked...");
    // },[Name])
    // let handel = () =>{
    //     setName("mAdHu")
    // }

    return(
        
        <div className="movieOfKannada">
            <div className="imagesOfMovies">
                <a href="https://youtu.be/qTZ7nxzlPjE" target="_blank">
                    {imgArr.map((val)=>{
                        return(
                            <img src={val.image} alt="" />
                        )
                    })}
                </a>
               

            </div>
            
          
                {/* <h1>{Name}</h1>
                <button onClick={handel}>click</button> */}
        </div>
    );
}

export default Home;