import { Link } from 'react-router-dom';

import s from './Navbar.module.css';
import ShoppingCartOption from '../Header/ShoppingCartOption';
import UserAvatarOptions from '../Header/UserAvatarOptions';
import WishlistOption from '../Header/WishlistOption';

const Navbar = () => {
  return (
    <header className={s.navbar}>
      <h1
        className={s.titleText}
        style={{ cursor: 'pointer', marginLeft: '1rem' }}
      >
        <Link to="/">QuickShop</Link>
      </h1>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginRight: '1rem',
        }}
      >
        <WishlistOption />
        <ShoppingCartOption />
        <UserAvatarOptions />
      </div>
    </header>
  );
};

export default Navbar;
