import React from 'react';
import { 
  Box, 
  Button, 
  Container, 
  Typography, 
  Stack 
} from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HeroImage = styled(Image)({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  opacity: 0.8,
});

const HeroSection = styled(Box)({
  position: 'relative',
  height: '70vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const HeroContent = styled(Box)({
  position: 'absolute',
  textAlign: 'center',
  zIndex: 1,
});

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
    color: theme.palette.navText.main,
    '&:hover': {
      backgroundColor: theme.palette.navHover.main,
      color: theme.palette.navHoverText.main,
    },
  }));

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <Container maxWidth="lg" sx={{ flex: '1 0 auto', py: 4 }}>
        <HeroSection>
          <HeroImage
            src="/images/phiphi.jpg" 
            alt="Travel Hero Image"
            layout="fill"
            priority
          />
          <HeroContent>
            <Typography variant="h2" component="h1" 
              sx={{ color: 'white', mb: 4, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Explore the World
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Link href="/pasttrips" passHref>
                <NavButton variant="contained" size="large">
                  Past Trips
                </NavButton>
              </Link>
              <Link href="/futuretrips" passHref>
                <NavButton variant="contained" size="large">
                  Future Trips
                </NavButton>
              </Link>
            </Stack>
          </HeroContent>
        </HeroSection>
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;
