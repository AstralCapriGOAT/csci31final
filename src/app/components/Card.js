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
