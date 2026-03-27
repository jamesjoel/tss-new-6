import React, {useContext} from 'react'
import Box3 from './Box3'
import NameContext from './NameContext'

const Box2 = () => {

  let x = useContext(NameContext)

  return (
    <div style={{height : 400, padding : 20, width : 400, backgroundColor : "green"}}>
      <h1>{x}</h1>
        <Box3 />
    </div>
  )
}

export default Box2