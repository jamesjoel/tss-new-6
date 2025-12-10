import React from 'react'
import SideNav from './components/SideNav'
import TopNav from './components/TopNav'
import AllRoutes from './routes/AllRoutes'

const App = () => {
  return (
    <>
    <div className="container-scroller">
      <SideNav />
      <div className="container-fluid page-body-wrapper">
        <TopNav />
        
          <AllRoutes />

      </div>
    </div>
    </>
  )
}

export default App