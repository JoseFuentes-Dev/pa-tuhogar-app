const Services = () => {
    return (
        <div className="services-container">
            <h1>Servicios de Publicidad</h1>
            <p>
                En Pa'tu hogar, ofrecemos servicios de publicidad para ayudar a los negocios a aumentar su visibilidad. A continuación, encontrarás nuestros planes de publicación mensual:
            </p>

            <div className="services-grid">
                {/* Tarjeta 1 */}
                <div className="service-card">
                    <h2>Plan Básico</h2>
                    <p>Publica 5 productos durante todo el mes.</p>
                    <p><strong>Precio: 1,000 CUP</strong></p>
                </div>

                {/* Tarjeta 2 */}
                <div className="service-card">
                    <h2>Plan Avanzado</h2>
                    <p>Publica 10 productos y 1 producto en oferta.</p>
                    <p><strong>Precio: 3,000 CUP</strong></p>
                </div>

                {/* Tarjeta 3 */}
                <div className="service-card">
                    <h2>Plan Premium</h2>
                    <p>Publica 10 productos y 2 productos en oferta.</p>
                    <p><strong>Precio: 4,000 CUP</strong></p>
                </div>
            </div>

            <p>
                Todos nuestros planes están diseñados para maximizar la exposición de tus productos en nuestra plataforma. Contáctanos para más detalles y para comenzar a publicitar tus productos hoy mismo.
            </p>
        </div>
    );
};

export default Services;
