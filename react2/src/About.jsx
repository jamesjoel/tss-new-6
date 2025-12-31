import { useState } from "react"

let About = ()=>{

    let [x, setX] = useState(0)
    let [y, setY] = useState(0)

    let [t, setT] = useState(80)
    let [l, setL] = useState(0)

    let demo = (e)=>{
        setX(e.clientX)
        setY(e.clientY)
    }

    let demo2 = ()=>{
        let a = Math.random()*1000;
        setL(Math.floor(a));
        let b = Math.random()*600;
        setT(Math.floor(b));
    }
    return(
        <>
            <div onMouseMove={(e)=>demo(e)} style={{width : "100%", height : "700px", backgroundColor : "#ccc", cursor : "none"}}>
                <div style={{position : "absolute", top : y, left : x,  backgroundImage : "url('https://cdn-icons-png.flaticon.com/256/6389/6389389.png')", backgroundSize : "100% 100%",  height : "50px", width : "50px", borderRadius : 50, zIndex : 9999}}></div>
                <div onMouseMove={demo2} style={{backgroundColor : "black", position : "absolute", height : "150px", width : "150px", borderRadius : "200px", top : t, left : l}}></div>
            </div>
        </>
    )
}
export default About;