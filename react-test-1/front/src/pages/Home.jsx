import React, { useState } from 'react'
import Box1 from './Box1'
import NameContext from './NameContext';
import CityContext from './CityContext';

const Home = () => {
  // let [name, setName] = useState("rohit");
  let hello = useState("ajay");

  let city = "indore"
  return (
    <CityContext.Provider value={city}>

    <NameContext.Provider value={hello}>
        <Box1 />
    </NameContext.Provider>

    </CityContext.Provider>
      
    )
}

export default Home