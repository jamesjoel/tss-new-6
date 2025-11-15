let Header = ()=>{
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <a href="" className="navbar-brand">TSS</a>
                <button data-bs-toggle="collapse" data-bs-target="#menu" className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;