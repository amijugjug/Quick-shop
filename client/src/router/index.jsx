import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import ErrorBoundary from '../components/ErrorBoundary';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CheckoutPage from '../pages/CheckoutPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFound';
import ProductDetailPage from '../pages/ProductDetailPage';
import ProductPage from '../pages/ProductPage';
import ProfilePage from '../pages/ProfilePage';
import WishlistPage from '../pages/WishlistPage';

const AppRouter = () => {
  return (
    <Router>
      <ErrorBoundary>
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
          <Route path="*" Component={NotFoundPage} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </Router>
  );
};

export default AppRouter;
