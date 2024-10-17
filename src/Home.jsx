// Home.jsx
import HeroSection from './components/HeroSection';
import Badges from './components/Badges';
import Offers from './components/Offers';
import FeaturedProducts from './components/FeaturedProducts';
import Testimonials from './components/Testimonials';
import BusinessPromo from './components/BusinessPromo';
import SearchBar from './components/Searchbar';
import { productsoffers } from './components/Productoffers';
import { productsdestacados } from './components/Productdestacados';
import PropTypes from 'prop-types';

const Home = ({ handleAddToCart }) => {
    
  return (
    <main className='px-5 xl:px-20'>
         <SearchBar />
         <div className='flex flex-col items-center md:items-start mt-8 md:mt-20 z-0 md:flex-row w-full gap-5'>
          <HeroSection />
          <section className='flex flex-col md:h-[650px] gap-5 z-0 w-full md:w-1/3 md:pr-5 margin-0-auto'>
            <BusinessPromo />
            <Badges />
          </section>
        </div>
      
      <Offers products={productsoffers} onAddToCart={handleAddToCart} />
      <FeaturedProducts products={productsdestacados} onAddToCart={handleAddToCart} />
      <Testimonials />
    </main>
  );
};

Home.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
};

export default Home;
