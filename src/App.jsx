import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Badges from './components/Badges'
import SearchBar from './components/Searchbar'
import Offers from './components/Offers '
import FeaturedProducts from './components/FeaturedProducts'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import 'aos/dist/aos.css'; // Importar CSS de AOS
import AOS from 'aos'; // Importar AOS
import BusinessPromo from './components/BusinessPromo'
import { productsoffers } from './components/Productoffers'
AOS.init(); // Inicializar AOS

import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
  
  return (
    <>
    <span id='top'></span>
     <Navbar />
     <main className='px-5 xl:px-20'>
     <SearchBar />

     <div className=' flex flex-col gap-5  my-5 mt-28 justify-around  z-0 sm:flex-row' >
     <HeroSection />
    <BusinessPromo />
     <Badges />
     </div>

     <Offers  products={productsoffers}  />
     <FeaturedProducts />
     <Testimonials />
     </main>
     <Footer />
    </>
  )
}

export default App
