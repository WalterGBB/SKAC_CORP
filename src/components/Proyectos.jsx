const Proyectos = () => {
    return (
        <section id="proyectos" className="proyectos d-flex flex-column">
            <h2 className="seccion-titulo">Proyectos</h2>
            <h4 className="seccion-descripcion">Algunos de nuestros proyectos más recientes</h4>
            {/* Galería de proyectos */}
            <div className="container text-center proyectos-contenedor">
                <div className="row">
                    {/* Proyecto1 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="proyecto">
                            <img className="img" src="/proyecto1.jpg" alt="proyecto1" />
                            <div className="overlay">
                                <p>Diseño web</p>
                                <div className="iconos-contenedor">
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-github.png" alt="icon-github" />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-navegador.png" alt="icon-navegador" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto2 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="proyecto">
                            <img className="img" src="/proyecto2.jpg" alt="proyecto2" />
                            <div className="overlay">
                                <p>Diseño de marca</p>
                                <div className="iconos-contenedor">
                                    <a href="https://github.com/WalterGBB/App-Clima" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-github.png" alt="icon-github" />
                                    </a>
                                    <a href="https://francode-app-clima.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-navegador.png" alt="icon-navegador" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto3 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="proyecto">
                            <img className="img" src="/proyecto3.jpg" alt="proyecto3" />
                            <div className="overlay">
                                <p>Eventos</p>
                                <div className="iconos-contenedor">
                                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-github.png" alt="icon-github" />
                                    </a>
                                    <a href="https://my-cat-snarf.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-navegador.png" alt="icon-navegador" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto4 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="proyecto">
                            <img className="img" src="/proyecto4.jpg" alt="proyecto4" />
                            <div className="overlay">
                                <p>Publicidad</p>
                                <div className="iconos-contenedor">
                                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-github.png" alt="icon-github" />
                                    </a>
                                    <a href="https://my-cat-snarf.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-navegador.png" alt="icon-navegador" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto5 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="proyecto">
                            <img className="img" src="/proyecto5.jpg" alt="proyecto5" />
                            <div className="overlay">
                                <p>Marketing</p>
                                <div className="iconos-contenedor">
                                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-github.png" alt="icon-github" />
                                    </a>
                                    <a href="https://my-cat-snarf.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-navegador.png" alt="icon-navegador" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto6 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="proyecto">
                            <img className="img" src="/proyecto6.jpg" alt="proyecto6" />
                            <div className="overlay">
                                <p>Diseño gráfico</p>
                                <div className="iconos-contenedor">
                                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-github.png" alt="icon-github" />
                                    </a>
                                    <a href="https://my-cat-snarf.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-navegador.png" alt="icon-navegador" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="btn" href="#" target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn btn-info">
                    Ver más proyectos
                    <i className="bi bi-arrow-right-circle-fill"></i>
                </button>
            </a>
        </section>
    )
};

export default Proyectos;
