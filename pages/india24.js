import TripTimeline from "../components/Timeline";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { useState, useMemo } from "react";
import { Typography, styled } from "@mui/material";
import BackButton from "../components/BackButton";
import TripFilter from "../components/TripFilter";
import HeroImage from "../components/HeroImage";
import { data } from "../tripData";
import { travelersData } from "../travelersData";


const India24 = () => {

  const [selectedCategories, setSelectedCategories] = useState([]);

  const tripData = useMemo(() => data.india24, []);

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

  const travelers = [
    travelersData.AJ, travelersData.LM, travelersData.AkashChoksi, travelersData.SR, travelersData.SaumyaD,
  ];

  return (
    <Layout>
      <BackButton />
      <HeroImage
        imageUrl="/images/india24.jpg"
        title="Lalji Maharaj's Wedding"
        subtitle="July 3 - 17, 2024"
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

export default India24;