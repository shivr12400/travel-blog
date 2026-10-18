import TripPage from '../components/TripPage';
import { data } from '../tripData';
import { tripById } from '../trips';

const trip = tripById('singaporeJavaLombok');

const SingaporeJavaLombok = () => (
  <TripPage
    tripData={data.singaporeJavaLombok}
    coverImage={trip.cover}
    coverPosition={trip.coverPosition}
    title={trip.title}
    dates={trip.dates}
    blurb={trip.blurb}
    travelers={trip.travelers}
    itinerary={trip.itinerary}
  />
);

export default SingaporeJavaLombok;
