export interface FaqItem { question: string; answer: string }

/** Home page FAQ. Questions come from the reviewed keyword list (docs/keywords.md). */
export const HOME_FAQ: FaqItem[] = [
  {
    question: 'What is the difference between waterproof and water-resistant?',
    answer: 'Water-resistant gear handles splashes and light rain for a short time. Waterproof gear uses a membrane or coating plus sealed seams to keep water out during long, heavy rain. Neither lasts forever: dirt, wear and washed-out coatings reduce protection over time.',
  },
  {
    question: 'Do I need waterproof hiking shoes?',
    answer: 'It depends on where you hike. On cold, wet or muddy trails, waterproof hiking shoes keep your feet drier and warmer. In hot weather or on routes with deep stream crossings, they can feel sweaty and dry slowly once water gets in over the top. Many hikers wear breathable, quick-drying shoes in summer and waterproof ones the rest of the year.',
  },
  {
    question: 'Should running shoes be waterproof?',
    answer: 'Usually not. Waterproof running shoes breathe less and run warmer, and they dry slowly if water gets in from the top. They make sense for cold, wet winter runs or city runs through puddles. For most runs, quick-drying mesh shoes and good socks work better.',
  },
  {
    question: 'Are leather shoes waterproof?',
    answer: 'Not by themselves. Leather is naturally somewhat water-resistant, but untreated leather soaks up water over time. Boots that are really waterproof usually combine leather with a membrane, or are treated with wax or a protective product. Suede and nubuck need extra care.',
  },
  {
    question: 'How do I waterproof shoes?',
    answer: 'Clean them first, then treat them with a product made for the material, such as a spray for fabric or a wax or cream for smooth leather. Check the care label before you start, because some treatments can harm membranes or suede. Let the shoes dry fully, away from direct heat.',
  },
  {
    question: 'How do I know when my rain jacket needs re-proofing?',
    answer: 'When water stops beading on the surface and the fabric darkens and soaks up water, the outer water-repellent finish (DWR) has worn down. Washing the jacket with a suitable cleaner and re-applying a water-repellent treatment often brings it back.',
  },
  {
    question: 'What does IPX4 or IPX7 mean on a headlamp?',
    answer: 'The IPX number shows protection against water. IPX4 means splashes from any direction are fine. IPX7 means the light survives being submerged in up to 1 metre of water for 30 minutes. For hiking in rain, IPX4 is usually enough, and IPX7 or higher gives you extra margin.',
  },
  {
    question: 'Can I use a power bank in the rain?',
    answer: 'Most power banks are not waterproof, and the ports are the weak spot. Keep yours in a dry bag or an inner pocket, and look for an IP rating if you want one that tolerates splashes. Never charge a wet device.',
  },
];
