import { useState } from "react";
// Hooks ---- are special fun inside of Component
let Contact = ()=>{



    let [num, setNum] = useState(100);
    let [likeNum, setLikeNum] = useState(217)
    let [lable, setLable] = useState(true)
    // let arr = useState(100);
    // let num = arr[0];
    // let setNum = arr[1];

   
    
    let demo1 = ()=>{
        
        // setNum(500)
        // setNum(prev=>prev+50);
        setNum(prev=>{
            if(prev < 500){
                return prev + 50;
            }
            else{
                return prev + 100;
            }
        })
        // setNum(600)
    }

    let demo2 = ()=>{
        // setLable(prev => prev == true ? false : true);
        setLable(prev=>{
            if(prev==true){
                setLikeNum(a=>a+1);
                return false;
            }else{
                setLikeNum(a=>a-1);
                return true;
            }
        })
        
    }

    return(
        <>
        <br />
        
        <br />
        <br />
        { lable == true ? <i onClick={demo2} class="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i> :  <i onClick={demo2} class="fa fa-thumbs-up fa-2x" aria-hidden="true"></i> }
        {likeNum}
       
        {lable == true ? "Like" : "UnLike"}
        <br />
        <br />
        <button onClick={demo1} className="btn btn-primary">OK</button>
        <h1>{num}</h1>
        <div style={{backgroundColor : "#4198AD", height : num+"px", width : num+"px"}}></div>
        </>
    )
}
export default Contact;