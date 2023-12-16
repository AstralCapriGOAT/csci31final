export default function Input({ type = 'text', placeholder = 'enter text here...', name, id }) {
  return <input className="p-4 rounded-md shadow-md" name={name} id={id} type={type} placeholder={placeholder} />
}
