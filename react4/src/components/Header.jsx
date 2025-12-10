import { NavLink } from 'react-router-dom'
let Header = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

            <div className="container">

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/data">Data</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/event1">Event1</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/event2">Event2</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/event3">Event3</NavLink>
                    </li>

                </ul>
            </div>

        </nav>
    )
}
export default Header;