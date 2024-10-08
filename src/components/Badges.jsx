import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Badges = () => {
    return (
        <div className="z-0 flex-col flex  justify-around  ">

            <div className="flex items-center  gap-7 w-auto bg-white rounded-lg shadow-md  p-2 sm:p-5">
                <FontAwesomeIcon icon={faCheck} className=" text-[#008DDA] transition-transform transform hover:scale-110 text-[40px] sm:text-[80px]"  />
                <label className='flex flex-col text-left  '>
                <span className="sm:text-[1.8em] text-[1em] font-semibold">Calidad</span>
                <p className="sm:text-[.9em] text-[.7em]">Productos seleccionados por su excelente calidad.</p>
                </label>
            </div>

            <div className="flex items-center gap-7   w-auto   bg-white rounded-lg shadow-md p-2 sm:p-5">
                <FontAwesomeIcon icon={faCheck} className="text-[#008DDA] transition-transform transform hover:scale-110 text-[40px] sm:text-[80px]"  />
                <label className='flex flex-col text-left'>
                <span className="sm:text-[1.8em] text-[1em]   font-semibold">Garantía</span>
                 <p className="sm:text-[.9em] text-[.7em] ">Disfruta de la tranquilidad de la garantía de los productos</p>
                </label>
            </div>
            <div className="flex items-center gap-7 w-auto  bg-white rounded-lg shadow-md p-2 sm:p-5">
                <FontAwesomeIcon icon={faCheck} className="text-[#008DDA] transition-transform transform hover:scale-110 text-[40px] sm:text-[80px]" />
                <label className='flex flex-col text-left '>
                <span className="sm:text-[1.8em] text-[1em]  font-semibold">Domicilio</span>
                <p className=" sm:text-[.9em] text-[.7em]">Aprovecha las entregas rápidas y seguras a tu hogar</p>
                </label>
            </div>

        </div>
    );
};

export default Badges;
