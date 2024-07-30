const Contacto = () => {
    return (
        <section id="contacto" className="contacto">
            <h2 className="seccion-titulo">Contacto</h2>
            <h4 className="seccion-descripcion">¿Listo para hacer realidad tus sueños?</h4>
            <div className="container">
                <div className="rectangulo d-flex justify-content-evenly">
                    <div className="row">
                        <div className="col-12 col-sm-4 invitacion">
                            Hablemos
                        </div>
                        <div className="col-12 col-sm-4 descripcion">
                            Contáctanos para brindarte el mejor servicio del mercado ¡No esperes más!
                        </div>
                        <div className="col-12 col-sm-4">
                            <a href="mailto:(email@xyz.com)">
                                <button type="button" className="btn btn-primary">
                                    Contacto
                                    <i className="bi bi-envelope-check-fill"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contacto;
