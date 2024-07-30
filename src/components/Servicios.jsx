const Servicios = () => {
    return (
        <section id="servicios" className="servicios">
            <div className="container text-center">
                <h2 className="seccion-titulo">Nuestros servicios</h2>
                <h4 className="seccion-descripcion">somos especialistas en</h4>
                <div className="row justify-content-center">
                    {/* Diseño gráfico */}
                    <div className="columna col-12 col-md-5 mx-3 mt-4">
                        <i className="bi bi-palette"></i>
                        <p className="servicio-titulo">Diseño gráfico</p>
                        <p>Creamos visuales excepcionales que enganchen a tu audiencia. Explora
                            nuestra variedad de diseños y anímate a impulsar tu negocio al éxito con nosotros</p>
                        <div className="badges-contenedor">
                            <span className="badge rounded-pill text-bg-danger">AdobeExpress</span>
                            <span className="badge rounded-pill text-bg-primary">Photoshop</span>
                            <span className="badge rounded-pill text-bg-warning">Sketch</span>
                        </div>
                    </div>
                    {/* Diseño de marca */}
                    <div className="columna col-12 col-md-5 mx-3 mt-4">
                        <i className="bi bi-amd"></i>
                        <p className="servicio-titulo">Diseño de marca</p>
                        <p>Elaboramos identidades visuales únicas que definan tu marca y te conecten con el mercado.
                            ¡Descubre nuestros servicios personalizados para llevar tu marca al siguiente nivel!</p>
                        <div className="badges-contenedor">
                            <span className="badge rounded-pill text-bg-warning">Ilustrator</span>
                            <span className="badge rounded-pill text-bg-dark">GIMP</span>
                            <span className="badge rounded-pill text-bg-primary">Canva</span>
                        </div>
                    </div>
                    {/* Desarrollo de software */}
                    <div className="columna col-12 col-md-5 mx-3 mt-4">
                        <i className="bi bi-code-slash"></i>
                        <p className="servicio-titulo">Desarollo de software</p>
                        <p>Desarrollamos soluciones de software innovadoras que optimizan procesos y potencian el crecimiento de tu negocio. ¡Transforma tu negocio con nosotros ahora!</p>
                        <div className="badges-contenedor">
                            <span className="badge rounded-pill text-bg-danger">HTML</span>
                            <span className="badge rounded-pill text-bg-primary">CSS</span>
                            <span className="badge rounded-pill text-bg-warning">JavaScript</span>
                            <span className="badge rounded-pill text-bg-light">Node.js</span>
                        </div>
                    </div>
                    {/* Publicidad y eventos */}
                    <div className="columna col-12 col-md-5 mx-3 mt-4">
                        <i className="bi bi-megaphone-fill"></i>
                        <p className="servicio-titulo">Publicidad y eventos</p>
                        <p>Organizamos campañas publicitarias y eventos inolvidables que capturan la atención y generan resultados. ¡Haz que tu negocio sea el centro de atención hoy!</p>
                        <div className="badges-contenedor">
                            <span className="badge rounded-pill text-bg-light">Bodas</span>
                            <span className="badge rounded-pill text-bg-danger">Cumpleaños</span>
                            <span className="badge rounded-pill text-bg-primary">Bautizos</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Servicios;
