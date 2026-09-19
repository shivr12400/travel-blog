import React from 'react';
import { Box, Typography } from '@mui/material';

const TripFilter = ({ categories = [], selectedCategories = [], onCategoryToggle, onClear }) => {
  if (categories.length < 2) return null;

  const all = selectedCategories.length === 0;

  const item = (label, active, onClick) => (
    <Box
      key={label}
      component="button"
      type="button"
      onClick={onClick}
      aria-pressed={active}
      sx={{
        border: 'none',
        background: 'none',
        p: 0,
        cursor: 'pointer',
        fontFamily: 'var(--font-text)',
        fontSize: '0.9375rem',
        fontWeight: 600,
        color: active ? 'var(--paper)' : 'var(--haze)',
        borderBottom: `2px solid ${active ? 'var(--coral)' : 'transparent'}`,
        pb: '3px',
        transition: 'color 0.2s ease, border-color 0.2s ease',
        '&:hover': { color: 'var(--paper)' },
      }}
    >
      {label}
    </Box>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 3,
        py: 3,
        borderBottom: '1px solid var(--ink-line)',
        mb: { xs: 4, md: 6 },
      }}
    >
      <Typography sx={{ color: 'rgba(143,169,198,0.75)', fontSize: '0.9375rem' }}>Show</Typography>
      {item('Everything', all, onClear)}
      {categories.map((category) =>
        item(category, selectedCategories.includes(category), () => onCategoryToggle(category))
      )}
    </Box>
  );
};

export default TripFilter;
