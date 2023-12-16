export default function Button({ children, onClick, type }) {
  return (
    <button
      className="px-4 py-2 bg-purple-400 shadow-mg text-gray-200 active:text-violet-400 transition-all"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
