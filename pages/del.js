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

const Del = () => {

    const [selectedCategories, setSelectedCategories] = useState([]);

    const tripData = useMemo(() => data.delaware, []);

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

    const Title = styled(Typography)(({ theme }) => ({
        marginTop: "60px"
    }));

    const travelers = [
        travelersData.Shrey, travelersData.Hari, travelersData.Hanish, travelersData.Nikhil, travelersData. Cadan, travelersData.Mehak, 
        travelersData.Akriti, travelersData.Anushka, travelersData.Sankya, travelersData.Abhi,
      ];

    return (
        <Layout>
            <BackButton />
            <HeroImage
        imageUrl="/images/del.jpg"
        title="Boating in Delaware"
        subtitle="August 10 - 11, 2024"
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

export default Del;