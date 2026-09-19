import React, { useMemo, useState } from 'react';
import { Box, Container, Typography, InputBase } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { trips } from '../trips';
import { data } from '../tripData';
import { toPhotos } from '../tripUtils';

const photoCount = (key) => toPhotos(data[key] || []).length;

const TripRow = ({ trip, index, reduceMotion }) => (
  <Box
    component={motion.div}
    initial={reduceMotion ? false : { opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, delay: Math.min(index, 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
  >
    <Box
      component={Link}
      href={trip.href}
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1.1fr 1fr' },
        gap: { xs: 2.5, md: 6 },
        alignItems: 'center',
        py: { xs: 4, md: 6 },
        borderTop: '1px solid var(--ink-line)',
        '&:hover .trip-cover img': { transform: 'scale(1.06)' },
        '&:hover .trip-title': { color: 'var(--coral)' },
      }}
    >
      <Box
        className="trip-cover"
        sx={{
          order: { xs: 1, md: index % 2 ? 2 : 1 },
          overflow: 'hidden',
          borderRadius: '3px',
          aspectRatio: '16 / 10',
          bgcolor: 'var(--ink-raised)',
        }}
      >
        <Box
          component="img"
          src={trip.cover}
          alt={`${trip.title}, ${trip.dates}`}
          loading="lazy"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      </Box>

      <Box sx={{ order: { xs: 2, md: index % 2 ? 1 : 2 } }}>
        <Typography sx={{ color: 'var(--coral)', fontWeight: 600, fontSize: '0.9375rem', mb: 1 }}>
          {trip.dates}
        </Typography>
        <Typography
          variant="h2"
          className="trip-title"
          sx={{ transition: 'color 0.3s ease', mb: 0.5 }}
        >
          {trip.title}
        </Typography>
        <Typography sx={{ color: 'var(--haze)', fontSize: '1.0625rem', mb: 2 }}>
          {trip.region}
        </Typography>
        <Typography sx={{ maxWidth: '44ch', color: 'rgba(255,255,255,0.78)', mb: 2.5 }}>
          {trip.blurb}
        </Typography>
        <Typography sx={{ color: 'var(--haze)', fontSize: '0.875rem' }}>
          {photoCount(trip.dataKey)} photographs, {trip.travelers.filter(Boolean).length} of us
        </Typography>
      </Box>
    </Box>
  </Box>
);

const PastTrips = () => {
  const [query, setQuery] = useState('');
  const reduceMotion = useReducedMotion();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return trips;
    return trips.filter((t) =>
      [t.title, t.region, t.blurb, t.dates].join(' ').toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ pt: { xs: 16, md: 22 }, pb: { xs: 8, md: 12 } }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            mb: { xs: 5, md: 8 },
          }}
        >
          <Box>
            <Typography variant="h1" sx={{ mb: 2 }}>
              Every trip
            </Typography>
            <Typography sx={{ color: 'var(--haze)', maxWidth: '44ch', fontSize: '1.125rem' }}>
              Open one and the photographs are all that's there. Click any of them to read what
              happened that day.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid var(--ink-line)',
              pb: 1,
              minWidth: { xs: '100%', sm: 280 },
              transition: 'border-color 0.25s ease',
              '&:focus-within': { borderColor: 'var(--coral)' },
            }}
          >
            <InputBase
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search trips"
              inputProps={{ 'aria-label': 'Search trips' }}
              sx={{ width: '100%', color: 'var(--paper)', fontSize: '1rem' }}
            />
          </Box>
        </Box>

        {results.map((trip, index) => (
          <TripRow key={trip.id} trip={trip} index={index} reduceMotion={reduceMotion} />
        ))}

        {results.length === 0 && (
          <Box sx={{ py: 10, borderTop: '1px solid var(--ink-line)' }}>
            <Typography variant="h4" sx={{ mb: 1 }}>
              Nothing matches “{query}”
            </Typography>
            <Typography sx={{ color: 'var(--haze)' }}>
              Try a place, a year, or clear the search to see all {trips.length} trips.
            </Typography>
          </Box>
        )}
      </Container>
      <Footer />
    </Layout>
  );
};

export default PastTrips;
