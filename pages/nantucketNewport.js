import TripPage from '../components/TripPage';
import { data } from '../tripData';
import { tripById } from '../trips';

const trip = tripById('nantucketNewport');

const NantucketNewport = () => (
  <TripPage
    tripData={data.nantucketNewport}
    coverImage={trip.cover}
    coverPosition={trip.coverPosition}
    title={trip.title}
    dates={trip.dates}
    blurb={trip.blurb}
    travelers={trip.travelers}
    itinerary={trip.itinerary}
  />
);

export default NantucketNewport;
