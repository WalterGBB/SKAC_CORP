const Testimonios = () => {
    return (
        <section id="testimonios" className="testimonios">
            <h2 className="seccion-titulo">Testimonios</h2>
            <h4 className="seccion-descripcion">Estos son algunos testimonios de nuestros clientes</h4>
            {/* Carrusel */}
            <div id="testimonios-carrusel" className="carousel carousel-light slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <img className="testimonio-imagen rounded-circle" src="/cliente-2.jpg" alt="cliente" />
                            <p className="testimonio-texto">"Estoy encantada con el servicio de diseño gráfico de SKAC Corp. Su creatividad y profesionalismo superaron mis expectativas. ¡Gracias por transformar mi visión en realidad de manera tan brillante!"</p>
                            <div className="testimonio-info">
                                <p className="cliente">Martha Costa</p>
                                <p className="cargo">Gerente de marketing del BCP</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <img className="testimonio-imagen rounded-circle" src="/cliente-1.jpg" alt="cliente" />
                            <p className="testimonio-texto">"Estoy impresionado con el servicio de desarrollo de software de SKAC Corp. Su dedicación y expertise fueron fundamentales para llevar mi proyecto al siguiente nivel. ¡Gracias por su profesionalismo y resultados excepcionales!"</p>
                            <div className="testimonio-info">
                                <p className="cliente">Paul Smith</p>
                                <p className="cargo">CEO de Alicorp</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <img className="testimonio-imagen rounded-circle" src="/cliente-3.jpg" alt="cliente" />
                            <p className="testimonio-texto">"Estoy muy satisfecha con el servicio de diseño de marca de SKAC Corp. Su enfoque creativo y atención al detalle realmente capturaron la esencia de mi negocio. ¡Gracias por hacer que mi marca cobre vida de manera tan impactante!"</p>
                            <div className="testimonio-info">
                                <p className="cliente">Carmen Rodríguez</p>
                                <p className="cargo">Gerente de Baccus</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <img className="testimonio-imagen rounded-circle" src="/cliente-4.jpg" alt="cliente" />
                            <p className="testimonio-texto">"Estoy muy impresionado con el servicio de publicidad y eventos de SKAC Corp. Su capacidad para organizar y promover nuestro evento fue excepcional. ¡Gracias por hacer que nuestra campaña sea un éxito total!"</p>
                            <div className="testimonio-info">
                                <p className="cliente">Carlos López</p>
                                <p className="cargo">Agente publicitario de CNN</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </section>
    )
};

export default Testimonios;
