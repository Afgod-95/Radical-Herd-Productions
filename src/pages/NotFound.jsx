
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navCol } from '../../utils/constant/Colors';

const NotFound = () => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: navCol,
      height: '100vh',
      textAlign: 'center',
      padding: '20px', // Added padding for smaller screens
    },
    content: {
      width: '90%', // Adjust width for responsiveness
      maxWidth: '500px',
      padding: '20px',
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '2rem', // Default font size
      margin: '0',
      color: '#000',
      wordBreak: 'break-word', // Prevent text overflow
    },
    message: {
      fontSize: '1.2rem',
      color: '#374151',
      margin: '20px 0',
    },
    link: {
      display: 'inline-block',
      padding: '10px 20px',
      fontSize: '1rem',
      backgroundColor: navCol,
      color: 'white',
      borderRadius: '5px',
      textDecoration: 'none',
      transition: 'background-color 0.3s ease',
    },
  };

  const responsiveStyles = {
    '@media (max-width: 768px)': {
      title: {
        fontSize: '1rem',
      },
      message: {
        fontSize: '1rem',
      },
      link: {
        padding: '8px 16px',
        fontSize: '0.9rem',
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={styles.container}
    >
      <motion.div
        initial={{ y: '-100vh', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 12,
          bounce: 0.5,
        }}
        style={{ ...styles.content, ...responsiveStyles }}
      >
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 12,
          }}
          style={{ ...styles.title, ...responsiveStyles.title }}
        >
          404 || This page can’t be reached
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 15,
            delay: 0.3,
          }}
          style={{ ...styles.message, ...responsiveStyles.message }}
        >
          Check whether there&apos;s a typo.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
            delay: 0.6,
          }}
        >
          <Link to="/" style={{ ...styles.link, ...responsiveStyles.link }}>
            Go Back Home
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
