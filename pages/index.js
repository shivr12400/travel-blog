import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FlipPrint from '../components/FlipPrint';
import { trips } from '../trips';

// The print in the hero: the whole idea of the site in one object.
const heroPrint = {
  image: '/images/irelandScotland/moherCliffs.JPG',
  location: 'Cliffs of Moher',
  date: 'Jun 16, 2024',
  note:
    'Another 6am morning. Slept the whole bus ride and woke up to half of Ireland already standing on the edge. Walked both sides of the cliffs in wind that took the hood right off my head.',
};

const Home = () => {
  const reduceMotion = useReducedMotion();
  const recent = trips.slice(0, 2);

  const rise = (delay) =>
    reduceMotion
      ? {}
      : {
          initial: { y: '110%' },
          animate: { y: 0 },
          transition: { duration: 0.95, delay, ease: [0.16, 1, 0.3, 1] },
        };

  return (
    <Box sx={{ bgcolor: 'var(--ink)' }}>
      <Navbar />

      <Container maxWidth="lg" component="section">
        <Box
          sx={{
            minHeight: { md: '92vh' },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 0.85fr' },
            alignItems: 'center',
            gap: { xs: 6, md: 8 },
            pt: { xs: 14, md: 12 },
            pb: { xs: 8, md: 10 },
          }}
        >
          <Box>
            <Box sx={{ overflow: 'hidden', pb: '0.08em' }}>
              <Typography component={motion.h1} variant="h1" {...rise(0.1)} sx={{ m: 0 }}>
                Turn it
              </Typography>
            </Box>
            <Box sx={{ overflow: 'hidden', pb: '0.08em' }}>
              <Typography
                component={motion.h1}
                variant="h1"
                {...rise(0.22)}
                sx={{ m: 0, color: 'var(--coral)' }}
              >
                over
              </Typography>
            </Box>

            <Box sx={{ overflow: 'hidden', mt: 3 }}>
              <Typography
                component={motion.p}
                {...rise(0.4)}
                sx={{ m: 0, maxWidth: '40ch', fontSize: '1.1875rem', color: 'rgba(255,255,255,0.78)' }}
              >
                Photographs from everywhere I've been, with the story of each one written on the
                back. Pick a trip, then start flipping.
              </Typography>
            </Box>

            <Box
              component={motion.div}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              sx={{ mt: 5, display: 'flex', gap: 3, alignItems: 'center', flexWrap: 'wrap' }}
            >
              <Box
                component={Link}
                href="/pasttrips"
                sx={{
                  px: 3.5,
                  py: 1.5,
                  borderRadius: 999,
                  bgcolor: 'var(--coral)',
                  color: 'var(--ink-deep)',
                  fontWeight: 700,
                  transition: 'transform 0.25s ease, background-color 0.25s ease',
                  '&:hover': { transform: 'translateY(-2px)', bgcolor: 'var(--coral-lift)' },
                }}
              >
                See the trips
              </Box>
              <Box
                component={Link}
                href="/futuretrips"
                sx={{
                  fontWeight: 600,
                  color: 'var(--haze)',
                  borderBottom: '2px solid transparent',
                  pb: '2px',
                  transition: 'color 0.25s ease, border-color 0.25s ease',
                  '&:hover': { color: 'var(--paper)', borderColor: 'var(--coral)' },
                }}
              >
                Where I'm going next
              </Box>
            </Box>
          </Box>

          <Box
            component={motion.div}
            initial={reduceMotion ? false : { opacity: 0, y: 40, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            sx={{
              perspective: '1800px',
              width: '100%',
              maxWidth: { xs: 340, md: 420 },
              mx: { xs: 'auto', md: 0 },
              ml: { md: 'auto' },
            }}
          >
            <FlipPrint
              label={heroPrint.location}
              sx={{ aspectRatio: '4 / 5' }}
              front={
                <>
                  <Box
                    component="img"
                    className="print-face"
                    src={heroPrint.image}
                    alt={heroPrint.location}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      px: 2.5,
                      pt: 7,
                      pb: 2.5,
                      textAlign: 'left',
                      background: 'linear-gradient(to top, rgba(10,26,47,0.9), rgba(10,26,47,0))',
                    }}
                  >
                    <Typography sx={{ color: 'var(--coral)', fontWeight: 700, fontSize: '0.9375rem' }}>
                      Go on, click it
                    </Typography>
                  </Box>
                </>
              }
              back={
                <>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgba(16,37,66,0.62)' }}>
                    {heroPrint.date}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                      lineHeight: 1.05,
                      letterSpacing: '-0.025em',
                    }}
                  >
                    {heroPrint.location}
                  </Typography>
                  <Typography sx={{ mt: 1, lineHeight: 1.62, color: 'rgba(16,37,66,0.88)' }}>
                    {heroPrint.note}
                  </Typography>
                </>
              }
            />
          </Box>
        </Box>
      </Container>

      {/* MOST RECENT */}
      <Container maxWidth="lg" component="section" sx={{ pb: { xs: 10, md: 16 } }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            gap: 3,
            flexWrap: 'wrap',
            borderTop: '1px solid var(--ink-line)',
            pt: { xs: 5, md: 7 },
            mb: { xs: 4, md: 6 },
          }}
        >
          <Typography variant="h2">Most recent</Typography>
          <Box
            component={Link}
            href="/pasttrips"
            sx={{
              fontWeight: 600,
              color: 'var(--haze)',
              borderBottom: '2px solid transparent',
              pb: '2px',
              '&:hover': { color: 'var(--paper)', borderColor: 'var(--coral)' },
            }}
          >
            All {trips.length} trips
          </Box>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: { xs: 3, md: 4 } }}>
          {recent.map((trip, index) => (
            <Box
              key={trip.id}
              component={motion.div}
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Box
                component={Link}
                href={trip.href}
                sx={{
                  display: 'block',
                  '&:hover img': { transform: 'scale(1.05)' },
                  '&:hover .recent-title': { color: 'var(--coral)' },
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    borderRadius: '3px',
                    aspectRatio: '4 / 3',
                    bgcolor: 'var(--ink-raised)',
                    mb: 2,
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
                <Typography sx={{ color: 'var(--coral)', fontWeight: 600, fontSize: '0.875rem' }}>
                  {trip.dates}
                </Typography>
                <Typography variant="h3" className="recent-title" sx={{ transition: 'color 0.3s ease' }}>
                  {trip.title}
                </Typography>
                <Typography sx={{ color: 'var(--haze)', mt: 1, maxWidth: '40ch' }}>{trip.blurb}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default Home;
