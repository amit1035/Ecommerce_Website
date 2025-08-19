import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Category from './components/Category/Category';
import Contact from './components/Pages/Contact';
import Login from './components/Login/Login';
import Banner from './components/Banner/Banner';
import Features from './components/Features/Features';
import About from './components/Pages/About';
import Privacy from './components/Pages/Privacy';
import PlaceOrder from './components/Pages/PlaceOrder';
import CategoryDetail from './components/CategoryDetail/CategoryDetail';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/Context/CartContext';
import Otp from './components/Login/otp';
import CompleteLogin from './components/Login/CompleteLogin';
import Logout from './components/Login/profile_details/logout';
import ProductDetail from './components/product/product_Details';
import CategoryPage from './components/Banner/CategoryPage';

const Home = () => (
  <div>
    <Category />
    <Features />
    <Banner />
  </div>
);

const App = () => (
  <Router>
    <CartProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/category/:name" element={<CategoryDetail />} />
          <Route path="/category-page/:categoryName" element={<CategoryPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/complete-login" element={<CompleteLogin />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  </Router>
);

export default App;
