import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper,
  Avatar
} from '@mui/material';
import { styled } from '@mui/system';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(4, 0),
  backgroundColor: theme.palette.background.default,
  boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
}));

const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(30),
  height: theme.spacing(30),
  margin: '0 auto',
  boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .2)',
}));

const About = () => {
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
        <StyledPaper elevation={3}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={5}>
              <LargeAvatar alt="Your Name" src="/images/elephant.jpg" />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="h4" component="h1" gutterBottom>
                Shiv Rathod
              </Typography>
              <Typography variant="body1" paragraph>
                Hello! I am a 23 year old Software Engineer that uses up all his PTO on travel. This website serves to help me document all the places I've been to and to show my future generations I was a cool guy!
              </Typography>
              <Typography variant="body1" paragraph>
                My journey consists on 2 solo trips, trips with different groups of friends, and tons of trips with my family.
              </Typography>
              <Typography variant="body1" paragraph>
                Travel has a way of exposing you to the world outside your bedroom. Allowing you meet new people, explore new customs, and discover who you really are. Through this blog I hope to inspire my future generations to get out there and explore the world. Fill all the gaps I couldn't in my lifetime and keep my legacy going on for generations.
              </Typography>
              <Typography variant="body1">
                Join me as we explore the world together, one destination at a time!
              </Typography>
            </Grid>
          </Grid>
        </StyledPaper>
      </Container>
      <Footer />
    </Box>
  );
};

export default About;