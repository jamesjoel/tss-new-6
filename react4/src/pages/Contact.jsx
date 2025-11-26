import { useState } from "react";

let Contact = ()=>{

    let [color, setColor] = useState(["red", "green", "blue", "yellow", "pink"]);

    let addHandler = ()=>{
        setColor(prev=>[...prev, "black"]);
    }
 
    return(
        <>
        <div className="container my-3">
            <button onClick={addHandler} className="btn btn-info">OK</button>
            <ol>
                {
                    color.map((item, index)=>{
                        return(
                            <li>{item}</li>
                        )
                    })
                }
            </ol>
        </div>
        </>
    )
}
export default Contact;