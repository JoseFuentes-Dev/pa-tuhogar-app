import './servicescard.css'
const Services = () => {
    return (
        <div className="services-container px-5 mt-5 flex flex-col items-center">
            <h1 className="text-5xl text-bold text-center"> 📢Servicios de Publicidad</h1>
            <p className="mt-5 text-center text-[1.1em]">
                "En Pa'tu hogar, ofrecemos servicios de publicidad para ayudar a los negocios a aumentar su visibilidad. A continuación, encontrarás nuestros planes de publicación mensual"
            </p>
 


            <div className="services-grid flex xl:flex-row  flex-col my-5  gap-5">
                {/* Tarjeta 1 */}
                <div className="service-card   w-full h-[400px] sm:h-[250px] xl:h-[320px] ">
                    <h2  className='text-[3em] '>Plan Básico</h2>
                    <p className='desc md:text-[1.1em] text-[1.4em]  xl:text-[1.4em] '>Publica 5 productos durante todo el mes.</p>
                    <p className='price'>Precio: 1000 CUP/Mes</p>
                </div>

                {/* Tarjeta 2 */}
                <div className="service-card   w-full h-[400px] sm:h-[250px] xl:h-[320px] ">
                    <h2 className='text-[3em]'>Plan Avanzado</h2>
                    <p className='desc md:text-[1.1em] text-[1.4em]  xl:text-[1.4em]'>Publica 10 productos y 1 producto en la seccion de ofertas.</p>
                    <p className='price'>Precio: 2000 CUP/Mes</p>
                </div>

                {/* Tarjeta 3 */}
                <div className="service-card w-full h-[400px] sm:h-[250px] xl:h-[320px] ">
                    <h2 className='text-[3em]'>Plan Premium</h2>
                    <p className='desc  md:text-[1.1em] text-[1.4em] xl:text-[1.4em]'>Publica 10 productos ,  1 producto en la seccion de ofertas y 2 productos en la seccion de destacados.</p>
                    <p className='price'>Precio: 3000 CUP/Mes</p>
                </div>
            </div>


            <p className='text-[1.2em] text-center my-5'>
                Todos nuestros planes están diseñados para maximizar la exposición de tus productos en nuestra plataforma. Contáctanos para más detalles y para comenzar a publicitar tus productos <strong>Hoy mismo!</strong> 
            </p>
        </div>
    );
};

export default Services;
