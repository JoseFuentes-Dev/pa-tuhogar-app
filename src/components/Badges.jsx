
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'; // Importar Framer Motion

const Badges = () => {
  // Definición de variantes de animación
  const badgeVariants = {
    hidden: { opacity: 0, x: 50 }, // Desplazado a la derecha y oculto
    visible: { opacity: 1, x: 0 },  // Visible y en su posición original
  };

  return (
    <div className="z-0 flex-col bg-white rounded-[15px]  shadow-lg p-1 xl:p-2 space-y-2">
      {/* Badge 1 */}
      
      <motion.div
        className="flex items-center gap-4  p-1 xl:p-2 "
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        variants={badgeVariants}
      >
        <FontAwesomeIcon icon={faCheck} className="text-[#008DDA] transition-transform transform hover:scale-110 text-[40px] sm:text-[60px]" />
        <label className='flex flex-col text-left '>
          <span className="text-lg font-semibold">Calidad</span>
          <p className="text-sm text-gray-700">Productos seleccionados por su excelente calidad</p>
        </label>
      </motion.div>

      {/* Badge 2 */}
      <motion.div
        className="flex items-center gap-4  p-1 xl:p-2 "
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }} // Agregar un delay para la segunda badge
        variants={badgeVariants}
      >
        <FontAwesomeIcon icon={faCheck} className="text-[#008DDA] transition-transform transform hover:scale-110 text-[40px] sm:text-[60px]" />
        <label className='flex flex-col text-left'>
          <span className="text-lg font-semibold">Garantía</span>
          <p className="text-sm text-gray-700">Disfruta de la tranquilidad de la garantía de los productos</p>
        </label>
      </motion.div>

      {/* Badge 3 */}
      <motion.div
        className="flex items-center gap-4 p-1 xl:p-2"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }} // Agregar un delay para la tercera badge
        variants={badgeVariants}
      >
        <FontAwesomeIcon icon={faCheck} className="text-[#008DDA] transition-transform transform hover:scale-110 text-[40px] sm:text-[60px]" />
        <label className='flex flex-col text-left'>
          <span className="text-lg font-semibold">Domicilio</span>
          <p className="text-sm text-gray-700">Aprovecha las entregas rápidas y seguras a tu hogar</p>
        </label>
      </motion.div>
    </div>
  );
};

export default Badges;
