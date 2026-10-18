import React, { useState } from 'react';
import { Box, Container, Typography, Avatar, Tooltip } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { motion, useReducedMotion } from 'framer-motion';

const TripHero = ({ imageUrl, imagePosition = 'center', title, dates, blurb, travelers = [], photoCount, itinerary }) => {
  const reduceMotion = useReducedMotion();
  const [spread, setSpread] = useState(false);

  const rise = (delay) =>
    reduceMotion
      ? {}
      : {
          initial: { y: '110%' },
          animate: { y: 0 },
          transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
        };

  return (
    <Box
      component="header"
      sx={{
        position: 'relative',
        minHeight: { xs: '78vh', md: '86vh' },
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        bgcolor: 'var(--ink)',
      }}
    >
      <Box
        component={motion.img}
        src={imageUrl}
        alt=""
        initial={reduceMotion ? false : { scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: imagePosition,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, var(--ink) 0%, rgba(36,20,26,0.88) 34%, rgba(36,20,26,0.35) 100%)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', pb: { xs: 6, md: 9 }, pt: 16 }}>
        <Box
          sx={{
            mb: 1.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ overflow: 'hidden' }}>
            <Typography
              component={motion.p}
              {...rise(0.15)}
              sx={{
                m: 0,
                color: 'var(--accent)',
                fontWeight: 600,
                fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
              }}
            >
              {dates}
            </Typography>
          </Box>

          {itinerary && (
            <Box
              component={motion.a}
              href={itinerary}
              download
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 1,
                borderRadius: 999,
                border: '1px solid rgba(234,242,239,0.28)',
                bgcolor: 'rgba(36,20,26,0.45)',
                backdropFilter: 'blur(8px)',
                color: 'var(--paper)',
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease',
                '&:hover': { bgcolor: 'var(--accent)', borderColor: 'var(--accent)', color: 'var(--ink-deep)' },
              }}
            >
              <FileDownloadOutlinedIcon sx={{ fontSize: '1.15rem' }} />
              Download the itinerary
            </Box>
          )}
        </Box>

        <Box sx={{ overflow: 'hidden', pb: '0.08em' }}>
          <Typography component={motion.h1} variant="h1" {...rise(0.25)} sx={{ m: 0 }}>
            {title}
          </Typography>
        </Box>

        {blurb && (
          <Box sx={{ overflow: 'hidden', mt: 2.5 }}>
            <Typography
              component={motion.p}
              {...rise(0.38)}
              sx={{ m: 0, maxWidth: '46ch', fontSize: '1.125rem', color: 'rgba(234,242,239,0.78)' }}
            >
              {blurb}
            </Typography>
          </Box>
        )}

        <Box
          component={motion.div}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          sx={{
            mt: { xs: 4, md: 5 },
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 2, md: 4 },
            flexWrap: 'wrap',
          }}
        >
          {travelers.length > 0 && (
            <Box
              onMouseEnter={() => setSpread(true)}
              onMouseLeave={() => setSpread(false)}
              onFocus={() => setSpread(true)}
              onBlur={() => setSpread(false)}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              {travelers.filter(Boolean).map((traveler, index) => (
                <Tooltip key={traveler.name} title={traveler.name} arrow>
                  <Avatar
                    src={traveler.imageUrl}
                    alt={traveler.name}
                    tabIndex={0}
                    sx={{
                      width: { xs: 40, md: 48 },
                      height: { xs: 40, md: 48 },
                      bgcolor: 'var(--ink-raised)',
                      fontSize: '0.9rem',
                      border: '2px solid var(--ink-deep)',
                      ml: index === 0 ? 0 : spread ? '6px' : '-14px',
                      transition: 'margin-left 0.45s cubic-bezier(0.22, 1, 0.36, 1), transform 0.25s ease',
                      '&:hover': { transform: 'translateY(-6px)', zIndex: 2 },
                    }}
                  />
                </Tooltip>
              ))}
              <Typography sx={{ ml: 2, color: 'var(--haze)', fontSize: '0.95rem' }}>
                {travelers.length} along for it
              </Typography>
            </Box>
          )}

          {photoCount > 0 && (
            <Typography sx={{ color: 'var(--haze)', fontSize: '0.95rem' }}>
              {photoCount} photographs, notes on the back
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default TripHero;
