import React from 'react';
import { Box, Chip } from '@mui/material';

const TripFilter = ({ categories, selectedCategories, onCategoryToggle }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 1,
        mb: 4,
        mt: 4,
      }}
    >
      {categories.map((category) => (
        <Chip
          key={category}
          label={category}
          clickable
          color={selectedCategories.includes(category) ? 'primary' : 'default'}
          onClick={() => onCategoryToggle(category)}
          sx={{
            '&:hover': {
              backgroundColor: (theme) => 
                selectedCategories.includes(category) 
                  ? theme.palette.primary.main 
                  : theme.palette.action.hover,
            },
            transition: 'all 0.3s',
          }}
        />
      ))}
    </Box>
  );
};

export default TripFilter;