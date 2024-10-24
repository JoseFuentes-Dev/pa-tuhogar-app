import './servicescard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    const handleClick = (plan, description, price) => {
        const message = `Hola! Estoy interesado en el ${plan}. ${description}. Precio: ${price}.`;
        const whatsappUrl = `https://wa.me/5359014481?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="services-container px-5 mt-5 flex flex-col items-center">
            <h1 className="text-5xl  text-center text-[#008DDA]">   <FontAwesomeIcon icon={faBullhorn} className="text-[#FF0000] mr-2" /> Servicios de Publicidad</h1>
            <p className="mt-5 text-center text-[1.1em]">
                "En Pa'tu hogar, ofrecemos servicios de publicidad para ayudar a los negocios a aumentar su visibilidad. A continuación, encontrarás nuestros planes de publicación mensual"
            </p>

            <div className="services-grid flex xl:flex-row flex-col my-5 gap-5">
                {/* Tarjeta 1 */}
                <div 
                    className="service-card w-full h-[400px] sm:h-[250px] xl:h-[320px]"
                    onClick={() => handleClick('Plan Básico', 'Publica 5 productos durante todo el mes.', '1000 CUP/Mes')}
                >
                    <h2 className='text-[3em] bg-gradient-to-t from-white to-[#008DDA] text-transparent bg-clip-text'>Plan Básico</h2>
                    <p className='desc md:text-[1.1em] text-[1.4em] xl:text-[1.4em]'>Publica 5 productos durante todo el mes.</p>
                    <p className='price'>Precio: 1000 CUP/Mes</p>
                </div>

                {/* Tarjeta 2 */}
                <div 
                    className="service-card w-full h-[400px] sm:h-[250px] xl:h-[320px]"
                    onClick={() => handleClick('Plan Avanzado', 'Publica 10 productos y 1 producto en la sección de ofertas.', '2000 CUP/Mes')}
                >
                    <h2 className='text-[3em] bg-gradient-to-t from-white to-[#008DDA] text-transparent bg-clip-text'>Plan Avanzado</h2>
                    <p className='desc md:text-[1.1em] text-[1.4em] xl:text-[1.4em]'>Publica 10 productos y 1 producto en la sección de ofertas.</p>
                    <p className='price '>Precio: 2000 CUP/Mes</p>
                </div>

                {/* Tarjeta 3 */}
                <div 
                    className="service-card w-full h-[400px] sm:h-[250px] xl:h-[320px]"
                    onClick={() => handleClick('Plan Premium', 'Publica 10 productos, 1 producto en la sección de ofertas y 2 productos en la sección de destacados.', '3000 CUP/Mes')}
                >
                    <h2 className='text-[3em] bg-gradient-to-t from-white to-[#008DDA] text-transparent bg-clip-text'>Plan Premium</h2>
                    <p className='desc md:text-[1.1em] text-[1.4em] xl:text-[1.4em]'>Publica 10 productos, 1 producto en la sección de ofertas y 2 productos en la sección de destacados.</p>
                    <p className='price'>Precio: 3000 CUP/Mes</p>
                </div>
            </div>

            <p className='text-[1.2em] text-center my-5'>
                Todos nuestros planes están diseñados para maximizar la exposición de tus productos en nuestra plataforma. Contáctanos para más detalles y para comenzar a publicitar tus productos  <br /><strong>¡Hoy mismo!</strong>
            </p>
        </div>
    );
};

export default Services;
