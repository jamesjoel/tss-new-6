import { useState } from "react";
let About = ()=>{
    // let [city, setCity] = useState("Indore");
    let city = "Indore"

    let handleClick1 = ()=>{
        // setCity("Pune")
        city = "Bhopal"
    }
    let handleClick2 = ()=>{
        setCity("Delhi")
    }
    let handleClick3 = ()=>{
        setCity("Bhopal")
    }


    let hello = ()=>{
        console.log("************")
    }

    return(
        <>
            {hello()}
            <button onClick={handleClick1} className="btn btn-info">Pune</button>

            <button onClick={handleClick2} className="btn btn-danger">Delhi</button>

            <button onClick={handleClick3} className="btn 
            btn-primary">Bhopal</button>

            <h1>{city}</h1>
        </>
    )
}
export default About;