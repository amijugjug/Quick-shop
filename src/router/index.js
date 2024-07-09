import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CategoryPage from '../pages/CategoryPage';
import ProfilePage from '../pages/ProfilePage';
import WishlistPage from '../pages/WishlistPage';
import CheckoutPage from '../pages/CheckoutPage';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/product/:id" Component={ProductPage} />
        <Route path="/category/:category" Component={CategoryPage} />
        <Route path="/profile" Component={ProfilePage} />
        <Route path="/wishlist" Component={WishlistPage} />
        <Route path="/checkout" Component={CheckoutPage} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
