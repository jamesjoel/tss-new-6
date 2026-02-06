import React, { useState, memo, useCallback } from 'react'
import Child from './Child'

const App3 = () => {
    const [add, setAdd] = useState(0)

    let hello = useCallback(()=>{
        console.log("#########")
    },[])

  return (
    <>
    <Child hello={hello} />
    <h1>{add}</h1>
    <button onClick={()=>setAdd(add+1)}>OK</button>
    </>

  )
}



export default App3