import React, { useMemo, useRef, useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import FlipPrint from './FlipPrint';
import { groupByDate, stackOrientation } from '../tripUtils';

// The wall is built row by row on a 12-column grid. Every card in a row shares
// the row's height (in column units), so a card's shape is just span / height.
// Landscape days keep the alternating 7+5 / 5+7 / full-width rhythm; portrait
// days get 4:5 prints, three to a row, or set beside a landscape print.
const LANDSCAPE_ROWS = [[7, 5], [5, 7], [12]];
const LANDSCAPE_HEIGHT = 4.6;
const PANORAMA_HEIGHT = 5.4;
const PORTRAIT = 4 / 5;

const row = (spans, height) => spans.map((span) => ({ span, aspect: span / height }));

const layoutWall = (stacks) => {
  const shapes = stacks.map(stackOrientation);
  const layouts = [];
  let landscapeRow = 0;
  let i = 0;

  while (i < shapes.length) {
    const [here, next, after] = shapes.slice(i, i + 3);

    if (here === 'portrait' && next === 'portrait' && after === 'portrait') {
      layouts.push(...row([4, 4, 4], 4 / PORTRAIT));
      i += 3;
    } else if (here === 'portrait' && next === 'portrait') {
      layouts.push(...row([6, 6], 6 / PORTRAIT));
      i += 2;
    } else if (here === 'portrait' && next) {
      layouts.push(...row([4, 8], 4 / PORTRAIT));
      i += 2;
    } else if (here === 'portrait') {
      layouts.push(...row([6], 6 / PORTRAIT));
      i += 1;
    } else if (next === 'portrait') {
      layouts.push(...row([8, 4], 4 / PORTRAIT));
      i += 2;
    } else {
      const spans = LANDSCAPE_ROWS[landscapeRow % LANDSCAPE_ROWS.length];
      landscapeRow += 1;
      if (spans.length === 1 || !next) {
        layouts.push(...row([12], PANORAMA_HEIGHT));
        i += 1;
      } else {
        layouts.push(...row(spans, LANDSCAPE_HEIGHT));
        i += 2;
      }
    }
  }

  return layouts;
};

const PhotoFront = ({ photo, inStack }) => {
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
            background: 'repeating-linear-gradient(135deg, var(--ink-raised) 0 14px, #42262F 14px 28px)',
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
          pr: inStack ? 15 : 2,
          textAlign: 'left',
          background: 'linear-gradient(to top, rgba(36,20,26,0.88), rgba(36,20,26,0))',
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
        <Typography component="span" sx={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--accent)' }}>
          turn over
        </Typography>
      </Box>
    </>
  );
};

const PhotoBack = ({ photo, inStack }) => (
  <>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 2 }}>
      <Typography component="span" sx={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgba(54,31,39,0.62)' }}>
        {photo.date}
      </Typography>
      {photo.category && (
        <Typography
          component="span"
          sx={{
            fontSize: '0.75rem',
            fontWeight: 700,
            borderBottom: '2px solid var(--accent)',
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

    <Typography sx={{ fontSize: '0.9375rem', color: 'rgba(54,31,39,0.7)', fontStyle: 'italic' }}>
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
        mb: inStack ? 5 : 0,
        '&::-webkit-scrollbar': { width: 6 },
        '&::-webkit-scrollbar-thumb': { background: 'var(--paper-shade)', borderRadius: 3 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '0.9375rem', md: '1rem' },
          lineHeight: 1.62,
          maxWidth: '62ch',
          color: 'rgba(54,31,39,0.88)',
        }}
      >
        {photo.description || 'Nothing written on the back of this one.'}
      </Typography>
    </Box>
  </>
);

// Arrows sit beside the print rather than inside it: the print itself is a
// button, and paging through a day shouldn't turn it over. On touch screens the
// stack is swiped instead, so only the count stays.
const ARROW = { '@media (hover: none) and (pointer: coarse)': { display: 'none' } };
const SWIPE_DISTANCE = 40;

// Paging slides the next print in from the side you're heading toward, inside
// the frame so the wall itself doesn't move.
const slide = {
  enter: ({ direction, reduceMotion }) =>
    reduceMotion ? { opacity: 0 } : { x: direction > 0 ? '100%' : '-100%', opacity: 0.6 },
  center: { x: 0, opacity: 1 },
  exit: ({ direction, reduceMotion }) =>
    reduceMotion ? { opacity: 0 } : { x: direction > 0 ? '-100%' : '100%', opacity: 0.6 },
};

const StackControls = ({ position, count, onStep }) => (
  <Box
    onKeyDown={(e) => {
      if (e.key === 'ArrowLeft') onStep(-1);
      if (e.key === 'ArrowRight') onStep(1);
    }}
    sx={{
      position: 'absolute',
      right: 12,
      bottom: 12,
      zIndex: 2,
      display: 'flex',
      alignItems: 'center',
      gap: 0.5,
      px: 0.5,
      '@media (hover: none) and (pointer: coarse)': { px: 1.5, py: 0.75 },
      borderRadius: 999,
      bgcolor: 'rgba(36,20,26,0.78)',
      backdropFilter: 'blur(6px)',
      color: 'var(--paper)',
    }}
  >
    <IconButton size="small" aria-label="Previous photo from this day" onClick={() => onStep(-1)} sx={{ color: 'inherit', ...ARROW }}>
      <ChevronLeftIcon fontSize="small" />
    </IconButton>
    <Typography component="span" aria-live="polite" sx={{ fontSize: '0.8125rem', fontWeight: 600, minWidth: '3ch', textAlign: 'center' }}>
      {position + 1} / {count}
    </Typography>
    <IconButton size="small" aria-label="Next photo from this day" onClick={() => onStep(1)} sx={{ color: 'inherit', ...ARROW }}>
      <ChevronRightIcon fontSize="small" />
    </IconButton>
  </Box>
);

const PhotoCard = ({ stack, index, layout, reduceMotion }) => {
  const { span, aspect } = layout;
  const portrait = stackOrientation(stack) === 'portrait';
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);
  const inStack = stack.length > 1;
  const photo = stack[Math.min(position, stack.length - 1)];

  const step = (delta) => {
    setDirection(delta);
    setPosition((p) => (p + delta + stack.length) % stack.length);
  };

  // A sideways swipe pages through the day; anything more vertical is left to
  // the page scroll. The tap that ends a swipe mustn't turn the print over.
  const touch = useRef(null);
  const swiped = useRef(false);
  const swipe = inStack && {
    onTouchStart: (e) => {
      const t = e.touches[0];
      touch.current = { x: t.clientX, y: t.clientY };
      swiped.current = false;
    },
    onTouchEnd: (e) => {
      if (!touch.current) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - touch.current.x;
      const dy = t.clientY - touch.current.y;
      touch.current = null;
      if (Math.abs(dx) > SWIPE_DISTANCE && Math.abs(dx) > Math.abs(dy) * 1.5) {
        swiped.current = true;
        step(dx < 0 ? 1 : -1);
      }
    },
    onClickCapture: (e) => {
      if (swiped.current) {
        swiped.current = false;
        e.stopPropagation();
        e.preventDefault();
      }
    },
  };

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
        position: 'relative',
      }}
    >
      <Box {...swipe} sx={{ touchAction: inStack ? 'pan-y' : 'auto' }}>
        <FlipPrint
          label={photo.location || 'this photograph'}
          front={
            <AnimatePresence initial={false} custom={{ direction, reduceMotion }}>
              <motion.div
                key={photo.id}
                custom={{ direction, reduceMotion }}
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
                transition={reduceMotion ? { duration: 0.2 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: 'absolute', inset: 0 }}
              >
                <PhotoFront photo={photo} inStack={inStack} />
              </motion.div>
            </AnimatePresence>
          }
          back={<PhotoBack photo={photo} inStack={inStack} />}
          sx={{ aspectRatio: { xs: portrait ? '4 / 5' : span === 12 ? '3 / 2' : '4 / 3', md: `${aspect}` } }}
        />
      </Box>
      {inStack && <StackControls position={position} count={stack.length} onStep={step} />}
    </Box>
  );
};

const PhotoWall = ({ photos = [] }) => {
  const reduceMotion = useReducedMotion();
  const stacks = useMemo(() => groupByDate(photos), [photos]);
  const layouts = useMemo(() => layoutWall(stacks), [stacks]);

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
      {stacks.map((stack, index) => (
        <PhotoCard key={stack[0].id} stack={stack} index={index} layout={layouts[index]} reduceMotion={reduceMotion} />
      ))}
    </Box>
  );
};

export default PhotoWall;
