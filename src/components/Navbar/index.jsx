import s from './Navbar.module.css';
import UserAvatarOptions from '../Header/UserAvatarOptions';
import { Link } from 'react-router-dom';
import ShoppingCartOption from '../Header/ShoppingCartOption';

const Navbar = () => {
  return (
    <header className={s.navbar}>
      <h1
        className={s.titleText}
        onClick={() => {}}
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
        <ShoppingCartOption />
        {/* <Image src={ShoppingCart} width={42} height={42} alt="Shopping Cart" /> */}
        <UserAvatarOptions />
      </div>
    </header>
  );
};

export default Navbar;
