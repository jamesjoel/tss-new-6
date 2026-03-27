import React, {useContext} from 'react'
import Box4 from './Box4'
import CityContext from './CityContext'


const Box3 = () => {

  let x = useContext(CityContext)
  
  return (
    <div style={{height : 250, padding : 20, width : 250, backgroundColor : "red"}}>
      <h2>{x}</h2>
        <Box4 />
    </div>
  )
}

export default Box3