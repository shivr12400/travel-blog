// pages/_app.js

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import theme from '../styles/theme';
import Intro from '../components/Intro';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <CssBaseline />
      <Intro />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
