import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './HomePage.module.css';
import Button from '../../components/atoms/Button';
import Image from '../../components/atoms/Image';
import { useUser } from '../../context/User.context';
import { isUserLoggedIn } from '../../services/auth.service';
import ContemplativeAthleisure from '../../static/assets/Contemplative Athleisure.jpg';
import ContemplativeFashionPortrait from '../../static/assets/Contemplative Fashion Portrait.jpg';
import VibrantAthleticWearCollection from '../../static/assets/Vibrant Athletic Wear Collection.jpg';

function HeroSection({ navigate }) {
  const handleNavigation = () => {
    if (isUserLoggedIn()) {
      navigate('/products');
    } else {
      navigate('/login');
    }
  };

  return (
    <section className={styles.heroSection}>
      <article className={styles.heroArticle}>
        <div className={styles.area}>
          <ul className={styles.circles}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Quick Shop</h1>
          <h2 className={styles.heroSubtitle}>
            Shop as you picking it from your wardrobe
          </h2>
          <Button
            onClick={handleNavigation}
            text="Check Products"
            size="medium"
          />
        </div>
      </article>
    </section>
  );
}

function GridSection({ navigate }) {
  return (
    <section className={styles.gridSection}>
      <div className={styles.gridContainer}>
        {/* Left hand side */}
        <div className={styles.leftSide}>
          <Image
            src={ContemplativeAthleisure}
            alt="Contemplative Athleisure"
            loading="lazy"
            width={250}
            className={`${styles.leftImage} ${styles.leftImageSmall}`}
          />
          <div className={styles.leftContent}>
            <div>
              <h1 className={styles.leftContentTitle}>Men&apos;s Collection</h1>
              <h2 className={styles.leftContentSubtitle}>Collection</h2>
              <p className={styles.leftContentText}>
                Explore our dynamic Men&apos; Collection, celebrating style and
                comfort.
              </p>
              <p className={styles.leftContentText}>
                Shop now and elevate your wardrobe with fashion-forward
                ensembles!
              </p>
            </div>
            <Button
              text="See Products"
              onClick={() => {
                navigate('/products?category=men%27s%20clothing');
              }}
              size="small"
            />
          </div>
        </div>

        {/* Right hand side */}
        <div className={styles.rightSide}>
          <div className={styles.box}>
            {/* Box 1 */}
            <div className={`${styles.box1}`}>
              <h2 className={styles.box1Title}>24 Items</h2>
              <h1 className={styles.box1Subtitle}>Bestsellers</h1>
            </div>
            {/* Box 2 */}
            <div className={styles.box2}>
              <Image
                src={VibrantAthleticWearCollection}
                alt="Vibrant Athletic Wear Collection"
                loading="lazy"
                fill
                className={styles.box2Image}
                width={270}
                height={150}
              />
              <div className={styles.box2Overlay}>
                <h1 className={styles.box2OverlayTitle}>New</h1>
                <h2 className={styles.box2OverlaySubtitle}>Collection</h2>
              </div>
            </div>
          </div>
          {/* Box 3 */}
          <div className={styles.box3}>
            <Image
              src={ContemplativeFashionPortrait}
              alt="Contemplative Fashion Portrait"
              loading="lazy"
              fill
              className={styles.box3Image}
              height={218}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const HomePage = () => {
  const navigate = useNavigate();
  const { updateUserStateFromStorage } = useUser();
  useEffect(() => {
    updateUserStateFromStorage();
  }, []);
  return (
    <>
      <HeroSection navigate={navigate} />
      <GridSection navigate={navigate} />
    </>
  );
};

export default HomePage;

HeroSection.propTypes = {
  navigate: PropTypes.func.isRequired,
};

GridSection.propTypes = {
  navigate: PropTypes.func.isRequired,
};
