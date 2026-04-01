import React from 'react'
import SideNav from './components/SideNav'
import TopNav from './components/TopNav'
import AllRoutes from './routes/AllRoutes'
import {Provider} from 'react-redux'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import CategoryReducer from './redux/CategorySlice'

let rootReducer = combineReducers({CategoryReducer})

let store = configureStore({
  reducer : rootReducer
})


const App = () => {
  return (
    <>  
      <Provider store={store}>
          <AllRoutes />
      </Provider>

     
    </>
  )
}

export default App