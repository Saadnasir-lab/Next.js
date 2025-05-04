"useclient"
import React from 'react'
import Link from 'next/link'

const Navbar = () => {

  return (
    <div className='flex gap-10 bg-purple-800 py-5 px-8 text-white'>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/contact'>Contact</Link>
    </div>
  )
}

export default Navbar
