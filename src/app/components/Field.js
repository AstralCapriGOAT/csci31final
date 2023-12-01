export default function Field({ children }) {
  // render children inside a div with a flex-col layout
  return <div className="flex flex-col">{children}</div>
}
