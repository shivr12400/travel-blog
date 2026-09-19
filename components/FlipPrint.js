import React, { useState } from 'react';
import { Box } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';

const face = (back) => ({
  position: 'absolute',
  inset: 0,
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  transform: back ? 'rotateY(180deg)' : 'none',
  overflow: 'hidden',
  borderRadius: '3px',
});

// A print you can pick up and turn over. The front is the photograph; the back
// is the paper it was written on.
const FlipPrint = ({ front, back, label, sx, onFlip }) => {
  const reduceMotion = useReducedMotion();
  const [flipped, setFlipped] = useState(false);

  const toggle = () => {
    setFlipped((f) => {
      if (onFlip) onFlip(!f);
      return !f;
    });
  };

  return (
    <Box
      component="button"
      type="button"
      aria-pressed={flipped}
      aria-label={flipped ? `Hide the note on ${label}` : `Read the note on ${label}`}
      onClick={toggle}
      sx={{
        display: 'block',
        width: '100%',
        position: 'relative',
        p: 0,
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        transformStyle: 'preserve-3d',
        '&:hover .print-face': { transform: 'scale(1.03)' },
        '&:hover .print-hint': { opacity: 1, transform: 'translateY(0)' },
        ...sx,
      }}
    >
      <Box
        component={motion.div}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={
          reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 220, damping: 26, mass: 0.9 }
        }
        sx={{
          position: 'absolute',
          inset: 0,
          transformStyle: 'preserve-3d',
          boxShadow: 'var(--shadow-card)',
          borderRadius: '3px',
        }}
      >
        <Box sx={{ ...face(false), bgcolor: 'var(--ink-raised)' }}>{front}</Box>
        <Box
          sx={{
            ...face(true),
            bgcolor: 'var(--paper)',
            color: 'var(--ink-on-paper)',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            p: { xs: 2.5, md: 3.5 },
            gap: 1,
          }}
        >
          {back}
        </Box>
      </Box>
    </Box>
  );
};

export default FlipPrint;
