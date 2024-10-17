const About = () => {
    return (
        <div className="container-about flex justify-center">
        <div className="about-container bg-[#fff] mx-5 my-5 mb-10  p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
            <h1 className="text-4xl font-bold text-[#008DDA] mb-6 text-center">
                Acerca de Pa'tu hogar
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                En Pa'tu hogar, nos dedicamos a ofrecer una amplia variedad de electrodomésticos y artículos para el hogar que mejoran tu vida diaria. Fundada en 2024 en la hermosa provincia de Holguín, nuestra tienda ha crecido gracias a la confianza y apoyo de nuestros clientes.
            </p>

            <h2 className="text-3xl font-semibold text-[#008DDA] mb-4">Nuestra Misión</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Nuestra misión es proporcionar productos de alta calidad a precios accesibles, asegurando que cada hogar cuente con lo mejor para su bienestar.
            </p>

            <h2 className="text-3xl font-semibold text-[#008DDA] mb-4">Nuestros Valores</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 text-lg mb-6">
                <li><span className="font-semibold">Calidad:</span> Seleccionamos cuidadosamente cada producto para garantizar su durabilidad.</li>
                <li><span className="font-semibold">Atención al Cliente:</span> Tu satisfacción es nuestra prioridad. Estamos aquí para ayudarte en cada paso.</li>
                <li><span className="font-semibold">Sostenibilidad:</span> Nos esforzamos por reducir nuestro impacto ambiental a través de prácticas responsables.</li>
            </ul>

            <h2 className="text-3xl font-semibold text-[#008DDA] mb-4">Por qué elegirnos</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Lo que nos diferencia de otras tiendas es nuestra atención personalizada y el compromiso de crear una experiencia de compra única. Nos enorgullece conocer a nuestros clientes y ayudarles a encontrar lo que realmente necesitan.
            </p>

            <h2 className="text-3xl font-semibold text-[#008DDA] mb-4">Únete a nuestra comunidad</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
                Te invitamos a visitar nuestra tienda y descubrir la variedad de productos que tenemos para ofrecerte. ¡En Pa'tu hogar, cada compra es un paso hacia un hogar más feliz!
            </p>
        </div>
        </div>
    );
};

export default About;
