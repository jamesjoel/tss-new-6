import React, { useReducer } from 'react'
let initialState = 0;
let reducer = (state, action)=>{
    switch(action){
        case 'add' : return state+1;
        case 'minus' : return state-1;
        default : return state;
    }

}
const App4 = () => {
   let [count, dispatch] =useReducer(reducer, initialState);
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>dispatch('add')}>Add</button>
    <button onClick={()=>dispatch('minus')}>Minus</button>
    </>
  )
}

export default App4