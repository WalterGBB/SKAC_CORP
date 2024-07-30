import TypeWriter from "./TypeWriter"

const Nosotros = () => {
    return (
        <section id="nosotros" className="nosotros">
            <div className="container-fluid">
                <div className="descripcion">
                    <div>
                        <img src="impresion.png" alt="img-impresion" />
                    </div>
                    <div className="descripcion-texto">
                        <div className="texto">
                            <h3>Te ofrecemos <span id="typewriter"><TypeWriter /></span></h3>
                            <p>En SKAC, somos líderes en impresiones de gran formato, diseño gráfico, publicidad y soluciones web.
                                Ofrecemos un servicio 100% personalizado, respaldado por más de 10 años de experiencia. Nos destacamos
                                por brindar servicios de alta calidad y la mejor atención del mercado.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="resumen container-fluid">
                <div class="row no-gutters">
                    <div class="col-12 col-md-6 col-lg-3 resumen-item">+200 marcas</div>
                    <div class="col-12 col-md-6 col-lg-3 resumen-item">+10 años de experiencia</div>
                    <div class="col-12 col-md-6 col-lg-3 resumen-item">+1500 eventos</div>
                    <div class="col-12 col-md-6 col-lg-3 resumen-item">Top Regional 10</div>
                </div>
            </div>
        </section>
    )
};

export default Nosotros;
