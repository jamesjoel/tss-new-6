import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from "./pages/Contact";
import Data from "./pages/Data";
import Event1 from "./pages/Event1";
import Event2 from "./pages/Event2";
import Event3 from "./pages/Event3";

let App = ()=>{
    return(
        <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/data" element={<Data />} />
            <Route path="/event1" element={<Event1 />} />
            <Route path="/event2" element={<Event2 />} />
            <Route path="/event3" element={<Event3 />} />
        </Routes>
        </>
    )
}
export default App;