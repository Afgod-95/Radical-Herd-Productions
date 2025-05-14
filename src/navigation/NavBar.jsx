import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Logo from '../assets/Radical_Logo.png';
import { navCol } from '../../utils/constant/Colors';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import CustomDrawer from '../components/CustomDrawer';

const NavBar = ({ children }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTabletOrLaptop = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1440px)' });
  const [isToggled, setIsToggled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Add shadow on scroll
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleShadow = () => {
        const nav = document.querySelector('nav');
        if (nav) {
          if (window.scrollY > 100) {
            nav.style.boxShadow = '0px 2px 10px rgba(0,0,0,0.2)';
          } else {
            nav.style.boxShadow = 'none';
          }
        }
      };
      window.addEventListener('scroll', handleShadow);
      return () => window.removeEventListener('scroll', handleShadow);
    }
  }, []);

  // Highlight active section
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sectionIds = ['home', 'portfolio', 'about', 'request-a-quote'];

      const handleScroll = () => {
        const scrollPosition = window.scrollY + 150;
        for (let id of sectionIds) {
          const section = document.getElementById(id);
          if (section) {
            const offsetTop = section.offsetTop;
            const offsetHeight = section.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(id);
              break;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleDrawer = () => setIsToggled(!isToggled);

  const scrollToID = (id) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div>
      <nav
        style={{
          backgroundColor: navCol,
          color: '#fff',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 100,
          boxSizing: 'border-box',
          width: '100%',
          height: isMobile ? 60 : 120,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            justifyItems: 'center',
            width: isMobile ? '90%' : '80%',
            height: isMobile ? 60 : 120,
            margin: 'auto',
          }}
        >
          <div
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <img
              src={Logo}
              alt="Radical Herd Logo"
              style={{
                width: isMobile ? 50 : 100,
                height: isMobile ? 50 : 100,
                cursor: 'pointer',
              }}
            />
          </div>

          {/* Nav Links */}
          {isMobile ? (
            <div
              onClick={toggleDrawer}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                gap: '.5rem',
                cursor: 'pointer',
              }}
            >
              <motion.div
                style={{
                  width: '30px',
                  height: '3px',
                  background: '#fff',
                  borderRadius: '2px',
                }}
                animate={{
                  rotate: isToggled ? 45 : 0,
                  y: isToggled ? 5 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                style={{
                  width: '30px',
                  height: '3px',
                  background: '#fff',
                  borderRadius: '2px',
                }}
                animate={{
                  rotate: isToggled ? -45 : 0,
                  y: isToggled ? -5 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'right',
                gap: isTabletOrLaptop ? '1.8rem' : '3rem',
                width: isTabletOrLaptop ? '80%' : '50%',
                alignItems: 'center',
                color: 'white',
                textTransform: 'uppercase',
              }}
            >
              {['home', 'portfolio', 'about', 'request-a-quote'].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`links ${activeSection === id ? 'active-link' : ''}`}
                  onClick={() => scrollToID(id)}
                >
                  <p style={{ fontFamily: 'Roboto' }}>{id.replace(/-/g, ' ')}</p>
                </a>
              ))}
            </div>
          )}
        </div>

        {isMobile && <CustomDrawer open={isToggled} setOpen={setIsToggled} />}
      </nav>

      <div>{children}</div>
    </div>
  );
};

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavBar;
