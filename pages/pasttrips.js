import { useState, useMemo } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography
} from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: theme.spacing(2),
}));

const CardButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.cardButton.background,
  color: theme.palette.cardButton.text,
  '&:hover': {
    backgroundColor: theme.palette.cardButton.background,
    opacity: 0.9,
  },
}));

const Home = () => {
  const [searchText, setSearchText] = useState('');

  const [cards] = useState([
    { id: 1, title: 'Bethany Beach, DE', dates: "August 10 - 11, 2024", description: '24 Hr trip to ride a boat', link: '/del', image: '/images/del.jpg' },
    { id: 2, title: 'India', dates: "July 3 - 17, 2024", description: "Lalji Maharaj's wedding", link: '/india24', image: '/images/india24.jpg' },
    { id: 3, title: 'Ireland & Scotland', dates: "June 13 - 20, 2024", description: '6am mornings with the boys', link: '/irelandScotland', image: '/images/galeway.jpg' },
    { id: 4, title: 'Nashville, TN', dates: "May 25 - 28, 2024", description: 'Madness on Broadway', link: '/nashville', image: '/images/nash.jpg'},
    { id: 5, title: 'Finland & Estonia', dates: "April 25 - 29, 2024", description: 'First solo weekend trip', link: '/finlandEstonia', image: '/images/estonia.jpg' },
    { id: 6, title: 'Singapore & Bali', dates: "January 31 - February 10, 2024", description: 'First time family goes to Southeast Asia', link: '/singaporeBali', image: '/images/bali.jpg' },
    { id: 7, title: 'Southern Italy & Greece', dates: "September 3 - 17, 2024", description: 'Crusing on the mediterranian', link: '/italyGreece', image: '/images/italy.jpg' },
    { id: 8, title: 'Thailand', dates: "January 21 - February 10, 2024", description: '18 day solo trip with a bunch of brits', link: '/thailand', image: '/images/thailand.jpg' },
    { id: 9, title: 'Southwest USA Roadtrip', dates: "August 10 - 11, 2024", description: 'Description for Card 9', link: '/italyGreece', image: '/images/italy.jpg' },
    { id: 10, title: 'Seattle & Alaska', dates: "August 13 - 21, 2022", description: 'Whale spotting', link: '/alaska', image: '/images/alaska.jpg' },
  ]);

  const filteredTripData = useMemo(() => {
    if (!searchText) return cards;
    return cards.filter((trip) =>
      trip.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [cards, searchText]);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const Title = styled(Typography)(({ theme }) => ({
    marginBottom: "40px"
  }));

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Title variant="h3" marginTop={"4"}>
          Past Trips
        </Title>
        <SearchBar onSearch={handleSearch} />
        <Grid container spacing={6} justifyContent="center">
          {filteredTripData.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <StyledCard elevation={3}>
                <CardMedia
                  component="img"
                  height="200"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {card.dates}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href={card.link} passHref>
                    <CardButton size="small" color="primary">
                      Go to Page
                    </CardButton>
                  </Link>
                </CardActions>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </Layout>
  );
};

export default Home;