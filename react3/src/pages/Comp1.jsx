import { useState } from "react"

let Comp1 = ()=>{

    let [arr, setArr] = useState(["indore", "bhopal", "pune"])

    let demo = ()=>{
        setArr(prev=> ["mumbai", ...prev])
    }

    return(
        <>
        <button onClick={demo} className="btn btn-info">Add</button>
        {
            arr.map((item, index)=>{
                return(
                    <h1>{index+1} {item}</h1>
                )
            })
        }
        </>
    )
}

export default Comp1

/*
Array.push("mumbai")
Array.pull("mumbai")
Array.pop();

*/