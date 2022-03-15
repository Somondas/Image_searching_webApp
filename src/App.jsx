import react, { useState } from "react";
import Srimg from "./Srimg";


const App = () =>{
    const [img, setImg] =useState("")

    const inputEvent = (event) =>{
       var e = event.target.value
        setImg(e)
        // console.log(img);
    }

    return(
        <>
        <div className="searchbar">
            <input type="text" value={img} onChange={inputEvent} placeholder="Search Any Photo..." />
        </div>
        {img === ""? null : <Srimg name ={img} />}
        
        </>
    )
}
export default App;