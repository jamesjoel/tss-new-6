import Footer from "./components/Footer";
import Header from "./components/Header";

import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

let App = ()=>{
    return(
        <>
        <Header />

        <div className="container" style={{minHeight : "600px"}}>
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