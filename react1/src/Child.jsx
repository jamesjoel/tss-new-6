import React, {memo} from 'react'

const Child = ({hello}) => {
    console.log("@@@@@@@@@@@")
  return (
    <div>Child</div>
  )
}

export default memo(Child)