import {useState} from 'react'

let Home = ()=>{
    // let name = "rohit sharma";
    let [name, setName] = useState("rohit");

    let demo = ()=>{
        setName("amar");
    }
    let demo2 = ()=>{
        setName("vijay")
    }
    return(
        <>
        <h1>This is Home Page</h1>
        <button onClick={demo} className="btn btn-orange">Login</button>
        <h3>{name}</h3>
        <button onClick={demo2}>OK</button>
        </>
    )
}

export default Home;