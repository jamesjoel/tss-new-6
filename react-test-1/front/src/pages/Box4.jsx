import React, {useContext} from 'react'
import NameContext from './NameContext'


const Box4 = () => {

  let a = useContext(NameContext)

  return (
    <div style={{height : 150, width : 150, backgroundColor : "yellow"}}>
      {a}
    </div>
  )
}

export default Box4