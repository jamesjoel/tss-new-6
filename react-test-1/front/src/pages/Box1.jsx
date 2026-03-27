import React, {useContext} from 'react'
import Box2 from './Box2'

import NameContext from './NameContext'


const Box1 = () => {

  let x = useContext(NameContext);
  console.log(x)

  return (
    <div style={{height : 500, padding : 20, width : 500, backgroundColor : "blue"}}>
      <button onClick={()=>x[1]("Gaurav")}>OK</button>
        <Box2 />
    </div>
  )
}

export default Box1