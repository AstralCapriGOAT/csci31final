export default function Label({ htmlFor, label }) {
  return (
    <label className="text-lilac-400 text-lg" htmlFor={htmlFor}>
      {label}
    </label>
  )
}
