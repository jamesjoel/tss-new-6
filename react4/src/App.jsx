import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from "./pages/Contact";
import Data from "./pages/Data";

let App = ()=>{
    return(
        <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/data" element={<Data />} />
        </Routes>
        </>
    )
}
export default App;