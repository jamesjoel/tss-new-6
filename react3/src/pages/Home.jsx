import axios from 'axios';
import {useState} from 'react'

const API_KEY = "145288AFertgsdgser21sd2fg15e1rg";

let Home = ()=>{
    // let name = "rohit sharma";
    let [name, setName] = useState("rohit");

    let demo = ()=>{
        axios
        .get("http://localhost:3000/api/v1/paid/"+API_KEY)
        .then(response=>{
            console.log(response.data)
        })
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