import React from 'react'

const H1 = ({children}) => {

    let clickHandler = ()=>{
        console.log("*************")
    }
  return (
    <h1 onClick={clickHandler}>{children}</h1>
  )
}

export default H1