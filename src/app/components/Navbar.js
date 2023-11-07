import Image from 'next/image'

const menuItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Menu3',
    href: '/menu3',
  },
  {
    title: 'Menu4',
    href: '/menu4',
  },
  {
    title: 'Menu5',
    href: '/menu5',
  },
]

export default function Navbar() {
  return (
    <div className="flex justify-end gap-4 m-6">
      {menuItems.map((item, index) => (
        <a key={index} href={item.href} className="px-4 py-2 bg-gray-100 shadow-md">
          {item.title}
        </a>
      ))}
    </div>
  )
}
