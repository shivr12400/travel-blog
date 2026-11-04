import TripPage from '../components/TripPage';
import { data } from '../tripData';
import { tripById } from '../trips';

const trip = tripById('copenhagen');

const Copenhagen = () => (
  <TripPage
    tripData={data.copenhagen}
    coverImage={trip.cover}
    coverPosition={trip.coverPosition}
    title={trip.title}
    dates={trip.dates}
    blurb={trip.blurb}
    travelers={trip.travelers}
    itinerary={trip.itinerary}
  />
);

export default Copenhagen;
