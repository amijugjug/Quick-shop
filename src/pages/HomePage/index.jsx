import Image from '../../components/atoms/Image';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button';
import PropTypes from 'prop-types';

import ModernChicWardrobewithIndustrialFlair from '../../static/assets/Modern Chic Wardrobe with Industrial Flair.jpg';
import UrbanSophisticate from '../../static/assets/Urban Sophisticate.jpg';
import ContemplativeAthleisure from '../../static/assets/Contemplative Athleisure.jpg';
import VibrantAthleticWearCollection from '../../static/assets/Vibrant Athletic Wear Collection.jpg';
import ContemplativeFashionPortrait from '../../static/assets/Contemplative Fashion Portrait.jpg';
import { useEffect } from 'react';
import { getCookie } from '../../services/helpers/storageHelpers/cookie.helper';
import { getUserFromLS } from '../../services/auth.service';
import { useUser } from '../../context/User.context';

function HeroSection({ navigate }) {
  return (
    <section
      style={{
        display: 'block',
        overflowX: 'hidden',
        '@media (minWidth: 768px)': { height: '45hv' },
        '@media (minWidth: 1024px)': { height: '55hv' },
        '@media (minWidth: 1280px)': { height: '70vh' },
      }}
    >
      <article
        style={{
          display: 'flex',
          width: 'auto',
          maxWidth: '100%',
          height: 'auto',
          maxHeight: '100%',
          position: 'relative',
        }}
      >
        <Image
          loading="eager"
          width={1400}
          height={500}
          priority={true}
          src={ModernChicWardrobewithIndustrialFlair}
          alt="Modern Chic Wardrobe with Industrial Flair"
        />
        <Image
          loading="eager"
          width={600}
          height={500}
          priority={true}
          src={UrbanSophisticate}
          alt="Urban Sophisticate"
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        >
          <h1
            style={{
              fontSize: '8rem',
              lineHeight: '2.25rem',
              fontWeight: '900',
              color: 'white',
              backgroundClip: 'text',
              backgroundImage:
                'linear-gradient(to right, var(--tw-gradient-stops))',
              textShadow: '2px 2px #ff0000',
            }}
          >
            Quick Shop
          </h1>

          <h2
            style={{
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              paddingLeft: '2rem',
              paddingRight: '2rem',
              borderRadius: '0.125rem',
              fontSize: '2rem',
              lineHeight: '1.5rem',
              fontWeight: 700,
              color: 'white',
              '@media (minWidth: 1024px)': {
                paddingLeft: '6rem',
                paddingRight: '6rem',
              },
            }}
          >
            Shop as you picking it from your wardrobe
          </h2>
          <Button
            onClick={() => navigate('/products')}
            text="Check Products"
            size="small"
          />
        </div>
      </article>
    </section>
  );
}

function GridSection({ navigate }) {
  return (
    <section
      // className={s.gridContainerSection}
      style={{
        padding: '1rem',
        flex: '1 1 auto',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'space-between',
          margin: '20px',
        }}
      >
        {/*  left hand side */}

        <div
          style={{
            display: 'flex',
            overflow: 'hidden',
            flexDirection: 'row',
            gap: '1rem',
            alignContent: 'space-between',
            border: '1px solid black',
            borderRadius: '0.5rem',
            borderWidth: '2px',
            width: '50%',
          }}
        >
          <Image
            src={ContemplativeAthleisure}
            alt="Contemplative Athleisure"
            loading="lazy"
            width={250}
            className="w-36 transition-all sm:w-52 md:w-64"
            style={{
              width: '250px',
              transitionProperty: 'all',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDuration: '300ms',
              '@media (minWidth: 640px)': { width: '13rem' },
              '@media (minWidth: 768px)': {},
            }}
          />
          <div
            style={{
              padding: '1rem',
              flexDirection: 'column',
              flex: '1 1 auto',
              gap: '0.5rem',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              '@media (minWidth: 768px)': {},
            }}
          >
            <div>
              <h1
                style={{
                  fontWeight: 700,
                  '@media (minWidth: 640px)': {
                    fontSize: '1.5rem',
                    lineHeight: '2rem',
                  },
                  '@media (minWidth: 768px)': {},
                }}
              >
                Men&apos;s Collection
              </h1>
              <h2
                style={{
                  fontWeight: 600,
                  '@media (minWidth: 640px)': {
                    fontSize: '1.125rem',
                    lineHeight: '1.75rem',
                  },
                  '@media (minWidth: 768px)': {},
                }}
              >
                Collection
              </h2>
              <p
                style={{
                  fontSize: '0.75rem',
                  lineHeight: '1rem',
                  '@media (minWidth: 640px)': {
                    fontSize: '1rem',
                    lineHeight: '1.5rem',
                  },
                }}
              >
                Explore our dynamic Men&apos; Collection, celebrating style and
                comfort.
              </p>
              <p
                style={{
                  fontSize: '0.75rem',
                  lineHeight: '1rem',
                  '@media (minWidth: 640px)': {},
                }}
              >
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
        {/* right hand side */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '50%',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              borderRadius: '0.5rem',
              width: '100%',
            }}
          >
            {/* box1 */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                flex: '1 1 auto',
                borderRadius: '0.5rem',
                width: '100%',
                background: 'pink',
                padding: '40px 0 0 40px',
              }}
            >
              <h2
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                  fontWeight: 600,
                  color: '#000000',
                  margin: 0,
                }}
              >
                24 Items
              </h2>
              <h1
                style={{
                  fontWeight: 700,
                  fontSize: '34px',
                  color: '#000000',
                  margin: 0,
                  '@media (minWidth: 640px)': {},
                }}
              >
                Bestsellers
              </h1>
            </div>
            {/* box2 */}
            <div
              style={{
                borderRadius: '0.5rem',
                width: '50%',
                position: 'relative',
              }}
            >
              <Image
                src={VibrantAthleticWearCollection}
                alt="Vibrant Athletic Wear Collection"
                loading="lazy"
                fill // stretches the img to fit the container
                style={{
                  borderRadius: '0.5rem',
                  objectFit: 'cover ',
                  width: '100%',
                }}
                width={270}
                height={150}
              />
              <div style={{ position: 'absolute', top: '0px' }}>
                <h1
                  style={{
                    display: 'inline-flex',
                    paddingTop: '0.25rem',
                    paddingBottom: '0.25rem',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    marginLeft: '1rem',
                    marginTop: '4rem',
                    borderRadius: '0.25rem',
                    fontSize: '1.125rem',
                    lineHeight: '1.75rem',
                    fontWeight: 700,
                    backgroundColor: 'rgb(255,255,255,0.3)',
                    color: '#fff',
                  }}
                >
                  New
                </h1>
                <h2
                  style={{
                    margin: '0rem',
                    marginLeft: '1rem',
                    fontSize: '1.25rem',
                    lineHeight: '1.75rem',
                    fontWeight: 600,
                    color: '#fff',
                  }}
                >
                  Collection
                </h2>
              </div>
            </div>
          </div>
          {/* box3 */}
          <div
            style={{
              gridColumn: 'span 2 / span 2',
              borderRadius: '0.5rem',
              width: '100%',
              minHeight: 'min-content',
            }}
          >
            <Image
              src={ContemplativeFashionPortrait}
              alt="Contemplative Fashion Portrait"
              loading="lazy"
              fill // stretches the img to fit the container
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: '0.5rem',
                width: '100%',
              }}
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
  const { setUser } = useUser();

  useEffect(() => {
    if (getCookie('token')) {
      const decryptedUserName = getCookie('token');
      const user = getUserFromLS(decryptedUserName);
      if (user) {
        setUser(user);
      }
    }
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
