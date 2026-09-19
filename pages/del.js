import TripPage from '../components/TripPage';
import { data } from '../tripData';
import { tripById } from '../trips';

const trip = tripById('delaware');

const Del = () => (
  <TripPage
    tripData={data.delaware}
    coverImage={trip.cover}
    title={trip.title}
    dates={trip.dates}
    blurb={trip.blurb}
    travelers={trip.travelers}
  />
);

export default Del;
