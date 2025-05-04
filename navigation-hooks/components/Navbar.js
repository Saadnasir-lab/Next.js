"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const Navbar = () => {
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ]

  return (
    <nav className="bg-purple-800 py-5 px-4 flex justify-between items-center" role="navigation" aria-label="Main navigation">
      <div className="font-bold text-2xl text-white">Navbar</div>
      <ul className="flex gap-4 font-bold text-white">
        {navItems.map(({ name, path }) => (
          <li key={path}>
            <Link
              href={path}
              className={clsx(
                "px-3 py-1 rounded hover:bg-purple-600 transition-colors",
                pathname === path && "bg-red-600"
              )}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
