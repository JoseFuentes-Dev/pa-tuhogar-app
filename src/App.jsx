
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Badges from './components/Badges'
import SearchBar from './components/Searchbar'
import Offers from './components/Offers '
import FeaturedProducts from './components/FeaturedProducts'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

import ReactDOM from 'react-dom';
import 'aos/dist/aos.css'; // Importar CSS de AOS
import AOS from 'aos'; // Importar AOS

import { productsoffers } from './components/Productoffers'
AOS.init(); // Inicializar AOS

ReactDOM.render(<App />, document.getElementById('root'));



function App() {
  
  return (
    <>
    <span id='top'></span>
     <Navbar />
     <SearchBar />
     <main className='px-20'>

     <div className=' flex flex-col gap-5 p-5 my-5 mt-5 justify-evenly z-0 sm:flex-row' >
     <HeroSection />
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
