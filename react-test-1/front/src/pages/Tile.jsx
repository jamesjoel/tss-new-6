import React, { useState } from 'react'

const Tile = ({onClick, index, item}) => {
    
  return (
    <div onClick={()=>onClick(index)}  className='block'>{item}</div>
  )
}

export default Tile