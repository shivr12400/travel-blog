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
import { Chip, styled } from '@mui/material';


const TripTimeline = ({ tripData }) => {

    const StyledChip = styled(Chip)(({ theme }) => ({
        marginTop: "10px",
        marginBottom: "10px"
    }));

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Timeline position="alternate">
                {tripData.map((day, index) => (
                    <TimelineItem key={day.day}>
                        <TimelineSeparator>
                            <TimelineDot color="primary" />
                            {index < tripData.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card sx={{ maxWidth: 1000, mb: 2 }}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        Day {day.day}: {day.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        {day.date}
                                    </Typography>
                                    <StyledChip label={day.category} />
                                    <Typography variant="body2" color="text.secondary">
                                        {day.description}
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={day.image}
                                    alt={`Day ${day.day}`}
                                />
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Container>
    );
};

export default TripTimeline;