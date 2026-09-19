import React from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';

const BackButton = ({ href = '/pasttrips', label = 'All trips' }) => (
  <Box
    component={Link}
    href={href}
    sx={{
      position: 'absolute',
      top: { xs: 72, md: 96 },
      left: { xs: 16, md: 32 },
      zIndex: 3,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 1,
      px: 2,
      py: 1,
      borderRadius: 999,
      fontSize: '0.875rem',
      fontWeight: 600,
      color: 'var(--paper)',
      bgcolor: 'rgba(10,26,47,0.55)',
      backdropFilter: 'blur(10px)',
      border: '1px solid var(--ink-line)',
      transition: 'background-color 0.25s ease, gap 0.25s ease',
      '&:hover': { bgcolor: 'rgba(10,26,47,0.85)', gap: 1.5 },
      '& span:first-of-type': { color: 'var(--coral)', lineHeight: 1 },
    }}
  >
    <span aria-hidden="true">&#8592;</span>
    <span>{label}</span>
  </Box>
);

export default BackButton;
