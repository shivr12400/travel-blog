import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import FlipPrint from './FlipPrint';

// The wall lays prints out in rows of equal height: `span` is in 12ths, and every
// card in a row is ROW_UNITS column-units tall, so rows stay flush while the
// prints themselves keep changing shape.
const ROW_UNITS = 4.6;
const PATTERN = [7, 5, 5, 7, 12];

const layoutFor = (index) => {
  const span = PATTERN[index % PATTERN.length];
  return { span, aspect: span === 12 ? 12 / 5.4 : span / ROW_UNITS };
};

const PhotoFront = ({ photo }) => {
  const [broken, setBroken] = useState(false);

  return (
    <>
      {photo.image && !broken ? (
        <Box
          component="img"
          className="print-face"
          src={photo.image}
          alt={photo.location || 'Photograph from the trip'}
          loading="lazy"
          onError={() => setBroken(true)}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            p: 3,
            background: 'repeating-linear-gradient(135deg, var(--ink-raised) 0 14px, #17355C 14px 28px)',
          }}
        >
          <Typography variant="body2" sx={{ color: 'var(--haze)', textAlign: 'left' }}>
            Photo missing — the note is still on the back
          </Typography>
        </Box>
      )}

      <Box
        className="print-hint"
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          px: 2,
          pt: 6,
          pb: 2,
          display: 'flex',
          alignItems: 'baseline',
          gap: 1.5,
          flexWrap: 'wrap',
          textAlign: 'left',
          background: 'linear-gradient(to top, rgba(10,26,47,0.88), rgba(10,26,47,0))',
          opacity: { xs: 1, md: 0 },
          transform: { md: 'translateY(6px)' },
          transition: 'opacity 0.35s ease, transform 0.35s ease',
        }}
      >
        <Typography
          component="span"
          sx={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'clamp(1rem, 1.6vw, 1.35rem)',
            letterSpacing: '-0.01em',
            color: 'var(--paper)',
          }}
        >
          {photo.location}
        </Typography>
        <Typography component="span" sx={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--coral)' }}>
          turn over
        </Typography>
      </Box>
    </>
  );
};

const PhotoBack = ({ photo }) => (
  <>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 2 }}>
      <Typography component="span" sx={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgba(16,37,66,0.62)' }}>
        {photo.date}
      </Typography>
      {photo.category && (
        <Typography
          component="span"
          sx={{
            fontSize: '0.75rem',
            fontWeight: 700,
            borderBottom: '2px solid var(--coral)',
            pb: '1px',
          }}
        >
          {photo.category}
        </Typography>
      )}
    </Box>

    <Typography
      sx={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'clamp(1.35rem, 2.4vw, 2.1rem)',
        lineHeight: 1.05,
        letterSpacing: '-0.025em',
      }}
    >
      {photo.location}
    </Typography>

    <Typography sx={{ fontSize: '0.9375rem', color: 'rgba(16,37,66,0.7)', fontStyle: 'italic' }}>
      {photo.dayName && photo.dayName !== photo.location
        ? `Day ${photo.day} — ${photo.dayName}`
        : `Day ${photo.day}`}
    </Typography>

    <Box
      sx={{
        mt: 1,
        flex: 1,
        overflowY: 'auto',
        pr: 1,
        '&::-webkit-scrollbar': { width: 6 },
        '&::-webkit-scrollbar-thumb': { background: 'var(--paper-shade)', borderRadius: 3 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '0.9375rem', md: '1rem' },
          lineHeight: 1.62,
          maxWidth: '62ch',
          color: 'rgba(16,37,66,0.88)',
        }}
      >
        {photo.description || 'Nothing written on the back of this one.'}
      </Typography>
    </Box>
  </>
);

const PhotoCard = ({ photo, index, reduceMotion }) => {
  const { span, aspect } = layoutFor(index);

  return (
    <Box
      component={motion.div}
      initial={reduceMotion ? false : { opacity: 0, y: 38, rotate: index % 2 ? 2.5 : -2.5, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: Math.min(index, 5) * 0.045, ease: [0.22, 1, 0.36, 1] }}
      sx={{
        gridColumn: { xs: 'span 12', md: `span ${span}` },
        perspective: '1800px',
      }}
    >
      <FlipPrint
        label={photo.location || 'this photograph'}
        front={<PhotoFront photo={photo} />}
        back={<PhotoBack photo={photo} />}
        sx={{ aspectRatio: { xs: span === 12 ? '3 / 2' : '4 / 3', md: `${aspect}` } }}
      />
    </Box>
  );
};

const PhotoWall = ({ photos = [] }) => {
  const reduceMotion = useReducedMotion();

  if (!photos.length) {
    return (
      <Box sx={{ py: 10 }}>
        <Typography sx={{ color: 'var(--haze)' }}>
          Nothing here. Choose Everything to see all the photos from this trip.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: { xs: 2, md: 3 } }}>
      {photos.map((photo, index) => (
        <PhotoCard key={photo.id} photo={photo} index={index} reduceMotion={reduceMotion} />
      ))}
    </Box>
  );
};

export default PhotoWall;
