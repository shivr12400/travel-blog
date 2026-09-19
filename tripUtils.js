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
      coordinates: entry.coordinates || day.coordinates || null,
    }));
  });

export const categoriesOf = (photos = []) => [
  ...new Set(photos.map((p) => p.category).filter(Boolean)),
];
