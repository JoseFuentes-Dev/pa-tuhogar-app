
import ventiladormilexus from '../assets/images/Productos/ventiladoresrecargablesmilexus.jpg';
import nevera7pies from '../assets/images/Productos/nevera7.5pies.jpg';
import turbina from '../assets/images/Productos/turbina.jpg';
import batidoratermo from '../assets/images/Productos/licuadora.jpg';
import lavadoraeko from '../assets/images/Productos/lavadoraautomatica.jpg';
import lavadoramilexus from '../assets/images/Productos/lavadorasemiautomatica.jpg';
import olladepresionlotus from '../assets/images/Productos/olladepresion7litros.jpg';
import olladepresioneko from '../assets/images/Productos/olladepresion6litros.jpg';
import olladepresionsaco from '../assets/images/Productos/olladepresion5litros.jpg';
import ollareinasaco from '../assets/images/Productos/reina.jpg';
import ollaarrocera from '../assets/images/Productos/ollaarrocera1.8litros.jpg';
import ciclondepared from '../assets/images/Productos/ciclondepared.jpg';
import tv32pulgadaskodak from '../assets/images/Productos/tv32pulgadaskodak.jpg';
import tv32rca from '../assets/images/Productos/tv32rca.jpg';
import tv43pulgadaskodak from '../assets/images/Productos/tv43pulgadaskodak.jpg';
import tv50pulgadas from '../assets/images/Productos/tv50pulgadas.jpg';
import split1t from '../assets/images/Productos/split1t.jpg';
import sandwishera from '../assets/images/Productos/sandwishera.jpg';
import motorinayamaki from '../assets/images/Productos/motorinayamaki.jpg';
import maquinaderefrigeracion from '../assets/images/Productos/maquinaderefrigeracion.jpg';
import planta1200W from '../assets/images/Productos/planta1200W.jpg';
import minibar3pies from '../assets/images/Productos/minibar3.1pies.jpg';
import refrigeradorroyal8pies from '../assets/images/Productos/refrigeradorroyal8.5pies.jpg';
import refrigeradorroyal19pies from '../assets/images/Productos/refrigerador19pies.jpg';
import refrigeradorroyal11pies from '../assets/images/Productos/refrigerador11pies.jpg';
import fogoninfrarrojo from '../assets/images/Productos/fogoninfrarojo.jpg';
import freidoradeaceite from '../assets/images/Productos/freidoradeaceite.jpg';
import equipodemusicalg from '../assets/images/Productos/equipodemusicalg.jpg';
import cafetera from '../assets/images/Productos/cafetera.jpg';
import colchon from '../assets/images/Productos/colchon.jpg';
import cajitahd from '../assets/images/Productos/cajitahd.jpg';
import calentadordeagua from '../assets/images/Productos/calentadordeagua.jpg';
import fogonelectrico from '../assets/images/Productos/fogonelectrico.jpg';



export const products = [
    { id: 1, name: 'Ventiladores Recargables', category: 'Climatización',  price: 91,
        image: ventiladormilexus, garantia: 'No cuenta con garantia', domicilio: '500 cup', description: 'Ventiladores recargables, Ventilador recargable, Marca Milexus de 16 pulgadas, Batería de litio , alumbran y traen puerto USB para cargar, colores: Blancos y Negros', inStock: true, },
    
    { id: 2, name: 'Neveras', category: 'Refrigeración',  price: 480,
            image: nevera7pies, garantia: '-', domicilio: 'Incluido', description: 'Neveras, tamaño: 7.5 pies, color: Blanco', inStock: false, },
    
    { id: 3, name: 'Turbina', category: 'Otros Equipos',  price: 60,
                image: turbina, garantia: '-', domicilio: '-', description: 'Turbina de 1/2 HP, color: Azul', inStock: false, },
    
    { id: 4, name: 'Licuadora + Termo', category: 'Para tu Cocina',  price: 70,
                    image: batidoratermo, garantia: '-', domicilio: '500', description: 'Batidoras + Termo, Licuadora con vaso de cristal, colores: Negro, Azul, Rojo', inStock: true, },
    
    { id: 5, name: 'Lavadora EKO', category: 'Otros Equipos',  price: 430,
                        image: lavadoraeko, garantia: '-', domicilio: 'Incluido', description: 'Lavadora EKO 9kg Automatica, color: blanco', inStock: false, },
    
    { id: 6, name: 'Lavadora Milexus', category: 'Otros Equipos',  price: 300,
                            image: lavadoramilexus, garantia: '-', domicilio: 'Incluido', description: 'Lavadora Semi-automática con secadora de 7kg, color: blanco', inStock: false, },
    
     { id: 7, name: 'Olla de Presión 7 litros', category: 'Para tu Cocina',  price: 70,
                                image: olladepresionlotus, garantia: '-', domicilio: '500', description: 'Olla de Presión de 3 Válvulas, marca: Lotus, capacidad: 7 litros', inStock: true, },
    
     { id: 8, name: 'Olla de Presión 6 litros', category: 'Para tu Cocina',  price: 65,
                                    image: olladepresioneko, garantia: '-', domicilio: '500', description: 'Olla de Presión 1 Valvula, marca: EKO, capacidad: 6 litros', inStock: true, },
    
     { id: 9, name: 'Olla de Presión 5 litros', category: 'Para tu Cocina',  price: 53,
                                        image: olladepresionsaco, garantia: '-', domicilio: '500', description: 'Olla de Presión de 3 Válvulas, marca: SACO, capacidad: 5 litros', inStock: false, },
    
     { id: 10, name: 'Olla Reina', category: 'Para tu Cocina',  price: 90,
                                            image: ollareinasaco, garantia: '-', domicilio: '500', description: 'Olla Reina, marca: SACO, capacidad: 7 litros, color: Negro', inStock: false, },
     
     { id: 11, name: 'Olla Arrocera', category: 'Para tu Cocina',  price: 50,
                                                image: ollaarrocera, garantia: '-', domicilio: '500', description: 'Olla arrocera, marca: EKO, capacidad: 1.8 litros, color: Blanco', inStock: false, },
   
    { id: 12, name: 'Televisor 32 pulgadas', category: 'TV & Equipos',  price: 190,
                                                    image: tv32rca, garantia: 'No cuenta con garantia', domicilio: 'No cuenta con domicilio', description: 'Smart TV, tamaño: 32 pulgadas, marca: RCA, de uso impecable', inStock: true, },
   
    { id: 13, name: 'Ventiladores Ciclones de Pared', category: 'Climatización',  price: 55,
                                                        image: ciclondepared, garantia: '-', domicilio: '500', description: 'Ventiladores Ciclones de Pared, ventilador ciclon, marca: Milexus, color: Negro', inStock: true, },
   
    { id: 14, name: 'Televisor 32 pulgadas', category: 'TV & Equipos',  price: 290,
                                                            image: tv32pulgadaskodak, garantia: '-', domicilio: '-', description: 'Smart TV, tamaño: 32 pulgadas, marca: KODAK', inStock: false, },
       
     { id: 15, name: 'Televisor 43 pulgadas', category: 'TV & Equipos',  price: 380,
                                                                image: tv43pulgadaskodak, garantia: '-', domicilio: '-', description: 'Smart TV, tamaño: 43 pulgadas, marca: KODAK', inStock: false, },
   
    { id: 16, name: 'Televisor 50 pulgadas', category: 'TV & Equipos',  price: 500,
                                                                    image: tv50pulgadas, garantia: '-', domicilio: '-', description: 'Smart TV, tamaño: 50 pulgadas, marca: EKO', inStock: false, },
      
    { id: 17, name: 'Split', category: 'Climatización',  price: 430,
                                                                        image: split1t, garantia: '-', domicilio: 'Incluido', description: 'Split 1 Tonelada, marca: Milexus', inStock: true, },
         
    { id: 18, name: 'Sandwisheras', category: 'Para tu Cocina',  price: 45,
                                                                            image: sandwishera, garantia: '-', domicilio: '500', description: 'Sandwisheras, marca:OSKA', inStock: false, },
                                                                           
  { id: 19, name: 'Motorina Yamaki', category: 'Transporte',  price: 2500,
                                                                                image: motorinayamaki, garantia: '-', domicilio: '-', description: 'Motorina Yamaki, Batería: 72v 35 Amp', inStock: false, },
    
 { id: 20, name: 'Maquina de Refrigeración', category: 'Refrigeración',  price: 140,
                                                                                image: maquinaderefrigeracion, garantia: '-', domicilio: '-', description: 'Maquina de frio y nevera, Maquina de Nevera, Maquina de Refrigerador', inStock: false, },
      
{ id: 21, name: 'Planta eléctrica ', category: 'Otros Equipos',  price: 450,
                                                                                    image: planta1200W, garantia: '-', domicilio: '-', description: 'Planta eléctrica, 1200W', inStock: true, },
        
{ id: 22, name: 'Mini Refrigerador 3.5 pies', category: 'Refrigeración',  price: 350,
                                                                                        image: minibar3pies, garantia: '-', domicilio: 'Incluido', description: 'Mini Frio, Mini bar, marca: Hisense, tamaño: 3.1 pies, color: Gris',inStock: true, },
           
 { id: 23, name: 'Refrigerador 8.5 pies', category: 'Refrigeración',  price: 700,
                                                                                            image: refrigeradorroyal8pies, garantia: '2 Meses', domicilio: 'Incluido', description: 'Frio, color: Gris, marca: Royal, tamaño: 8.5 pies', inStock: false,  },
 
{ id: 24, name: 'Refrigerador 19 pies', category: 'Refrigeración',  price: 1500,
                                                                image: refrigeradorroyal19pies, garantia: '2 Meses', domicilio: 'Incluido', description: 'frio con dispense, tamaño: 19 pies, color: Gris', inStock: true,  },

 { id: 25, name: 'Refrigerador 11 pies', category: 'Refrigeración',  price: 820,
                                                                    image: refrigeradorroyal11pies, garantia: '2 Meses', domicilio: 'Incluido', description: 'frio con dispense, marca: Royal, color: Gris, tamaño: 11 pies', inStock: true,  },
  
{ id: 26, name: 'Fogon Infrarrojo', category: 'Para tu Cocina',  price: 80,
                                                                        image: fogoninfrarrojo, garantia: 'NO', domicilio: '-', description: 'Fogon, marca: EKO, color: negro', inStock: true,  },
           
{ id: 27, name: 'Freidora de Aceite', category: 'Para tu Cocina',  price: 55,
                                                                            image: freidoradeaceite, garantia: '-', domicilio: 'NO', description: 'Freidora, marca: Royal, color: blanco', inStock: true,  },
  
 { id: 28, name: 'Equipo de Musica', category: 'TV & Equipos',  price: 240,
                                                                                image: equipodemusicalg, garantia: '-', domicilio: 'NO', description: 'Equipo , marca: LG, color: negro', inStock: true,  },
   
{ id: 29, name: 'Cafetera eléctrica', category: 'Para tu Cocina',  price: 60,
                                                                                    image: cafetera, garantia: '-', domicilio: 'NO', description: 'Cafetera, color: negro, capacidad: 6 tazas, marca: JMD', inStock: true,  },
    
 { id: 30, name: 'Colchones', category: 'Otros Equipos',  price: 260,
                                                                                        image: colchon, garantia: '-', domicilio: '-', description: 'Colchones , colchon ', inStock: true,  },
           
 { id: 31, name: 'Caja HD para TV', category: 'TV & Equipos',  price: 50,
                                                                                            image: cajitahd, garantia: '-', domicilio: '-', description: 'Cajita HD, marca: Atec, color: negro ', inStock: true,  },
    
 { id: 32, name: 'Calentadores de Agua', category: 'Otros Equipos',  price: 320,
                                                                                                image: calentadordeagua, garantia: '-', domicilio: '-', description: 'Calentador de Agua, marca EKO, color: blanco, capacidad: 50 litros ', inStock: false,  },
     
{ id: 33, name: 'Fogon eléctrico', category: 'Para tu Cocina',  price: 40,
                                                                                                    image: fogonelectrico, garantia: '-', domicilio: 'NO', description: 'Fogon eléctrico de 1 sola hornilla, marca: thulos, color: blanco ', inStock: false,  },
                     
];
