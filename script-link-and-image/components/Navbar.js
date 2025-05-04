import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-purple-700 flex list-none gap-8 py-4 px-8'>
        <li><Link href="/" prefetch={true}>Home</Link></li>
        <li><Link href="/contact" prefetch={true}>Contact</Link></li>
        <li><Link href="/about" prefetch={true}>About</Link></li>
    </nav>
  )
}

export default Navbar
