import { useState } from "react"

let Help = ()=>{

    let [name, setName] = useState("Rohit Sharma")

    let [num, setNum] = useState(0)

    
    let handleClick = ()=>{
        setNum(prevNum=>prevNum==10 ? 50 : prevNum+1)
    }


    let handleClick2 = ()=>{
        setNum(prevNum=>prevNum==0 ? 0 : prevNum-1)
    }


    let demo = ()=>{
        setName(prev=>"My Name Is "+prev+" I m")
    }

    return(
        <>
        <h1>{name}</h1>
        <h1>{num}</h1>
        <button onClick={handleClick} className="btn btn-success">+</button>
        <button onClick={handleClick2} className="btn btn-danger">-</button>
        <br />
        <br />
        <button onClick={demo} className="btn btn-danger">Hello</button>
        </>
    )
}

export default Help

/*

setFun(prev=>{
    
    you have to return somthing
    
})



ternarry ope


    condtion ? value1 : value2
*/