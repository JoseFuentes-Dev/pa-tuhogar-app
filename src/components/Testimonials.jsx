import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';


const testimonials = [
  {
    id: 1,
    name: "Juan Pérez",
    location: "Holguín, Reparto Pedro Díaz Coello",
    comment: "¡Increíbles productos! La calidad es excepcional y el servicio al cliente es excelente.",
    rating: 5,
  },
  {
    id: 2,
    name: "María Gómez",
    location: "Holguín, Reparto Alcides Pino",
    comment: "Me encantan mis nuevos electrodomésticos. Son muy eficientes y fáciles de usar.",
    rating: 4,
  },
  {
    id: 3,
    name: "Carlos Martínez",
    location: "Holguín, Reparto Lenin",
    comment: "Recomiendo esta tienda a todos mis amigos. ¡Los precios son inmejorables!",
    rating: 5,
  },
  {
    id: 4,
    name: "Raquel Domínguez",
    location: "Holguín, Reparto Pueblo Nuevo",
    comment: "Gran variedad de productos y excelente atención al cliente.",
    rating: 5,
  },
  {
    id: 5,
    name: "Andrés Rodríguez",
    location: "Holguín, Reparto La Quinta",
    comment: "Rápido, confiable y productos de muy buena calidad. ¡Lo recomiendo sin duda!",
    rating: 4,
  },
];


const TestimonialsCarousel = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false, 
    
  };

  return (
    <div className="my-10 flex flex-col mt-20">
     <h2 className="text-[2em]  font-bold mb-8 text-[#008DDA] underline decoration-[#ACE2E1]">Lo que dicen nuestros clientes</h2>
      <div className='flex justify-center my-12'>

      <Slider {...settings}
       className='w-[340px] sm:w-[500px] md:w-[700px] '>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-lg shadow-md p-5 h-[170px]"
            data-aos="fade-up"
            >
            <p className="font-semibold text-xl">{testimonial.name}</p>
            <p className="text-sm text-gray-600">{testimonial.location}</p>
            <p className="mt-4 text-lg italic">"{testimonial.comment}"</p>
            
          </div>
        ))}
      </Slider>
        </div>
    </div>
  );
};

export default TestimonialsCarousel;
