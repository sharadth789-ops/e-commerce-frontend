import Navbar from './components/Header/Navbar';
import Hero from './components/Hero/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Restaurants from './components/restaurants/Restaurants';
import Offers from './components/Offers/Offers';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import OrderForm from './pages/OrderForm';
import Checkout from './pages/Checkout/Checkout';
import TrackOrder from './components/TrackOrder/TrackOrder';

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero />
              <Restaurants />
              <Offers />
              <About />
              <Footer />
            </>
          }
        />

        <Route path="/menu" element={<Menu />} />

<Route path='/booking' element={<OrderForm/>}/>
<Route path='/checkout' element={<Checkout/>}/>
<Route path='/track-order' element={<TrackOrder/>}/>
      </Routes>

    </BrowserRouter>
  );
};

export default App;