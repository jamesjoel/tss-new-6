import { NavLink } from 'react-router-dom'
let Header = ()=>{
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <a href="" className="navbar-brand">The Stepping Stone</a>
                <button className="navbar-toggler" data-bs-toggle="collpase" data-bs-traget="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    )
}

export default Header;