import React, { useState } from 'react';
import { Box, Avatar, useTheme, Popover, Typography, Modal } from '@mui/material';

const HeroImage = ({ imageUrl, title, subtitle, travelers }) => {
  const theme = useTheme();
  const [selectedTraveler, setSelectedTraveler] = useState(null);

  const handleTravelerClick = (traveler) => {
    setSelectedTraveler(traveler);
  };

  const handleModalClose = () => {
    setSelectedTraveler(null);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '500px',
        zIndex: 1,
        textAlign: 'center',
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt="Hero Image"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.8,
          animation: 'fadeIn 2s ease-in-out',
          '@keyframes fadeIn': {
            '0%': {
              opacity: 0,
            },
            '100%': {
              opacity: 0.8,
            },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: theme.palette.common.white,
          padding: 4,
          zIndex: 2,
        }}
      >
        <Box>
          <Typography variant="h2" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5">{subtitle}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: 2,
          }}
        >
          {travelers.map((traveler, index) => (
            <Box
              key={index}
              onClick={() => handleTravelerClick(traveler)}
              sx={{
                cursor: 'pointer',
              }}
            >
              <Avatar
                src={traveler.imageUrl}
                alt={traveler.name}
                sx={{
                  width: 40,
                  height: 40,
                  border: `2px solid ${theme.palette.common.white}`,
                  marginRight: 1,
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Modal
        open={!!selectedTraveler}
        onClose={handleModalClose}
        aria-labelledby={selectedTraveler?.name}
        aria-describedby="traveler-image-modal"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: 4,
            borderRadius: 2,
          }}
        >
          {selectedTraveler && (
            <Box>
              <Typography id={selectedTraveler.name} variant="h5" gutterBottom>
                {selectedTraveler.name}
              </Typography>
              <Box
                component="img"
                src={selectedTraveler.imageUrl}
                alt={selectedTraveler.name}
                sx={{
                  width: 300,
                  height: 300,
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default HeroImage;