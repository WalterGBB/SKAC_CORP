const CTA = () => {
    return (
        <section id="inicio" className='cta'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="carrusel-1.png" className="d-block w-100" alt="img-carrusel" />
                    </div>
                    <div className="carousel-item">
                        <img src="carrusel-2.png" className="d-block w-100" alt="img-carrusel" />
                    </div>
                    <div className="carousel-item">
                        <img src="carrusel-3.png" className="d-block w-100" alt="img-carrusel" />
                    </div>
                    <div className="carousel-item">
                        <img src="carrusel-4.png" className="d-block w-100" alt="img-carrusel" />
                    </div>
                </div>
            </div>
            <div className="info">
                <h1>SKAC Corp</h1>
                <h2>Servicios y productos digitales</h2>
                <p>Especialistas creando <b>experiencias digitales extraordinarias</b> y
                    construyendo marcas que <b>cautivan corazones y mentes</b>. <br /><br />
                    <b>No lo pienses más.</b></p>
                <button type="button" className="btn btn-primary">
                    <a href="#contacto">
                        <b>Contáctanos</b>
                    </a>
                </button>
            </div>
        </section>
    )
};

export default CTA;

