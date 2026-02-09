import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Chip, Box, styled } from '@mui/material';

// ACCEPT PROPS: Added 'selectedCategories' to props
const TripTimeline = ({ tripData, selectedCategories = [] }) => {

    const StyledChip = styled(Chip)(({ theme }) => ({
        marginRight: "8px",
        marginBottom: "8px",
        fontWeight: 500
    }));

    // Helper: Check if filters are active
    const hasFilter = selectedCategories.length > 0;

    // Helper: Render a single activity block
    const renderActivity = (location, description, image, category, key) => (
        <Box key={key} sx={{ mb: 3, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', mb: 1 }}>
                {location && (
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mr: 2, display: 'flex', alignItems: 'center' }}>
                        📍 {location}
                    </Typography>
                )}
                {category && <StyledChip label={category} size="small" variant="outlined" color="primary" />}
            </Box>

            {description && (
                <Typography variant="body2" color="text.secondary" paragraph>
                    {description}
                </Typography>
            )}

            {image && (
                <CardMedia
                    component="img"
                    image={image}
                    alt={location || "Trip image"}
                    sx={{ 
                        borderRadius: 2, 
                        maxHeight: 300, 
                        objectFit: 'cover',
                        mt: 1,
                        width: '100%',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                />
            )}
        </Box>
    );

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Timeline position="alternate">
                {tripData.map((day, index) => {
                    // --- FILTERING LOGIC ---
                    
                    // 1. Determine which activities match the filter
                    // If no filter is active, show all. Otherwise, only show matching ones.
                    let visibleActivities = day.activities || [];
                    if (hasFilter && day.activities) {
                        visibleActivities = day.activities.filter(act => 
                            // Show if it has no category (generic) or matches filter
                            !act.category || selectedCategories.includes(act.category)
                        );
                    }

                    // 2. Check if the Day itself matches (Legacy/High-level category)
                    const dayMatches = !hasFilter || (day.category && selectedCategories.includes(day.category));

                    // 3. Final Visibility Check
                    // Show the day if:
                    // A) The day's main category matches
                    // B) OR it has activities that match
                    // C) OR it uses the old single-item structure and matches
                    const isDayVisible = dayMatches || visibleActivities.length > 0;

                    if (!isDayVisible) return null;

                    return (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot color="primary" />
                                {index < tripData.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Card sx={{ maxWidth: 1000, mb: 2, boxShadow: 3 }}>
                                    <CardContent>
                                        {/* --- Day Header --- */}
                                        <Box sx={{ mb: 3, borderBottom: '1px solid #eee', pb: 2 }}>
                                            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#333' }}>
                                                Day {day.day}: {day.name}
                                            </Typography>
                                            
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', mt: 1 }}>
                                                <Typography variant="subtitle1" color="text.secondary">
                                                    {day.date}
                                                </Typography>
                                                
                                                {day.category && (
                                                    <StyledChip label={day.category} size="small" color="default" />
                                                )}
                                            </Box>
                                        </Box>

                                        {/* --- Content Logic --- */}
                                        {/* If the data structure has an 'activities' array, use our filtered list */}
                                        {day.activities ? (
                                            visibleActivities.length > 0 ? (
                                                visibleActivities.map((activity, i) => 
                                                    renderActivity(
                                                        activity.location, 
                                                        activity.description, 
                                                        activity.image, 
                                                        activity.category, 
                                                        i
                                                    )
                                                )
                                            ) : (
                                                // If day matches but all activities were filtered out, show a message or nothing?
                                                // Currently showing nothing (just header) which is correct behavior.
                                                null
                                            )
                                        ) : (
                                            /* Fallback for old data structure (Single Item) */
                                            renderActivity(
                                                day.location, 
                                                day.description, 
                                                day.image, 
                                                null, 
                                                'single'
                                            )
                                        )}
                                    </CardContent>
                                </Card>
                            </TimelineContent>
                        </TimelineItem>
                    );
                })}
            </Timeline>
        </Container>
    );
};

export default TripTimeline;