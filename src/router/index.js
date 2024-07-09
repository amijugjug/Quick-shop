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
        <Route exact path="/" component={HomePage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/category/:category" component={CategoryPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/wishlist" component={WishlistPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
