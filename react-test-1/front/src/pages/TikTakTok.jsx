import React, { useState } from 'react'
import "./TikTakTok.css"
import Tile from './Tile'
import {useDispatch} from 'react-redux'

import {firstPlayerMove, secondPlayerMove} from '../redux/PlayerSlice'

const WinArr = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const TikTakTok = () => {
    let disptach = useDispatch();
    // Array.from({length : 9})
    let [arr, setArr] = useState(Array.from({length : 9}))

    let [currPlayer, setCurrPlayer] = useState("f")

    let [winMsg, setWinMsg] = useState("");
    let [errMsg, setErrMsg] = useState("");

    let clickHandler = (value)=>{


        let tempArr = [...arr];

        if(tempArr[value]!=undefined){
            setErrMsg("You Already Click");
            return;
        }

        if(currPlayer=="f"){
            disptach(firstPlayerMove())
        }
        if(currPlayer=="s"){
            disptach(secondPlayerMove())

        }
        let place = currPlayer == "f" ? "X" : "O";
        tempArr[value] = place;
        setArr(tempArr);
        setCurrPlayer(prev=>prev=="f"?"s":"f")
        CheckWinFun(tempArr, place);

    }

    let CheckWinFun = (tempArr, place)=>{
        
       for(let i of WinArr){
            if(tempArr[i[0]]==place && tempArr[i[1]]==place && tempArr[i[2]]==place){
                if(place=="X")
                setWinMsg("First Player WIN")
                else
                setWinMsg("Second Player WIN")

            break;
            }
       } 
        
    }
    

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <h1 className='text-center'>{winMsg}</h1>
                <div className="col-md-5">
                    <div className='d-flex justify-content-between'>

                        <h4 className={'py-1 px-3 '+ (currPlayer=="f" ? "bg-info":"")}>First Player : X</h4>
                        <h4 className={'py-1 px-3 '+ (currPlayer=="s" ? "bg-info":"")}>Second Player : O</h4>
                    </div>
                    <div className="card bg-secondary p-3">
                        <div className='d-flex justify-content-between m-2 flex-wrap'>
                            {
                                arr.map((item, index)=><Tile item={item} index={index} onClick={clickHandler}  />)
                            }
                            
                        </div>
                        <h2>{errMsg}</h2>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TikTakTok

