// One list of trips, used by the home page and the archive so they never drift apart.
import { travelersData as who } from './travelersData';

export const trips = [
  {
    id: 'india25',
    href: '/india25',
    dataKey: 'india25',
    title: 'India',
    region: 'Gujarat & Puri',
    dates: 'Jan 22 – Feb 2, 2026',
    year: 2026,
    blurb: '200 years of the Shikshapatri, then Jagannath Puri with family.',
    cover: '/images/elephant.jpg',
    travelers: [
      who.Shrey, who.Hari, who.Hanish, who.Nikhil, who.Cadan, who.Mehak,
      who.Akriti, who.Anushka, who.Sankya, who.Abhi,
    ],
  },
  {
    id: 'india24',
    href: '/india24',
    dataKey: 'india24',
    title: 'India',
    region: 'Delhi to Ahmedabad',
    dates: 'Jul 3 – 17, 2024',
    year: 2024,
    blurb: "Lalji Maharaj's wedding, a dance we practiced far too hard for, and SpiceJet.",
    cover: '/images/india24.JPG',
    travelers: [who.AJ, who.LM, who.AkashChoksi, who.SR, who.SaumyaD],
  },
  {
    id: 'irelandScotland',
    href: '/irelandScotland',
    dataKey: 'irelandScotland',
    title: 'Ireland & Scotland',
    region: 'Dublin, Belfast, Edinburgh',
    dates: 'Jun 13 – 20, 2024',
    year: 2024,
    blurb: 'Eight days of 6am tour buses, cliffs in the rain, and one €80 carry-on.',
    cover: '/images/galeway.jpg',
    travelers: [who.Rits, who.Hari],
  },
  {
    id: 'delaware',
    href: '/del',
    dataKey: 'delaware',
    title: 'Bethany Beach',
    region: 'Delaware',
    dates: 'Aug 10 – 11, 2024',
    year: 2024,
    blurb: 'A 24-hour trip that existed entirely so we could ride a boat.',
    cover: '/images/delBoat.jpg',
    travelers: [who.Shrey, who.Hari, who.Hanish, who.Cadan, who.Sankya, who.Abhi],
  },
];

export const tripById = (id) => trips.find((t) => t.id === id);
