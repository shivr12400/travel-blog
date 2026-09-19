import React, { useMemo, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Navbar from './Navbar';
import Footer from './Footer';
import BackButton from './BackButton';
import TripHero from './TripHero';
import TripFilter from './TripFilter';
import PhotoWall from './PhotoWall';
import { toPhotos, categoriesOf } from '../tripUtils';

const TripMap = dynamic(() => import('./TripMap'), { ssr: false });

const TripPage = ({ tripData = [], coverImage, title, dates, blurb, travelers = [] }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const photos = useMemo(() => toPhotos(tripData), [tripData]);
  const categories = useMemo(() => categoriesOf(photos), [photos]);

  const visiblePhotos = useMemo(
    () =>
      selectedCategories.length === 0
        ? photos
        : photos.filter((p) => selectedCategories.includes(p.category)),
    [photos, selectedCategories]
  );

  const handleCategoryToggle = (category) =>
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );

  return (
    <Box sx={{ bgcolor: 'var(--ink)', minHeight: '100vh' }}>
      <Navbar />

      <Box sx={{ position: 'relative' }}>
        <BackButton />
        <TripHero
          imageUrl={coverImage}
          title={title}
          dates={dates}
          blurb={blurb}
          travelers={travelers}
          photoCount={photos.length}
        />
      </Box>

      <Container maxWidth="lg" sx={{ pt: { xs: 5, md: 7 }, pb: { xs: 8, md: 12 } }}>
        <TripFilter
          categories={categories}
          selectedCategories={selectedCategories}
          onCategoryToggle={handleCategoryToggle}
          onClear={() => setSelectedCategories([])}
        />

        <PhotoWall photos={visiblePhotos} />

        {visiblePhotos.some((p) => p.coordinates) && (
          <Box sx={{ mt: { xs: 8, md: 12 } }}>
            <Typography variant="h3" component="h2" sx={{ mb: 1 }}>
              Where these were taken
            </Typography>
            <Typography sx={{ color: 'var(--haze)', mb: 3, maxWidth: '52ch' }}>
              Every stop on the trip, in the order the photos were taken.
            </Typography>
            <TripMap activities={visiblePhotos} />
          </Box>
        )}
      </Container>

      <Footer />
    </Box>
  );
};

export default TripPage;
