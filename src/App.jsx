
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Badges from './components/Badges'
import SearchBar from './components/Searchbar'
import Offers from './components/Offers '

//Productos
import cafeteraImg from './assets/images/Productos/cafetera.jpg';
import ventiladorimg from './assets/images/Productos/ventiladordemesarecargable.jpg';
import colchonimg from './assets/images/Productos/colchon.jpg';
import ollaarroceraImg from './assets/images/Productos/ollaarrocera1.8litros.jpg';
import turbinaImg from './assets/images/Productos/turbina.jpg';
import split1tImg from './assets/images/Productos/split1t.jpg';
import reina8lImg from './assets/images/Productos/reina8litros.jpg';



function App() {
  const offerProducts = [
    { id: 1, name: 'Cafetera', description: 'Cafetera eléctrica', price: '$60', image: cafeteraImg },
    { id: 2, name: 'Ventilador Recargable', description: 'Ventilador Recargable', price: '$100', image: ventiladorimg },
    { id: 3, name: 'Colchón', description: 'Colchón de espuma', price: '$260', image: colchonimg },
    { id: 4, name: 'Olla arrocera 1.5 lt', description: 'Colchón de espuma', price: '$50', image: ollaarroceraImg},
    { id: 5, name: 'Turbina', description: 'Colchón de espuma', price: '$60', image: turbinaImg },
    { id: 6, name: 'Split 1t', description: 'Colchón de espuma', price: '$440', image: split1tImg },
    { id: 7, name: 'Olla Reina 8 lt', description: 'Colchón de espuma', price: '$95', image: reina8lImg },


];

  return (
    <>
     <Navbar />
     <SearchBar />
     <main className='px-20'>

     <div className=' flex flex-col gap-5 p-5 my-5 mt-5 justify-evenly z-0 sm:flex-row' >
     <HeroSection />
     <Badges />
     </div>
     <Offers  products={offerProducts}  />
     </main>
    </>
  )
}

export default App
