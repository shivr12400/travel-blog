// pages/_app.js

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';
import { useState, useEffect } from 'react';
import PlaneAnimation from '../components/PlaneAnimation';


function MyApp({ Component, pageProps }) {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3000); // Match this to the animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showAnimation && <PlaneAnimation />}
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}

export default MyApp;