import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

const seasons = [
  {
    name: 'Spring 2026',
    trips: [
      { destination: 'Tokyo, Japan', note: 'Cherry blossoms, and as many neighbourhoods as the JR pass allows.' },
      { destination: 'Amsterdam, Netherlands', note: 'Tulip season, seen from a canal boat.' },
    ],
  },
  {
    name: 'Summer 2026',
    trips: [
      { destination: 'Santorini, Greece', note: 'Beach, then a sunset I have been warned about.' },
      { destination: 'Banff, Canada', note: 'Hiking, and hopefully something with antlers.' },
    ],
  },
  {
    name: 'Fall 2026',
    trips: [
      { destination: 'New England, USA', note: 'A road trip timed entirely around the leaves.' },
      { destination: 'Tuscany, Italy', note: 'Wine, countryside, no itinerary.' },
    ],
  },
  {
    name: 'Winter 2027',
    trips: [
      { destination: 'Lapland, Finland', note: 'Northern lights and a husky sled.' },
      { destination: 'Queenstown, New Zealand', note: 'Skiing, and whatever they talk me into.' },
    ],
  },
];

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
        <Typography sx={{ mt: 3, color: 'var(--haze)', maxWidth: '48ch', fontSize: '1.125rem' }}>
          Eight places I keep opening flight tabs for. Nothing here has photographs on it — that's
          the whole point.
        </Typography>

        <Box sx={{ mt: { xs: 7, md: 10 } }}>
          {seasons.map((season, index) => (
            <Box
              key={season.name}
              component={motion.section}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: Math.min(index, 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '0.5fr 1fr' },
                gap: { xs: 2, md: 6 },
                py: { xs: 4, md: 5 },
                borderTop: '1px solid var(--ink-line)',
              }}
            >
              <Typography variant="h3" component="h2" sx={{ color: 'var(--coral)' }}>
                {season.name}
              </Typography>

              <Box>
                {season.trips.map((trip) => (
                  <Box
                    key={trip.destination}
                    sx={{
                      mb: 3,
                      '&:last-child': { mb: 0 },
                      pl: 3,
                      borderLeft: '2px solid var(--ink-line)',
                      transition: 'border-color 0.3s ease, padding-left 0.3s ease',
                      '&:hover': { borderColor: 'var(--coral)', pl: 3.5 },
                    }}
                  >
                    <Typography variant="h5" component="h3" sx={{ mb: 0.5 }}>
                      {trip.destination}
                    </Typography>
                    <Typography sx={{ color: 'var(--haze)', maxWidth: '52ch' }}>{trip.note}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
      <Footer />
    </Layout>
  );
};

export default FutureTrips;
