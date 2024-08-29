import TripTimeline from "../components/Timeline";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import BackButton from "../components/BackButton";
import { useState } from "react";
import { useMemo } from "react";
import TripFilter from "../components/TripFilter";
import { Typography, styled } from "@mui/material";
import HeroImage from "../components/HeroImage";
import { data } from "../tripData";
import { travelersData } from "../travelersData";

const IrelandScotland = () => {

  const [selectedCategories, setSelectedCategories] = useState([]);

  const tripData = useMemo(() => data.irelandScotland, []);

  const categories = useMemo(() =>
    [...new Set(tripData.map(day => day.category))],
    [tripData]
  );

  const filteredTripData = useMemo(() =>
    selectedCategories.length === 0
      ? tripData
      : tripData.filter(day => selectedCategories.includes(day.category)),
    [tripData, selectedCategories]
  );

  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const travelers = [travelersData.Rits, travelersData.Hari,];

  return (
    <Layout>
      <BackButton />
      <HeroImage
        imageUrl="/images/galeway.jpg"
        title="Ireland & Scotland"
        subtitle="June 13 - 20, 2024"
        travelers={travelers}
      />
      <TripFilter
        categories={categories}
        selectedCategories={selectedCategories}
        onCategoryToggle={handleCategoryToggle}
      />
      <TripTimeline tripData={filteredTripData} />
      <Footer />
    </Layout>
  );
};

export default IrelandScotland;