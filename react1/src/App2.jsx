import React, { useMemo, useState } from 'react'

const App2 = () => {
    let [a, setA] = useState(0)
    let [b, setB] = useState(100)
    let [keyword, setKeyWord] = useState("")

    let multiplication = useMemo(()=>{

        console.log("********")
        return a*10
    },[a])

    let data= [
        {
            id : 1,
            name  : "rohit"
        },
        {
            id : 2,
            name : "vijay"
        },
        {
            id : 3,
            name : "amar"
        },
        {
            id : 4, 
            name : "ram"
        }
    ]


    const filteredData = useMemo(()=>{
        return data.filter(item =>{
            console.log("$$$$")
            return  item.name.startsWith(keyword)
        })
    },[keyword])
    

  return (
    <>
    <h1>A : {a}</h1>
    <h2>{multiplication}</h2>
    <button onClick={()=>setA(a+1)}>A</button>
    <br />
    <br />
    <h1>B : {b}</h1>
    <button onClick={()=>setB(b-1)}>B</button>
    <br />
    <br />
    <input type='text' value={keyword} onChange={(e)=>setKeyWord(e.target.value)}/>
    <br />
    <ul>
        {
            filteredData.map(item=><li key={item.id}>{item.name}</li>)
        }
    </ul>
    </>
  )
}

export default App2