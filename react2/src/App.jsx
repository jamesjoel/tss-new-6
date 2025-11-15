import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from 'react-router-dom'

let App = ()=>{
    return(
        <>
        
        <Header />
        
        <div className="container my-5" style={{minHeight : "600px"}}>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            

        </div>

        <Footer />
        </>
    )
}


export default App;