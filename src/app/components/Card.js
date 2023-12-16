export default function Card({
  title = 'Fake Title',
  subtitle = 'Fake Subtitle',
  description = 'Fake Description',
  img = 'https://wildcard.codestuff.io/fish/300/200',
}) {
  return (
    <div class="border-solid border-2 border-gray-600 p-6 bg-gray-100 rounded-lg shadow-md grow">
      <h1 class="text-3xl font-bold underline cursor-pointer">{title}</h1>
      <h2 class="py-4">{subtitle}</h2>
      <img src={img} />
      <p class="py-4">{description}</p>
    </div>
  )
}

// Pool of planets that i wont have time for but they there =)
export const planetData = [
  {
    title: 'Naboo',
    subtitle: 'Grasslands',
    img: 'https://wildcard.codestuff.io/naboo/300/200',
    description: 'Home to lush grasslands and diverse ecosystems.',
  },
  {
    title: 'Lothal',
    subtitle: 'Prairie',
    img: 'https://wildcard.codestuff.io/lothal/300/200',
    description: 'Characterized by vast prairies and open landscapes.',
  },
  {
    title: 'Dagobah',
    subtitle: 'Bog',
    img: 'https://wildcard.codestuff.io/dagobah/300/200',
    description: 'Known for its murky bogs and swampy terrain.',
  },
  {
    title: 'Hoth',
    subtitle: 'Ice Plains',
    img: 'https://wildcard.codestuff.io/hoth/300/200',
    description: 'An icy planet with vast plains covered in snow and ice.',
  },
  {
    title: 'Genosis',
    subtitle: 'Rocky Barrens',
    img: 'https://wildcard.codestuff.io/genosis/300/200',
    description: 'Characterized by rocky barrens and desolate landscapes.',
  },
  {
    title: 'Alderaan',
    subtitle: 'Mountains',
    img: 'https://wildcard.codestuff.io/alderaan/300/200',
    description: 'Home to majestic mountains and picturesque landscapes.',
  },
  {
    title: 'Tatooine',
    subtitle: 'Dune Sea',
    img: 'https://wildcard.codestuff.io/tatooine/300/200',
    description: 'Known for its vast dune seas and arid desert conditions.',
  },
  {
    title: 'Ryloth',
    subtitle: 'Desert',
    img: 'https://wildcard.codestuff.io/ryloth/300/200',
    description: 'A desert planet with harsh conditions and rocky terrains.',
  },
  {
    title: 'Mustafar',
    subtitle: 'Lava Fields',
    img: 'https://wildcard.codestuff.io/mustafar/300/200',
    description: 'Famous for its lava fields and extreme temperatures.',
  },
  {
    title: 'Scarif',
    subtitle: 'Tropical Jungles',
    img: 'https://wildcard.codestuff.io/scarif/300/200',
    description: 'A beautiful planet with tropical jungles and pristine beaches.',
  },
  {
    title: 'Kashyyyk',
    subtitle: 'Jungle',
    img: 'https://wildcard.codestuff.io/kashyyyk/300/200',
    description: 'Home to dense jungles and the native Wookiee species.',
  },
  {
    title: 'Takodana',
    subtitle: 'Forest',
    img: 'https://wildcard.codestuff.io/takodana/300/200',
    description: 'A planet featuring lush forests and diverse ecosystems.',
  },
  // Add more planets as needed
]
