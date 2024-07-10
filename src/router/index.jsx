import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import ProfilePage from '../pages/ProfilePage';
import WishlistPage from '../pages/WishlistPage';
import CheckoutPage from '../pages/CheckoutPage';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import ProductDetailPage from '../pages/ProductDetailPage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/products" Component={ProductPage} />
        <Route path="/products/:id" Component={ProductDetailPage} />
        <Route path="/profile/:username" Component={ProfilePage} />
        <Route path="/wishlist" Component={WishlistPage} />
        <Route path="/checkout" Component={CheckoutPage} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
