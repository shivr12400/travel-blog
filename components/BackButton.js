import React from 'react';
import { Button, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';

const BackButton = () => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Button
      variant="contained"
      startIcon={<ArrowBackIcon />}
      onClick={() => router.back()}
      sx={{
        position: 'absolute',
        top: 13,
        left: 20,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
        },
        transition: 'all 0.3s ease',
        animation: 'slideIn 0.5s ease-out',
        '@keyframes slideIn': {
          '0%': {
            opacity: 0,
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
      }}
    >
      Back
    </Button>
  );
};

export default BackButton;