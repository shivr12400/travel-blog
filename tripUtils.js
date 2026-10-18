import imageSizes from './imageSizes.json';

// Photos with no recorded size (remote or missing) count as landscape, the
// shape most of the wall is built around.
const orientationOf = (image) => {
  const size = imageSizes[image];
  return size && size[1] > size[0] ? 'portrait' : 'landscape';
};

// Both trip shapes in tripData collapse to the same thing: a flat run of
// photographs, each carrying the place, the day and the note that belongs to it.
export const toPhotos = (tripData = []) =>
  tripData.flatMap((day, dayIndex) => {
    const entries = day.activities?.length ? day.activities : [day];

    return entries.map((entry, entryIndex) => ({
      id: `${dayIndex}-${entryIndex}`,
      day: day.day ?? dayIndex + 1,
      dayName: day.name || '',
      date: entry.date || day.date || '',
      location: entry.location || day.location || day.name || '',
      description: entry.description || day.description || '',
      category: entry.category || day.category || '',
      image: entry.image || day.image || '',
      orientation: orientationOf(entry.image || day.image || ''),
      coordinates: entry.coordinates || day.coordinates || null,
    }));
  });

export const categoriesOf = (photos = []) => [
  ...new Set(photos.map((p) => p.category).filter(Boolean)),
];

// Photos that share a date become one stack on the wall, so a busy day reads as
// a single print you can leaf through. Stacks keep the order of their first photo.
export const groupByDate = (photos = []) => {
  const stacks = [];
  const byDate = new Map();

  photos.forEach((photo) => {
    const stack = photo.date && byDate.get(photo.date);
    if (stack) {
      stack.push(photo);
    } else {
      const fresh = [photo];
      if (photo.date) byDate.set(photo.date, fresh);
      stacks.push(fresh);
    }
  });

  return stacks;
};

// A stack takes the shape most of its photos share.
export const stackOrientation = (stack = []) =>
  stack.filter((p) => p.orientation === 'portrait').length > stack.length / 2
    ? 'portrait'
    : 'landscape';
