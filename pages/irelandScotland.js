import TripPage from '../components/TripPage';
import { data } from '../tripData';
import { tripById } from '../trips';

const trip = tripById('irelandScotland');

const IrelandScotland = () => (
  <TripPage
    tripData={data.irelandScotland}
    coverImage={trip.cover}
    title={trip.title}
    dates={trip.dates}
    blurb={trip.blurb}
    travelers={trip.travelers}
  />
);

export default IrelandScotland;
