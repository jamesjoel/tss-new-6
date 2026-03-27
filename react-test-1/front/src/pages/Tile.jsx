import React, { useState } from 'react'
import "./TikTakTok.css"

const Tile = ({onClick, index, item}) => {
    
  return (
    <div onClick={()=>onClick(index)}  className='block'>{item}</div>
  )
}

export default Tile