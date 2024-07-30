const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-custom">
            <div className="container-fluid px-3">
                <a className="navbar-brand fw-bold" href="#">
                    <img src="SKAC-LOGO.png" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto fw-bold">
                        <li className="nav-item">
                            <a className="nav-link" href="#inicio">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#nosotros">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#servicios">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#proyectos">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonios">Testimonios</a>
                        </li>
                        <button type="button" className="btn btn-primary">
                            <a href="#contacto">
                                <b>Contáctanos</b>
                            </a>
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;