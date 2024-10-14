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

     <div className=' flex flex-col items-center md:items-start  my-5 mt-12  z-0 md:flex-row  w-full gap-5  '  >
     <HeroSection />
     <section className='flex flex-col md:h-[650px]  gap-5 z-0 w-full md:w-1/3' >

    <BusinessPromo />
     <Badges />
     </section>

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
