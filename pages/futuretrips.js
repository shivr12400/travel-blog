import React from 'react';
import { 
  Container, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Box,
  Grid,
  Card,
  CardMedia
} from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const seasons = [
  {
    name: 'Spring',
    trips: [
      { destination: 'Tokyo, Japan', description: 'Cherry blossom viewing and cultural exploration' },
      { destination: 'Amsterdam, Netherlands', description: 'Tulip festival and canal tours' },
    ],
    image: 'https://source.unsplash.com/800x600/?spring'
  },
  {
    name: 'Summer',
    trips: [
      { destination: 'Santorini, Greece', description: 'Beach relaxation and stunning sunsets' },
      { destination: 'Banff National Park, Canada', description: 'Hiking and wildlife watching' },
    ],
    image: 'https://source.unsplash.com/800x600/?summer'
  },
  {
    name: 'Fall',
    trips: [
      { destination: 'New England, USA', description: 'Fall foliage road trip' },
      { destination: 'Tuscany, Italy', description: 'Wine tasting and countryside exploration' },
    ],
    image: 'https://source.unsplash.com/800x600/?autumn'
  },
  {
    name: 'Winter',
    trips: [
      { destination: 'Lapland, Finland', description: 'Northern Lights viewing and husky sledding' },
      { destination: 'Queenstown, New Zealand', description: 'Skiing and adventure sports' },
    ],
    image: 'https://source.unsplash.com/800x600/?winter'
  },
];

const FutureTrips = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <Container maxWidth="md" sx={{ py: 6, flex: '1 0 auto' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Future Trips
        </Typography>
        {seasons.map((season) => (
          <Accordion key={season.name}>
            <AccordionSummary
              aria-controls={`${season.name}-content`}
              id={`${season.name}-header`}
            >
              <Typography variant="h6">{season.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  {season.trips.map((trip, index) => (
                    <Box key={index} mb={2}>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {trip.destination}
                      </Typography>
                      <Typography variant="body2">
                        {trip.description}
                      </Typography>
                    </Box>
                  ))}
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={season.image}
                      alt={`${season.name} travel`}
                    />
                  </Card>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
      <Footer />
    </Box>
  );
};

export default FutureTrips;