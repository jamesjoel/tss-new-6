import { useState } from "react"

let Contact = ()=>{

    let [x, setX] = useState();
    let [color, setColor] = useState("black");

    let [h, setH] = useState(100)
    let [w, setW] = useState(100)

    let demo = (x)=>{
        setH(prevH=>prevH+1)
        setW(prevW=>prevW+1)
    }

    let demo2 = ()=>{
        setH(100)
        setW(100)
    }

    let colorHandler = ()=>{
        setColor(x)
    }
    return(
        <>
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12">
                    <h1>DOM Event Object</h1>
                    
                    <input value={x} onChange={(e)=>setX(e.target.value)} type="text" />
                    <button onClick={colorHandler}>OK</button>
                    <br />
                    <br />
                    <div
                        style={{backgroundColor : color, height : h+"px", width : w+"px"}}
                        onMouseMove={(e)=>demo(e)}
                        onMouseOut={demo2}
                    ></div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;
/*
onClick
onDoubleClick
onContextMenu

onMouseOver
onMouseMove
onMouseOut

onKeyDown
onKeyUp

onFocus
onBlur

onCopy
onPaste

onLoad
onPrint

onChange
onSubmit


*/