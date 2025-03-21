import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import BlogPage from './pages/Blog';
import ShopPage from './pages/Shop';
import ContactSection from './pages/Contact';
// import Registration from './pages/Registration';
// import List from './pages/List';
import Login from './pages/Login';
import CartSection from './pages/cart';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import UploadProducts from './pages/Uploadproducts';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/Registration" element={<Registration />} />
        <Route path="/List" element={<List />} /> */}
        <Route path="/ShopPage" element={<ShopPage />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/ContactSection" element={<ContactSection />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/cart/:id" element={<CartSection />} />

        <Route path="/UploadProducts" element={<UploadProducts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
