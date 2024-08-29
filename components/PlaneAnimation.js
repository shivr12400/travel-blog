import React, { useEffect, useState } from 'react';
import styles from '../styles/PlaneAnimation.module.css';
import { Typography } from '@mui/material';

const PlaneAnimation = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000); // Match this to the animation duration

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className={styles.planeAnimation}>
        <Typography variant="h2" component="h1" 
              sx={{ textAlign: 'center', color: 'white', mb: 4, textShadow: '2px 2px 4px rgba(0,0,0,0.5)', paddingTop: '250px' }}>
              Welcome
            </Typography>
      <div className={styles.plane}>✈️</div>
      <div className={styles.trail}></div>
    </div>
  );
};

export default PlaneAnimation;