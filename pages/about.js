import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { trips } from '../trips';

const About = () => {
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
            Shiv Rathod
          </Typography>
        </Box>
        <Typography sx={{ mt: 2, color: 'var(--coral)', fontWeight: 600, fontSize: '1.125rem' }}>
          Software engineer by day, world explorer by PTO
        </Typography>

        <Box
          sx={{
            mt: { xs: 6, md: 10 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
            gap: { xs: 5, md: 8 },
            alignItems: 'start',
          }}
        >
          <Box
            component={motion.div}
            initial={reduceMotion ? false : { opacity: 0, y: 30, rotate: -2.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            sx={{
              overflow: 'hidden',
              borderRadius: '3px',
              aspectRatio: '4 / 5',
              boxShadow: 'var(--shadow-card)',
              bgcolor: 'var(--ink-raised)',
            }}
          >
            <Box
              component="img"
              src="/images/elephant.jpg"
              alt="Shiv Rathod"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>

          <Box>
            <Typography
              variant="h3"
              component="p"
              sx={{ mb: 4, maxWidth: '20ch', lineHeight: 1.1 }}
            >
              “I want to show my future generations I was a cool guy.”
            </Typography>

            <Box sx={{ maxWidth: '62ch', '& p': { mb: 3, color: 'rgba(255,255,255,0.78)', fontSize: '1.0625rem', lineHeight: 1.7 } }}>
              <Typography component="p">
                I'm a 23-year-old software engineer who spends every hour of PTO on a plane. This
                site is where I keep the places I've been so I don't lose them.
              </Typography>
              <Typography component="p">
                So far that's two solo trips, a lot of chaos with different friend groups, and the
                wholesome family ones in between.
              </Typography>
              <Typography component="p">
                Travel pulls you out of your bedroom and into other people's customs, food and
                mornings. If any of this makes you book something, it did its job.
              </Typography>
            </Box>

            <Box sx={{ mt: 5, display: 'flex', gap: 3, flexWrap: 'wrap', alignItems: 'center' }}>
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
                All {trips.length} trips
              </Box>
              <Box
                component="a"
                href="mailto:shivr12400@gmail.com"
                sx={{
                  fontWeight: 600,
                  color: 'var(--haze)',
                  borderBottom: '2px solid transparent',
                  pb: '2px',
                  transition: 'color 0.25s ease, border-color 0.25s ease',
                  '&:hover': { color: 'var(--paper)', borderColor: 'var(--coral)' },
                }}
              >
                Say hello
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Layout>
  );
};

export default About;
