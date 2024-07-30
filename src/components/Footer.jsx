const Footer = () => {
    return (
        <footer className="d-flex flex-column align-items-center justify-content-center">
            <a href="#"> <img className="footer-logo" src="/skac-logo-mini.png" alt="avatar" /></a>
            <div className="iconos-redes-sociales d-flex flex-warp align-items-center justify-content-center">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-twitter-x"></i>
                </a>
                <a href="https://wa.me/+51(NUMERO)?text=Buenos%20días,%20quiero%20más%2oinformación?" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-whatsapp"></i>
                </a>
            </div>
            <div className="derechos-de-autor">
                Todos los derechos reservados &copy; SKAC Corp (2024)
            </div>
        </footer>
    )
};

export default Footer;
