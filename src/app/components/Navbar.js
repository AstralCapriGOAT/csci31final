import Image from 'next/image'
import { BugantIcon } from '@heroicons/react/24/solid'

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
    <div className="flex justify-between gap-4 m-6">
      <BugantIcon className="h-15 w-15 text-purple-400" />
      <div className="flex justify-end gap-4 m-6">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="px-4 py-2 bg-purple-400 text-gray-500 text-lg shadow-md transition-all hover:bg-purple-500 active:bg-purple-700"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  )
} 
