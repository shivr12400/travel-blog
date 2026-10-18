import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

const FutureTrips = () => {
  const reduceMotion = useReducedMotion();

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ pt: { xs: 16, md: 22 }, pb: { xs: 8, md: 12 } }}>
        <Box sx={{ overflow: 'hidden', pb: '0.08em' }}>
          <Typography
            component={motion.h1}
            variant="h1"
            initial={reduceMotion ? false : { y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            sx={{ m: 0 }}
          >
            Not booked yet
          </Typography>
        </Box>
        <Box
          component={motion.section}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          sx={{
            mt: { xs: 7, md: 10 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '0.5fr 1fr' },
            gap: { xs: 2, md: 6 },
            py: { xs: 4, md: 5 },
            borderTop: '1px solid var(--ink-line)',
          }}
        >
          <Typography variant="h3" component="h2" sx={{ color: 'var(--accent)' }}>
            Winter 2027
          </Typography>
          <Box sx={{ pl: 3, borderLeft: '2px solid var(--ink-line)' }}>
            <Typography variant="h5" component="h3">
              Mumbai and Ahmedabad
            </Typography>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Layout>
  );
};

export default FutureTrips;
