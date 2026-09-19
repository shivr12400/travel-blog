import TripPage from '../components/TripPage';
import { data } from '../tripData';
import { tripById } from '../trips';

const trip = tripById('india25');

const India25 = () => (
  <TripPage
    tripData={data.india25}
    coverImage={trip.cover}
    title={trip.title}
    dates={trip.dates}
    blurb={trip.blurb}
    travelers={trip.travelers}
  />
);

export default India25;
